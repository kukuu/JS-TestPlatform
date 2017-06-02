describe('appSrvc', function(){
	var appSrvc, $scope;

	beforeEach(function() { // executed before each 'it' is run
		module('app'); // load the module

		// The _underscores_ are a convenience thing
		// so you can have your variable name be the
		// same as your injected service.
		inject(function(_appSrvc_) { // inject service for testing
			appSrvc = _appSrvc_;
		});
	});

	it('should provide a countriesList array property', function () {
		expect(appSrvc.checkCountry).toBeDefined();
		expect(appSrvc.countriesList instanceof Array).toBe(true);
	});

	it('should provide a myMethod function', function () {
		expect(appSrvc.checkCountry).toBeDefined();
		expect(typeof appSrvc.checkCountry).toBe('function');
	});

	it('should pass all test cases', function () {
		var i, valid, invalid;

		// test cases - testing for success
		var validCountries = [
			'England',
			'Germany'
		];

		// test cases - testing for failure
		var invalidCountries = [
			'123',
			''
		];

		// loop through arrays of test cases
		for (i in validCountries) {
			valid = appSrvc.checkCountry(validCountries[i]);
			expect(valid).toBeTruthy();
		}
		for (i in invalidCountries) {
			invalid = appSrvc.checkCountry(invalidCountries[i]);
			expect(invalid).toBeFalsy();
		}
	});

});