describe('appCtrl', function(){
	var appCtrl, $scope;

	beforeEach(function() { // executed before each 'it' is run
		module('app'); // load the module

		inject(function($controller, $rootScope) { // inject controller for testing
			$scope = $rootScope.$new();
			appCtrl = $controller('appCtrl', {
				$scope: $scope
			});
		})
	});

	it('should have appCtrl controller toBeDefined', function() {
		expect(appCtrl).toBeDefined();
	});

	it('should init counter value', function() {
		expect($scope.count).toBeDefined();
		expect($scope.count).toBe(5);

	});

	it('should change counter value', function() {
		$scope.incrementCount();
		expect($scope.count).toBe(6);
	});

});