
//Protractor configuration file
exports.config = {
	//The address of running Selenium server
	  seleniumAddress:'http://127.0.0.1:4444/wd/hub',
	//The URL where the server we are testing is running
	  baseUrl:'https://localhost:9002/sonycp/#/login',
	  //baseUrl:'http://localhost:9002/',
	  
	//Capabilities to be passed to the WebDriver insance
	   multiCapabilities: [{
	    'browserName': 'chrome'
	  }, {
	    'browserName': 'safari'
	  }],
	  
	//Spec patterns (with globs) are relative to the location of the spec file. They may include glob patterns
	    specs:['spec/**/*.js'],
	//Options to be passed to Jasmine node
	    jasmineNodeOpts:{
	     showColors:true //use color in the command line report
	    }
}