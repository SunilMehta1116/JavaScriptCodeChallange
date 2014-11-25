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
var name = document.getElementById('Name').value,
age= document.getElementById('Age').value,
phone= document.getElementById('Phone').value,
address=document.getElementById('Address').value,
email=document.getElementById('Email').value,
pic = document.getElementById('myimage');
SaveProfileDetails(name,age,phone,address,email,pic);
}