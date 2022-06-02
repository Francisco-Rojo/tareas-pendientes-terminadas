
// tarea de forma independiente

const {v4:uudiv4} = require('uuid');

// creacion de clase tarea 
class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc) {
        this.id = uudiv4();
        this.desc = desc;
        this.completadoEn = null;
    }
}
// const uuidv4 = require('uuid/v4'); // <== NOW DEPRECATED!
// uuidv4();
module.exports = Tarea;