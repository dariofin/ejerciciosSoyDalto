let cadena = "cadena de texto para testeo";
let palabra1 = "cadena";
let palabra2 = "rancio";
let palabra3 = "testeo";

document.write(`<div class="recuadro">
	<div> Variables para testeo</div>
	<em>
	let cadena = "<b>${cadena}</b>" <br>
	let palabra1 = <b>"${palabra1}" </b><br>
	let palabra2 = <b>"${palabra2}"</b> <br>
	let palabra3 = <b>"${palabra3}"</b> <br>
	</em>
	</div>
	`);

//startsWith()
document.write(
  "<br><h2>startsWith()</h2>El método <b>startsWith(stringBuscado, posición)</b> indica si una cadena de texto comienza con los caracteres de una cadena de texto concreta que pasamos por parámetros. Devolviendo true o false según corresponda.<br> La posición de inicio es un parámetro opcional y por defecto es 0"
);
document.write(`<hr>
	Sintáxis del método <b>startsWith():</b> <br>
	- <em>cadena.startsWith(palabra1)</em> devuelve: 
	<b> ${cadena.startsWith(palabra1)}</b><br>
	- <em>cadena.startsWith(palabra2)</em> devuelve: 
	<b> ${cadena.startsWith(palabra2)}</b><br>
	- <em>cadena.startsWith(palabra3)</em> devuelve: 
	<b> ${cadena.startsWith(palabra2)}</b><br>
	<hr><br>
`);

//endsWith()
document.write(
  "<h2>endsWith()</h2>El método <b>endsWith(stringBuscado, posición)</b> es el opuesto a startsWith. Indica si una cadena de texto finaliza con los caracteres de una cadena de texto concreta que pasamos por parámetros. Devolviendo true o false según corresponda. <br> La posición de inicio es un parámetro opcional y por defecto es 0"
);
document.write(` <br> <hr>
	Sintáxis del método <b>endsWith():</b> <br>
	- <em>cadena.endsWith(palabra1)</em> devuelve: 
	<b> ${cadena.endsWith(palabra1)}</b><br>
	- <em>cadena.endsWith(palabra2)</em> devuelve: 
	<b> ${cadena.endsWith(palabra2)}</b><br>
	- <em>cadena.endsWith(palabra3)</em> devuelve: 
	<b> ${cadena.endsWith(palabra3)}</b><hr><br>
`);

//includes()
document.write(
  "<h2>includes()</h2> El método includes(stringBuscado, posición) determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda. <br> La posición de inicio es un parámetro opcional y por defecto es 0."
);
document.write(` <br> <hr>
	Sintáxis del método <b>includes(stringBuscado, posición):</b> <br>
	- <em>cadena.includes(palabra1)</em> devuelve: 
	<b> ${cadena.includes(palabra1)}</b><br>
	- <em>cadena.includes(palabra2)</em> devuelve: 
	<b> ${cadena.includes(palabra2)}</b><br>
	- <em>cadena.includes("otracosa")</em> devuelve: 
	<b> ${cadena.includes("otracosa")}</b><hr><br>
`);

//indexOf()
document.write(
  "<h2>indexOf()</h2>Recorre el array o string de izquierda a derecha y retorna el primer índice en el que se puede encontrar el elemento pasaado por parámetro dentro del array o cadena de texto, retorna -1 si el elemento no esta presente.<br> La posición de inicio es un parámetro opcional y por defecto es 0"
);
document.write(` <br> <hr>
	Sintáxis del método <b>indexOf(stringBuscado, posición):</b> <br>
	- cadena original:<em> ${cadena} </em><br>
	- <em>cadena.indexOf("te")</em> devuelve: 
	<b> ${cadena.indexOf("te")}</b><br>
	- <em>cadena.indexOf(palabra2)</em> devuelve: 
	<b> ${cadena.indexOf(palabra2)}</b><br>
	- <em>cadena.indexOf("otracosa")</em> devuelve: 
	<b> ${cadena.indexOf("otracosa")}</b><hr><br>
`);

