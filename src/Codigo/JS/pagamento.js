function dadosrelatorio() {
    let strDados = localStorage.getItem('bd_relatorio');
    let objDados = {};
  
    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
      objDados = {
        relatorio: [
          /*{id: "001", codigo: "001", nome: "cerveja IPA", qtd: "5", preco: "5,00"},
          {id: "001", codigo: "002", nome: "cerveja Pilsen", qtd: "5", preco: "4,00"},
          {id: "001", codigo: "003", nome: "cerveja Weiss", qtd: "5", preco: "6,00"},
          {id: "001", codigo: "004", nome: "cerveja Lager", qtd: "5", preco: "3,00"},
        {id: "002", codigo: "001", nome: "refrigerante COCA COLA", qtd: "5", preco: "4,00"}*/]
      }
    }
  
    return objDados;
}

function dadosrelatorio(dados) {
    localStorage.setItem('bd_relatorio', JSON.stringify(dados));
  }

function buscacompra() {
    let objDados = dadoscarrinho();
    objDados = objDados.carrinho;
    let dados = dadosrelatorio();
    dados = dados.relatorio;
    let novoprod;

    for (let i = 0; i < objDados.length; i++) {
        
        novoprod = {
            id: strfornecedor = objDados[i].id,
            codigo: strCodigo = objDados[i].codigo,
            nome: strProduto = objDados[i].nome,
            preco: strPreco = objDados[i].preco,
            qtd: strEstoque = objDados[i].qtd,
            };
        dados.push(novoprod);
    }
    dadosrelatorio(dados);
    localStorage.removeItem('db_carrinho');
    window.location.href = "relatorio.html";
}