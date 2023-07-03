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

function salvarelatorio(dados) {
    localStorage.setItem('bd_relatorio', JSON.stringify(dados));
  }

function buscarelatorio() {
    let objDados = dadoscarrinho();
    objDados = objDados.carrinho;
    let dados = dadosrelatorio();
    dados = dados.relatorio;

    let dadosbanco = leDados();
    dadosbanco = dadosbanco.cadastro;

    let newprod;

    for (let i = 0; i < objDados.length; i++) {
        for (let j = 0; j < dadosbanco.length; j++) {
            if (objDados[i].id == dadosbanco[j].id) {
                for (let k = 0; k < dadosbanco[j].produto.length; k++) {
                    if (objDados[i].codigo == dadosbanco[j].produto[k].codigo) {
                        dadosbanco[j].produto[k].estoque = parseInt(dadosbanco[j].produto[k].estoque) - parseInt(objDados[i].qtd);
                    }
                    salvaDados(dadosbanco);
                }
            }
        }
    }
    
    for (let i = 0; i < objDados.length; i++) {
        newprod = {
            id: strfornecedor = objDados[i].id,
            codigo: strCodigo = objDados[i].codigo,
            nome: strProduto = objDados[i].nome,
            preco: strPreco = objDados[i].preco,
            qtd: strEstoque = objDados[i].qtd,
        };
        dados.push(newprod);
    }
    salvarelatorio(dados);
    localStorage.removeItem('db_carrinho');
    window.location.href = "relatorio.html";
}