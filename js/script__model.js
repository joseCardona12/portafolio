export class switchs{

    constructor(){

    }

    //Función para el switch

    colocarClass(switchTocado, body){

        switchTocado.classList.toggle('active');
        body.classList.toggle('content__dark');

    }

}

export class menuHamburger{
    constructor(){

    }

    menuHamburger(contentMenu){
        const contentMenuHamburger = contentMenu;

        contentMenuHamburger.classList.toggle('active');

    }
}