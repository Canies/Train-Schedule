var config = {
  apiKey: "AIzaSyCbSOJ4X0sBhlTUNUH7l8zNvcBqQlYzOdQ",
  authDomain: "spheric-crowbar-120823.firebaseapp.com",
  databaseURL: "https://spheric-crowbar-120823.firebaseio.com",
  projectId: "spheric-crowbar-120823",
  storageBucket: "spheric-crowbar-120823.appspot.com",
  messagingSenderId: "549669515935",
  appId: "1:549669515935:web:501e075987aece6d6b68aa"
};

firebase.initializeApp(config);

var database = firebase.database();

$("add-train-btn").on("click", function (event) {
  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();
var trainDestination = $("#destination-input").val().trim();
var trainStart = moment($("#start-input").val().trim(), "H:HH").format("LT");
var trainFrequency = $("#frequency-input").val().trim();

var newTrain = {
  name: trainName,
  destination: trainDestination,
  start: trainStart,
  frequency: trainFrequency,
};


database.ref().push(newTrain);
      
console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.start);
console.log(newTrain.frequency);

$("#train-name-input").val("");
$("#destination-input").val("");
$("#start-input").val("");
$("#frequency-input").val("");
});


database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainStart = childSnapshot.val().start;
  var trainFrequency = childSnapshot.val().frequency;

  console.log(trainName);
  console.log(trainDestination);
  console.log(trainStart);
  console.log(trainFrequency);

  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainStart),
    $("<td>").text(trainFrequency),
  );

  $("#train-table > tbody").append(newRow);
  console.log(newRow);
  });