//CODE: Feed Object
"use strict"

/*1.Created a Feed Object Here*/

function Feed (id,type){
	this.id = id;
	this.type = type;
};
	
/*2. Code: Person Object here*/
function person (id,name,age,phone,address,email,pic){
this.id = id;
this.name = name;
this.age = age;
this.phone = phone;
this.email = email;
this.address = address;
this.pic = pic;
}	

var persons = [];


	
//3. CODE: Feed Service in a closure
var FEEDSERVICE =(function(){
 var FeedsList = FeedsList || [];
	return {
		CreateFeed: function (data,dateTime) {
			var x = new Feed(data);
			if((data.indexOf('http'))== -1){ //this means data is not a url
				x = new Feed(FeedsList.length+1,'text');
				x.url = null;
				x.text = data;
			} else {
				x = new Feed(FeedsList.length+1,'url');
				x.url = data;
				x.text = null;
			}
			x.dateTime = new Date();
			FeedsList.push(x);
		},
		DeleteFeed: function(id){
			for(var i=0,y = FeedsList.length;i<y;i++){
				if(FeedsList[i].id == id){
					//alert(FeedsList[i].id + " " + i);
					FeedsList.splice(i,1);
					y--;
				}
			}
		},
		ReadFeeds: function(id){
			for(var i=0,y = FeedsList.length;i<y;i++){
					if(FeedsList[i].id == id){
					console.log(FeedsList[i].id + " " + FeedsList[i].type);
					return FeedsList[i].id + " " + FeedsList[i].type + " " + FeedsList[i].url+ " " + FeedsList[i].text+ " " + FeedsList[i].dateTime;
				}
			}
		},
		ReadAllFeeds: function(){
		return FeedsList;
		}
	}
})();




//Code: Date Helper
var getDateFormatted = function(date){
var m_names = new Array("January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December");

var d = date;
var curr_date = d.getDate();
var curr_month = d.getMonth();
var curr_year = d.getFullYear();



 var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;


return (curr_date + " " + m_names[curr_month] 
+ " " + curr_year)+ " " + strTime;  
  
}

//Code: Page Level Functions
var setFeed = function(data){
try{
FEEDSERVICE.CreateFeed(data);
} catch(error){
alert("Error Message:" + error.message);
}
//Refresh Page
getAllFeed();

}

var deleteFeed = function(data){
//alert(data);
try{
FEEDSERVICE.DeleteFeed(data);
} catch(error){
alert("Error Message:" + error.message);
}
getAllFeed();
}
var getAllFeed = function () {
var	obj = document.getElementById('showAllFeeds');
	
	//get all the feeds listStyleType
	try{
	 var list = FEEDSERVICE.ReadAllFeeds();
	 } catch(error){
		alert("Error Message:" + error.message);
	}
	 
	 var timeString;
	 obj.innerHTML = "";
	 var feedData;
	 for(var i = 0,x=list.length;i<x;i++){
	  feedData = list[i].text?list[i].text:list[i].url;
		// timeString = list[i].dateTime.getDate()+ " " +list[i].dateTime.getMonth()+ " Time: "+list[i].dateTime.getHours()+ " :" +list[i].dateTime.getMinutes();
	timeString = getDateFormatted(list[i].dateTime)
	if(!list[i].url){
	 obj.innerHTML += "<div class='myfeedshow'><div style='display:block;padding-left:580px;'><a href='javascript:deleteFeed(" + list[i].id +")'>x</a>" 
	 +"</div><div class='myinnerfeed'><span>" +feedData +"</span></div><div style='display:block;padding-left:410px;'>"+ timeString+"</div></div>";
		}else{
		 obj.innerHTML += "<div class='myfeedshow'><div style='display:block;padding-left:580px;'><a href='javascript:deleteFeed(" + list[i].id +")'>x</a>" 
	 +"</div><div class='myinnerfeed'><a href="+ feedData +" target='_blank'>" +feedData +"</a></div><div style='display:block;padding-left:410px;'>"+ timeString+"</div></div>";
		}
	 }
}

var showPage = function (page){
var feedPage = document.getElementById("feedPage");
var profilePage = document.getElementById("profilePage");
	if(page==1){
	//FeedPage
		feedPage.style.display = 'block';
		profilePage.style.display = 'none';
	}else{
	//Profile Page
		feedPage.style.display = 'none';
		profilePage.style.display = 'block';
	}

}









