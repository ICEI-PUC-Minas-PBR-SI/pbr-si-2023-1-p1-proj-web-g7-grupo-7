
function AtualizarTotal() {

    const ProdutoCarrinho = document.getElementsByClassName("J_ProdutoCarrinho")
    ValorTotal = 0
    

    for (var i = 0; i < ProdutoCarrinho.length; i++) {
        const PreçoProduto = ProdutoCarrinho[i].getElementsByClassName("J_ValorProduto")[0].innerText.replace("R$", "").replace(",", ".")
        const QuantidadeProduto = ProdutoCarrinho[i].getElementsByClassName("J_Quantidade")[0].value


        ValorTotal += PreçoProduto * QuantidadeProduto

    }
    

    ValorTotal = ValorTotal.toFixed(2)
    ValorTotal = ValorTotal.replace(".", ",")
    document.querySelector(".Jean_Rodape span").innerText = "Total: R$" + ValorTotal
    document.querySelector(".Jean_Centro span").innerText = "Subtotal: R$" + ValorTotal
}

function removerItemCarrinho(element) {
    const row = element.closest("tr");
    const nomeProduto = row.querySelector(".Jean_Nome").textContent.trim();
    
    // Obter os dados do carrinho do localStorage
    let carrinho = JSON.parse(localStorage.getItem("db_carrinho"));
    
    // Encontrar o índice do produto a ser removido no array do carrinho
    const index = carrinho.carrinho.findIndex(produto => produto.nome === nomeProduto);
    
    if (index !== -1) {
        carrinho.carrinho.splice(index, 1);
        localStorage.setItem("db_carrinho", JSON.stringify(carrinho));
        
        // Remover a linha do produto da tabela
        row.remove();
        AtualizarTotal();
    }
}



function imprimecarrinho() {
    $("#tablecarrinho").html("");
    //let tela = document.getElementById('tela');
    let objDados = dadoscarrinho();
    objDados = objDados.carrinho;
    for (let i = 0; i < objDados.length; i++) {
        let total = parseFloat(objDados[i].preco) * parseFloat(objDados[i].qtd);
        $("#tablecarrinho").append(`<tr class="J_ProdutoCarrinho">
        <th>
            <div class="Jean_Produto">
                <img src="${objDados[i].img} alt="Imagem do produto" width="100" height="100"">
                <div class="Jean_Info">
                    <div class="Jean_Nome">
                    ${objDados[i].nome}
                    </div>
                    <div class="Jean_Categoria">
                        Categoria/descrição
                    </div>
                </div>
            </div>
        </th>
        <th class="J_ValorProduto">R$ ${objDados[i].preco} </th>
        <th>
            <div class="Jean_qtd">
                <input type="number" value="${objDados[i].qtd}" min="0" class="J_Quantidade" onclick="atualizarCarrinho()">
            </div>
        </th>
        <th class="J_Subtotal">R$ ${total}</th>
        <th><button class="J_RemoveButton" onclick="removerItemCarrinho(this)">
                X
            </button></th>
    </tr>`);
        
    }
    AtualizarTotal()    
}

function atualizarCarrinho() {
    const objDados = dadoscarrinho().carrinho;

    for (let i = 0; i < objDados.length; i++) {
        const novaQuantidade = document.getElementsByClassName("J_Quantidade")[i].value;
        objDados[i].qtd = novaQuantidade;
        console.log(objDados[i].qtd)
    }

    const carrinhoAtualizado = {
        carrinho: objDados
    };

    localStorage.setItem("db_carrinho", JSON.stringify(carrinhoAtualizado));

    AtualizarTotal();
}

window.addEventListener('load', function() {
    const btnConcluir = document.getElementById('btnConcluir');
    btnConcluir.addEventListener('click', function(event) {
      const produtosCarrinho = document.getElementsByClassName('J_ProdutoCarrinho');
      
      if (produtosCarrinho.length === 0) {
        event.preventDefault(); // Impede o comportamento padrão do clique do botão
        alert('Você não pode concluir a compra sem produtos no carrinho!');
      }
    });
  });
  




