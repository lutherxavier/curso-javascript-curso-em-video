function calcular() {
    var numero = document.getElementById("numero")
    var res = document.getElementById("tabuada")
     if (numero.value == 0) {
        window.alert("ERRO! É necessário preencher o campo para requisitar o resultado.")
     } else {
        var n = Number(numero.value)
        res.innerHTML = ""
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
        }
     }
}

/*
function calcular() {
    var num = document.getElementById("numero")
    var res = document.getElementById("tabuada")
    if (num.value == 0) {
        window.alert("ERRO! É necessário preencher o campo para requisitar o resultado.")
    } else {
        var n = Number(num.value)
        var c = 1
        res.innerHTML = ""
        while(c <= 10) {
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
}
*/

