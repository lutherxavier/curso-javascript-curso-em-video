function carregar() {
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    var anoNasc = document.querySelector("input#nasc")
    var res = document.getElementById("res")

    if (anoNasc.value == 0 || anoNasc.value > anoAtual) {
        window.alert("É necessário preencher os dados corretamente!")
    } else {
        var sexo = document.getElementsByName("sexo")
        var idade = anoAtual - Number(anoNasc.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        
        if (sexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade <= 10) {
                img.setAttribute("src", "imagens/bebe-m.jpg")
            } else if (idade < 21) {
                img.setAttribute("src", "imagens/jovem-m.jpg")
            } else if (idade < 60) {
                img.setAttribute("src", "imagens/adulto-m.jpg")
            } else {
                img.setAttribute("src", "imagens/idoso-m.jpg")
            }
        } else if (sexo[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade <= 10) {
                img.setAttribute("src", "imagens/bebe-f.jpg")
            } else if (idade < 21) {
                img.setAttribute("src", "imagens/jovem-f.jpg")
            } else if (idade < 60) {
                img.setAttribute("src", "imagens/adulto-f.jpg")
            } else {
                img.setAttribute("src", "imagens/idoso-f.jpg")
            }   
        }      
    } 
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img) 
}
