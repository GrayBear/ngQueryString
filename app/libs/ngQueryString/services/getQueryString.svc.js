
ngQueryString.factory('ngQueryString.getQueryString', function ($location) {

    var getQueryString = function (name) {

        console.log(name);

        var queryStrings = $location.search();
                 
        var value = queryStrings[name];

        debugger;

        return value;

    };

    return getQueryString;

});