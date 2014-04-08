angular.module('test', ['ngQueryString'])
.controller('TestCtrl', ['$scope', 'ngQueryString.setQueryString', 'ngQueryString.getQueryString', 'ngQueryString.clearQueryString', function ($scope, setQueryString, getQueryString, clearQueryString) {

    $scope.demo = {};

    $scope.setQueryString = {}

    $scope.setQueryStringClick = function () {

        setQueryString($scope.setQueryString.name, $scope.setQueryString.value);

    }

    $scope.getQueryString = {};

    $scope.getQueryStringClick = function () {

        $scope.getQueryString.submitted = true;
        $scope.getQueryString.results = getQueryString($scope.getQueryString.name);

        console.log($scope.getQueryString.results);

    };

    $scope.clearQueryString = {};

    $scope.clearQueryStringClick = function () {

        $scope.getQueryString.submitted = true;
        clearQueryString($scope.clearQueryString.name);

    };

}])