function calcular() {
    var numero = document.querySelector("input#numero")
    var res = document.querySelector("div#res")

    if(numero.value == 0) {
        window.alert("[ERRO] É necessário preencher o dado requisitado!")
    } else  {
        res.innerHTML = ""
        var n = Number(numero.value)

        for (var c = 1; c <= 10; c++) {
            res.innerHTML += `<p>${n} x ${c} = ${n*c}</p>`
        }
    }
}