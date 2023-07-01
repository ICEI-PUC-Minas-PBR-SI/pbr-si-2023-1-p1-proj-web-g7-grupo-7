
//Mostrar a saudação
document.addEventListener("DOMContentLoaded", function() {
    var saudacao = document.getElementById("saudacao");
    var horaAtual = new Date().getHours("");
  
    if (horaAtual >= 0 && horaAtual < 12) {
      saudacao.textContent = "Bom dia, seja bem-vindo(a)!";
    } else if (horaAtual >= 12 && horaAtual < 18) {
      saudacao.textContent = "Boa tarde, seja bem-vindo(a)!";
    } else {
      saudacao.textContent = "Boa noite, seja bem-vindo(a)!";
    }
  });

//Mostrar a hora atual 
document.addEventListener("DOMContentLoaded", function() {
    var horaAtualElement = document.getElementById("hora-atual");
  
    function exibirHoraAtual() {
      var dataHoraAtual = new Date();
      var hora = dataHoraAtual.getHours();
      var minutos = dataHoraAtual.getMinutes();
      var segundos = dataHoraAtual.getSeconds();
  
      horaAtualElement.textContent = " " + hora + ":" + minutos + ":" + segundos;
    }
  
    setInterval(exibirHoraAtual, 1000); // Atualiza a hora a cada segundo
});