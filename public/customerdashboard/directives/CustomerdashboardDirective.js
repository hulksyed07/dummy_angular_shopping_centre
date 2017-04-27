angular.module('Angello.Customerdashboard').directive('customerproduct', function(ProductModel) {
    var linker = function(scope, elem, attrs) {
    	elem.on('dragstart', function(event){
    		console.log(event);
    	})
    }

    return {
        scope: true,
        replace: true,
        link: linker,
        template: '<div draggable="true"><h4>{{product.title}}</div>'
    };
});