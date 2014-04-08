angular.module('test', ['ngQueryString'])
.controller('TestCtrl', ['$scope', 'ngQueryString.ngQueryString', function ($scope, ngQueryString) {

    $scope.demo = {};

    $scope.setQueryString = {}

    $scope.setQueryStringClick = function () {

        ngQueryString.setQueryString($scope.setQueryString.name, $scope.setQueryString.value);

    }

    $scope.getQueryString = {};

    $scope.getQueryStringClick = function () {

        $scope.getQueryString.submitted = true;
        $scope.getQueryString.results = ngQueryString.getQueryString($scope.getQueryString.name);


    };

    $scope.clearQueryString = {};

    $scope.clearQueryStringClick = function () {

        $scope.getQueryString.submitted = true;
        ngQueryString.clearQueryString($scope.clearQueryString.name);

    };

}])