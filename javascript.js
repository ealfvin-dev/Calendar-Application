var date = moment().format('MMMM Do YYYY, h:mm:ss a');
var hour = moment().format('h');

$(".lead").html("Organize your day with this work day planner." + "<br/>" + "<strong>" + date + "</strong>");

var plannerEntries = document.querySelectorAll(".form-control");

for(var timeSlot = 0; timeSlot < plannerEntries.length; timeSlot++) {
    var entry = $(plannerEntries[timeSlot]);
    if(timeSlot + 9 < hour) {
        entry.attr("style", "background-color: rgb(220, 220, 220)");
    }
    else if(timeSlot + 9 > hour) {
        continue
    }
    else {
        entry.attr("style", "background-color: rgb(150, 250, 150)");
    }
}