//lastIndexOf()
document.write(
  "<h2>lastIndexOf()</h2> Recorre el array o string de derecha a izquierda y retorna el primer índice en el que se puede encontrar el elemento pasaado por parámetro dentro del array o cadena de texto, retorna -1 si el elemento no esta presente.<br> La posición de inicio es un parámetro opcional y por defecto es 0"
);
document.write(` <br> <hr>
	Sintáxis del método <b>lastIndexOf(stringBuscado, posición):</b> <br>
	- cadena original: <em>${cadena} </em><br>
	- <em>cadena.lastIndexOf("te")</em> devuelve: 
	<b> ${cadena.lastIndexOf("te")}</b><br>
	- <em>cadena.lastIndexOf(palabra2)</em> devuelve: 
	<b> ${cadena.lastIndexOf(palabra2)}</b><br>
	- <em>cadena.lastIndexOf("otracosa")</em> devuelve: 
	<b> ${cadena.lastIndexOf("otracosa")}</b><hr><br>
`);

//padStart()
document.write(
  "<h2>padStart()</h2> Rellena la cadena actual con una cadena pasada por parámetros (repetida eventualmente) de modo que la cadena resultante alcance una longitud pasada por parámetros. El relleno es aplicado desde el inicio (izquierda) de la cadena actual."
);
document.write(` <br> <hr>
	Sintáxis del método <b>padStart(longitud, relleno):</b> <br>
	- cadena original: <em>${cadena} </em><br>
	- <em>cadena.padStart(50, "·")</em> devuelve: 
	<b> ${cadena.padStart(50, "·")}</b><br>
	- <em>cadena.padStart(60, " relleno ")</em> devuelve: 
	<b> ${cadena.padStart(60, " relleno ")}</b><br><hr><br>
`);

//padEnd()
document.write(
  "<h2>padEnd()</h2> Rellena la cadena actual con una cadena pasada por parámetros (repetida eventualmente) de modo que la cadena resultante alcance una longitud pasada por parámetros. El relleno es aplicado desde el final (derecha) de la cadena actual."
);
document.write(` <br> <hr>
	Sintáxis del método <b>padEnd(longitud, relleno):</b> <br>
	- cadena original: <em>${cadena} </em><br>
	- <em>cadena.padEnd(50, "·")</em> devuelve: 
	<b> ${cadena.padEnd(50, "·")}</b><br>
	- <em>cadena.padEnd(60, " relleno ")</em> devuelve: 
	<b> ${cadena.padEnd(60, " relleno ")}</b><br><hr>
	<br>
`);

//repeat()
document.write(
  "<h2>repeat()</h2> Construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados. El parámetro debe ser un entero entre 0 y +∞: [0, +∞), indicando el número de veces a repetir la cadena en la nueva cadenada creada que será devuelta."
);

let texto1 = "soy un texto... ";
document.write(` <br> <hr>
	Sintáxis del método <b>repeat(count):</b> <br>
	- cadena original: <em>"soy un texto... "</em><br>
	- <em>texto1.repeat(0)</em> devuelve: 
	<b> ${texto1.repeat(0)}</b><br>
	- <em>texto1.repeat(2)</em> devuelve: 
	<b> ${texto1.repeat(2)}</b><br>
	- <em>texto1.repeat(4)</em> devuelve: 
	<b> ${texto1.repeat(4)}</b><br><hr>
	<br>
`);

//split()
document.write(
  `<h2>split()</h2> Divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena original en subcadenas. <br> El método split() devuelve el nuevo array con la cantidad con la longitud indicada por parámetro (opcional), si se omite se devuelven todos los índices que se generen del string`
);

document.write(` <br> <hr>
	Sintáxis del método <b>split(separador,limite)</b> <br>
	- <em>la cadena original es: </em> 
	<b> ${cadena}</b><br>
	- <em>cadena.split(" ", 5)</em> devuelve un array así:  
	<b>[${cadena.split(" ", 5)}]</b><br>
	- <em>cadena.split("a")</em> devuelve: 
	<b> [${cadena.split("a")}]</b><br><hr>	<br> `);

//substring()
document.write(`<h2>substring()</h2>
	<b>Sintáxis: substring(indiceA, indiceB) </b> <br>
	La función substring devuelve el pedazo de una cadena que va desde el índiceA, hasta el índiceB(no incluído)  
	 <br>`);

document.write(` <br> 
	
	- <em>la cadena original es: </em> 
	<b> ${cadena}</b><br>
	- <em>cadena.substring(0,5)</em> devuelve un array así:  
	<b>[${cadena.substring(0, 5)}]</b><br>
	- <em>cadena.substring(10)</em> devuelve: 
	<b> [${cadena.substring(10)}]</b><br>
	- <em>cadena.substring(2,10)</em> devuelve: 
	<b> [${cadena.substring(2, 10)}]</b><br>
	- <em>cadena.substring(2,4)</em> devuelve: 
	<b> [${cadena.substring(2, 4)}]</b><br>	<hr>	<br> `);
