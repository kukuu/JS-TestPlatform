
//Spec file
describe('Contacts factory', function() {
  var Contacts;
  var contactList = [
                  {
                    "id": '590',
                    name: "Jeff",
                    surname: "Sterling",
                    email: "jeff@email.com", 
                    number: "08741349"
                  },
                  {
                     "id": '591',
                     name: "Chris",
                     surname: "Kamara",
                     email: "chrisK@email.com", 
                     number: "99478654"
                  },
                  {
                     "id": '592',
                      name: "Alex",
                      surname: "Hammond",
                      email: "alexH@email.com", 
                      number: "67892340"
                  },
                  {
                     "id": '593',
                     name: "Jim",
                     surname: "White",
                     email: "JimWe@email.com", 
                     number: "90872340"
                  },
                  {
                     "id": '594',
                     name: "Natalie",
                    surname: "Sawyer",
                    email: "NatalieS@email.com", 
                    number: "54342340"
                  }
  ];
  var singleContact = {
                    "id": '590',
                    name: "Jeff",
                    surname: "Sterling",
                    email: "jeff@email.com", 
                    number: "08741349"
                  };

  beforeEach(angular.mock.module('api.contacts'));

  beforeEach(inject(function(_Contacts_) {
    Contacts = _Contacts_;
  }));

  it('should exist', function() {
    expect(Contacts).toBeDefined();
  });

  describe('.all()', function() {
    it('should exist', function() {
      expect(Contacts.all).toBeDefined();
    });

    it('should return a hard-coded contact list of a user', function() {
      expect(Contacts.all()).toEqual(contactList);
    });
  });

  describe('.findById()', function() {
    it('should exist', function() {
      expect(Contacts.findById).toBeDefined();
    });

    it('should return one user object if it exists', function() {
      expect(Contacts.findById('590')).toEqual(singleContact);
    });

    it('should return undefined if the user cannot be found', function() {
      expect(Contacts.findById('AtoZ')).not.toBeDefined();
    });
  });
});
