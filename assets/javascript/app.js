var idk = dateFns.isToday(new Date())
console.log(idk)
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

var date = new Date()
console.log(date)
var timestamp = date.getTime()
console.log(timestamp)
var format = dateFns.format
console.log(format(timestamp, 'HH:mm'));

$(document).on("click", "#submit", function () {
    

    var name = $("#nameInput").val().trim()
    var dest = $("#destInput").val().trim()
    var freq = $("#freqInput").val().trim()
    var time = $("#trainTimeInput").val().trim();
    
    var trainInfo = {
        name: name,
        dest: dest,
        freq: freq,
        time: time,
    }

    database.ref("Trains").push(trainInfo)

    $("#nameInput").val("")
    $("#destInput").val("")
    $("#freqInput").val("")
    $("#trainTimeInput").val("");
})

database.ref("Trains").on("child_added", function (childSnap) {
    var name = childSnap.val().name
    var dest = childSnap.val().dest
    var freq = childSnap.val().freq
    var time = childSnap.val().time

    var hoursnMinutes = time.split(":")
    console.log(hoursnMinutes)
    console.log(time)
    console.log(freq)

    // My math is wrong somewhere aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    var newTime = new Date()
    var newTimeHours = dateFns.setHours(newTime, hoursnMinutes[0])
    var newTimeMinutes = dateFns.setMinutes(newTimeHours, hoursnMinutes[1])
    var differenceInMinutes = dateFns.differenceInMinutes

    var minutesSinceFirstArrival = differenceInMinutes(newTimeMinutes, new Date ())
    var minutesSinceLastArrival = minutesSinceFirstArrival % freq
    var minutesTill = freq - minutesSinceLastArrival
    var iHateDateFNS = dateFns.addMinutes(new Date(), minutesTill)
    var nextArrival = format(iHateDateFNS, 'HH:mm')

    console.log(remainder)
    console.log(minutesTill)
    console.log(nextArrival)
    
    var newRow = $("<tr>")
    var newName = $("<td>")
    var newDestination = $("<td>")
    var newFrequency = $("<td>")
    var newArrival = $("<td>")
    var newMinutesAway = $("<td>")

    newName.text(name)
    newDestination.text(dest)
    newFrequency.text(freq)
    newArrival.text(nextArrival)
    newMinutesAway.text(minutesTill)

    newRow.append(newName)
    newRow.append(newDestination)
    newRow.append(newFrequency)
    newRow.append(newArrival)
    newRow.append(newMinutesAway)

    $("#trainTable").append(newRow)

})