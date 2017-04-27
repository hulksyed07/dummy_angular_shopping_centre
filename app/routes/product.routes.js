var Product = require('../models/ProductModel.js');

module.exports = function(app){
    

    app.get('/api/products', function(req, res) {

    // use mongoose to get all products in the database
        Product.find(function(err, products) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(products); // return all products in JSON format
        });
    });

    // create product and send back all products after creation
    app.post('/api/products', function(req, res) {

        // create a product, information comes from AJAX request from Angular
        // var product = new Product(req.body);
        // product.save(function(err, product){
        Product.create( req.body , function(err, product) {
        
            if (err)
                res.send(err);

            // get and return all the products after you create another
            Product.find(function(err, products) {
                if (err)
                    res.send(err)
                res.json(products);
            });
        });

    });

    app.put('/api/products/:product_id', function(req, res) {

        // create a product, information comes from AJAX request from Angular
        // var product = new Product(req.body);
        // product.save(function(err, product){
        Product.update({ _id: req.params.product_id }, req.body, function(err, product) {
        
            if (err)
                res.send(err);

            // get and return all the products after you create another
            Product.find(function(err, products) {
                if (err)
                    res.send(err)
                res.json(products);
            });
        });

    });

    // delete a product
    app.delete('/api/products/:product_id', function(req, res) {
        Product.remove({
            _id : req.params.product_id
        }, function(err, product) {
            if (err)
                res.send(err);

            // get and return all the products after you create another
            Product.find(function(err, products) {
                if (err)
                    res.send(err)
                res.json(products);
            });
        });
    });
};