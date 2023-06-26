function  ConsultarItens ( )  
  
    if ( localStorage . getItem ( "db" ) ) {  
  
      
      const produtos = JSON . parse ( localStorage . getItem ( "db" ) ) ;   
  
      const imgInput = documento . getElementById ( "img" ) ;   
      const detalhesTextarea = documento . getElementById ( "detalhes" ) ;   
  
  // Função para buscar um produto pelo código
  function  ConsultarItens ( )  {
     codigo  =  document . getElementById ( 'código' ) . valor ;
    var  objDados  =  leDados ( ) . cadastro ;
  
    for  ( var  i  =  0 ;  i  <  objDados . length ;  i ++ )  {
      for  ( var  j  =  0 ;  j  <  objDados [ i ] . produto . length ;  j ++ )  {
        if  ( objDados [ i ] . produto [ j ] . codigo  ===  codigo )  {
          let  produto  =  objDados [ i ] . produto [ j ] ;
          documento . getElementById ( 'produto' ) . valor  =  produto . nome ;
          documento . getElementById ( 'categoria' ) . valor  =  produto . categoria ;
          documento . getElementById ( 'marca' ) . valor  =  produto . marca ;
          documento . getElementById ( 'saídas' ) . valor  =  produto . saidas ;
          documento . getElementById ( 'entradas' ) . valor  =  produto . entradas ;
          documento . getElementById ( 'quantidade' ) . valor  =  produto . quantidade ;
          documento . getElementById ( 'imagem' ) . valor  =  produto . imagem ;
          documento . getElementById ( 'detalhes' ) . valor  =  produto . detalhes ;
          retorno ;
     
      const  buscarButton  =  document . getElementById ( "buscar" ) ;
      buscarButton . addEventListener ( "clique" ,  function  ( )  {
  
        
        const  codigoBusca  =  document . getElementById ( "codigoBusca" ) . valor . aparar ( ) ;
        const  produtoBusca  =  document . getElementById ( "produtoBusca" ) . valor . aparar ( ) ;
        const  categoriaBusca  =  document . getElementById ( "categoriaBusca" ) . valor . aparar ( ) ;
        const  quantidadeBusca  =  document . getElementById ( "quantidadeBusca" ) . valor . aparar ( ) ;
        const  saidasBusca  =  document . getElementById ( "saídasBusca" ) . valor . aparar ( ) ;
        const  entradasBusca  =  documento . getElementById ( "entradasBusca" ) . valor . aparar ( ) ;
  
        // Filtrar os produtos com base nos critérios de busca
        const  produtosFiltrados  =  produtos . filtro ( função  ( produto )  )
          retornar  (
            ( ! codigoBusca  ||  produto . codigo . includes ( codigoBusca ) )  &&
            ( ! produtoBusca  ||  produto . nome . toLowerCase ( ) . includes ( produtoBusca . toLowerCase ( ) ) )  &&
            ( ! categoriaBusca  ||  produto . categoria . toLowerCase ( ) . includes ( categoriaBusca . toLowerCase ( ) ) )  &&
            ( ! quantidadeBusca  ||  produto . quantidade . toLowerCase ( ) . includes ( quantidadeBusca . toLowerCase ( ) ) )  &&
            ( ! saidasBusca  ||  produto . saidas . toString ( ) . includes ( saidasBusca ) )  &&
            ( ! entradasBusca  ||  produto . estoque . toString ( ) . includes ( entradasBusca ) )
          ) ;
        } ) ;

        if  ( produtosFiltrados . length  >  0 )  {
  
          
          const  produtoEncontrado  =  produtosFiltrados [ 0 ] ;
          imgInput . value  =  produtoEncontrado . imagem ;
          detalhesTextarea . value  =  `Nome: ${ produtoEncontrado . nome } \nEntradas: ${ produtoEncontrado . entradas }\nCategoria: ${ produtoEncontrado . categoria } \nMarca: ${ produtoEncontrado . marca } \nVendas: ${ produtoEncontrado . saidas } \nQuantidade: ${ produtoEncontrado . quantidade } ` ;
        }  else  {
  
          imgInput . valor  =  "" ;
          detalhesTextarea . value  =  "Produto sem estoque ou não cadastrado" ;
        }
      }
      }
    }
  
    // Se o produto não foi encontrado, limpa os campos
    documento . getElementById ( 'produto' ) . valor  =  '' ;
    documento . getElementById ( 'categoria' ) . valor  =  '' ;
    documento . getElementById ( 'marca' ) . valor  =  '' ;
    documento . getElementById ( 'entradas' ) . valor  =  '' ;
    documento . getElementById ( 'saidas' ) . valor  =  '' ;
    documento . getElementById ( 'quantidade' ) . valor  =  '' ;
    documento . getElementById ( 'imagem' ) . valor  =  '' ;
  }
  
  documento . getElementById ( 'buscar' ) . addEventListener ( 'click' , ConsultarItens ) ; 

  janela . addEventListener ( "carregar" , ConsultarItens ) ; 
}