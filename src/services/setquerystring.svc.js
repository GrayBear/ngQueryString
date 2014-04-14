
ngQueryString.service('ngQueryString.setQueryString', ['$location', function ($location) {

    return setQueryString = function (name, value) {


        $location.search(name, value);


    };


}]);