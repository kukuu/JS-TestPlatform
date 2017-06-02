angular.module("desserts",[]).value('DessertValues', {
	pies: [
		{flavor:"Cherry",score:6},
		{flavor:"Apple",score:7.5},
		{flavor:"Peach",score:4}
	]
});

angular.module("desserts")
.factory('DessertManager',['DesertValues',function(DesertValues){
	return{
		pieFlavors:function(){
			return DesertValues.pies.map(function(pie){
				return pie.flavor;
			})
		}
	}
}])