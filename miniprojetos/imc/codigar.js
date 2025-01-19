

let calcular = document.getElementById("calcular")

function imc () {
    let res = document.getElementById("res")
    let altura = document.getElementById("ialt").value
    let peso = document.getElementById("ipeso").value
    let nome = document.getElementById("inome").value

    if (nome.value !== "" && altura !== "" && peso !== "") {
        let valorimc = (peso/(altura * altura)).toFixed(2)
        let classifiq = ""
        if (valorimc < 18.5) {
            classifiq = "abaixo do peso"
        } else if (valorimc < 25) {
            classifiq = "peso ideal"
        } else if (valorimc > 30 && valorimc < 36){
            classifiq = "levemente acima do peso"
        } else {
            classifiq = 'gordo'
        }
        res.textContent =`${nome}, seu imc: ${valorimc} e vc ta ${classifiq}`
    } else {
        res.textContent=("preencha os campos")
    }
}

calcular.addEventListener("click", imc)