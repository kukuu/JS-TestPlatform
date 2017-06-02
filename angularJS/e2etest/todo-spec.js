https://github.com/shyamseshadri/angularjs-up-and-running/tree/master/chapter14

// File: chapter14/protractor.conf.js
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // The address where our server under test is running
  baseUrl: 'http://localhost:8000/',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the location of the
  // spec file. They may include glob patterns.
  specs: ['*Spec*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  }
};



// File: chapter14/simpleRoutingSpec.js

describe('Routing Test', function() {

  it('should show teams on the first page', function() {
    // Open the list of teams page
    browser.get('/');

    // Check if there are 5 rows in the repeater
    var rows = element.all(
        by.repeater('team in teamListCtrl.teams'));
    expect(rows.count()).toEqual(5);

    // Check the first row details
    var firstRowRank = element(
      by.repeater('team in teamListCtrl.teams')
        .row(0).column('team.rank'));
    var firstRowName = element(
      by.repeater('team in teamListCtrl.teams')
        .row(0).column('team.name'));
    expect(firstRowRank.getText()).toEqual('1');
    expect(firstRowName.getText()).toEqual('Spain');

    // Check the last row details
    var lastRowRank = element(
      by.repeater('team in teamListCtrl.teams')
        .row(4).column('team.rank'));
    var lastRowName = element(
      by.repeater('team in teamListCtrl.teams')
        .row(4).column('team.name'));
    expect(lastRowRank.getText()).toEqual('5');
    expect(lastRowName.getText()).toEqual('Uruguay');

    // Check that login link is shown and
    // logout link is hidden
    expect(element(by.css('.login-link')).isDisplayed())
        .toBe(true);
    expect(element(by.css('.logout-link')).isDisplayed())
        .toBe(false);
  });

  it('should allow logging in', function() {
    // Navigate to the login page
    browser.get('#/login');

    var username = element(
      by.model('loginCtrl.user.username'));
    var password = element(
      by.model('loginCtrl.user.password'));

    // Type in the username and password
    username.sendKeys('admin');
    password.sendKeys('admin');

    // Click on the login button
    element(by.css('.btn.btn-success')).click();

    // Ensure that the user was redirected
    expect(browser.getCurrentUrl())
        .toEqual('http://localhost:8000/#/');

    // Check that login link is hidden and
    // logout link is show
    expect(element(by.css('.login-link')).isDisplayed())
        .toBe(false);
    expect(element(by.css('.logout-link')).isDisplayed())
        .toBe(true);

  });
});

// File: chapter14/routingSpecWithPageObjects.js

// The Page Objects are ideally in separate files
// to allow for reuse across all the tests,
// but here are listed together for ease of understanding

function TeamsListPage() {
  this.open = function() {
    browser.get('/');
  };

  this.getTeamsListRows = function() {
    return element.all(by.repeater('team in teamListCtrl.teams'));
  };

  this.getRankForRow = function(row) {
    return element(
      by.repeater('team in teamListCtrl.teams')
        .row(row).column('team.rank'));
  };

  this.getNameForRow = function(row) {
    return element(
      by.repeater('team in teamListCtrl.teams')
        .row(row).column('team.name'));
  };

  this.isLoginLinkVisible = function() {
    return element(by.css('.login-link')).isDisplayed();
  };

  this.isLogoutLinkVisible = function() {
    return element(by.css('.logout-link')).isDisplayed();
  };
}

describe('Routing Test With Page objects', function() {

  it('should show teams on the first page', function() {
    var teamsListPage = new TeamsListPage();

    teamsListPage.open();

    expect(teamsListPage.getTeamsListRows().count()).toEqual(5);

    expect(teamsListPage.getRankForRow(0).getText())
      .toEqual('1');
    expect(teamsListPage.getNameForRow(0).getText())
      .toEqual('Spain');

    expect(teamsListPage.getRankForRow(4).getText())
      .toEqual('5');
    expect(teamsListPage.getNameForRow(4).getText())
      .toEqual('Uruguay');

    // Check that login link is shown and
    // logout link is hidden
    expect(teamsListPage.isLoginLinkVisible()).toBe(true);
    expect(teamsListPage.isLogoutLinkVisible()).toBe(false);
  });
});
....................................................................

