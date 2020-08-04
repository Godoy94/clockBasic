var interval = setInterval(function clock(){
    var data = new Date;
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    var escreveHoras = document.getElementById('horas');
    escreveHoras.innerHTML = horas;
    var escreveMinutos = document.getElementById('minutos');
    escreveMinutos.innerHTML = minutos;
    var escreveSegundos = document.getElementById('segundos');
    escreveSegundos.innerHTML = segundos;
}, 1000)