


let usuario;
usuario = prompt("Hola, dime tu nombre: ");
let nombreUsuario = usuario;

document.write(`<p>Hola <b>${usuario}</b>. güelcam tu de solushion wan</p>`);

alert("Hola " + usuario +" en la próxima ventana, ingresa solo valores numéricos, sin símbolos");

let en = false;
const bobo=23;

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
	

document.write(`-----------<br>MONEY <br>
	            -----------<br>`)
for (let nombre in dineroObj){

	if (dineroObj[nombre] !== 0 && dineroObj[nombre] !== 1) {
		document.write(`${nombre} tiene ${dineroObj[nombre]} pesos <br>`);
	}else {
		document.write(`${nombre} tiene ${dineroObj[nombre]} peso <br>`);
	}
	
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
let valorPalitoCrema = 9;
let valorBombonHeladix = 12;
let valorBombonHelardo = 12;
let valorPoteConfites = 32;

const HeladosObj = {
	palitoAgua: parseInt(valorPalitoAgua),
	palitoCrema: parseInt(valorPalitoCrema),
	bombonHeladix: parseInt(valorBombonHeladix),
	bombonHelardo: parseInt(valorBombonHelardo),
	poteConfites: parseInt(valorPoteConfites),

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
// 	let valorPalitoCrema = prompt(`Cuanto cuesta el Palito de Crema? `);
// 	let valorBombonHeladix = prompt(`Cuánto cuesta el Bombón Heladix? `);
// 	let valorBombonHelardo = prompt(`Cuánto cuesta el Bombón Helardo? `)
// 	let valorPoteConfites = prompt(`Cuánto cuesta el Pote de confites? `);
// } else {
// 	//listo los helados
// 	HeladosObj.dameListadoHelados();
// }

HeladosObj.dameListadoHelados();

//calculamos el vuelto
function vuelto (dinero, gasto) {
		let cambio = (parseInt(dinero) - parseInt(gasto));
		if (cambio == 0 ) {
			return "Que esperás el cambio? no te sobra nada valor";
		} 
		else if (cambio == 1) {
			return "Acá tenés el vuelto, te sobra un pesito";
		}
		else  {
			 return `y encima te sobran ${cambio} pesos`;
		}
}


//recorro un array y almaceno el dinero de cada uno
for (i in dineroObj){
	// document.write(`${i} es un ${typeof(i)}<br>`);
	// document.write(`${dineroObj[i]}  es un ${typeof(dineroObj[i])}`);
	if (dineroObj[i] >= valorPalitoAgua && dineroObj[i] < valorPalitoCrema){
	document.write(
		`${i} con esos <b>${dineroObj[i]} pesos</b> te comprás el Palito de Agua y no jodés más.<br>
		${vuelto(dineroObj[i], valorPalitoAgua)} <br><br>`);
	}	
	else if (dineroObj[i] >= valorPalitoCrema && dineroObj[i] < valorBombonHeladix){
		document.write(
		`${i} con esos <b>${dineroObj[i]} pesos</b> te comprás el  Palito de Crema, no está mal,
		 ${vuelto(dineroObj[i], valorPalitoCrema)} <br><br>`);
	}
	else if (dineroObj[i] >= valorBombonHeladix && dineroObj[i] < valorPoteConfites) {
	document.write(`
		${i} con esos <b>${dineroObj[i]} pesos</b> te comprás un Bombón Heladix o un Bombón Helardo, están tremendos<br>
		${vuelto(dineroObj[i], valorBombonHeladix)} <br><br>`);
		}
	else if (dineroObj[i] >= valorPoteConfites) {
	document.write(
		`${i} con esos <b>${dineroObj[i]} pesos</b> te comprás un pote con confites, lo ponés al lado del teclado 
		y sos uno solo con en el universo... ommm...  ${vuelto(dineroObj[i], valorPoteConfites)} <br><br>`);
	}
	else if (dineroObj[i] < valorPalitoAgua && dineroObj[i] !== 0 && dineroObj[i] !== 1) {
		document.write(`${i}, con esos <b>${dineroObj[i]} pesos</b> no tenés ni pa un helado, rajá de acá <br>`);
	}		
	else {
		document.write(`${i}, con <b>${dineroObj[i]} peso</b> que querés hacer, arrancá como una moto <br>`)
	}

}

