app.controller('appCtrl', function ($scope, appSrvc) {
	$scope.count = 5;
	$scope.srvc = appSrvc; // bind scope variable to service

	$scope.incrementCount = function() {
		$scope.count = $scope.count + 1;
	};

	$scope.checkCountry = function() {
		if ($scope.srvc.checkCountry($scope.country.name)) {
			alert($scope.country.name + ' is in the list');
		} else {
			alert($scope.country.name + ' is not in the list');
		}
	};
});