export default class Casa{
    constructor(precio,superficie,noHabitacion,noBaños,direccion){
        this._precio = precio;
        this._superficie = superficie;
        this._noHabitacion = noHabitacion;
        this._noBaños = noBaños;
        this._direccion = direccion;
    }

    //Metodos de acceso de lectura

    get precio(){
        return this._precio;
    }

    get superficie(){
        return this._superficie;
    }

    set noBaños(noBaños){
        this._noBaños = noBaños;
    }
    set noHabitacion(noHabitacion){
        this._noHabitacion = noHabitacion;
    }

    imprimirValores(){
        console.log(`La casa ubicada en la direccion ${this._direccion} tiene un superficie de ${this._superficie}, un precio de ${this._precio}, cuenta con ${this._noBaños} baños y con ${this._noHabitacion} habitaciones.`);
    }   
}