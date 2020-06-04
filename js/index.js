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



var buyHouse = function() {
    var order = prompt('Are you trying to buy a House or Hotel?').toLowerCase().trim();
    var item;
    while (order !== 'house' && order !== 'hotel')  {
        order = prompt('Please enter "house" or "hotel". ').toLowerCase().trim();
    }
    if (order == 'hotel') {
        item = '<img src="images/hotel.png">';
    }
    else if (order == 'house') {
        item = '<img src="images/house.png">';
    }
    return item;
}

var amountToBuy = function() {
    var amount = prompt('Please enter the amount you wish to buy between 1 and 10');
    while (isNaN(amount)) {
        var amount = prompt('That was not a number, Please enter a numer between 1 and 10');
    }
    while (amount > 10 || amount < 1) {
        var amount = prompt('That was not a number within the correct range, Please enter a numer between 1 and 10'); 
    } 
        return amount;
}


var showMeThePics = function() {
    var item = buyHouse();
    var amount = amountToBuy();

    var result = '';

    for(var i = 1; i <= amount; i++) {
        result = result + '<p>Model #' + i + '<br>' + item + '</p>';
    }

    return result;

} 
document.getElementById('amountBuying').innerHTML = showMeThePics();

