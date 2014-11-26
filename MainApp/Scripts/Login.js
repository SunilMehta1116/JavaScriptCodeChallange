"use strict"


var AuthenticateUsers = function (){
var user = document.getElementById('userName').value;
var pwd = document.getElementById('password').value;
		
	var LoginPage =	document.getElementById('LoginPage');
	var FeedsAndProfile = document.getElementById('FeedsAndProfile')
	var error = document.getElementById('lblError')
	if(validateUserName(user,error) && validatePassword(pwd,error))
	if (LOGIN.authenticate(user,pwd)){
	error.innerHTML='';
		LoginPage.style.display='none';
		FeedsAndProfile.style.display='block';
	 }else{
		error.innerHTML='Failed to authenticate user. Please check your credentials';
	 }

};


var LOGIN =  (function(){
	console.log('Works till here1');
	var savedUserName = "testing";
	var savedPassword = "testing";
	return {
	authenticate: function (username,password) {
			if(username == savedUserName && password== savedPassword){
		 return true;
		}else{
		return false;}
		}
	}
})();


var validateUserName = function(uid,error){
if(uid.length > 8){
		error.innerHTML='Username cannot be more than 8 characters';
		return false;
	}else
	return true;
}
var validatePassword  = function(pwd,error){
if(pwd.length < 6){
		error.innerHTML='Password cannot be lesse than 6 characters';
		return false;
	}else
	return true;
}