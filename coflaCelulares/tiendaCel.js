
alert("entrando en TiendaCel 1.0");


class CelularBase {
	constructor (color, peso, pantalla, resCamara, ram){
		this.color = color;
		this.peso = peso;
		this.pantalla = pantalla;
		this.resCamara = resCamara;
		this.ram = ram;
		this.encendido = false;
	}

	encenderBtn() {
		if (this.encendido == false) {
			alert ("Encendiendo el celular...");
			this.encendido = true;
			return "Celular encendido";
		} else {
			alert ("Apagando celular");
			this.encendido =  false;
			return "Celular apagado";
		}
	}

	reiniciar() {
		if (this.encendido == true ){
			alert ("Reiniciando...");
			return "Celular reiniciado";
			
		}else {
			alert("El celular está apagado, no se puede reiniciar");
			return "encienda el celular";
		}
	}

	tomarFoto(){
		if (this.encendido == true ){
			return`Foto tomada en ${this.resCamara}`;
		}else {
			alert("El celular está apagado, no se puede tomar fotos");
			return "encienda el celular";
		}
	}

	grabarVideo(){
		return `Video grabado en ${this.resCamara}`;
	}

}


class CelularAltaGama extends CelularBase {
	constructor(color, peso, pantalla, resCamara, ram, camExtra){
	super(color, peso, pantalla, resCamara, ram);
	this.camExtra = camExtra;
	}

	detectarRostro(){
		return `Detección de rostro completada`
		;
	}
	grabarLento(){
		return `Grabación en cámara lenta completada`
		;
	}		

}

const celulares = [
	celular1 = new CelularBase ('negro', '150g', '5.1"', 'HD', '2GB' ),
	celular2 = new CelularBase ('azul', '180g', '5.5"', 'FullHD', '3GB' ),
	celular3 = new CelularBase ('verde', '170g', '5.5"', 'FullHD', '4GB' ),
]
const celularesAltaGama = [
	celularAG1 = new CelularAltaGama ('rojo', '180g', '6.5"', '4K', '4GB', 'FullHD' ),
	celularAG2 = new CelularAltaGama ('azul', '180g', '6.2"', '4K', '8GB', '4K' ),
]

document.write("	<h3>Celulares económicos</h3>")
let contador = 1;
for (x in celulares) {
	document.write(`Modelo ${[contador]}  <br>
			Color: ${celulares[x].color}<br>
			Peso: ${celulares[x].peso}<br>
			Pantalla: ${celulares[x].pantalla}<br>
			Resolución: ${celulares[x].resCamara}<br>
			Memoria RAM: ${celulares[x].ram}<br>
			----------------------------<br><br>`);
	contador++;
}

alert(celulares[0].encenderBtn());
alert(celulares[0].reiniciar());
alert(celulares[0].tomarFoto());
alert(celulares[0].grabarVideo());
alert(celularesAltaGama[0].detectarRostro());
alert(celularesAltaGama[0].grabarLento());

alert(celulares[0].encenderBtn());



document.write("<h3>Celulares de alta gama</h3>")

let contador2 = 1;

for (x in celularesAltaGama) {
	document.write(`Modelo ${[contador2]}  <br>
			Color: ${celularesAltaGama[x].color}<br>
			Peso: ${celularesAltaGama[x].peso}<br>
			Pantalla: ${celularesAltaGama[x].pantalla}<br>
			Resolución: ${celularesAltaGama[x].resCamara}<br>
			Resolución Cámara Extra: ${celularesAltaGama[x].camExtra}<br>			
			Memoria RAM: ${celularesAltaGama[x].ram}<br>
			----------------------------<br><br>`);
	contador2++;
}



// document.write(`Celular 1 : <br>
				// Color: ${celular1.color}<br>
				// Peso: ${celular1.peso}<br>
				// Pantalla: ${celular1.pantalla}<br>
				// Resolución: ${celular1.resCamara}<br>
				// Memoria RAM: ${celular1.ram}`)



// celular1.encenderBtn();
// celular1.reiniciar();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.encenderBtn();




