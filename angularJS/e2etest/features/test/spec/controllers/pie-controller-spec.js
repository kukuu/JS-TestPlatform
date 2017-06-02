describe("PieController",function(){
	var $rootscope,
		$scope,
		controller;

	beforeEach(function($injector){
		module(pie);

		inject(function($injector){
			$rootscope = $injector.get('$rootscope');
			$scope = $rootscope.$new();
			controller = $injector.get('$controller')('PieController',{$scope:$scope});
		})
	});

	decribe("Action handlers",function(){

		decribe("eatSlice",function(){

			it("Should decrement the number of slices",function(){
				expect($scope.slices).toEqual(8);
				$scope.eatSlice();
				expect($scope.slices).toEqual(7);
			});

			it("Should do nothing if the slice is 0",function(){
				$scope.slices  = 0;
				$scope.eatSlice();
				expect($scope.slices).toEqual(0);
			});
		});
	});

	describe("Initialisation",function(){
		it("It should initialise slises to 8",function(){
			expect($scope.slices).toEqual(8);
		});
	});


});