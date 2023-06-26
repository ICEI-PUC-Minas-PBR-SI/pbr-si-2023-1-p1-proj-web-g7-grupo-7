//Função para mostrar na tela as vendas baseado no LocalStorage
function mostrarVendas () {

  let section = document.getElementById('section')

  let dados = leDados();
  dados = dados.cadastro;
  let str = '';
  console.log(dados);

  let varCod = 1;

  for (var i = 0; i < dados.length; i++) {

    for (var j = 0; j <dados[i].produto.length; j++){

      let quantidade = numeroAleatorio(1, 15);

      str +=  `<div class="row" onclick="mostrarDetalhes()">
    <div class="col">
        <p>${dados[i].id}</p>
    </div>
    <div class="col">
        <p>${(varCod * 100) + i + j}</p>
    </div>
    <div class="col">
        <p>${dados[i].produto[j].nome}</p>
    </div>
    <div class="col">
        <p>${quantidade}</p>
    </div>
    <div class="col">
        <p>${dados[i].produto[j].preco}</p>
    </div>
    <div class="col">
        <p>${(parseFloat(dados[i].produto[j].preco)) * quantidade}</p>
    </div>
   </div>`;

    }

    varCod += 1;

    }

    section.innerHTML = str;
  }

  //Função para mostrar os detalhes quando clicar no item
function mostrarDetalhes () {

  let detalhes = document.getElementById('detalhes')

  let dados = leDados();
  dados = dados.cadastro;
  let str = '';
  console.log(dados);

  let varCod = 1;

  for (var i = 0; i < dados.length; i++) {

    for (var j = 0; j <dados[i].produto.length; j++){

      let data = numeroAleatorio(1, 31) + "/" + numeroAleatorio(1, 12) + "/2023";

      str +=  `<div class="dados">
      <table>
          <thead>
              <tr>
                  <th>Id do Cliente</th>
                  <th>Código de venda</th>
                  <th>Categoria</th>
                  <th>Marca</th>
                  <th>Data da venda</th>
                  <th>Valor do produto</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>${dados[i].id}</td>
                  <td>${(varCod * 100) + i + j}</td>
                  <td>${dados[i].produto[j].categoria}</td>
                  <td>${dados[i].produto[j].marca}</td>
                  <td>${data}</td>
                  <td>${dados[i].produto[j].preco}</td>
              </tr>
              </table>
              </div>`;

    }

    varCod += 1;

    }

    detalhes.innerHTML = str;

}

//Aleatorizar um numero
function numeroAleatorio (min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

}