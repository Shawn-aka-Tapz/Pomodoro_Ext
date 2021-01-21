var timeremaining = 10000;
var h, s;
var timebool = true;
var interval;
var breaks = 4;
var breakbool = true;

var start = document.getElementById("start");

start.addEventListener("click", startt);


function startt() {
    if (timebool) {
        timebool = false;
        interval = setInterval(doclock, 1000);
        start.innerHTML = "Stop Pomodoro";
    }
    else if (!timebool) {
        timebool = true;
        clearInterval(interval);
        start.innerHTML = "Start Pomodoro";
    }
}

function doclock() {

    timeremaining -= 1000;

    h = Math.floor(timeremaining / 60000);
    s = Math.floor((timeremaining % 60000) / 1000);

    if (timeremaining === 0) {
        if (breakbool) {
            if (breaks === 0) {
                timeremaining = 900000;
                breaks = 4;
                document.getElementById("bleft").innerHTML = breaks + " breaks remaining";
                alert("Take a long break")
                document.getElementById("enc").innerHTML = "Take a LONG break"
            }
            else {
                timeremaining = 300000;
                breaks -= 1;
                document.getElementById("bleft").innerHTML = breaks + " breaks remaining";
                alert("Take a break")
                document.getElementById("enc").innerHTML = "Take a break"
            }
            breakbool = false
        }
        else {
            breakbool = true
            alert("Back to studying")
            timeremaining = 1500000;
        }
    }

    document.getElementById("timer").innerHTML = h + ":" + s;
}