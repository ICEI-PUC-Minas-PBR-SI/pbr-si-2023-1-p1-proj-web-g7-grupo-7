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

function buscarProdutos() {
  let codigoBusca = document.getElementById('codigoBusca').value;
  let produtoBusca = document.getElementById('produtoBusca').value;
  let categoriaBusca = document.getElementById('categoriaBusca').value;
  let marcaBusca = document.getElementById('marcaBusca').value;
  let precoBusca = document.getElementById('precoBusca').value;
  let estoqueBusca = document.getElementById('estoqueBusca').value;

  let objDados = leDados();
  let cadastro = objDados.cadastro;

  let filteredProdutos = [];

  for (let i = 0; i < cadastro.length; i++) {
      let produtos = cadastro[i].produto;

      for (let j = 0; j < produtos.length; j++) {
          let produto = produtos[j];

          if (
              (!codigoBusca || produto.codigo.includes(codigoBusca)) &&
              (!produtoBusca || produto.nome.toLowerCase().includes(produtoBusca.toLowerCase())) &&
              (!categoriaBusca || produto.categoria.toLowerCase().includes(categoriaBusca.toLowerCase())) &&
              (!marcaBusca || produto.marca.toLowerCase().includes(marcaBusca.toLowerCase())) &&
              (!precoBusca || produto.preco.includes(precoBusca)) &&
              (!estoqueBusca || produto.estoque.includes(estoqueBusca))
          ) {
              filteredProdutos.push(produto);
          }
      }
  }

  return filteredProdutos;
}

function imprimirProdutos(produtos) {
  let tableBody = document.getElementById('estoqueBody');
  tableBody.innerHTML = '';

  for (let i = 0; i < produtos.length; i++) {
      let produto = produtos[i];

      let row = document.createElement('tr');

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
