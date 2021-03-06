angular.module('Angello.Productboard').controller('ProductboardCtrl', function(ProductModel, AngelloHelper, TypeModel, Types, $http) {
    var productboard = this;
    productboard.types = {}
    // productboard.types = ProductModel.getTypes();
    productboard.getAllTypes = function() {
        TypeModel.getTypes()
            .then( function(result){
                productboard.types = result;
                productboard.typesIndex = AngelloHelper.buildIndex(productboard.types, 'name');
                console.log('productboard.types is: ' + productboard.types);
                console.log(productboard.types);
            });

        // productboard.types = TypeModel.getTypes();
        // productboard.types = Types.query();
        // productboard.types = Types.query();
        console.log('productboard.types inside product controller is: ' + productboard.types);
        console.log(productboard.types);
    }

    productboard.products = {};
    productboard.getAllProducts = function() {
        ProductModel.getProducts()
            .then( function(result) {
                productboard.products = result ;
            });

    };

    productboard.getAllProducts();
    productboard.getAllTypes();
    console.log('productboard.types outside is:' + productboard.types);
    console.log(productboard.types);

    // productboard.typesIndex = AngelloHelper.buildIndex(productboard.types, 'name');
    console.log('productboard.typeindex is: ' + productboard.typesIndex);
    productboard.currentProduct = null;
    productboard.editedProduct = {};


    productboard.setCurrentProduct = function (product) {
        productboard.currentProduct = product;
        productboard.currentType = productboard.typesIndex[product.type];
        // productboard.currentType = { name: product.type };
        console.log('product current-Type is: ' + productboard.currentType );
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
