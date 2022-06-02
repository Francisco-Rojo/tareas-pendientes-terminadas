// menú seleccionable con inquirer
const inquirer = require('inquirer');
require('colors');

const preguntas =[
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value:'2',
                name:  `${'2.'.green} Listar tareas`
            },
            {
                value:'3',
                name: `${'3.'.green} Listar tareas completas`
            },
            {
                value:'4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value:'5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value:'6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value:'0',
                name: `${'0.'.green} Salir`
            }
        ]
    }
];

const inquireMenu = async() => {
    console.clear();
    console.log('\n=========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('==========================='.green);
    console.log('');

    // destructurar la opcion
    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

// enter
const pausa = async() =>{
    const question = [
        {
            value: 'enter',
            name:'enter',
            message: `Presione ${'ENTER'.green} para continuar` 
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}



const leerInput = async(mensaje) =>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: mensaje,
            validate(value){
                if(value.length === 0){
                    return 'por favor ingresa un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}


const listadoTareasBorrar = async (tareas = []) =>{
    const choices = tareas.map((tarea, i) => {
        const idx = i+1;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntaas = [
        {
          type: 'list',
          name: 'id',
          message: 'Borrar',
          choices: choices  
        }
    ]
    const {id} = await inquirer.prompt(preguntaas);
    return id;

}

const confirmar = async (message) => {
    const question =[
        {
            type: 'confirm',
            name: 'ok',
            message: message
        }
    ];

    const {ok} = await inquirer.prompt(question);
    return ok;
}


const mostrarListadoChecklist = async (tareas = []) =>{
    const choices = tareas.map((tarea, i) => {
        const idx = i+1;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const preguntaa = [
        {
          type: 'checkbox',
          name: 'ids',
          message: 'Seleccione',
          choices: choices  
        }
    ]
    const {ids} = await inquirer.prompt(preguntaa);
    return ids;

}

module.exports = {
    inquireMenu,
    pausa,
    leerInput,
    listadoTareasBorrar, 
    confirmar,
    mostrarListadoChecklist
}