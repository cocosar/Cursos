(() => {

    console.log('inicio')
    
    //cambié a es6
    //resolve -> si todo se resuelve
    //reject -> si no se resuelve
    const prom1 = new Promise((resolve, reject) => {
        
        setTimeout(
            () => {
                reject('Se termino el timeout')
            }, 1000);

        


    });

    
    prom1
        .then( mensaje => console.log(mensaje))
        .catch( err => console.warn(err));


    console.log('Fin')

})();



