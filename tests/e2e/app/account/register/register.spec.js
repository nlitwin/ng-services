var regPage = require('./register.object');
var regUser = require('./register.data');

describe('registerUser', function(){
	console.log(regUser.userList.length);

	for(var i = 0;i < regUser.userList.length; i++) {
	  (function(regUserCred) {
		  it('register new user', function() {
		  	console.log('regUser.baseUrl'+regUser.baseUrl);
			  regPage.get(regUser.baseUrl);
			  regPage.register(regUserCred);
		  });
	  })(regUser.userList[i]);
  }
});
