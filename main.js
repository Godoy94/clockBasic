var interval = setInterval(function clock(){
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var writeHours = document.getElementById('hours');
    var writeMinutes = document.getElementById('minutes');
    var writeSeconds = document.getElementById('seconds');

    if(hours < 10) {
        console.log("Cai no if")
        writeHours.innerHTML = `0${hours}`
    } else {
        writeHours.innerHTML = hours;
    }

    if(minutes < 10) {
        writeMinutes.innerHTML = `0${minutes}`
    } else {
        writeMinutes.innerHTML = minutes;
    }

    if(seconds < 10) {
        writeSeconds.innerHTML = `0${seconds}`;
    } else {
        writeSeconds.innerHTML = seconds;
    }
    
}, 100)