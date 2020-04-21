const Joi = require('@hapi/joi');
const compression = require('compression');
const mysql = require('mysql');
const express = require('express');
const helmet = require('helmet');

var app = express();
app.use(express.json());
app.use(helmet());
app.use(compression());

const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: 'sql.server153484.nazwa.pl',
    user: 'server153484_foodcheckapi',
    password: 'WW7aysAYy5X3ipD',
    database: 'server153484_foodCheck'
});


app.get('/api/products', function(req, res){
    if(connection.connect())
        console.log('Connected with database');
    connection.query('SELECT * FROM food_products', function (error, results, fields) {
        if (error) throw error;
        console.log('GET request for all products');
        if(results.length===0) res.status(404).send('No products in database');
        res.send(JSON.stringify(results));
    });
    if(connection.end())
        console.log('Disconnected from database');
});

app.get('/api/products/:barcode', function(req, res){
    if(connection.connect())
        console.log('Connected with database');
    connection.query('SELECT * FROM food_products WHERE barcode = '+req.params.barcode+';', function (error, results, fields) {
        if (error) throw error;
        console.log('GET command for ' + req.params.barcode);
        if(results.length===0) res.status(404).send('Product not found');
        else res.send(JSON.stringify(results));
    });
    if(connection.end())
        console.log('Disconnected from database');
});

app.post('/api/products', function(req, res){
    //Validation logic
    const schema = Joi.object({
        barcode: Joi.number().required(),
        name: Joi.string().min(3).required(),
        weight: Joi.number().required(),
        energy: Joi.number().required(),
        fat: Joi.number().required(),
        saturates: Joi.number().required(),
        carbohydrates: Joi.number().required(),
        sugars: Joi.number().required(),
        fibre: Joi.number().required(),
        protein: Joi.number().required(),
        salt: Joi.number().required(),
    });

    const result = schema.validate(req.body);

    if(result.error){
        // 400 Bad request
        res.status(400).send('All fields are required. '+result.error);
        console.log('Bad POST request');
        return;
    }

    var image_url = "http://foltys.net/food-check/img/"+req.body.barcode;
    const sqlCommand = "INSERT INTO `food_products` (`id`, `barcode`, `name`, `weight`, `energy`, `fat`, `saturates`, `carbohydrates`, `sugars`, `fibre`, `protein`, `salt`, `imURL`) VALUES (NULL, '"+req.body.barcode+"', '"+req.body.name+"', '"+req.body.weight+"', '"+req.body.energy+"', '"+req.body.fat+"', '"+req.body.saturates+"', '"+req.body.carbohydrates+"', '"+req.body.sugars+"', "+req.body.fibre+", '"+req.body.protein+"', '"+req.body.salt+"', '"+image_url+"');";
       
    connection.query(sqlCommand, function (error, results, fields) {
        if (error) throw error;
        console.log('POST command for ' + req.body.barcode);
        
        res.send(JSON.stringify(req.body.barcode));
    });
});


app.listen(port, function(){
    console.log('Listening on port '+port+'...');
});
