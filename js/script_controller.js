
import { switchs } from "./script__model.js";
import { menuHamburger } from "./script__model.js";


//Botón para el modo oscuro o dark
const btnSwitch = document.getElementById('switch__button');
const body      = document.getElementById('body');

//Botón o menu hamburger
const contentMenu  = document.getElementById('header__content--nav');
const btnHamburger = document.getElementById('header__hamburger');

//Instanciar la clase para el switch
const swtichTocado = new switchs();

//Instanciar la clase para el menuHamburger
const btnHamburgerClass = new menuHamburger();


//Escuchar el evento click del switch - modo dark
btnSwitch.addEventListener('click', ()=>{

    swtichTocado.colocarClass(btnSwitch, body)

});

//Escuchar el evento click del btnHamburger
btnHamburger.addEventListener('click',()=>{

    btnHamburgerClass.menuHamburger(contentMenu);
    
})
