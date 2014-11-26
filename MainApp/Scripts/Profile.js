"use strict"

var previewFile = function(){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

function SaveProfileDetails (name,age,phone,address,email,pic) {
for(var x=0,y=persons.length;x<y;x++){
		if(persons[x].phone==phone && persons[x].email==email){
			//change existing profile data
			persons[x].name = name;
			persons[x].age = age;
			persons[x].address = address;
			persons[x].pic = pic;
			return;
		}
}
var p = new person(persons.length+1, name,age,phone,address,email,pic);
persons.push(p);

}  


//Code: Page Level Code here
var saveProfile = function(){
var validationLabel = document.getElementById('lblValidation');
var validationMessage;
var name = document.getElementById('Name').value,
age= document.getElementById('Age').value,
phone= document.getElementById('Phone').value,
address=document.getElementById('Address').value,
email=document.getElementById('Email').value,
pic = document.getElementById('myimage'),
check = false;

if(name.length < 1 || name.length > 50){
validationMessage =  "-Name cannot be more less than 0 or more than 50 Characters."
check = false;
}else{
validationMessage = "";
check = true;
}

if(isNaN(age)){
validationMessage += "<br>-Please provide valid Age.";
check = false;
}else{
validationMessage += "";
check = check?check:false;
}


if(age > 100 || age < 1){
validationMessage += "<br>-Please provide Age greater than 0 and less than or equal to 100.";
check = false;
}else{
validationMessage += "";
check = check?check:false;
}

if(phone == ''){
validationMessage += "<br>-Please provide a Phone number.";
check = false;
}else{
validationMessage += "";
check = check?check:false;
}

if(isNaN(phone)){
validationMessage += "<br>-Please provide numeric Phone.";
check = false;
}else{
validationMessage += "";
check = check?check:false;
}


var atpos = email.indexOf("@");
var dotpos = email.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
	validationMessage += "<br>-Please provide valid Email address.";
	check = false;
}else{
validationMessage += "";
check = check?check:false;;
}

if (check){
validationMessage = "";
SaveProfileDetails(name,age,phone,address,email,pic);
}
validationLabel.innerHTML = validationMessage;


};

var signOut= function () {
var LoginPage =	document.getElementById('LoginPage');
	var FeedsAndProfile = document.getElementById('FeedsAndProfile')
	LoginPage.style.display='block';
	FeedsAndProfile.style.display='none';
	 
};


var nameValidator = function (val) {
	if(val.length > 50){
		return false
	} 
}