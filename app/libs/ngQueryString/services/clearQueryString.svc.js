
ngQueryString.factory('ngQueryString.clearQueryString', function ($location) {

    var clearQueryString = function (name) {

        $location.search(name, null);

    };

    return clearQueryString;

});