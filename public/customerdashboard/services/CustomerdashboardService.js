// angular.module('Angello.Customerdashboard').service('ProductModel', function($http, UtilsService,) {
//     var service = this,
//         types = [
//             {name: 'Vegetables'},
//             {name: 'Pulses'},
//             {name: 'Dessert'},
//             {name: 'Fashion'}
//         ]
//         // ,
//         // products = [
//         //     {
//         //         title: 'First product',
//         //         description: 'Our first product.',
//         //         criteria: 'Criteria pending.',
//         //         status: 'To Do',
//         //         type: 'Feature',
//         //         reporter: 'Lukas Ruebbelke',
//         //         assignee: 'Brian Ford'
//         //     },
//         //     {
//         //         title: 'Second product',
//         //         description: 'Do something.',
//         //         criteria: 'Criteria pending.',
//         //         status: 'Back Log',
//         //         type: 'Feature',
//         //         reporter: 'Lukas Ruebbelke',
//         //         assignee: 'Brian Ford'
//         //     },
//         //     {
//         //         title: 'Another product',
//         //         description: 'Just one more.',
//         //         criteria: 'Criteria pending.',
//         //         status: 'Code Review',
//         //         type: 'Enhancement',
//         //         reporter: 'Lukas Ruebbelke',
//         //         assignee: 'Brian Ford'
//         //     }
//         // ]
//         ;

//     service.getTypes = function () {
//         return types;
//     };

//     service.getProducts = function () {
//         // return products;

//         return $http.get('/api/products')
//             .then( function(result){
//                 console.log(UtilsService.objectToArray(result));
//                 return UtilsService.objectToArray(result);
//             });

//     };

//     service.createProduct = function(product) {
//         return $http.post('/api/products', product)
//                 .then(function(result){
//                     console.log('create inside service: '+ result);
//                     return UtilsService.objectToArray(result);
//                 });
//     };

//     service.updateProduct = function(product) {
//         return $http.put('/api/products/'+ product._id, product)
//                 .then(function(result){
//                     return UtilsService.objectToArray(result);
//                 })
//     };

//     service.deleteProduct = function(id) {
//         return $http.delete('/api/products/'+id)
//                 .then(function(result){
//                     return UtilsService.objectToArray(result);
//                 });
//     };
// });