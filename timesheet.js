
//firebase link
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzw9ekJnNkRyyVxxsb1Ee3bZR183NkSR8",
    authDomain: "timesheet-2eb05.firebaseapp.com",
    databaseURL: "https://timesheet-2eb05.firebaseio.com",
    projectId: "timesheet-2eb05",
    storageBucket: "",
    messagingSenderId: "721156852367"
  };
  firebase.initializeApp(config);

  // var employeeName="";
  // var employeeRole="";
  // var employeeRate ="";
  // var employeeStart="";
var database = firebase.database();

//create an event listner, on click function

$("#submit-bid").on("click", function(event){
    event.preventDefault();
//add in our value for our vars into their designated div
		var employeeName=$("#divemployeeName").val();
		console.log(employeeName);

		var employeeRole =$("#divemployeeRole").val();

		var employeeRate=$("#divemployeeRate").val();

		var employeeStart=$("#divemployeeStart").val();

database.ref().push({
    name: employeeName,
    role: employeeRole,
    start: employeeStart,
    rate: employeeRate,
    dataAdded: firebase.database.ServerValue.TIMESTAMP
 
	// $("#employeeNameInput").val("");
 //    $("#roleInput").val("");
 //    $("#startInput").val("");
 //    $("#rateInput").val("");

 //    return false;

   });

// console.log(employeeName);
//  console.log(name);
//  console.log(employeeRole);
//  console.log(role);
//  console.log(employeeStart);
//  console.log(start);
//  console.log(employeeRate);
//  console.log(rate);
});


		// var employeeInfo = {
  //     name: employeeName,
  //     role: employeeRole,
  //     start: employeeStart,
  //     rate: employeeRate}
  //   });
//saveto firebase key + value, will show up in data in firebase
	




//event with firebase child snapshot







//take the user input and and convert it to a string

//move the information for each of these vars and move it the the current employees div
