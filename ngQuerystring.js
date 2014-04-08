///#source 1 1 /src/ngquerystring.mdl.js
var ngQueryString = angular.module('ngQueryString', []);

///#source 1 1 /src/services/clearquerystring.svc.js

ngQueryString.factory('ngQueryString.clearQueryString', function ($location) {

    var clearQueryString = function (name) {

        $location.search(name, null);

    };

    return clearQueryString;

});
///#source 1 1 /src/services/getquerystring.svc.js

ngQueryString.factory('ngQueryString.getQueryString', function ($location) {

    var getQueryString = function (name) {

        var queryStrings = $location.search();
                 
        var value = queryStrings[name];

        debugger;

        return value;

    };

    return getQueryString;

});
///#source 1 1 /src/services/getallquerystring.svc.js

ngQueryString.factory('ngQueryString.getAllQueryString', function ($location) {

    var getAllQueryString = function () {

        var queryStrings = $location.search();

        return queryStrings;

    };

    return getAllQueryString;

});
///#source 1 1 /src/services/setquerystring.svc.js

ngQueryString.service('ngQueryString.setQueryString', function ($location) {

    return setQueryString = function (name, value) {


        var valueEncoded = value;

        $location.search(name, value);


    };


});
///#source 1 1 /src/services/clearallquerystring.svc.js

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
///#source 1 1 /src/ngquerystring.svc.js

ngQueryString.factory('ngQueryString.ngQueryString', ['ngQueryString.setQueryString', 'ngQueryString.getQueryString', 'ngQueryString.clearQueryString', 'ngQueryString.getAllQueryString', 'ngQueryString.clearAllQueryString', function (setQueryString, getQueryString, clearQueryString, getAllQueryString, clearAllQueryString) {

    return {

        setQueryString: function (name, value) {
            setQueryString(name, value);
        },

        getQueryString: function (name) {
            return getQueryString(name);
        },

        getAllQueryString: function(){
            return getAllQueryString();
        },
        clearQueryString: function (name) {
            clearQueryString(name);
        },
        clearAllQueryString: function(){
            clearAllQueryString();
        }

    }


}])
