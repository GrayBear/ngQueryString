
ngQueryString.factory('ngQueryString.getAllQueryString', function ($location) {

    var getAllQueryString = function () {

        var queryStrings = $location.search();

        return queryStrings;

    };

    return getAllQueryString;

});