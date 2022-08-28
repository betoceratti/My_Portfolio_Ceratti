
//CODIGO PARA LA GALERIA BOOTSTRAP DINAMICA
const divGallery = document.querySelector('.sec-portafolio-js')
const divTotal = document.querySelector('.total')
const divDescarga = document.querySelector('.descarga')

divGallery.addEventListener('click',(e)=>{
   if (e.target.classList.contains('img-btn-modal-js')) {
      
    //    console.log(e.target.attributes[0].nodeValue)
       const urlImg = e.target.attributes[0].nodeValue

       const imgModal = document.querySelector('.img-modal-js')
       imgModal.src = urlImg
   }
})


//FUJCION ENLACES ACTIVE
const enlaces = document.querySelectorAll('.navbar-nav li a')

enlaces.forEach((link)=>{

    link.addEventListener('click',e =>{
        // console.log(e.target)
      
        enlaces.forEach(enlace =>{ enlace.classList.remove('active')})
        e.target.classList.add('active')


    })


})

//funcion contador de carga
let total = 0

 let time = setInterval(downloader,40)

function downloader(){
    total++
   if(total >99){
    clearInterval(time)         
   
  

   }
   divTotal.textContent = total+"%"
  dhide()
 
};


const dhide = ()=>{

    setTimeout(()=>{
        divDescarga.classList.add('hide')
    },4000)
}


//codigo ara texto circular
const textos = document.querySelector('#texto')
texto.innerHTML = textos.textContent.replace(/\S/g,'<span>$&</span>' )
const ele = document.querySelectorAll('span')

for(let i=1; i< ele.length;i++){
ele[i].style.transform = "rotate("+i*16.5+"deg)"  
}



//funcion para typed 
const typed = new Typed('.typed', {
    strings: [
       '<i class="web">CREATIVE DEVELOPER</i>',
       '<i class="web">PASSIONATED</i>',
       '<i class="web">DIGITAL DESIGNER </i>',
       '<i class="web">CREATOR DREAMS</i>'
    ],
    
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 4000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
    });
    
    

