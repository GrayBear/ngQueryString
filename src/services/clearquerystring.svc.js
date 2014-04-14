
ngQueryString.factory('ngQueryString.clearQueryString',['$location',  function ($location) {

    var clearQueryString = function (name) {

        $location.search(name, null);

    };

    return clearQueryString;

}]);