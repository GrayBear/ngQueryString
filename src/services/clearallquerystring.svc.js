
ngQueryString.factory('ngQueryString.clearAllQueryString', function ($location) {

    var clearAllQueryString = function () {

        var queryStrings = $location.search();

        for (var stings in queryStrings) {
            var name = stings;
            $location.search(name, null);
        }
   
        return queryStrings;
    };

    return clearAllQueryString;
});