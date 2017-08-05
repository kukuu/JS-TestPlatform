describe('Exponentiallists factory', function() {
  var Exponentiallists;
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
  var singleExponential = {
        ID: "1",
        Supplier: "New Co Ltd",
        Product: "Large wongle",
        Price: "8"
    };

  beforeEach(angular.mock.module('api.exponentiallists'));

  beforeEach(inject(function(_Exponentiallists_) {
    Exponentiallists = _Exponentiallists_;
  }));

  it('should exist', function() {
    expect(Exponentiallists).toBeDefined();
  });

  describe('.all()', function() {
    it('should exist', function() {
      expect(Exponentiallists.all).toBeDefined();
    });

    it('should return a hard-coded list of exponentiallists', function() {
      expect(Exponentiallists.all()).toEqual(exponentiallist);
    });
  });

  describe('.findById()', function() {
    it('should exist', function() {
      expect(Exponentiallists.findById).toBeDefined();
    });

    it('should return one user object if it exists', function() {
      expect(Exponentiallists.findById("1")).toEqual(singleExponential);
    });

    it('should return undefined if the user cannot be found', function() {
      expect(Exponentiallists.findById('DEF')).not.toBeDefined();
    });
  });
});
