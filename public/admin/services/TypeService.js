angular.module('Angello.Admin').service('TypeModel', function($http, UtilsService){
	var service = this;

	service.getTypes = function(){
		return $http.get('/api/types')
				.then(function(result){
					console.log('Inside type get all service');
					console.log(result);
					return UtilsService.objectToArray(result);
				});
	}

	service.createType = function(type){
		return $http.post('/api/types', type)
				.then(function(result){
					console.log('Inside type get all service');
					console.log(result);
					return UtilsService.objectToArray(result);
				});
	}

	service.updateType = function(type){
		return $http.put('/api/types/'+type._id, type)
				.then(function(result){
					console.log('Inside type get all service');
					console.log(result);
					return UtilsService.objectToArray(result);
				});
	}

	service.deleteType = function(type_id){
		return $http.delete('/api/types/'+ type_id)
				.then(function(result){
					console.log('Inside type get all service');
					console.log(result);
					return UtilsService.objectToArray(result);
				});
	}
})