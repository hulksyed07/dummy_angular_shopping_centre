angular.module('Angello.Admin').directive('type', function() {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        template: '<div><h4>{{type.name}}</h4></div>'
    };
});