angular.module('Angello.Common').factory('AngelloHelper', function() {
    var buildIndex = function (source, property) {
        var tempArray = [];
        console.log(source);
        console.log('source length is: '+ source.length);
        for (var i = 0, len = source.length; i < len; ++i) {
            console.log('source i is: '+ source[i]);
            tempArray[source[i][property]] = source[i];
        }
        console.log('tempArray inside buildIndex is:'+ tempArray);
        return tempArray;
    };

    return {
        buildIndex: buildIndex
    };
});