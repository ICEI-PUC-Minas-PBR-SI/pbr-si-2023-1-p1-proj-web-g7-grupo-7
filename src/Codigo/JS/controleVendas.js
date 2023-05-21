function mostrarDados() {
    // Obter o elemento <div> onde queremos mostrar os dados
    var divDados = document.getElementById('dados');

    // Limpar o conteúdo atual da <div>
    divDados.innerHTML = '';

    // Criar um novo elemento <p> para cada dado e adicioná-lo à <div>
    var dados = ['Dado 1', 'Dado 2', 'Dado 3'];
    for (var i = 0; i < dados.length; i++) {
      var p = document.createElement('p');
      p.textContent = dados[i];
      divDados.appendChild(p);
    }
  }