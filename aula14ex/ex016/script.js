/*var inicio = document.getElementById('inum1')
var fim = document.getElementById('inum2')
var passo = document.getElementById('inum3')

function contar() {
    var res = document.getElementById('res')
   var inicio = 1
   var fim = 10
   var passo = 2
    if (Number (inicio.value) == 0 || Number (passo.value) == 0)
         {
        window.alert('verifique e tente novamente')
    } else {
        if (Number (fim.value) <= (Number(inicio.value))) {
            for(var res2 = ''; (Number (res.value)) <= (Number(fim.value));(Number(res.value) + (number(passo.value))) ) {
                window.alert('verifique e tente novamente')
            }

        }
       
}
}
*/
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("faltam dados ERRO")
    } else {
        res.innerHTML = 'contando.... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('passo invalido, considerando passo 1')
            p = 1
        }
        //contagem crescente
        if (i < f) {
            for(let c = i; c <= f; c+= p) {
            res.innerHTML += ` ${c} \u{1F449}	`
        }
        //contagem regressiva
        } else {
            for(let c = i; c>= f; c-= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}