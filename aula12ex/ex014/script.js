function carregar(){
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()


msg.innerHTML = (`agora são ${hora} horas.`)

if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'manha-pq.png'
    document.body.style.background = '#f1f186'
    
} else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = 'tarde-pq.png'
    document.body.style.background =' #e3863e'
}  else  {
    //boa noite
    img.src = 'noite-pq.png'
    document.body.style.background = '#220e57'
    
}
}