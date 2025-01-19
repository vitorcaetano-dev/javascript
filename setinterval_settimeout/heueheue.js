
//clear timeout na pratica

let x = 0

let meutimeout = setTimeout(function(){
    console.log("o x e 0")
},1500);

x = 5
if(x > 0) {
    clearTimeout(meutimeout)
    console.log("o x passou de 0")
}

//clear set interval
let meuintervalo = setInterval(function(){
    console.log("imprimindo interalo")
}, 500);


setTimeout(function() {
    console.log('n precisamos mais')
    clearInterval(meuintervalo)
}, 1500);