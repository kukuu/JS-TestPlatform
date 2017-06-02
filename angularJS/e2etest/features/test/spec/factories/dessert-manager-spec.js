describe("DessertManager",function(){
	var values,factory;//feature dependencies

	beforeEach(function(){
		module('desserts');

		//Instantiate feature dependencies with injectore modul
		inject(function($injector){
			values = $injector.get('DessertValues');
			factory = $injector.get('DessertManager');

		})
	});

	//instantiation
	describe("DessertValues",function(){
		it("Should Instantiate with 3 pie flavors",function(){
			expect(values.pies).toEqual([
				{flavor:"Cherry",score:6},
				{flavor:"Apple",score:7.5},
				{flavor:"Peach",score:4}
			])
		});	
	});

	
	describe("DessertManager",function(){

		//Next place action methods in its own describe block		
		describe("pieFlavors",function(){

			it("Should return the 3 pie flavor strings",function(){
				var flavors = factory.pieFlavors();
				expect(flavors.length).toEqual(3);
				//more granular test
				expect(flavors[0]).toEqual("Cherry");
				expect(flavors[1]).toEqual("Apple");
				expect(flavors[2]).toEqual("Peach");
			});

			it("Should throw an error if there are no strings",function(){
				values.pies = null;//so it will throw an error when pieFlavors() is run
				expect(function(){
					factory.pieFlavors();
				}).toThrow();

				//we re-set the array values
				values.pies = [
					{flavor:"Cherry",score:6},
					{flavor:"Apple",score:7.5},
					{flavor:"Peach",score:4}
				]

			});
		});
	

	})

});