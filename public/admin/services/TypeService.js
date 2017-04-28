angular.module('Angello.Admin').service('TypeModel', function($http, UtilsService, $resource){
	var service = this;

	service.getTypes = function(){
		return $http.get('/api/types')
				.then(function(result){
					console.log('Inside type get all service');
					console.log(result);
					return UtilsService.objectToArray(result);
				});
	}

	// service.getTypes = function(){
	// 	return $resource('/api/types',{},{},{
	// 				get: {
	// 					method: 'GET'
	// 				}
	// 			});

	// }


	// service.getTypes = function(){
	// 	return $resource('/api/types',{},{
	// 				query: {
	// 	                method: 'GET',
	// 	                isArray: false,
	// 	                transformResponse: function(data, header) {
	// 	                    var wrapped = angular.fromJson(data);
	// 	                    angular.forEach(wrapped.items, function(item, idx) {
	// 	                        wrapped.items[idx] = new Job(item);
	// 	                    });
	// 	                    return wrapped;
	// 	                }
	// 	            }

	// 			});

	// }



	

	// resources.factory('fetch_person_data', function ($resource, API_ENDPOINT) {
	//   return $resource(API_ENDPOINT + '/individuals/fetch_person_data/:id/:type', {},
	//     {
	//       id: '@person_id',
	//       type: '@type'
	//     },{
	//       get: {
	//         method: 'GET'
	//     }
	//   });
	// }); 

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