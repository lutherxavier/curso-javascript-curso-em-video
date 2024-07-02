let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let resultado = document.querySelector(".res");

btn1.addEventListener("click", function criaP() {
    let paragrafo = document.createElement("p");
    paragrafo.textContent = "Clicou no primeiro botão.";
    resultado.append(paragrafo);
});

btn2.addEventListener("click", function criaP() {
    let paragrafo = document.createElement("p");
    paragrafo.textContent = "Clicou no segundo botão.";
    resultado.append(paragrafo);
});

btn3.addEventListener("click", function criaP() {
    let paragrafo = document.createElement("p");
    paragrafo.textContent = "Clicou no terceiro botão.";
    resultado.append(paragrafo);
});

btn4.addEventListener("click", function criaP() {
    let paragrafo = document.createElement("p");
    paragrafo.textContent = "Clicou no quarto botão.";
    resultado.append(paragrafo);
});
