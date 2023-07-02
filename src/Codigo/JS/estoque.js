
// Função para buscar os dados da página cadastrarprodutos.html
function buscarDados() {
  // Buscando os input da página cadastrarprodutos.html
  var codigo = document.getElementById('codigo').value;
  var produto = document.getElementById('produto').value;
  var categoria = document.getElementById('categoria').value;
  var marca = document.getElementById('marca').value;
  var preco = document.getElementById('preco').value;
  var estoque = document.getElementById('estoque').value;

  // Exibir os dados no console 
  console.log('Código:', codigo);
  console.log('Produto:', produto);
  console.log('Categoria:', categoria);
  console.log('Marca:', marca);
  console.log('Preço de Venda:', preco);
  console.log('Estoque:', estoque);
}

// Associar a função buscarDados ao botão "Buscar"
var buscarButton = document.getElementById('buscar');
buscarButton.addEventListener('click', buscarDados);

function imprimeDados() {
  $("#estoqueBody").html("");
  let strID = document.getElementById('Usuario').textContent;
  //let tela = document.getElementById('tela');
  let strHtml = '';
  let objDados = leDados();
  objDados = objDados.cadastro;
  for (let i = 0; i < objDados.length; i++) {
      if (strID == objDados[i].id) {
          strHtml += `<p>${objDados[i].id}</p>`
          for (let j = 0; j < objDados[i].produto.length; j++) {
              $("#estoqueBody").append(`<tr><td scope="row"></td>
                                              <td>${objDados[i].produto[j].codigo}</td>
                                              <td>${objDados[i].produto[j].nome}</td>
                                              <td>${objDados[i].produto[j].categoria}</td>
                                              <td>${objDados[i].produto[j].marca}</td>
                                              <td>${objDados[i].produto[j].preco}</td>
                                              <td>${objDados[i].produto[j].estoque}</td>
                                          </tr>`);
          }
      }
  }
}