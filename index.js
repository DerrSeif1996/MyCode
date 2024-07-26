
const time = document.getElementById("timer");
const ScoreHome = document.getElementById("home");
const ScoreGuest = document.getElementById("guest");



let GameReset = true;
let GameStart = false;
let Hscore = 0;
let Gscore = 0;

let Timer = null;
let StartTime = 0;
let TimeElapesed = 0;

//hello


function homeScore(point) {
    if (GameReset == false && GameStart == true) {
        Hscore += point;
        ScoreHome.textContent = String(Hscore).padStart(2, "0");
    }

}

function guestScore(point) {
    if (GameReset == false && GameStart == true) {
        Gscore += point;
        ScoreGuest.textContent = String(Gscore).padStart(2, "0");
    }

}

function gamestat() {
    if (GameReset == false && GameStart == true) {

        clearInterval(Timer);
        TimeElapesed = 0;
        Hscore = 0;
        Gscore = 0;
        time.textContent = `00:00:00`;
        ScoreHome.textContent = "00";
        ScoreGuest.textContent = "00";
        GameReset = true;
        GameStart = false;
    }
    else if (GameReset == true && GameStart == false) {


        StartTime = Date.now() - TimeElapesed;
        Timer = setInterval(timer, 1000);
        GameReset = false;
        GameStart = true;


    }


}


function timer() {


    const TimeNow = Date.now();
    TimeElapesed = TimeNow - StartTime;

    let Hours = String(Math.floor(TimeElapesed / (1000 * 60 * 60))).padStart(2, "0");
    let Minuts = String(Math.floor(TimeElapesed / (1000 * 60) % 60)).padStart(2, "0");
    let Seconds = String(Math.floor(TimeElapesed / (1000) % 60)).padStart(2, "0");

    time.textContent = `${Hours}:${Minuts}:${Seconds}`;

}