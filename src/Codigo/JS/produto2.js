function init() {
    let section = document.getElementById('section')

    let strHtml = '';
    let objDados = leDados();
    objDados = objDados.cadastro;
    for (let i = 0; i < objDados.length; i++) {
        
        for (let j = 0; j < objDados[i].produto.length; j++) {
            strHtml += `
                         <div class="produto">
                         <a href="produtosDetalhes.html" class="detalhesProdutos">
                             <img src="${objDados[i].produto[j].img}">
                             <p class="descricao">${objDados[i].produto[j].nome}</p>
                             <p class="valor">${objDados[i].produto[j].preco}</p>
                             <p class="condicao">À vista</p>
                         </a>
                         <div class="produto-footer">
                             <a href="produtosDetalhes.html" class="botaoProduto">Comprar</a>
                         </div>
                     </div>`;
        }
    }

    section.innerHTML = strHtml;
}