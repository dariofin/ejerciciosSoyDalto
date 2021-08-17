class App {
	constructor(nombre, descargas, puntuacion, peso){
		this.nombre = nombre;
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;

		this.iniciada = false;
		this.instalada = false;
	
		this.info = `
		-------------------------------<br>
		Nombre: <b>${this.nombre}</b><br>
		Descargas: <b>${descargas}</b><br>
		Puntuación  <b>${puntuacion}</b> <br>
		Peso: <b>${peso}</b> <br>
		------------------------------- <br><br>`;
	}

	instalar(){
		if (this.instalada == false){
			alert(`${this.nombre} se va a instalar...`);
			this.instalada = true;
			return `${this.nombre} instalada`;
		} else {
			alert(`La app ${this.nombre} ya está instalada...`);
		}
	}
	desinstalar(){
		if (this.instalada == true){
			alert(`${this.nombre} se va a desinstalar...`);
			this.instalada = false;
			return `${this.nombre} desinstalada`;
		} else {
			alert(`La app ${this.nombre} no está instalada...`);
		}
	}

	iniciar(){
		if (this.instalada == true && this.iniciada == false){
			alert(`${this.nombre} se va a iniciar...`);
			this.iniciada = true;
			return `${this.nombre} iniciada`;
		} else if (this.instalada == false){
			alert(`La app ${this.nombre} no está instalada...`);
		} else if (this.iniciada == true){
			alert(`La app ${this.nombre} ya está iniciada...`);
		} else {
			return "no se puede iniciar debido a un error";
		}
	}
	cerrar(){
		if (this.instalada == true && this.iniciada == true){
			alert(`${this.nombre} se va a cerrar...`);
			this.iniciada = false;
			return `${this.nombre} cerrada`;
		} else if (this.instalada == false){
			alert(`La app ${this.nombre} no está instalada...`);
		} else if (this.iniciada == fase){
			alert(`La app ${this.nombre} no está iniciada...`);
		} else {
			return "no se puede iniciar debido a un error";
		}
	}

}

document.write(`<h2> Apps Disponibles </h2>`);

const appsDisponibles = [
 	appAjedrez = new App("Ajedrez 2000", "5500", "4.5 estrellas", "82 MB"),
 	appClashRoyale = new App("ClashRoyale", "17500", "5 estrellas", "60 MB"),
 	appCandyCrush = new App("CandyCrush", "2500", "5 estrellas", "128 MB"),
 ]

for (x in appsDisponibles){
	document.write(`${appsDisponibles[x].info} <br>`);
	appsDisponibles[x].instalar();
	appsDisponibles[x].instalar();
	appsDisponibles[x].iniciar();
	appsDisponibles[x].cerrar();

}

// document.write(appAjedrez.info);
// appAjedrez.desinstalar();
// appAjedrez.instalar();
