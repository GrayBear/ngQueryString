///#source 1 1 /app/libs/ngQueryString/ngQueryString.mdl.js
var ngQueryString = angular.module('ngQueryString', []);

///#source 1 1 /app/libs/ngquerystring/services/clearquerystring.svc.js

ngQueryString.factory('ngQueryString.clearQueryString', function ($location) {

    var clearQueryString = function (name) {

        $location.search(name, null);

    };

    return clearQueryString;

});
///#source 1 1 /app/libs/ngquerystring/services/getquerystring.svc.js

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
///#source 1 1 /app/libs/ngquerystring/services/setquerystring.svc.js

ngQueryString.service('ngQueryString.setQueryString', function ($location) {

    return setQueryString = function (name, value) {


        var valueEncoded = value;

        $location.search(name, value);


    };


});
///#source 1 1 /app/libs/ngQueryString/ngQueryString.svc.js

ngQueryString.factory('ngQueryString.ngQueryString', ['ngQueryString.setQueryString', 'ngQueryString.getQueryString', 'ngQueryString.clearQueryString', function (setQueryString, getQueryString, clearQueryString) {

    return {

        setQueryString: function (name, value) {
            setQueryString(name, value);
        },

        getQueryString: function (name) {
            return getQueryString(name);
        },

        clearQueryString: function (name) {
            clearQueryString(name);
        }

    }


}])
