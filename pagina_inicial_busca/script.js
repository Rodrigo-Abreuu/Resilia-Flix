
// var tituloFilme = ['A cabana', 'Harry Potter e a Pedra Filosofal', 'Velozes e Furiosos - Operação Rio', 'Tropa de Elite']


// var pesquisa = document.getElementById('#busca');
// var filmes = document.getElementById('#tituloFilme');

// function buscarFilme() {
  
//   for(var i = 1; i < tituloFilme.length; i++) {
//     var pesquisaFilme = pesquisa.value
//       if(pesquisaFilme === tituloFilme) {
//         console.log('Filme encontrado');
//       } else {
//         console.log('Filme NÃO encontrado');
//       }
//   }
// };

// var btn = document.getElementById("btn");
// btn.addEventListener("onclick", buscarFilme);

// ----------------------------------------------------------

var pesquisa = document.getElementById('busca');
var filmes = document.getElementById('titulos');
let containerMovie = document.querySelector('.container')
var btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    var valueSearch = pesquisa.value
    e.preventDefault()
    validMovie(valueSearch)

});


// let filme1 = document.createElement('h1')
// let filme2 = document.createElement('h1')
// let filme3 = document.createElement('h1')
// let filme4 = document.createElement('h1')

// filme1.innerHTML = 'A cabana'
// filme2.innerHTML = 'Harry Potter e a Pedra Filosofal'
// filme3.innerHTML = 'Velozes e Furiosos - Operação Rio'
// filme4.innerHTML = 'Tropa de Elite'

// var movies = [filme1,filme2,filme3,filme4]

function validMovie (nameMovie) {
  switch (nameMovie) {
    case 'A cabana':
      console.log('Filme encontrado')      
      break;
    case 'Round 6':
      console.log('Filme encontrado')
      break;
    case 'Star Wars - Rogue One':
      console.log('Filme encontrado')
      break;
    case 'Pantera Negra':
      console.log('Filme encontrado')
      break;
    case 'Maquinas Mortais':
      console.log('Filme encontrado')
      break;
    case 'Bird Box ':
      console.log('Filme encontrado')
      break;
    case 'It - A coisa':
      console.log('Filme encontrado')
      break;
    case 'Dark':
      console.log('Filme encontrado')
      break;
    case 'A maldição da residência hill':
      console.log('Filme encontrado')
      break;
    case 'Demon slayer':
      console.log('Filme encontrado')
      break;
    case 'Its okay to not be okay':
      console.log('Filme encontrado')
      break;
  
    default:
      console.log('Filme NÃO encontrado')
      break;
  }
}
