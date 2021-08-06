

let freePass = true; 
let hora = 1;



function entrada(nombre, edad, hora) {
	if (edad<18){
		alert(`Vete de aquí niño, a ver el papá o la mamá de ${nombre}`);
	}
	else if (hora >= 2 && hora < 7 && freePass == true){
		freePass = false;
		alert(`Pasás graterola, sos el primero después de las 2 AM`);
	}
	else {
		alert(`Hola ${nombre}, son las ${hora} AM, así que pasá por boletería y pagá la entrada `)
	}

}





do {
	let tuNombre = prompt("Hola, ¿dime tu nombre?")
	let tuEdad = prompt("¿que edad tienes?");
	alert(`Nombre: ${tuNombre} |  Hora: ${hora} AM`)
	entrada(tuNombre, tuEdad, hora);
	hora++;
	seguir = prompt(`¿Viene otra persona? (S/N), ya es la hora ${hora}`)
} while (seguir == "S" || seguir == "s") 
