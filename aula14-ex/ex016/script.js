function contar(){
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var resultado = document.getElementById("resultado")

    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        window.alert("ERRO! Faltam dados.")
    } else {
        resultado.innerHTML = "Contando..."
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert("Passo inválido! Considerando PASSO 1.")
            p = 1

        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                resultado.innerHTML += `${c}&#x1F449; `
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c}&#x1F449; `
            }  
        }
        resultado.innerHTML += "&#x1F3C1;"
    }   
}