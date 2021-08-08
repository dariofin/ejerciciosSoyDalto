
// declaro variables
let cantAlumnos = 0;
let dias = 30;
let arrayAlumnos = [];
let porcentaje = 0;


do {
	cantAlumnos = prompt("¿Cuántos alumnos son en la clase?");
	if (isNaN(cantAlumnos)){
		alert("no es un numero");
	}else {
		cantAlumnos =parseInt(cantAlumnos);
	}
}while (isNaN(cantAlumnos)) 


//rellenar nombres de alumnos y listarlo
for (let i=0; i < cantAlumnos; i++){
	let nombreAlumno = prompt(`Nombre del alumno ${(i+1)})`);
	arrayAlumnos[i] = [nombreAlumno, 0];
}

alert("Iniciando control de asistencias, presione P para presente o A para ausente");

//pasar lista
for (let dia = 1; dia <=dias; dia++) {

	for (let i in arrayAlumnos){
		let opcion = true;

		while (opcion == true) {
			asistencia = prompt(`Día: ${dia} alumno: ${arrayAlumnos[i][0]} (P / A)`);
			//valida la entrada
			asistencia = asistencia.toUpperCase();

			if (asistencia !== "A" && asistencia !== "P")
				{
				alert("OPCIÓN INVÁLIDA!")
				opcion = true; 
			}

			else if (asistencia == "A") {
				arrayAlumnos[i][1]++;
				opcion = false;
			}

			else {
				opcion = false;
			}

		}
	}
}

document.write("<p> Se pasó lista durante <b>" + dias + " días</b> </p> ")
document.write("<p> Se permite un máximo de 10% de Inasistencias</p> <ul> ")

for (let i in arrayAlumnos){

	porcentaje = Math.round((arrayAlumnos[i][1] / 30)*100) ;

		document.write(`<li><b> ${arrayAlumnos[i][0]}: </b><br>
		Inasistencias: ${arrayAlumnos[i][1]} (${porcentaje} %)</li>`)
		if (porcentaje > 10) {
			document.write("REPROBADO POR INASISTENCIAS <br><br>" );
		} 
			else {
				document.write("<br><br>")
			}

}



// document.write(typeof cantAlumnos)