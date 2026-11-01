const campoBusca = document.getElementById("campo-busca");
const livros = document.querySelectorAll(".livro");

campoBusca.addEventListener('input',function(){

    const textoBusca = campoBusca.value.toLowerCase();

    livros.forEach(function(livro){
        const titulo = livro.textContent.toLowerCase() 

        const encontrou = titulo.includes(textoBusca);
        if (encontrou) {
            livro.hidden = false;
        }
        else{
            livro.hidden = true;
        }
    })
})

const filtroGenero = document.getElementById("filtro-genero");

filtroGenero.addEventListener("change", function(){
    const filtroG = filtroGenero.value.toLowerCase();

        livros.forEach(function(livro) {

});
})
const generoLivro = livro.dataset.genero;