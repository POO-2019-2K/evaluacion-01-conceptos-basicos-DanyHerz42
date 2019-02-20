export default class Paciente{
    constructor(nombre,direccion,fechaNacimiento,peso,altura,alergias,proximaCita){
        this._nombre = nombre.toUpperCase();
        this._direccion = direccion;
        this._fechaNacimiento = fechaNacimiento;
        this._peso = peso;
        this._altura = altura;
        this._alergias = alergias;
        this._proximaCita = proximaCita;
    }

    //Metodos de acceso de lectura

    get fechaNacimiento(){
        return this._fechaNacimiento;
    }

    set fechaNacimiento(fechaNacimiento){
        this._fechaNacimiento = fechaNacimiento;
    }
    set peso(peso){
        this._peso = peso;
    }
    set altura(altura){
        this._altura = altura;
    }

    //Metodos de acceso de escritura

    imprimirValores(){
        console.log(`El paciente ${this._nombre} que vive en la direccion ${this._direccion} nacio el ${this._fechaNacimiento}, tiene un peso de ${this._peso}, una altura de ${this._altura}, sus alergias son ${this._alergias}. Su proxima cita sera el ${this._proximaCita}.`);
    }   
}