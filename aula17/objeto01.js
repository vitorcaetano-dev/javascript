let amigo = {nome:"jose",
    sexo:"m",
    peso:"85.4",
    engordar(p){
        console.log('engordou')
        this.peso += p
    }}
amigo.engordar(2.0)    
console.log(amigo)