// Função para buscar os produtos no Local Storage
function buscarProdutos() {

  // Verifica se existe algum produto armazenado no Local Storage
  if (localStorage.getItem("db")) {

    // Recupera os produtos do Local Storage
    const produtos = JSON.parse(localStorage.getItem("db"));

    // Obtém os elementos HTML para exibir a foto e as informações do produto
    const imgInput = document.getElementById("img");
    const detalhesTextarea = document.getElementById("detalhes");

    // Adiciona um listener de evento ao botão de busca
    const buscarButton = document.getElementById("buscar");
    buscarButton.addEventListener("click", function () {

      // Obtém os valores dos inputs de busca
      const codigoBusca = document.getElementById("codigoBusca").value.trim();
      const produtoBusca = document.getElementById("produtoBusca").value.trim();
      const categoriaBusca = document.getElementById("categoriaBusca").value.trim();
      const marcaBusca = document.getElementById("marcaBusca").value.trim();
      const precoBusca = document.getElementById("precoBusca").value.trim();
      const estoqueBusca = document.getElementById("estoqueBusca").value.trim();

      // Filtra os produtos com base nos critérios de busca
      const produtosFiltrados = produtos.filter(function (produto) {
        return (
          (!codigoBusca || produto.codigo.includes(codigoBusca)) &&
          (!produtoBusca || produto.nome.toLowerCase().includes(produtoBusca.toLowerCase())) &&
          (!categoriaBusca || produto.categoria.toLowerCase().includes(categoriaBusca.toLowerCase())) &&
          (!marcaBusca || produto.marca.toLowerCase().includes(marcaBusca.toLowerCase())) &&
          (!precoBusca || produto.preco.toString().includes(precoBusca)) &&
          (!estoqueBusca || produto.estoque.toString().includes(estoqueBusca))
        );
      });

      // Verifica se encontrou algum produto correspondente à busca
      if (produtosFiltrados.length > 0) {

        // Exibe o primeiro produto encontrado
        const produtoEncontrado = produtosFiltrados[0];
        imgInput.value = produtoEncontrado.imagem;
        detalhesTextarea.value = `Nome: ${produtoEncontrado.nome}\nCategoria: ${produtoEncontrado.categoria}\nMarca: ${produtoEncontrado.marca}\nPreço de Venda: ${produtoEncontrado.preco}\nEstoque: ${produtoEncontrado.estoque}`;
      } else {
        
        // Caso não tenha encontrado nenhum produto correspondente
        imgInput.value = "";
        detalhesTextarea.value = "Nenhum produto encontrado.";
      }
    });
  }
}

// Chama a função para buscar os produtos ao carregar a página
window.addEventListener("load", buscarProdutos);