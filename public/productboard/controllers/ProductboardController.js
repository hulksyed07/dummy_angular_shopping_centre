angular.module('Angello.Productboard').controller('ProductboardCtrl', function(ProductModel, AngelloHelper, $http) {
    var productboard = this;

    productboard.types = ProductModel.getTypes();
    productboard.products = {};
    productboard.getAllProducts = function() {
        ProductModel.getProducts()
            .then( function(result) {
                productboard.products = result ;
            });

    };

    productboard.getAllProducts();

    productboard.typesIndex = AngelloHelper.buildIndex(productboard.types, 'name');
    productboard.currentProduct = null;
    productboard.editedProduct = {};


    productboard.setCurrentProduct = function (product) {
        productboard.currentProduct = product;
        productboard.currentType = productboard.typesIndex[product.type];
        productboard.editedProduct = angular.copy(productboard.currentProduct);
    };

    // productboard.createProduct = function() {
    //     console.log(productboard.editedProduct);
    //     $http.post('/api/products', productboard.editedProduct).
    //     success(function(result){
    //         productboard.products = result ;
    //     });
    //     productboard.resetForm();
    // };

    // productboard.updateProduct = function() {
    //     // var fields = ['title', 'description', 'criteria', 'status', 'type', 'reporter', 'assignee'];
    //     // fields.forEach(function(field){
    //     //     productboard.currentProduct[field] = productboard.editedProduct[field];
    //     // });
    //     $http.put('/api/products/'+ productboard.editedProduct._id, productboard.editedProduct)
    //     .success(function(result){
    //         productboard.products = result ;
    //     })
    //     productboard.resetForm();
    // };

    productboard.createProduct = function() {
        console.log(productboard.editedProduct);
        ProductModel.createProduct(productboard.editedProduct)
        .then(function(result){
            console.log('create inside ctrl: '+ result);
            productboard.products = result;
        });
        productboard.resetForm();
    };    

    

    productboard.updateProduct = function() {
        ProductModel.updateProduct(productboard.editedProduct)
        .then(function(result){
            console.log('update inside ctrl: '+ result);
            productboard.products = result;
        });
        productboard.resetForm();
    };

    productboard.updateCancel =  function() {
        productboard.resetForm();
    };

    productboard.deleteProduct = function() {
        ProductModel.deleteProduct(productboard.editedProduct._id)
        .then(function(result){
            console.log('delete inside ctrl: '+ result);
            productboard.products = result;
        });
        productboard.resetForm();
    };

    productboard.setCurrentType = function (type) {
        if (typeof productboard.editedProduct !== 'undefined') {
            productboard.editedProduct.type = type.name;
        }
    };

    productboard.resetForm = function () {
        productboard.currentProduct = null;
        productboard.editedProduct = {};
        productboard.currentType = null;

        // productboard.detailsForm.$setPristine();
        // productboard.detailsForm.$setUntouched();
    };
});
