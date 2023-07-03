//lê os dados armazenados no LocalStorage
function leDados() {
  let strDados = localStorage.getItem('db');
  let objDados = {};

  if (strDados) {
      objDados = JSON.parse(strDados);
  } else {
      objDados = {
          cadastro: []
      };
  }

  return objDados;
}
  // Obtém os valores dos campos de busca do formulário
function buscarProdutos() {
  let codigoBusca = document.getElementById('codigoBusca').value;
  let produtoBusca = document.getElementById('produtoBusca').value;
  let categoriaBusca = document.getElementById('categoriaBusca').value;
  let marcaBusca = document.getElementById('marcaBusca').value;
  let precoBusca = document.getElementById('precoBusca').value;
  let estoqueBusca = document.getElementById('estoqueBusca').value;

   // Obtém os dados armazenados
  let objDados = leDados();
  let cadastro = objDados.cadastro;
  let strID = document.getElementById('Usuario').textContent;

  // Array para armazenar os produtos filtrados
  let filteredProdutos = [];

  // Loop para percorrer os itens de cadastro
  for (let i = 0; i < cadastro.length; i++) {
      let produtos = cadastro[i].produto;
      if (strID == cadastro[i].id) {
      // Loop para percorrer os produtos de cada item
      for (let j = 0; j < produtos.length; j++) {
          let produto = produtos[j];
          // Verifica se o produto atende aos critérios de busca
          if (
              (!codigoBusca || produto.codigo.includes(codigoBusca)) &&
              (!produtoBusca || produto.nome.toLowerCase().includes(produtoBusca.toLowerCase())) &&
              (!categoriaBusca || produto.categoria.toLowerCase().includes(categoriaBusca.toLowerCase())) &&
              (!marcaBusca || produto.marca.toLowerCase().includes(marcaBusca.toLowerCase())) &&
              (!precoBusca || produto.preco.includes(precoBusca)) &&
              (!estoqueBusca || produto.estoque.includes(estoqueBusca))
          ) {
              // Adiciona o produto filtrado ao array
              filteredProdutos.push(produto);
          }
      }
    }
  }
   // Retorna o array com os produtos filtrados 
  return filteredProdutos;
}
// Obtém a referência ao elemento <tbody> da tabela
function imprimirProdutos(produtos) {
  let tableBody = document.getElementById('estoqueBody');
   // Limpa o conteúdo existente da tabela
  tableBody.innerHTML = '';
  // Loop para percorrer os produtos e criar as linhas na tabela
  for (let i = 0; i < produtos.length; i++) {
      let produto = produtos[i];
      // Cria uma nova linha <tr> na tabela
      let row = document.createElement('tr');
      // Cria células <td> para cada propriedade do produto e atribui o conteúdo de texto
      let codigoCell = document.createElement('td');
      codigoCell.textContent = produto.codigo;
      row.appendChild(codigoCell);

      let nomeCell = document.createElement('td');
      nomeCell.textContent = produto.nome;
      row.appendChild(nomeCell);

      let categoriaCell = document.createElement('td');
      categoriaCell.textContent = produto.categoria;
      row.appendChild(categoriaCell);

      let marcaCell = document.createElement('td');
      marcaCell.textContent = produto.marca;
      row.appendChild(marcaCell);

      let precoCell = document.createElement('td');
      precoCell.textContent = produto.preco;
      row.appendChild(precoCell);

      let estoqueCell = document.createElement('td');
      estoqueCell.textContent = produto.estoque;
      row.appendChild(estoqueCell);
      // Adiciona a linha à tabela
      tableBody.appendChild(row);
  }
}

function buscar() {
  let produtos = buscarProdutos();
  imprimirProdutos(produtos);
}

// Associa a função de busca ao botão
document.getElementById('buscar').addEventListener('click', buscar);

// Executa a busca inicial ao carregar a página
buscar();