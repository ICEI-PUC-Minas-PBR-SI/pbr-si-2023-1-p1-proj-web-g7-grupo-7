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
  
        str +=  `<div class="row">
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
      <div class="col">
          <button id="btnRVendas"onclick="mostrarDetalhes()">Detalhes</button>
      </div>
     </div>`;
  
      }
  
      varCod += 1;
  
      }
  
      section.innerHTML = str;
    }
  
    function relatorioCarrinho () {
  
      $(section).html("");
      let objDados = dadosCarrinho();
      objDados = objDados.carrinho;
      for (let i = 0; i < 1; i++) {
      let total = parseFloat(objDados[i].preco) * parseFloat(objDados[i].qtd);
      $(section).append(`<div class="row">
      <div class="col">
          <p>${objDados[i].id}</p>
      </div>
      <div class="col">
          <p>${geraCodigoVenda()}</p>
      </div>
      <div class="col">
          <p>R$ ${total}</p>
      </div>
      <div class="col">
          <button id="btnRVendas"onclick="mostrarDetalhes()">Detalhes</button>
      </div>
     </div>`);
  
      }
    }
  
    function dadosCarrinho() {
      let strDados = localStorage.getItem('db_carrinho');
      let objDados = {};
    
      if (strDados) {
          objDados = JSON.parse(strDados);
      }
      else {
        objDados = {
          carrinho: [
            /*{id: "001", codigo: "001", nome: "cerveja IPA", preco: "5,00",qtd: "5", img: "https://source.unsplash.com/random/500x500?sing=1"},
            {id: "001", codigo: "002", nome: "cerveja Pilsen", preco: "4,00",qtd: "5", img: "https://source.unsplash.com/random/500x500?sing=2"},
            {id: "001", codigo: "003", nome: "cerveja Weiss", preco: "6,00",qtd: "5", img: "https://source.unsplash.com/random/500x500?sing=3"},
            {id: "001", codigo: "004", nome: "cerveja Lager", preco: "3,00",qtd: "5", img: "https://source.unsplash.com/random/500x500?sing=4"},
          {id: "002", codigo: "001", nome: "refrigerante COCA COLA", preco: "4,00",qtd: "5", img: "https://source.unsplash.com/random/500x500?sing=5"}*/]
        }
      }
    
      return objDados;
    }
  
    //Função para mostrar os detalhes quando clicar no item
  function mostrarDetalhes () {
  
      $(infoDetalhes).html("");
      $(infoDetalhes).append(`<div class="vendas">
      <div class="menu">
         <div class="row">
             <div class="col">
                 <h4>ID do Fornecedor</h4>
             </div>
             <div class="col">
                 <h4>Código do produto</h4>
             </div>
             <div class="col">
                 <h4>Produto</h4>
             </div>
             <div class="col">
                 <h4>Quantidade</h4>
             </div>
             <div class="col">
                 <h4>Preço Unitário</h4>
             </div>
             <div class="col">
                 <h4>Total</h4>
             </div>
            </div>
      </div>`);
  
      $(detalhes).html("");
      //let tela = document.getElementById('tela');
      let objDados = dadosCarrinho();
      objDados = objDados.carrinho;
      for (let i = 0; i < objDados.length; i++) {
          let total = parseFloat(objDados[i].preco) * parseFloat(objDados[i].qtd);
          $(detalhes).append(`<div class="row">
          <div class="col">
              <p>${objDados[i].id}</p>
          </div>
          <div class="col">
              <p>${objDados[i].codigo}</p>
          </div>
          <div class="col">
              <p>${objDados[i].nome}</p>
          </div>
          <div class="col">
              <p>${objDados[i].qtd}</p>
          </div>
          <div class="col">
              <p>${objDados[i].preco}</p>
          </div>
          <div class="col">
              <p>R$ ${total}</p>
          </div>
         </div>`);
      }
  
  }
  
  function geraCodigoVenda() {
  
      let codigo = 1;
      return codigo;
  }
  
  //Aleatorizar um numero
  function numeroAleatorio (min, max) {
  
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  
  }