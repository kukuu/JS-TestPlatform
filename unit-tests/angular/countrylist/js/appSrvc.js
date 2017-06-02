app.factory('appSrvc', function () {
	return {
		countriesList: [
			{name: 'England', capital: 'London'},
			{name: 'Germany', capital: 'Berlin'},
			{name: 'Italy', capital: 'Rome'},
			{name: 'Spain', capital: 'Madrid'}
		],
		checkCountry: function(countryName) {
			var countryInList = false;
			angular.forEach(this.countriesList, function (value, index) {
				if (value.name === countryName) {
					countryInList = true; // country is in the list
				}
			});
			return countryInList;
		}
	};
});