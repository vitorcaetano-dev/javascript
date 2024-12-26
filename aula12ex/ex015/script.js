function verificar() {
     var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')

 
    if (Number (fano.value) == 0 || Number (fano.value) > ano) {
        window.alert('verifique e tente novamente')
    } else {
        var fsex = document.getElementsByName("sex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianco.jpg')
            } else if ( idade < 21){
                //jovem
                img.setAttribute('src', 'adolescente.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            } else {
                //veio
                img.setAttribute('src', 'veio.jpg')
            }
        }
         else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca.jpg')
            } else if ( idade < 21){
                //jovem
                img.setAttribute('src', 'adolescenta.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            } else {
                //veio
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
}

}
  