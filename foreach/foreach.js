
        const users = [
            {name: "a", age:"33"},
            {name: "b", age:" 42"},
            {name: "c", age:" 42"},
            {name: "d", age:" 12"},
            {name: "e", age:" 44"}
        ]

        //for each e um loop proprio para arrays, significa "para cada", a ordem e item dps indice e por fim array, sendo somente item o obrigatorio, a funcao e escrita dentro do foreach, eu errei em deixar a { } fechar fora.

        /*users.forEach(function(item, index, array) {
            console.log(item)
            console.log(index)
            console.log(array)
        }
    )
        */


    
        //exemplo de uso de forEach !!!
    users.forEach(function(item, index, array) {
        if(item.age <18) {
            console.log(`o cliente ${item.name}, posição ${index} e menor de idade`)
        }
    }
)