https://ngmilk.rocks/2014/10/14/refactoring-auth0-login-tests-on-angularjs-with-protractor/
...........................................
The bread and butter of these tests are the interactive elements 
of the page such as links, buttons, and input fields. These can be 
selected using the element global (or element.all for collections) 
in conjunction with a locator strategy. The by global not only exposes 
the basic locators from WebDriver like by.id and by.tagName 
but also provides shortcuts (like $('.foo') for element(by.css('.foo')) and, 

describe('Authentication capabilities', function() {
  var loginURL;
  var email = element(by.name('login-email'));
  var password = element(by.name('login-password));
  var loginButton = element(by.xpath('//form[1]/input[@type="submit"]'));
  var error = element(by.model('loginError'));

  it('should redirect to the login page if trying to load protected page while not authenticated', function() {
    browser.get('/#/login');
    loginURL = browser.getCurrentUrl();

    browser.get('/#/');
    expect(browser.getCurrentUrl()).toEqual(loginURL);
  });

  it('should warn on missing/malformed credentials', function() {
    email.clear();
    password.clear();

    password.sendKeys('test');
    loginButton.click();
    expect(error.getText()).toMatch('missing email');

    email.sendKeys('test');
    loginButton.click();
    expect(error.getText()).toMatch('invalid email');

    email.sendKeys('@example.com');
    password.clear();
    loginButton.click();
    expect(error.getText()).toMatch('missing password');
  });

  it('should accept a valid email address and password', function() {
    email.clear();
    password.clear();

    email.sendKeys('test@example.com');
    password.sendKeys('test');
    loginButton.click();
    expect(browser.getCurrentUrl()).not.toEqual(loginURL);
  });

  it('should return to the login page after logout', function() {
    var logoutButton = $('a.logout');
    logoutButton.click();
    expect(browser.getCurrentUrl()).toEqual(loginURL);
  });
});
  .............................................
  spec.js

describe('login page', function() {
    browser.driver.get('http://url.path/login');
    it('should render login page', function() {

      // Checking the current url
      var currentUrl = browser.driver.getCurrentUrl();
      expect(currentUrl).toMatch('/login');
    });
    it('should sign in', function() {

      // Find page elements
      var userNameField = browser.driver.findElement(By.id('username'));
      var userPassField = browser.driver.findElement(By.id('password'));
      var userLoginBtn  = browser.driver.findElement(By.id('loginbtn'));

      // Fill input fields
      userNameField.sendKeys('test@user.com');
      userPassField.sendKeys('1234');

      // Ensure fields contain what we've entered
      expect(userNameField.getAttribute('value')).toEqual('test@user.com');
      expect(userPassField.getAttribute('value')).toEqual('1234');

      // Click to sign in - waiting for Angular as it is manually bootstrapped.
      userLoginBtn.click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/success');
      }, 10000);
    });
});


amend to 
 // Click to sign in - waiting for Angular as it is manually bootstrapped.
  userLoginBtn.click();
  return browser.driver.wait(function() {
        return browser.driver.getCurrentUrl().then(function(url) {
            return /success/.test(url);
        });
  }, 10000);


...................................................
To start out, we’ll make sure we can log into our app correctly, starting with stubbed tests:

describe('Authentication capabilities', function() {
  var fail = function() { expect(true).toBe(false); }

  it('should redirect to the login page if trying to load protected page while not authenticated', fail);
  it('should warn on missing/malformed credentials', fail);
  it('should accept a valid email address and password', fail);
  it('should return to the login page after logout', fail);
});

.................................................................................
exports.config = {
  /**
   * Use `seleniumAddress` for faster startup; run `./node_modules/.bin/webdriver-manager start` to launch the Selenium server.
   * Use `seleniumPort` to let Protractor manage its own Selenium server instance (using the server JAR in its default location).
   */
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumPort: 4444,

  /**
   * Path to your E2E test files, relative to the location of this configuration file.
   * We're pointing to the directory where our CoffeeScript output goes.
   */
  specs: [
    '../.tmp/test/e2e/**/*.js',
  ],

  /**
   * Properties passed to Selenium -- see https://code.google.com/p/selenium/wiki/DesiredCapabilities for more info.
   */
  capabilities: {
    'browserName': 'chrome'
  },

  /**
   * This should point to your running app instance, for relative path resolution in tests.
   */
  baseUrl: 'http://localhost:9000'
};
......................................

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['example-spec.js'],

  jasmineNodeOpts: {
    showColors: true
  }
};


...........
exports.config = {
//The address of running Selenium server
  seleniumAddress:'http://localhost:444/wd/hub',
 // seleniumAddress:'http://localhost:127.0.0.1/444/wd/hub',
//The URL where the server we are testing is running
  baseUrl:'http://localhost:8000/',
//Capabilities to be passed to the WebDriver insance
  capabilities:{
    'browserName':'Chrome'
  },
//Spec patterns are relative to the location of the spec file. They may include glob patterns
    //spec:['*spec*'],
     specs:['todo-spec.js'],
//Options to be passed to Jasmine node
    jasmineNodeOpts:{
     showColors:true //use color in the command line report
    }
}


...........
Using params

Your config.js

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: { 'browserName': 'chrome' },

  // This can be changed via the command line as:
  // --params.login.user 'ngrocks'
  params: {
    login: {
      user: 'protractor-br',
      password: '#ng123#'
    }
  },

  jasmineNodeOpts: { showColors: true }
};

............
describe('login page', function() {

  var params = browser.params;

  it('should login successfully', function() {
    element( by.model('username') ).sendKeys( params.login.user );
    element( by.model('password') ).sendKeys( params.login.password );
    element( by.css('[ng-click="login()"]') ).click();
    expect( element(by.binding('username') ).getText() ).toEqual( params.login.user );
  });

});

..............
Using jasmineNodeOpts

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: { 'browserName': 'chrome' },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
    includeStackTrace: true
  }
};


....projectfolder/
  |-- css/
  |-- js/
  |-- img/
  |-- tests/
    |-- unit/
    |-- e2e/
    |    |-- homepage/
    |    |     |-- homepage.po.js
    |    |     |-- *.spec.js
    |    |-- profile/
    |    |     |-- profile.po.js
    |    |     |-- *.spec.js
    |    |-- config.js