if (document.readyState === "loaing"){
    document.addEventListener("DOMContentLoaded")
} else {
    ready()
}

var ValorTotal = "0,00"

function ready(){
    const RemoverBotao = document.getElementsByClassName("J_RemoveButton")
    for (var i =  0; i < RemoverBotao.length; i++){
        RemoverBotao[i].addEventListener("click", RemoverProduto )
    }

    const QuantidadeBotao = document.getElementsByClassName("J_Quantidade")
    for (var i = 0; QuantidadeBotao.length; i++){
        QuantidadeBotao[i].addEventListener("change", SeForNulo)
    }
}

function SeFforNulo(event){
    if (event.target.value === 0){
        event.target.parentElement.parentElement.remove()
    }
    AtualizarTotal
}

function RemoverProduto(event){

event.target.parentElement.parentElement.remove()
AtualizarTotal

}


function AtualizarTotal(){
    
    const ProdutoCarrinho = document.getElementsByClassName("J_ProdutoCarrinho")
    ValorTotal = 0

    for (var i = 0; i < ProdutoCarrinho.length; i++){

        const PreçoProduto = ProdutoCarrinho[i].document.getElementsByClassName("J_ValorProduto").innerText.replace("R$","").replace(",",".")
        const QuantidadeProduto = ProdutoCarrinho[i].document.getElementsByClassName("J_Quantidade").value


        ValorTotal += PreçoProduto * QuantidadeProduto

    }

    ValorTotal = ValorTotal.toFixed(2)
    ValorTotal = ValorTotal.replace(".",",")
    document.querySelector(".Jean_Rodape span").innerText = "Total: R$" + ValorTotal
           
}