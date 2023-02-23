var peso = 200
var altura = 1.76
var imc = 0

var imc = peso/(altura*altura)

if (imc<18){
    console.log (`Seu imc é ${imc} e você está abaixo do peso`)
} else if (imc<25){
    console.log (`seu imc é ${imc} e você está com o peso ideal`)
} else if (imc<30){
console.log (`seu imc é ${imc} e você está com sobrepeso`)
} else if (imc<40){
    console.log (`seu imc é ${imc} e você está obeso`)
} else{
    console.log (`seu imc é ${imc} e você está com obesidade mórbida`)
}

