
ngQueryString.service('ngQueryString.getQueryString',['$location',  function ($location) {

    var getQueryString = function (name) {

        var queryStrings = $location.search();
                 
        var value = queryStrings[name];

        debugger;

        return value;

    };

    return getQueryString;

}]);