(function(){


    //PRIMERO OBLIGATORIOS, DESPUÉS OPCIONALES Y ÚLTIMOS LOS POR DEFECTO
    function activar( quien: string, 
                    momento?: string,
                    objeto: string = 'batiseñal') {

        if (momento) {
            console.log(`${quien} activo la ${objeto} en ${momento}`);
        } else {
        console.log(`${quien} activo la ${objeto}`);
        }

    }


    activar('Gordon','la tarde');

})();



