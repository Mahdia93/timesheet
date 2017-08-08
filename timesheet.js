
//firebase link

 
//1. Create a var for employee name, role, start date, months worked, monthly rate, total billed

var employeeName

var role

var startDate

var monthsWorked

var monthlyRate

var totalBilled

//create an event listner, on click function

$("#nameofdivforaddemployeediv").on("click", function(){
//add in our value for our vars into their designated div
		employeename=$("#divforname").val().trim();

		role =$("#divforrole").val().trim();

		startDate=$("#divforstartdate").val().trim();

		monthsWorked=$("#divformonthsworked").val().trim();

	

  });

});


//take the user input and and convert it to a string

//move the information for each of these vars and move it the the current employees div
