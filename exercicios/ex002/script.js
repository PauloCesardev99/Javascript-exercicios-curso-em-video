function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById ('res')

    if(fano.value.length == 0 || fano.value.length> ano) {

        window.alert('Verifique os dados e tente novamente')
     }   else{
        
            var fem = document.getElementById('fem')
            var mas= document.getElementById('mas')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img =document.createElement('img')
            img.setAttribute('id', 'img')
            if(fem.checked) {
               var genero = 'Feminino' 
               document.body.style.background=`#FF665A`
               
            
            if(idade >=0 && idade<10 ){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if( idade<21 ){
                //jovem
                 img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade<50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }

            } else if(mas.checked) {
               var genero = 'Masculino' 
               document.body.style.background='Blue'
               
               if(idade >=0 && idade<10 ){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if( idade<21 ){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade<50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

            }
             res.style.textAlign= 'center'
            res.innerHTML = ` <p>Você é do sexo ${genero} e sua idade é ${idade} </p>`
            res.appendChild(img)


            
        }
    
}