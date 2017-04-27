angular.module('Angello.Customerdashboard').controller('CustomerdashboardCtrl', function(ProductModel, AngelloHelper, $http) {
    var customerdashboard = this;

    customerdashboard.types = ProductModel.getTypes();
    customerdashboard.products = {};
    customerdashboard.getAllProducts = function() {
        ProductModel.getProducts()
            .then( function(result) {
                customerdashboard.products = result ;
            });

    };

    customerdashboard.getAllProducts();

    customerdashboard.typesIndex = AngelloHelper.buildIndex(customerdashboard.types, 'name');
    customerdashboard.currentProduct = null;
    customerdashboard.editedProduct = {};


    customerdashboard.setCurrentProduct = function (product) {
        customerdashboard.currentProduct = product;
        customerdashboard.currentType = customerdashboard.typesIndex[product.type];
        customerdashboard.editedProduct = angular.copy(customerdashboard.currentProduct);
    };

    // customerdashboard.createProduct = function() {
    //     console.log(customerdashboard.editedProduct);
    //     $http.post('/api/products', customerdashboard.editedProduct).
    //     success(function(result){
    //         customerdashboard.products = result ;
    //     });
    //     customerdashboard.resetForm();
    // };

    // customerdashboard.updateProduct = function() {
    //     // var fields = ['title', 'description', 'criteria', 'status', 'type', 'reporter', 'assignee'];
    //     // fields.forEach(function(field){
    //     //     customerdashboard.currentProduct[field] = customerdashboard.editedProduct[field];
    //     // });
    //     $http.put('/api/products/'+ customerdashboard.editedProduct._id, customerdashboard.editedProduct)
    //     .success(function(result){
    //         customerdashboard.products = result ;
    //     })
    //     customerdashboard.resetForm();
    // };

    customerdashboard.createProduct = function() {
        console.log(customerdashboard.editedProduct);
        ProductModel.createProduct(customerdashboard.editedProduct)
        .then(function(result){
            console.log('create inside ctrl: '+ result);
            customerdashboard.products = result;
        });
        customerdashboard.resetForm();
    };    

    

    customerdashboard.updateProduct = function() {
        ProductModel.updateProduct(customerdashboard.editedProduct)
        .then(function(result){
            console.log('update inside ctrl: '+ result);
            customerdashboard.products = result;
        });
        customerdashboard.resetForm();
    };

    customerdashboard.updateCancel =  function() {
        customerdashboard.resetForm();
    };

    customerdashboard.deleteProduct = function() {
        ProductModel.deleteProduct(customerdashboard.editedProduct._id)
        .then(function(result){
            console.log('delete inside ctrl: '+ result);
            customerdashboard.products = result;
        });
        customerdashboard.resetForm();
    };

    customerdashboard.setCurrentType = function (type) {
        if (typeof customerdashboard.editedProduct !== 'undefined') {
            customerdashboard.editedProduct.type = type.name;
        }
    };

    customerdashboard.resetForm = function () {
        customerdashboard.currentProduct = null;
        customerdashboard.editedProduct = {};
        customerdashboard.currentType = null;

        // customerdashboard.detailsForm.$setPristine();
        // customerdashboard.detailsForm.$setUntouched();
    };
});
