function carregar() {
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    var anoNasc = document.querySelector("input#nasc")
    var res = document.getElementById("res")
    var idade = anoAtual - Number(anoNasc.value)
    
    
    if (anoNasc.value == 0 || anoNasc.value > anoAtual) {
        window.alert("É necessário preencher os dados corretamente!")
    } else if (sexo = masc) {
        var img = document.querySelector("img#foto")
        var masc = document.querySelector("input#masc")
        var fem = document.querySelector("input#fem")
        var sexo
        //  ERRO NO INPUT RADIO, NÃO ESTÁ PEGANDO OS DADOS, PRECISO ARRUMAR 
        if (idade > 0 && idade <= 10) {
            res.innerHTML = "<p>Você é um bebê!</p>"
        } else if (idade < 21) {
            res.innerHTML = "<p>Você é um jovem!</p>"
        } else if (idade < 60) {
            res.innerHTML = "<p>Você é um adulto!</p>"
        } else {
            res.innerHTML = "<p>Você é um idoso!</p>"
        }
    } else if (sexo = fem) {
        if (idade > 0 && idade <= 10) {
            res.innerHTML = "<p>Você é uma bebê!</p>"
        } else if (idade < 21) {
            res.innerHTML = "<p>Você é uma jovem!</p>"
        } else if (idade < 60) {
            res.innerHTML = "<p>Você é uma adulta!</p>"
        } else {
            res.innerHTML = "<p>Você é uma idosa!</p>"
        }  

    }

}