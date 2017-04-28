angular.module('Angello.Common').service('UtilsService',
        function() {
            var service = this;

            service.objectToArray = function(content) {
                // normalizes data from node and firebase so both get returned as arrays
                console.log('content data is instanceof Object: '+ content.data instanceof Object);
                if (content.data instanceof Object && !Array.isArray(content.data)) {
                    var newArray = [];

                    for (var key in content.data) {
                        var item = content.data[key];
                        item.id = key;
                        newArray.push(item);
                    }
                    console.log('data is intsnac eof object and array');
                    return newArray;

                
                } else {
                    console.log('data is not an intsnac eof object and array');
                    return content.data;
                }
            };
        }
    );
