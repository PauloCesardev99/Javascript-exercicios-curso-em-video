var nome =  'Paulo'
var sexo = 'M'
var produto = 500
var vf = 0

if(sexo == 'F'){
    var vf =  produto-(13/100* produto)
    console.log(`O Valor final a se pagar é ${vf} reais descontado`)

} else{ var vf = produto-(5/100*produto)
    console.log(`o valor final a se pagar é ${vf} reais descontado`)
}
