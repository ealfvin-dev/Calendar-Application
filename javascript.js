var date = moment().format('MMMM Do YYYY');
var hour = moment().format('h');

if(moment().format('a') === "pm" && hour < 12) {
    hour = parseInt(hour) + 12;
}

$(".lead").html("Organize your day with this work day planner." + "<br/>" + "<strong>" + date + "</strong>");

//Get data out of local storage
var dayPlan = JSON.parse(localStorage.getItem("dayPlan"));

//Initialize object for local storage if first time using or if new day
if(dayPlan === null || dayPlan["saveDate"] != date) {
    dayPlan = {"9": "", "10": "", "11": "", "12": "", "13": "", "14": "", "15": "", "16": "", "17": "", "saveDate": date};
}

//Event listeners on save buttons
var saveButtons = $(".saveButton");
saveButtons.on("click", save);

var plannerEntries = $(".form-control");

//Colorize cells
for(var timeSlot = 0; timeSlot < plannerEntries.length; timeSlot++) {

    var entry = $(plannerEntries[timeSlot]);

    if(timeSlot + 9 < hour) {
        entry.css("background-color", "rgb(220, 220, 220)");
    }
    else if(timeSlot + 9 > hour) {
        
    }
    else {
        entry.css("background-color", "rgb(150, 250, 150)");
    }

    //Add saved text to cells
    entry.text(dayPlan[timeSlot + 9]);
}

function save() {
    var buttonValue = this.value;
    dayPlan[buttonValue] = $("#Hour" + buttonValue + "Text").val();
    dayPlan["saveDate"] = date;

    localStorage.setItem("dayPlan", JSON.stringify(dayPlan));
}