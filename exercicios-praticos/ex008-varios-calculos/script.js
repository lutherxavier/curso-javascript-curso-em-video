let btn = document.querySelector("#btn");
let res = document.querySelector("#res");

btn.addEventListener("click", function() {
    let n = Number(prompt("Digite um número:"));
    let valorAbsoluto = Math.abs(n);
    let parteInteira = Math.trunc(n);
    let valorMaisProximo = Math.round(n);
    let raizQuadrada = Math.sqrt(n);
    let raizCubica = Math.cbrt(n);
    let n2 = n ** 2;//Poderia utilizar Math.pow
    let n3 = n ** 3;

    res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${n}</strong></p>`;
    res.innerHTML += `<hr>`;
    res.innerHTML += `<p>O seu valor absoluto é ${valorAbsoluto}</p>`;
    res.innerHTML += `<p>A sua parte inteira é ${parteInteira}</p>`;
    res.innerHTML += `<p>O valor inteiro mais próximo é ${valorMaisProximo}</p>`;
    res.innerHTML += `<p>A sua raiz quadrada é ${raizQuadrada}</p>`;
    res.innerHTML += `<p>A sua raiz cúbica é ${raizCubica}</p>`;
    res.innerHTML += `<p>O valor de ${n}<sup>2</sup> é ${n2}</p>`;
    res.innerHTML += `<p>O valor de ${n}<sup>3</sup> é ${n3}</p>`;
});