var nome = 'Paulo'
var salario = 1500
var ano = 20


if (ano<3){
 salario =  (3*salario)/100 + salario

 console.log (`Você trabalhar a ${ano} anos e ganhou um aumento de 3%, o seu novo salario é ${salario}`)
} else if(ano>=3 && ano<10){
    salario =  (12.5*salario)/100 + salario
    console.log (`Você trabalhar a ${ano} anos e ganhou um aumento de 12.5%, o seu novo salario é ${salario}`)
} else{
    salario =  (20*salario)/100 + salario
    console.log(`Você trabalha a ${ano} anos e ganhou um aumento de 20%, o seu novo salario é ${salario}`)

}