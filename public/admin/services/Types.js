angular.module('Angello.Admin').factory('Types', ['$resource',
	function($resource) {
		return $resource('/api/types', {}, {
			
			query: {
		                method: 'GET',
		                // isArray: false,
		                transformResponse: function(data, header) {
		                    var wrapped = angular.fromJson(data);
		                    angular.forEach(wrapped.items, function(item, idx) {
		                        wrapped.items[idx] = new Job(item);
		                    });
		                    return wrapped;
		                }
		            }


		});
	}
]);