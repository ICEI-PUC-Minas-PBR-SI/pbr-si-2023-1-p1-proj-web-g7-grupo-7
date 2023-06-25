function init() {
    let section = document.getElementById('section')

    let strHtml = '';
    let objDados = leDados();
    objDados = objDados.cadastro;
    objid = localStorage.getItem('id');
    objimg = localStorage.getItem('img');
    objname = localStorage.getItem('name');

    console.log(objid);
    console.log(objimg);
    console.log(objname);
}    
/*
    for (let i = 0; i < objDados.length; i++) {        
        
            strHtml += `
            <section class="conjuntoprodutodescricao" id="section">
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
                                <img class="d-block w-100" src="${id}" alt="Primeiro slide">
                            </div>
                            <div class="carousel-item">
                                    <img class="d-block w-100"
                                        src="//row.hyperx.com/cdn/shop/products/hyperx_cloudx_2_side.jpg?v=1662421259"
                                        alt="Segundo slide">
                            </div>
                            <div class="carousel-item">
                                    <img class="d-block w-100"
                                        src="https://row.hyperx.com/cdn/shop/products/hyperx_cloudx_3_front_371982b6-a18c-4d3d-a19a-1fb6c2ec6077.jpg?v=1662421259"
                                        alt="Terceiro slide">
                            </div>
                        </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                    </div>
                </div>
          </section>`;
        }
    

    section.innerHTML = strHtml;
}
*/
    