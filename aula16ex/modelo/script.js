let memoria =[] 
res = document.getElementById("res")
function enviar( ) {
let inum = document.getElementById("inumput")
let select = document.getElementById('iselect')


let num = parseInt(inum.value)
if (isNaN(num) || !num || num < 1 || num > 100) {
    alert('ensira valor valido')
}

else if (memoria.includes(num) ) {

alert("valor ja existe")

   
  

} else  {
    memoria.push(num)
    let op = document.createElement("Option")
    op.innerText = (`o valor ${num} esta aqui`)
    select.appendChild(op)
}
inum.value = ``
inum.focus()
res.innerText = ``
}


function finalizar() {
    if (memoria.length == 0) {
        alert(`adicione valores`)
    } else {
        let lot = memoria.length

        
        
        res.innerText += `foram adicionados ${lot} itens,`
        let soma = 0
        
        for(let i = 0; i < memoria.length; i++) {
            
            soma += memoria[i]
            
        }

        let media = soma / memoria.length

        memoria.sort((a, b) => a - b)
        res.innerText += (`a soma de todos os numeros e ${soma}, o menor numero e ${memoria[0]}, e o maior numero e ${memoria[memoria.length - 1]} e a media ${media}`)
    }
    
}