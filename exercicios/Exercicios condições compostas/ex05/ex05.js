var lado1 = 3
var lado2 = 2
var lado3 = 1



if(lado1==lado2 && lado1==lado3 && lado2==lado3)
console.log(`Esse triangulo é EQUILATERO`)

else if(lado1==lado2 || lado1==lado3||lado2==lado3){
    console.log ('Esse Triangulo é isósceles')
} else{
    console.log ('Esse triangulo é ESQUALENO')
}