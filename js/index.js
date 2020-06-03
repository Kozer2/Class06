'use strict';


var userName = prompt('Please enter your first name: ');
var color = prompt('Please enter your favorite color: ');
var birthday = prompt('Please enter your birthday MM/DD ');
var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();
var fullDay = month + '/' + day;




var greeting = document.getElementById('greeting');
var result = '';
result += '<h3 style="color: ' + color + '">' + userName + '</h3>';

if(birthday == fullDay) {
    result += '<h5>Happy Birthday!</h5>';
} else {
    result += '<h5>Welcome!</h5>'


}
greeting.innerHTML = result;


