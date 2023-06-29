
import { switchs } from "./script__model.js";
import { menuHamburger } from "./script__model.js";
import { btnImagePerson } from "./script__model.js";
import { validacionFormulario } from "./script__model.js";


//Botón para el modo oscuro o dark
const btnSwitch = document.getElementById('switch__button');
const body      = document.getElementById('body');

//Botón o menu hamburger
const contentMenu  = document.getElementById('header__content--nav');
const btnHamburger = document.getElementById('header__hamburger');

//click de la imagen persona
const btnImage    = document.getElementById('right__image--person');
const modal__person = document.getElementById('modal__image--person');
const txtModal      = document.getElementById('txtModal--image');


//inputs del formulario contacto
const inputs = document.querySelectorAll('.form__input');
const txtSpan = document.querySelector('form__message--error');

//Instanciar la clase para el switch
const swtichTocado = new switchs();

//Instanciar la clase para el menuHamburger
const btnHamburgerClass = new menuHamburger();

//Instanciar la clase para el mensaje de la imagen personal
const btnImageClass    = new btnImagePerson();

//Instanciar la clase para la validación del formulario
const validacionFormul  = new validacionFormulario();


//Escuchar el evento click del switch - modo dark
btnSwitch.addEventListener('click', ()=>{

    swtichTocado.colocarClass(btnSwitch, body, modal__person,txtModal)

});

//Escuchar el evento click del btnHamburger
btnHamburger.addEventListener('click',()=>{

    btnHamburgerClass.menuHamburger(contentMenu);
})

//Escuchaar el evento click del btnImge
btnImage.addEventListener('click', ()=>{

    btnImageClass.btnImageinformacion(modal__person,txtModal);

})

//Recorrer la lista de los inputs y agregar el evento blur de cada elemento input
//Enviar como parametro el evento o input element

inputs.forEach((input)=>{
    input.addEventListener('blur', (event)=>{
        validacionFormul.validarForm(event.target);
        console.log(input)
    })
})