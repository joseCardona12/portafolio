
//Clase para el boton de modo oscuro - dark switch
export class switchs{

    constructor(){

    }

    //Método para el switch

    colocarClass(switchTocado, body,modal,txtModal){

        const modalSwitch = modal;

        switchTocado.classList.toggle('active');
        body.classList.toggle('content__dark');
        modalSwitch.classList.toggle('active');

        txtModal.innerHTML = "Ha activado el modo oscuro";


    }

}

//Clase para el menuHaburguesa

export class menuHamburger{
    constructor(){

    }

    //Método para el click del menú hamburguesa
    menuHamburger(contentMenu){
        const contentMenuHamburger = contentMenu;

        contentMenuHamburger.classList.toggle('active');

    }
}


//Classe para el mensaje al momento de click de la imagen personal
export class btnImagePerson{
    constructor(){

    }

    //Método para btnImage personal
    btnImageinformacion(modal__person, txtModal){
        const contentMessage = modal__person;
        contentMessage.classList.toggle('active');

        txtModal.innerHTML = `¡Hola! <br>¿Te ayudo en algo? Contáctame`;
    }
}

//Se indica el tipo de error a mostrar

const tipoDeError = [
    'valueMissing',
    'typeMismatch'
]

//Se indica los errores a mostrar dependiendo del tipo de input
const mensajeErrores = {
    nombre: {
        valueMissing: "El campo nombre no ha sido definido",
    },
    correo: {
        valueMissing: "El campo correo no ha sido definido",
        typeMismatch: "El correo ingresado no es permirido",
    },
    asunto: {
        valueMissing: "El campo asunto no ha sido definido",
    },
    mensaje: {
        valueMissing: "El campo mensaje no ha sigo definido"
    }

}

//Clase para la validacion del formulario contacto

export class validacionFormulario{

    constructor(){
    }


    //Método para validar el input
    validarForm(input){

        const tipoDeInput = input.dataset.tipo;
        let span = input.parentElement.querySelector('.form__message--error');


        if(input.validity.valid){
            input.classList.remove('error');
            input.parentElement.querySelector('.form__message--error').innerHTML = '';
        }else{

            input.classList.add('error');
            span.classList.add('error');
            span.innerHTML = this.mostrarMensajesErrores(tipoDeInput,input);

        }

    }

    mostrarMensajesErrores(tipoDeInput,input){

        let mensaje = '';

        tipoDeError.forEach(error =>{

            if(input.validity[error]){
                mensaje = mensajeErrores[tipoDeInput][error]
            }
        })

        return mensaje;
        
        

    }
}
