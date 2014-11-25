"use strict"


var AuthenticateUsers = function (){
var user = document.getElementById('userName').value;
var pwd = document.getElementById('password').value;
		
	var LoginPage =	document.getElementById('LoginPage');
	var FeedsAndProfile = document.getElementById('FeedsAndProfile')
	var error = document.getElementById('lblError')
	 if (LOGIN.authenticate(user,pwd)){
		LoginPage.style.display='none';
		FeedsAndProfile.style.display='block';
	 }else{
		error.innerhtml='failed to authenticate user. please check your credentials';
	 }

};


var LOGIN =  (function(){
	console.log('Works till here1');
	var savedUserName = "ofs";
	var savedPassword = "ofs";
	return {
	authenticate: function (username,password) {
			if(username == savedUserName && password== savedPassword){
		 return true;
		}else{
		return false;}
		}
	}
})();