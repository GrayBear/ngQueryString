
ngQueryString.service('ngQueryString.clearAllQueryString',['$location', function ($location) {

    var clearAllQueryString = function () {

        var queryStrings = $location.search();

        for (var stings in queryStrings) {
            var name = stings;
            $location.search(name, null);
        }
    
    };

    return clearAllQueryString;
}]);