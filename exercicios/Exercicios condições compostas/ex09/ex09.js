var carro = 'Luxo'
var dia = 1
var km = 1
var preco = 0


if (carro == 'Popular' && km<=100){
    var preco = dia*90 + (km * 0.20)
    console.log (`O seu carro é de ${carro} e o preço final é ${preco}`)
} else if (carro == 'Popular' && km>100){
    var preco = dia*90 + (km * 0.10)
    console.log (`O seu carro é de ${carro} e o preço final é ${preco}`)
} else if (carro == 'Luxo' && km<=200){
    var preco = dia*150 + (km * 0.30)
    console.log (`O seu carro é de ${carro} e o preço final é ${preco}`)
} else {
    var preco = dia*150 + (km * 0.25)
    console.log (`O seu carro é de ${carro} e o preço final é ${preco}`)
}





