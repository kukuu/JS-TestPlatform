(function() {
  'use strict';

  angular.module('api.exponentiallists', [])
  .factory('Exponentiallists', function() {
    var Exponentiallists = {};
    var exponentiallist = [
                  {
        ID: "1",
        Supplier: "New Co Ltd",
        Product: "Large wongle",
        Price: "8"
    },
    {
        ID: "2",
        Supplier: "New Co Ltd",
        Product: "Super wongle",
        Price: "12"
    },
    {
        ID: "3",
        Supplier: "Old Co Ltd",
        Product: "Mini Wongle",
        Price: "4"
    },
    {
        ID: "4",
        Supplier: "New Co Ltd",
        Product: "Super wongle",
        Price: "12"
    },
    {
        ID: "5",
        Supplier: "Old Co Ltd",
        Product: "Large wongle",
        Price: "9"
    },
    {
        ID: "6",
        Supplier: "New Co Ltd",
        Product: "Small Wongle",
        Price: "5"
    },
    {
        ID: "7",
        Supplier: "Old Co Ltd", 
        Product: "Mini wongle",
        Price: "4"
    },
    {
        ID: "8",
        Supplier: "Old Co Ltd",
        Product: "Small wongle",
        Price: "5"
    }
    ];

    Exponentiallists.all = function() {
      return exponentiallist;
    };

    Exponentiallists.findById = function(id) {
      return exponentiallist.find(function(exponential) {
        return exponential.ID === id;
      });
    };

    return Exponentiallists;
  });
})();
