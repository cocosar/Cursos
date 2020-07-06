(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    }

    //DESESCTRUCTURACIÓN en argunmentos
    const extraer = ( { nombre, poder }:any ) => {
    
    // const { nombre, clave } = avenger; <--- Desesctructuración normal

    console.log( nombre )
    console.log( poder )  

    }

    // extraer( avenger);
     

    //DESECTRUCTURAR UN ARRAY
const avengers:string[] = ['Thor', 'Ironman', 'Spiderman'];

const [ , , arana ] = avengers;


// console.log(loki);
// console.log(hdehierro);
console.log(arana);


const extraerArr = ( [thor, ironman, spiderman]: string[] ) => {
    
    console.log( thor )
    console.log( ironman )
    console.log( spiderman )
      

    }

extraerArr(avengers);

})();



