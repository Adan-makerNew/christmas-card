let images_1=0;
let text_1=0;
const change_image= document.getElementById('card');
const images_2= ['/img/christmas-red-background-lined-snowflakes-simple-holiday-card-vector.jpg',
    '/img/fondo-tarjeta-navidad-ramas-abeto-campana-oro_135176-191.avif'
    ];
const txtText1= document.getElementById('text1');
const textText2= document.getElementById('text2');
change_image.addEventListener('click', ()=>{
    text_1++;
    change_image.style.backgroundPosition= "center top";
    images_1=(images_1 + 1)%images_2.length;
    setTimeout(()=>{
        change_image.style.backgroundImage= "url("+ images_2[images_1]+")";
        
        change_image.style.backgroundPosition = "center top";
        if(text_1%2==0){
            txtText1.textContent= "🎄 ¡Feliz Navidad! 🎄";
        textText2.textContent= "🎄";
        }
        else{
            txtText1.textContent= "";
        textText2.textContent= "En esta navidad, quiero expresar mi mas sincero agradecimiento a Cipec por ser un faro de conocimiento, dedicacion y valores. Que esta época esté llena de amor, esperanza y momentos de alegria compartida. Les deseo unas fiestas llenas de paz y unas navidades colmadas de armonia";
        }
    },10);
    
})