function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
        if (hora>=6 && hora<12){
         //bom dia   
         img.src = 'Manhã.jpg'
         document.body.style.background = 'yellow'
        }
        else if (hora>=12 && hora<18){
            //boa tarde
            img.src = 'Tarde.jpg'
            document.body.style.background = 'blue'
        }
        else if (hora>=18 && hora<24){
           //boa noite 
           img.src = 'Noite.jpg'
           document.body.style.background = 'black'
        }
        else{
            //boa madrugs
        }

        
}

