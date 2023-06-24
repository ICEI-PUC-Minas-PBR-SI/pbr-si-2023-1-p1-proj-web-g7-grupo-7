// Função para buscar os dados do Local Storage
function leDados() {
  let dados = localStorage.getItem('db');
  if (dados) {
    return JSON.parse(dados);
  } else {
    // Retorna um objeto vazio caso não haja dados no Local Storage
    return {
      cadastro: []
    };
  }
}

// Função para buscar um produto pelo código
function buscarProduto() {
  let codigo = document.getElementById('codigo').value;
  let objDados = leDados().cadastro;

  for (let i = 0; i < objDados.length; i++) {
    for (let j = 0; j < objDados[i].produto.length; j++) {
      if (objDados[i].produto[j].codigo === codigo) {
        let produto = objDados[i].produto[j];
        document.getElementById('produto').value = produto.nome;
        document.getElementById('categoria').value = produto.categoria;
        document.getElementById('marca').value = produto.marca;
        document.getElementById('preco').value = produto.preco;
        document.getElementById('estoque').value = produto.estoque;
        document.getElementById('img').value = produto.img;
        document.getElementById('detalhes').value = produto.detalhes;
        return;
      }
    }
  }

  // Se o produto não foi encontrado, limpa os campos
  document.getElementById('produto').value = '';
  document.getElementById('categoria').value = '';
  document.getElementById('marca').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('estoque').value = '';
  document.getElementById('img').value = '';
  document.getElementById('detalhes').value = '';
}

//botão de busca
document.getElementById('buscar').addEventListener('click', buscarProduto);