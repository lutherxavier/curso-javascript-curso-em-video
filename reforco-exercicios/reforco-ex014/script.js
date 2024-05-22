function iniciar() {
    var mensagem = document.querySelector("p#msg")
    var imagem = document.querySelector("img#foto")
    var cor = document.body
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    if (hora > 0 && hora <= 12) {
        mensagem.innerHTML = `Agora são ${hora} horas e ${minuto} minutos. Bom dia!`
        imagem.setAttribute("src", "imagens/morning.jpg")
        cor.style.background = "#CFC537"
    } else if (hora > 12 && hora <= 18) {
        mensagem.innerHTML = `Agora são ${hora} horas e ${minuto} minutos. Boa tarde!`
        imagem.setAttribute("src", "imagens/afternoon.jpg")
        cor.style.background = "#FABD1A"
    } else {
        mensagem.innerHTML = `Agora são ${hora} horas e ${minuto} minutos. Boa noite!`
        imagem.setAttribute("src", "imagens/night.jpg")
        cor.style.background = "#754EA5"
    }
}