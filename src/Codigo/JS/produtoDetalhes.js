function lerDados() {
  let strDados = localStorage.getItem("db");
  let objDados = {};
  if (strDados) {
    objDados = JSON.parse(strDados);
  } else {
    objDados = {
      cadastro: [
        {
          id: 0,
          produto: 1,
          nome: "",
          preço: "",
          descricao: "",
        },

        {
          id: 0,
          produto: 2,
          nome: "",
          preço: "",
          descricao: "",
        },
      ],
    };
  }
  return objDados;
}

function carregarProduto() {
  // Tenta obter os parâmetros da URL
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));
  const produtoIndex = parseInt(urlParams.get("produto"));

  // Chama a função leDados para obter os dados do produto
  const objDados = leDados();
  const produto = objDados.cadastro[id].produto[produtoIndex];

  // Atualiza os elementos HTML com as informações do produto
  document.getElementById("produto-img").src = produto.img;
  document.getElementById("produto-nome").textContent = produto.nome;
  document.getElementById("produto-preco").textContent = produto.preco;
  document.getElementById("produto-condicao").textContent = "À vista";

  // Define o link de compra para o botão
  const comprarBtn = document.getElementById("produto-comprar");
  comprarBtn.href = `carrinho.html`;
}

// Define a função init como o evento onload da janela
window.onload = init;

function init() {
  let section = document.getElementById("section");
  let strHtml = "";
  let objDados = leDados().cadastro;

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));
  const produtoIndex = parseInt(urlParams.get("produto"));

  // Preencher informações do carousel
  for (let i = 0; i < objDados.length; i++) {
    for (let j = 0; j < objDados[i].produto.length; j++) {
      if (id == i && produtoIndex == j) {
        const produto = objDados[id].produto[produtoIndex];

        strHtml += `
        <section class="detalhedoproduto">
            <div class="dproduto">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target ="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img id="img" class="d-block w-100" src="${objDados[i].produto[j].img}" alt="Primeiro slide">
                        </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    `;

        // Preencher informações da descrição do produto
        strHtml += `
        <div class="descricaodoproduto">
            <p id="nome" class="descricaodetalhe">${objDados[i].produto[j].nome}</p>
            <div class="valor">
                <p id="preco" class="valordetalhe">${objDados[i].produto[j].preco}</p>
                <p class="condicaodetalhe">À vista no PIX</p>
                
                <!--<nav class="">
                    <select id="quantidade" class="quantidade">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </nav>-->
            </div>
            <div class="comprarDescricao">
                <button id="botaoComprar" onclick="incluircarrinho()"><a class="botaoProduto" href="carrinho.html">Comprar</a></button>
            </div>
          </div>
    `;
      }

      // Preencher informações da descrição detalhada

      const detalhes = objDados[id].produto[produtoIndex].detalhes;
      strHtml += `
        <div class="descricao2">
            <div class="conteudo">
                <h1>Descrição:</h1>
            </div>
            <p class="explicacaoproduto">${detalhes}</p>
            <p id="fornecedor" class="valordetalhe">${objDados[id].id}</p>
        </div>
    `;

    

    const codigo = objDados[id].produto[produtoIndex].codigo;
      strHtml += `
        <div class="descricao2">
        <p id="codigo" class="valordetalhe">${codigo}</p>
        </div>
    `;

    //<p id="codigo" class="valordetalhe">ID: ${objDados[id].produto[j].codigo}</p>

      section.innerHTML = strHtml;
    }
  }
}

// Chamada da função init ao carregar a página
init();


function dadoscarrinho() {
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

function salvacarrinho(dados) {
  localStorage.setItem('db_carrinho', JSON.stringify(dados));
}

function incluircarrinho() {
  // Ler os dados do localStorage
  let objDados = dadoscarrinho();
  let carrinho = objDados.carrinho;

  // Incluir um novo contato
  let strCodigo = document.getElementById('codigo').innerText;
  let strfornecedor = document.getElementById('fornecedor').innerText;
  let strProduto = document.getElementById('nome').innerText;
  let strPreco = document.getElementById('preco').innerText;
  let strEstoque = 1;
  let strImg = document.getElementById('img').src;
  //let strID = document.getElementById('Usuario').textContent;


      let novoprod;
      let cont = 0;

      // Cadastra usuario no banco de dados
      for (let i = 0; i < carrinho.length; i++) {

          if (strProduto == carrinho[i].nome) {
              cont++;
          }
      }

      if (cont == 0) {
        novoprod = {
          id: strfornecedor,
          codigo: strCodigo,
          nome: strProduto,
          preco: strPreco,
          qtd: strEstoque,
          img: strImg
          };
        objDados.carrinho.push(novoprod);
        salvacarrinho(objDados);
      }
      else {
        alert("Produto já adicionado ao carrinho!");
      }

      // Salvar os dados no localStorage novamente
      salvacarrinho(objDados);
  }
