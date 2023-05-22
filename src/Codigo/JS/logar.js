//login
function login() {
    var usuario1 = document.getElementById("usuario").value;
    var senha1 = document.getElementById("senha").value;

    if (usuario1 == "mex" && senha1 == "123") {

        window.open("conteudo.html", "_self");
    } else {
        alert("Usuário e senha incorretos!");
    }
}