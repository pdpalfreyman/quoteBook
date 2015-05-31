var app = angular.module('quoteBook');

app.controller('mainCtlr', function($scope, dataService){


$scope.quotes = dataService.getData();

$scope.addQuote = function(){
	dataService.addData($scope.newText, $scope.newAuthor);
}

$scope.rmvQuote = function(){
	dataService.removeData($scope.test);
}

$scope.toggleAdd = false
$scope.toggleRemove = false
$scope.toggleFilter = false

$scope.showAdd = function(){
	$scope.toggleAdd = !$scope.toggleAdd;
}

$scope.showRemove = function(){
	$scope.toggleRemove = !$scope.toggleRemove;
}

$scope.showFilter = function(){
	$scope.toggleFilter = !$scope.toggleFilter;
}

$scope.options = ["text", "author"];

});