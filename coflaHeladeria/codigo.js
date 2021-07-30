


let usuario;
usuario = prompt("Hola, dime tu nombre: ");
let nombreUsuario = usuario;

document.write(`<p>Hola <b>${usuario}</b>. güelcam tu de solushion wan</p>`);

alert("Hola " + usuario +" en la próxima ventana, ingresa solo valores numéricos, sin símbolos");


// let dineroRoberto = parseInt(prompt(`Roberto, cuanto dinero tiene? `));
// let dineroPedro = parseInt(prompt(`Pedro, cuanto dinero tiene? `));
// let dineroCofla = parseInt(prompt(`Cofla, cuanto dinero tiene? `));
// let dineroBritanio = parseInt(prompt(`Brifanio, cuanto dinero tiene? `));

let dineroObj = {
	Roberto : parseInt(prompt(`Roberto, cuanto dinero tiene? `)),
	Pedro : parseInt(prompt(`Pedro, cuanto dinero tiene? `)), 
	Cofla : parseInt(prompt(`Cofla, cuanto dinero tiene? `)),
	Britanio : parseInt(prompt(`Brifanio, cuanto dinero tiene? `)),
}
	

document.write("Dinero de los gurises: <br>")
for (let nombre in dineroObj){
	document.write(`${nombre} tiene ${dineroObj[nombre]} pesos <br>`);
}

// let dineroArray = [
// 	parseInt(dineroRoberto), 
// 	parseInt(dineroPedro), 
// 	parseInt(dineroCofla), 
// 	parseInt(dineroBritanio)
// ];


// const gurisesObj = {
// 	Roberto: parseInt(dineroRoberto), 
// 	Pedro: parseInt(dineroPedro), 
// 	Cofla: parseInt(dineroCofla), 
// 	Britanio: parseInt(dineroBritanio)
// };

let valorPalitoAgua = 6;
let valorpalitoCrema = 9;
let valorbombonHeladix = 12;
let valorbombonHelardo = 12;
let valorpoteConfites = 32;

const HeladosObj = {
	palitoAgua: parseInt(valorPalitoAgua),
	palitoCrema: parseInt(valorpalitoCrema),
	bombonHeladix: parseInt(valorbombonHeladix),
	bombonHelardo: parseInt(valorbombonHelardo),
	poteConfites: parseInt(valorpoteConfites),

	dameListadoHelados() {
		document.write(`
			<p>
			--------------------------<br>
			Precio de los Helados:<br>
			--------------------------<br>
			</p>
			<p>
			Palito de Agua: ${this.palitoAgua} pesos<br>
			Palito de Crema: ${this.palitoCrema} pesos<br>
			Bombón Heladix: ${this.bombonHeladix} pesos<br>
			Bombón Helardo: ${this.bombonHelardo} pesos<br>
			Pote confites viaje: ${this.poteConfites} pesos<br>
			</p>`)
	}

}
//Opcion a redefinir el valor a los helados
//necesito ordenar de mayor a menor por ahora no puedo
// let ingresaValorHelados= prompt("Quieres ingresar el valor de los helados? (S/N)");
// if (ingresaValorHelados.toUpperCase()== "S"){
// 	let valorPalitoAgua = prompt(`Cuánto cuesta el Palito de Agua? `);
// 	let valorpalitoCrema = prompt(`Cuanto cuesta el Palito de Crema? `);
// 	let valorbombonHeladix = prompt(`Cuánto cuesta el Bombón Heladix? `);
// 	let valorbombonHelardo = prompt(`Cuánto cuesta el Bombón Helardo? `)
// 	let valorpoteConfites = prompt(`Cuánto cuesta el Pote de confites? `);
// } else {
// 	//listo los helados
// 	HeladosObj.dameListadoHelados();
// }

HeladosObj.dameListadoHelados();



//recorro un array y almaceno el dinero de cada uno
for (i in dineroObj){
	// document.write(`${i} es un ${typeof(i)}<br>`);
	// document.write(`${dineroObj[i]}  es un ${typeof(dineroObj[i])}`);

	if (dineroObj[i] >=valorPalitoAgua && dineroObj[i]< valorpalitoCrema){
	document.write(
		`${i} con esos ${dineroObj[i]} pesos te comprás el Palito de Agua y no jodés más.<br>
		Te sobran ${(dineroObj[i] - valorPalitoAgua)} pesos <br><br>`);
	}	
	else if (dineroObj[i] >=valorpalitoCrema && dineroObj[i]< valorbombonHeladix){
	document.write(
		`${i} con esos ${dineroObj[i]} pesos te comprás el  Palito de Crema, no está mal,
		 tiene un cacho de gusto a vainilla y te sobran ${(dineroObj[i] - valorPalitoAgua)} pesos <br><br>`);
	}
	else if (dineroObj[i]  >=valorbombonHeladix && (dineroObj[i]) < valorpoteConfites) {
	document.write(`
		${i} con esos ${dineroObj[i]} pesos te comprás un Bombón Heladix o un Bombón Helardo, están tremendos, la pasas bomba<br>
		y te sobran ${(dineroObj[i] - valorbombonHeladix)} pesos <br><br>`);
		}
	else if (dineroObj[i]   >=valorpoteConfites) {
	document.write(
		`${i} con esos ${dineroObj[i]} pesos te comprás un pote con confites, lo ponés al lado del teclado 
		y sos uno solo con en el universo <br>
		te sobran ${(dineroObj[i] - valorpoteConfites)} pesos <br><br>`);
		}		
	else {
		document.write(`${i}, con esos ${dineroObj[i]} pesos no tenés ni pa un helado, rajá de acá <br>`)
	}

}

