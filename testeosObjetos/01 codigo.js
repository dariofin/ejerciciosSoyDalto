
/*  TIPO DE VARIABLES JS */


string = " cadena de texto ";
number = 29;
booleano = true;

let sindefinir; /* declaro la variable pero no le asigno valor, entonces no sabe que tipo de variable es y por lo tanto devuelve undefined */

let variablenull = null; /* le asingo un valor nulo, por lo que la variable es de tipo null */



/* declarando variables */


/* ------ Scoope ---- */

var variable_var /* la variable var tiene alcance global*/
let variable_let /* la variable let tiene alcance regional, solo en su contexto */
const variable_constante = "Variable const" /*la varibale const es una constante, no se puede modificar */

recipiente = "vaso";


/* INGRESO DE VALORES POR TECLADO */

let nombre = prompt("decime tu nombre");

document.write("hola " + nombre);