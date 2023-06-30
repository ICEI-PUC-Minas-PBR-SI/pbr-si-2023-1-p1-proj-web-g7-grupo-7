function leDados() {
  // Obtém os dados armazenados no localStorage
  let strDados = localStorage.getItem("db");
  let objDados = {};
  // Verifica se os dados existem e faz o parse do JSON
  if (strDados) {
    objDados = JSON.parse(strDados);
  } else {
    // Retorna um objeto padronizado, caso não exista
    return {
      cadastro: [
        {
          produto: [{}, {}],
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
  const idCadastro = urlParams.get("id");
  const indiceProduto = urlParams.get("produto");

  // Preencher informações do carousel
  for (let i = 0; i < objDados.length; i++) {
    for (let j = 0; j < objDados[i].produto.length; j++) {
        strHtml += `
        <section class="detalhedoproduto">
            <div class="dproduto">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="${objDados[i].produto[j].img}" alt="Primeiro slide">
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
            <p class="descricaodetalhe">${objDados[i].produto[j].nome}</p>
            <div class="valor">
                <p class="valordetalhe">${objDados[i].produto[j].preco}</p>
                <p class="condicaodetalhe">À vista no PIX</p>
                
                <nav class="">
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
                </nav>
            </div>
            <div class="comprarDescricao">
                <a id="botaoComprar" href="carrinho.html" class="botaoProduto">Comprar</a>
            </div>
        </div>
    `;
      }
  }

  // Preencher informações da descrição detalhada
  strHtml += `
        <div class="descricao2">
            <div class="conteudo">
                <h1>Descrição:</h1>
            </div>
            <p class="explicacaoproduto">teste</p>
        </div>
    `;

  section.innerHTML = strHtml;
}

// Chamada da função init ao carregar a página
init();
