    var jogador1 = 'papel'
    var jogador2 = 'papel'


    if (jogador1=='pedra' && jogador2=='tesoura') {
        console.log ('O Jogador 1 venceu')
    } else if (jogador1== 'papel' && jogador2 =='pedra' ){
        console.log('O jogador 1 venceu ')
    } else if (jogador1 == 'tesoura' && jogador2 =='papel'){
        console.log ('O jogador 1 venceu')
    }
    else if (jogador2=='pedra' && jogador1=='tesoura') {
        console.log ('O Jogador 2 venceu')
    } else if (jogador2== 'papel' && jogador1 =='pedra' ){
        console.log('O jogador 2 venceu ')
    } else if (jogador2 == 'tesoura' && jogador1 =='papel'){
        console.log ('O jogador 2 venceu')}
        else{
            console.log ('Empate')
        }
