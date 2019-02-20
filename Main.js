import Factura from "./Factura.js";
import Paciente from "./Paciente.js";
import Casa from "./Casa.js";


//------------------------Primer Objeto------------------------------------
var fecha = new Date("2015-12-01").toLocaleDateString();
var f1 = new Factura("Doroteo Arango","Calle las palmas #411",fecha, 32, 324);

f1.imprimirValores();
console.log(f1.fecha);
console.log(f1.totalDeFactura);
console.log(f1.noDeFactura);
f1.noDeFactura = 33;
console.log(f1.noDeFactura);

//------------------------Segundo Objeto---------------------------------
var fecha = new Date("2000-01-04").toLocaleDateString();
var proximaCita = new Date("2019-02-24").toLocaleDateString();
var p1 = new Paciente("Daniel Hernandez","Cedro #60",fecha, 80, 1.82, "perros y germenes",proximaCita);

p1.imprimirValores();
console.log(p1.fechaNacimiento);
p1.peso = 79;
p1.imprimirValores();

//------------------------Tercer Objeto---------------------------------

var ca1 = new Casa(160290,"80 m2",3,2,"Calle Universidad #345");

ca1.imprimirValores();

