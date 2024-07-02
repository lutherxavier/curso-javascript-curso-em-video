let btn = document.querySelector(".btn");
let res = document.querySelector(".res");

btn.addEventListener("click", function() {
    let n = Number(prompt("Digite um número:"));

    if (n % 2 === 0) {
        res.innerHTML = `<p>O número ${n} que foi digitado é <strong>PAR!</strong></p>`;
    } else {
        res.innerHTML = `<p>O número ${n} que foi digitado é <strong>ÍMPAR!</strong></p>`;
    }
});