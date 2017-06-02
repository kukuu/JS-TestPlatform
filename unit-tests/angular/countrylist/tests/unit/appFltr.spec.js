describe('reverseFltr', function() {
	var reverseFltr;

	beforeEach(function() { // executed before each 'it' is run
		module('app'); // load the module

		inject(function($filter) { // inject filter for testing
			reverseFltr = $filter('reverse');
		});
	});

	it('should have reverseFltr filter toBeDefined', function() {
		expect(reverseFltr).toBeDefined();
		//expect(!!reverseFltr).toBe(true);
	});

	it('should reverse the text', function () {
		expect(reverseFltr('abc')).toEqual('cba');
	});

});