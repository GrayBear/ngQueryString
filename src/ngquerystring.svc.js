
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