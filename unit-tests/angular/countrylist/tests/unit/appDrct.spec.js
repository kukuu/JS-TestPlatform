describe('appDrct', function() {
	var element, $scope;

	beforeEach(function() { // executed before each 'it' is run
		module('app'); // load the module

		inject(function($compile, $rootScope) { // inject directive for testing
			$scope = $rootScope;
			element = angular.element('<div class-well>{{2 + 2}}</div>');
			$compile(element)($rootScope);
		})
	});

	it('should equal 4', function() {
		$scope.$digest();
		expect(element.html()).toBe('4');
	});

	it('should add a class of well', function() {
		expect(element.hasClass('well')).toBe(true);
	});
});
