var myModule = angular.module('Angello',['ngRoute', 'ngResource', 'Angello.Common', 'Angello.Productboard', 'Angello.Admin', 'Angello.Customerdashboard']);


myModule.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'productboard/tmpl/productboard.html',
            controller: 'ProductboardCtrl',
            controllerAs: 'productboard'
        })
        .when('/types',{
        	templateUrl: 'admin/tmpl/type.html',
        	controller: 'TypeController',
        	controllerAs: 'typeCtrl'
        })
        .when('/customerdashboard',{
            templateUrl: 'customerdashboard/tmpl/customerdashboard.html',
            controller: 'CustomerdashboardCtrl',
            controllerAs: 'customerdashboard'
        })
        .otherwise({redirectTo: '/'});
});
