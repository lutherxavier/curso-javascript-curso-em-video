function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById("anoNasc")
    var res = document.getElementById("resultado")
    

    if (formAno.value == 0 || formAno.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var sexo = document.getElementsByName("sexo")
        var idade = ano - Number(formAno.value)
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
