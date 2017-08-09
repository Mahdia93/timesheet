
  var config = {
    apiKey: "AIzaSyAzw9ekJnNkRyyVxxsb1Ee3bZR183NkSR8",
    authDomain: "timesheet-2eb05.firebaseapp.com",
    databaseURL: "https://timesheet-2eb05.firebaseio.com",
    projectId: "timesheet-2eb05",
    storageBucket: "",
    messagingSenderId: "721156852367"
  };
  firebase.initializeApp(config);

var database = firebase.database();




database.ref("/").on("child_added", function(snapshot) {
  console.log(snapshot.val());

var randomFormat = "MM/DD/YYYY";

var convertedDate = moment(snapshot.val().start, randomFormat);


var monthsWorked = (moment(convertedDate).diff(moment(),"months")*-1);;
var totalBilled = monthsWorked*snapshot.val().rate;



$("tbody").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().role + "</td><td>" + snapshot.val().start + "</td><td>" + monthsWorked + "</td><td>" + snapshot.val().rate + "</td><td>"+ totalBilled + "</td></tr>");


// Create Error Handling
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});



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
 
	   
   });
 console.log(rate);
});


