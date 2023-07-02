//se a página esta carregada ou não

if (document.readyState === "loaing") {
    document.addEventListener("DOMContentLoaded")
} else {
    ready()
}

var ValorTotal = "0,00"

//Realizar somente depois da tela carregar
function ready() {
    const RemoverBotao = document.getElementsByClassName("J_RemoveButton")
    for (var i = 0; i < RemoverBotao.length; i++) {
        RemoverBotao[i].addEventListener("click", RemoverProduto)
    }

    const QuantidadeBotao = document.getElementsByClassName("J_Quantidade")
    for (var i = 0; QuantidadeBotao.length; i++) {
        QuantidadeBotao[i].addEventListener("change", SeForNulo)
    }
}
//testando
function SeForNulo(event) {
    if (event.target.value === 0) {
        event.target.parentElement.parentElement.remove()
    }

    AtualizarTotal()
}
//botão de remover produto
function RemoverProduto(event) {

    event.target.parentElement.parentElement.remove()
    AtualizarTotal()

}

//atualizar o valor do carrinho no inicio 
function AtualizarTotal() {

    const ProdutoCarrinho = document.getElementsByClassName("J_ProdutoCarrinho")
    ValorTotal = 0

    for (var i = 0; i < ProdutoCarrinho.length; i++) {
        const PreçoProduto = ProdutoCarrinho[i].getElementsByClassName("J_ValorProduto")[0].innerText.replace("R$", "").replace(",", ".")
        console.log(PreçoProduto)
        const QuantidadeProduto = ProdutoCarrinho[i].getElementsByClassName("J_Quantidade")[0].value


        ValorTotal += PreçoProduto * QuantidadeProduto

    }

    ValorTotal = ValorTotal.toFixed(2)
    ValorTotal = ValorTotal.replace(".", ",")
    document.querySelector(".Jean_Rodape span").innerText = "Total: R$" + ValorTotal

}

function imprimecarrinho() {
    $("#tablecarrinho").html("");
    //let tela = document.getElementById('tela');
    let objDados = dadoscarrinho();
    objDados = objDados.carrinho;
    for (let i = 0; i < objDados.length; i++) {
        let total = objDados[i].preco * objDados[i].qtd;
        $("#tablecarrinho").append(`<tr><td scope="row"></td>
                                        <td><img src="${objDados[i].img}" alt="Imagem do produto" width="100" height="100"></td>
                                        <td>${objDados[i].nome}</td>
                                        <td>${objDados[i].preco}</td>
                                        <td>${objDados[i].qtd}</td>
                                        <td>${total}</td>
                                    </tr>`);
    }
}
