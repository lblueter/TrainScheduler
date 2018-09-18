var config = {
    apiKey: "AIzaSyDxG4kssZmJXr200W7pU0NOeVdiARpO620",
    authDomain: "jaguars-21321.firebaseapp.com",
    databaseURL: "https://jaguars-21321.firebaseio.com",
    projectId: "jaguars-21321",
    storageBucket: "jaguars-21321.appspot.com",
    messagingSenderId: "1052929969797"
};

firebase.initializeApp(config);

var database = firebase.database();


$(document).on("click", "#submit", function () {
    var newRow = $("<tr>")
    var newName = $("<td>")
    var newDestination = $("<td>")
    var firstTrainTime
    var newFrequency = $("<td>")
    var newArrival = $("<td>")
    var newMinutesAway = $("<td>")

    newName.text($("#nameInput").val())
    newDestination.text($("#destInput").val())
    newFrequency.text($("#freqInput").val())
    
    newRow.append(newName)
    newRow.append(newDestination)
    newRow.append(newFrequency)

    $("#trainTable").append(newRow)


})