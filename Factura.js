export default class Factura{
    constructor(nombre,direccion,fecha,noDeFactura,totalDeFactura){
        this._nombre = nombre.toUpperCase();
        this._direccion = direccion;
        this._fecha = fecha;
        this._noDeFactura = noDeFactura;
        this._totalDeFactura = totalDeFactura;
    }

    //Metodos de acceso de lectura

    get fecha(){
        return this._fecha;
    }

    get totalDeFactura(){
        return this._totalDeFactura;
    }
    get noDeFactura(){
        return this._noDeFactura;
    }

    //Metodos de acceso de lectura

    set noDeFactura(noDeFactura){
        this._noDeFactura = noDeFactura;
    }

    imprimirValores(){
        console.log(`La factura No. ${this._noDeFactura} a nombre de ${this._nombre} en la direccion: ${this._direccion}, fue expedida el dia ${this._fecha} por la cantidad de ${this._totalDeFactura}`);
    }   
}