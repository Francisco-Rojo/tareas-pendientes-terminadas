// se recomienda que van primero las importaciones de terceros
require('colors');
const { guardarDB, leerDB } = require('./helpers/guardar-archivo');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
const {inquireMenu, 
    pausa, 
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');


//const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB =  leerDB();
    if(tareasDB){
        //cargar tareas
        // crearTareasfromArray
        tareas.crearTareasfromArray(tareasDB);
    }

   

    do {
        //llamamos funcion from helpers desde una promesa
        // await espera una promesa
        /*
        opt = await mostrarMenu();
        console.log({opt});
        
        if(opt !== '0') await pausa();*/

        
       /* const tareas = new Tareas();
        const tarea = new Tarea('comprar comida');

        tareas._listado[tarea.id] = tarea;
        console.log(tareas);
        */

        // imprimir menú
        opt = await inquireMenu();
        //console.log({opt});
        console.log('');

        // switch para opciones controladas
        switch(opt){
            case '1':
                //crear opcion 
                const desc = await leerInput('Descripción:');
                console.log(desc);
                tareas.crearTarea(desc);
            break;
            case '2':
                //console.log(tareas.listadoArr);
                tareas.listadoCompleto();
            break;

            case '3':
                console.log('tareas completadas');
                tareas.listarPendientesCompletadas(true);
            break;
            case '4':
                console.log('tareas pendientes');
                tareas.listarPendientesCompletadas(false);
            break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                //console.log({ids});
                tareas.toggleCompletadas(ids);
            break;   
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                //console.log({id});
                if(id !== '0'){
                    const ok = await confirmar('¿Seguro de borrar?');
                    console.log({ok});

                    if (ok){
                        tareas.borrarTares(id);
                        console.log('Tarea borrada');
                    }
                }
                
            break;       
        }

        guardarDB(tareas.listadoArr);
            
        
        await pausa();

    } while (opt !== '0');
    
}


main();