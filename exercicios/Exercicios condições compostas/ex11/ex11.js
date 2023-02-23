horas = 21
Dinheiro = 0
pontos=  0

if (horas<10){
var Dinheiro= 0.05 * (horas*2)
var pontos = horas*2
console.log (`Você praticou ${horas} horas por mês e ganhou ${Dinheiro} em dinheiro `)
} else if (horas<20){
    Dinheiro= 0.05 * (horas*5)
    console.log (`Você praticou ${horas} horas por mês e ganhou ${Dinheiro} em dinheiro `)
} else{
    Dinheiro= 0.05 * (horas*10)
    console.log (`Você praticou ${horas} horas por mês e ganhou ${Dinheiro} em dinheiro `)

    }
