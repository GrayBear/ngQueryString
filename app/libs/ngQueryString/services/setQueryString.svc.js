
ngQueryString.service('ngQueryString.setQueryString', function ($location) {

    return setQueryString = function (name, value) {


        var valueEncoded = value;

        $location.search(name, value);


    };


});