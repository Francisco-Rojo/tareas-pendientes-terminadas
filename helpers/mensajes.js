const { resolve } = require('path');

require('colors');

//promesa
const mostrarMenu = () => {

    //crear promesa
    return new Promise( resolve =>{

        console.log('\n=========================='.green);
        console.log('  Seleccione una opción'.green);
        console.log('==========================='.green);
        console.log('');
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
        
        
        //recibir informacion del usuario
        // paquete de nodejs readline se estableciendo el objeto
        // con input espera el programa recibir una informacion
        // output mostrar mensaje 
    
        // creacion de interfaz
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opcion: ', (opt) => {
            //console.log({opt});
            resolve(opt);
            readline.close();
            
        });


    });

   
}

const pausa = () => {
    //promesa
    return new Promise(resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.blue} para continuar: `, (opt) => {
            //console.log({opt});
            resolve(opt);
            readline.close();
            
        });
    });

   
}


//exportar modulo como objeto ya que podemos tener muchos funciones
module.exports = {
    mostrarMenu,
    pausa
}
