//Função para mostrar na tela as vendas baseado no LocalStorage  
function relatorioCarrinho () {
  
    $(section).html("");
    let objDados = dadosrelatorio();
    objDados = objDados;
    console.log(objDados);

    let strID = document.getElementById('Usuario').textContent;

    let total2 = 0

      for(let i = 0; i < objDados.length; i++){

          if(strID == objDados[i].id){

              
                  let total = parseFloat(objDados[i].preco) * parseFloat(objDados[i].qtd);
                  $(section).append(`<div class="row">
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
                      <p>R$ ${objDados[i].preco}</p>
                  </div>
                  <div class="col">
                      <p>R$ ${total}</p>
                  </div>
                 </div>`);
              
                 total2 += total;
            }
      }

      $(section).append(`<div class="menu">
      <div class="row">
          <div class="col">
              <h4>Total da Venda</h4>
          </div>
         </div>
   </div>
   <div class="col">
      <p>R$ ${total2}</p>
  </div>`);

    
  }