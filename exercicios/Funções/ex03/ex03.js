function maior(n1, n2, n3){

if (n1>n2 && n1>n3){
    return Number(n1)}
    else if (n2>n1 && n2>n3){
        return Number(n2)
    } else {
        return Number(n3)
    }
}


nmaior =  maior(4, 2, 1)

console.log (`O Número maior é ${nmaior}`)