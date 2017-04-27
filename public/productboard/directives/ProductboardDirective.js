angular.module('Angello.Productboard').directive('product', function(ProductModel) {
    var linker = function(scope, elem, attrs) {
    	elem.on('dragstart', function(event){
    		console.log(event);
    	})
    }

    return {
        scope: true,
        replace: true,
        link: linker,
        template: '<div draggable="true"><h4>{{product.title}}</h4><p>{{product.description}}</p></div>'
    };
});