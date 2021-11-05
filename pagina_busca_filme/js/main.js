document.getElementById('formulario').addEventListener('submit', pesquisarFilme);

function pesquisarFilme(e) {
    var filmeBuscar = document.getElementById('pesquisar').value;
    buscarFilme(filmeBuscar);
    e.preventDefault();
}
// Fazendo pesquisa através de API
function buscarFilme(filmeBuscar) {
    axios.get('http://www.omdbapi.com/?apikey=a82f595b&s=' + filmeBuscar)
    .then(function (response) {
    // Quando a pesquisar obter sucesso
        console.log(response);
        var filmes = response.data.Search;
        var mostrarFilme = '';
        for(var i = 0; i < filmes.length; i++) {
            mostrarFilme += `
            <div class="col-sm-6 col-md-4" id="detalhe">
                <div class="thumbnail">
                    <img src="${filmes[i].Poster}" class="img-thumbnail">
                    <h4>${filmes[i].Title}</h4>
                    <p><a href="#" class="btn btn-primary" role="button" onclick="filmeDetalhes('${filmes[i].imdbID}')">Ver Detalhes</a></p>
                </div>
            </div>
            `;
        }
        document.getElementById('filmes').innerHTML = mostrarFilme;
    })
    .catch(function (error) {
    // Quando a pesquisa obter erro
        console.log(error);
    });
}

function filmeDetalhes(id){
    sessionStorage.setItem('filmeID', id);
    window.location = 'detalhes.html';
    return false;
}

// Mostrando quando clicar em detalhes
function mostraDetalheFilme() {
    var filmeID = sessionStorage.getItem('filmeID');
    axios.get('http://www.omdbapi.com/?apikey=a82f595b&i=' + filmeID)
    .then(function (response) {
        var filme = response.data;
    // Quando a pesquisar obter sucesso
        console.log(filme);
        var mostraDetalheFilme = `
            <div class="col-md-6">
                <img src="${filme.Poster}" class="img-responsive">
                <h3><strong>${filme.Title}</strong></h3>
            </div>
            <div class="col-md-5">
                <div class="well clearfix" id="det>
                <ul class="list-group">
                    <li class="list-group-item"><strong>Gênero: </strong>${filme.Genre}</li>
                    <li class="list-group-item"><strong>Lançamento: </strong>${filme.Released}</li>
                    <li class="list-group-item"><strong>Duração: </strong>${filme.Runtime}</li>
                    <li class="list-group-item"><strong>Idioma: </strong>${filme.Language}</li>
                    <li class="list-group-item"><strong>Prêmios: </strong>${filme.Awards}</li>
                    <li class="list-group-item"><strong>Atores: </strong>${filme.Actors}</li>
                </ul>
                <h4>Descrição</h4>
                ${filme.Plot}
                <hr>
                <a href="http://imdb.com/title/${filme.imdbID}" target="_blank" class="btn btn-sucess" pull-left>Ver no IMDB</a>
                </div>
            </div>
        `;
        document.getElementById('filmes').innerHTML = mostraDetalheFilme;
    })
    .catch(function (error) {
    // Quando a pesquisa obter erro
        console.log(error);
    });
}
/* <a href="index.html" target="_blank" class="btn btn-default" pull-right>Voltar</a> */
