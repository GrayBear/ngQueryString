
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