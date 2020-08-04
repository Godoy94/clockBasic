var interval = setInterval(function clock(){
    var data = new Date;
    var hours = data.getHours();
    var minutes = data.getMinutes();
    var seconds = data.getSeconds();

    var writeHours = document.getElementById('horas');
    writeHours.innerHTML = hours;
    var writeMinutes = document.getElementById('minutos');
    writeMinutes.innerHTML = minutes;
    var writeSeconds = document.getElementById('segundos');
    writeSeconds.innerHTML = seconds;
}, 100)