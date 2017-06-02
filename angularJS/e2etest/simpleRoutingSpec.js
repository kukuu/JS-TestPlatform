// simpleRoutingSpec.js

describe('Routing Test', function() {

  it('should show teams on the first page', function() {
    // Open the list of teams page
    browser.get('/');

    // Check if there are 5 rows in the repeater() loop
    var rows = element.all(
        by.repeater('team in teamListCtrl.teams')//controller check
    );

    // ATTENTION TO CHAINING

    expect(rows.count()).toEqual(5);


    //Define row rank and save
    // Check the first row details
    //use row() and count() functions
    var firstRowRank = element(
      by.repeater('team in teamListCtrl.teams')
        .row(0).column('team.rank'));


    //define first rowname and save
    var firstRowName = element(
      by.repeater('team in teamListCtrl.teams')
        .row(0).column('team.name')
    );

    expect(firstRowRank.getText()).toEqual('1');
    expect(firstRowName.getText()).toEqual('Spain');


    // Check the last row details
    var lastRowRank = element(
      by.repeater('team in teamListCtrl.teams')
        .row(4).column('team.rank'));


    //check last team credentials
    var lastRowName = element(
      by.repeater('team in teamListCtrl.teams')
        .row(4).column('team.name'));
    expect(lastRowRank.getText()).toEqual('5');//use gettext() methhod  
    expect(lastRowName.getText()).toEqual('Uruguay');

    // Check that login link is shown and
    // logout link is hidden
    //use css() method
    expect(element(by.css('.login-link')).isDisplayed()).toBe(true);

    expect(element(by.css('.logout-link')).isDisplayed()).toBe(false);
  });

  it('should allow logging in', function() {
    // Navigate to the login page
    browser.get('#/login');

    var username = element(by.model('loginCtrl.user.username'));

    var password = element(by.model('loginCtrl.user.password'));

    // Type in the username and password
    username.sendKeys('admin');
    password.sendKeys('admin');

    // Click on the login button
    element(by.css('.btn.btn-success')).click();

    // Ensure that the user was redirected
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/');

    // Check that login link is hidden and
   
    expect(element(by.css('.login-link')).isDisplayed()).toBe(false);

     // logout link is show
    expect(element(by.css('.logout-link')).isDisplayed()).toBe(true);

  });
});