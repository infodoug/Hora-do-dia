function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (hora < 10) {
        hora = "0" + hora;
    }


    if (hora >= 0 && hora < 12) {
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
        mensagem.innerHTML = `São ${hora}:${minutos}. Bom dia!`
    } else if (hora > 12 && hora < 18) {
        imagem.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        mensagem.innerHTML = `São ${hora}:${minutos}. Boa tarde!`
    } else {
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#515154'
        mensagem.innerHTML = `São ${hora}:${minutos}. Boa noite!`
    }
}
