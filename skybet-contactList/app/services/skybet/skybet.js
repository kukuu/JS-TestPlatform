
//System under Test
(function() {
  'use strict';

  angular.module('api.contacts', [])
  .factory('Contacts', function() {
    var Contacts = {};
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

    Contacts.all = function() {
      return contactList;
    };

    Contacts.findById = function(id) {
      return contactList.find(function(contact) {
        return contact.id === id;
      });
    };

    return Contacts;
  });
})();
