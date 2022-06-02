
// varaias tareas

const Tarea = require('./tarea');


// creacion de  clase tareas 
class Tareas {
    // instancia de tareas - listado
    _listado = {};


    //get and set
    get listadoArr(){
        const listado = []
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTares(id){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    crearTareasfromArray( tareas = []){
        //tareas.push
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    listadoCompleto(  ){
        //console.log(this._listado);
         this.listadoArr.forEach((tarea, i)=> {
            const idx = `${i + 1}`.green;
            const {desc, completadoEn} = tarea;
            
            if ( completadoEn === null ) {
                const a = 'Pendiente';
                console.log(`${idx} ${desc} :: ${a.red}`);
            } else {
                const b = 'Completado';
                console.log(`${idx} ${desc} :: ${b.green}`);
            }
            
        });
    }

    listarPendientesCompletadas(validar){
        let contador = 0;
        this.listadoArr.forEach((tarea) => {
            
            const {desc, completadoEn} = tarea;
            
            if (validar === true) {
                if (completadoEn !== null){
                    contador ++;
                    const a = 'Completado';
                    console.log(`${contador.toString().green}. ${desc} :: ${a.green} :: ${completadoEn}`)
                }
            }

            if (validar === false){
                if (completadoEn === null){
                    contador ++ ;
                    const b = 'Pendiente';
                    console.log(`${contador.toString().red}. ${desc} :: ${b.red} :: ${completadoEn}`)
                }
            }

        });
    }


    crearTarea(desc = '') {
        //crear instancia
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }


    toggleCompletadas(ids = []) {
        ids.forEach( id => {
            const tarea = this._listado[id];
            if( !tarea.completadoEn ) {
                //crear fecha
                tarea.completadoEn = new Date().toISOString();
            }

        });

        this.listadoArr.forEach( tarea => {
            // si no existe !
            if ( !ids.includes(tarea.id) ) {
                //this._listado[tarea.id].completadoEn = null;
                
                const homework = this._listado[tarea.id];
                homework.completadoEn = null;

            }
        })
        
    }


}

module.exports = Tareas;