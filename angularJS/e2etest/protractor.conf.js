// protractor.conf.js
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://27.0.0.1:4444/wd/hub',


  // The address where our server under test is running
  baseUrl: 'http://localhost:8000/',

  // Capabilities to be passed to the webdriver instance.
  // capabilities: {
  //   'browserName': 'chrome'
  // },

  multiCapabilities: [{
    'browserName': 'chrome'
  }, {
    'browserName': 'safari'
  }],

  // Spec patterns are relative to the location of the
  // spec file. They may include glob patterns.
  specs: ['*Spec*.js'],
  //specs: ['spec/simpleRoutingSpec.js'],
   //specs: ['appUnderTest/e2e/spec/simpleRoutingSpec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  }
};