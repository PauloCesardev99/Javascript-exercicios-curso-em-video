function supersomador(n1, n2){
    var c = n1
    var somador = 0
    while (c<=n2){
        var calculo= c
        var somador = somador+ calculo

       c= c+1
    }
    return somador

}

let resultado = supersomador (15, 19)

console.log (`O resultado final é ${resultado}`)