
ngQueryString.factory('ngQueryString.getQueryString', function ($location) {

    var getQueryString = function (name) {

        var queryStrings = $location.search();
         
        var value = queryStrings[name];

        return value;

    };

    return getQueryString;

});