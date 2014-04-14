
ngQueryString.service('ngQueryString.getAllQueryString',['$location',  function ($location) {

    var getAllQueryString = function () {

       return $location.search();

 

    };

    return getAllQueryString;

}]);