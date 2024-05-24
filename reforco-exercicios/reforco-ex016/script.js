function contar() {
    var inicio = document.querySelector("input#inicio")
    var fim = document.querySelector("input#fim")
    var passo = document.querySelector("input#passo")
    var res = document.getElementById("res")

    if (inicio.value == 0 || fim.value == 0 || passo.value == 0){
        window.alert("[ERRO] Você precisa preencher todos os dados!")
    } else {
        res.innerHTML = ""
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else if (i > f) {
            for (var c = i; c >= f; c-= p) {
                res.innerHTML += `${c} `
            }
        }  
    }
}