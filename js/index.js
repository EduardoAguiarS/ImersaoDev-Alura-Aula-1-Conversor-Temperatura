function conversor(){
    //refencia aos elementos html
    var rdCelsius = document.getElementById("rdCelsius");
    var rdFahrenheit = document.getElementById("rdFahrenheit");
    var inGraus = document.getElementById("inGraus");
    var outConversao = document.getElementById("outConversao");

    //obter o conteudo dos campos
    var celsius = rdCelsius.checked;
    var fahrenheit = rdFahrenheit.checked;
    var graus = Number(inGraus.value);

    //verifica os valores dos campos
    if (isNaN(graus)) {
        alert("Por favor, informe um valor correto para Graus");
        inGraus.focus();
        return;
    }

    if (celsius == false && fahrenheit == false) {
        alert("Por, favor selecione a temperatura")
        return;
    }

    //calculos
    var paraFah = (graus * 1.8) + 32;
    var paraCel = (graus - 32) / 1.8;

    //verifica a temperatura selecionada e retorna a conversão
    if (celsius == true) {
        outConversao.textContent = "O valor de Celsius em Fahrenheit é °F: " + paraFah.toFixed(1);
    } else {
        outConversao.textContent = "O valor de Fahrenheit em Celsius é °C: " + paraCel.toFixed(1);
    }
}

var btnConverter = document.getElementById("btnConverter");
btnConverter.addEventListener("click", conversor)