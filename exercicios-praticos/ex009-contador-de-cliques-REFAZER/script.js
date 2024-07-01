let contar = document.querySelector(".contar");
let zerar = document.querySelector(".zerar");
let mark = document.querySelector(".indicador");
let contador = 0;

contar.addEventListener("click", function(){
     contador ++;
     mark.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`;
});

zerar.addEventListener("click", function() {
    contador = 0;
    mark.innerHTML = null;
})