let btn = document.querySelector(".btn");
let res = document.querySelector(".res");

btn.addEventListener("click", function() {
    let n = Number(prompt("Digite um número:"));
    let n2 = Number(prompt("Digite outro número:"));
    let maior = Math.max(n, n2);

    if (n !== n2) {
        res.innerHTML = `<p>Analisando os valores <mark>${n}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${maior}</strong></p>`;
    } else {
        res.innerHTML = `<p>Analisando os valores <mark>${n}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong></p>`;
    }

    

})