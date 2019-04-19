"use strict";

/**
 * Updates calendar.html to display the desired month.
 *
 * @param date a JavaScript Date object set to a day in the month to be displayed.
 */

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var mainDate;

var update = function (date) {

    var daysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // *** Remember to use getElementsByTagName when possible.  It avoids a lot of the hassle of looking through each child. ***
	document.getElementById("monthHeader").innerHTML = months[date.getMonth()];
	document.getElementById("yearHeader").innerHTML = date.getFullYear();
	var formMonth = document.getElementById("form_month").value;
	mainDate = date;
	var d = date;
	d.setDate(1);
	var firstDateOfMonthDay = d.getDay();
	var calStartDay = firstDateOfMonthDay;
	var dateNum = 1;
	var doc = document.getElementById("calendarTable");
	for(var x=calStartDay; x <= (daysInCurrentMonth + (calStartDay - 1)) ; x++){
		doc.getElementsByTagName("td")[x].innerHTML = dateNum;
		dateNum++;
	}
	for(var x=calStartDay - 1; x >=0; x--){
		doc.getElementsByTagName("td")[x].innerHTML = "&nbsp;";
	}
	for(var x=daysInCurrentMonth + calStartDay; x < 42; x++){
		doc.getElementsByTagName("td")[x].innerHTML = "&nbsp;";
	}

}

var setDate = function(){
	var formMonthNum = "";
	var formMonth = document.getElementById("form_month").value;
	for(var i=0 ; i<12; i++){
		if(months[i] == formMonth){
			formMonthNum = i;
		}
	}

	var formYear = document.getElementById("form_year").value;
	var formDate = new Date(formYear, formMonthNum, 1);
	update(formDate);
}

function displayPrevDate(){

	// Calculate the previous and next month
    // (You may use this for adding links to the left arrow)
    var nextMonth = mainDate.getMonth()  - 1;
    var nextYear = mainDate.getFullYear();
    if (nextMonth < 0) {
        // Remember:  Months are numbered beginning with 0.
        nextMonth = 11;
        nextYear--;
    }
	update(new Date(nextYear,nextMonth, 1));
}

function setNextDate(){

	// Calculate the previous and next month
    // (You may use this for adding links to the left arrow)
    var nextMonth = mainDate.getMonth()  + 1;
    var nextYear = mainDate.getFullYear();
    if (nextMonth >= 12) {
        // Remember:  Months are numbered beginning with 0.
        nextMonth = 0;
        nextYear++;
    }
	update(new Date(nextYear,nextMonth, 1));
}
