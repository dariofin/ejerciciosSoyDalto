
// declaro variables
let cantAlumnos = 0;
let dias = 0;
let arrayAlumnos = [];
let presencias = 0;
let ausencias = 0;
let inas_porcent = 0;
let porcent_tolera = 0;


do {
	cantAlumnos = prompt("¿Cuántos alumnos son en la clase?");
	if (isNaN(cantAlumnos)){
		alert("no es un numero");
	}else {
		cantAlumnos =parseInt(cantAlumnos);
	}
}while (isNaN(cantAlumnos)) 


do {
	dias = prompt("¿Cuántos días quiere pasar lista?");
	if (isNaN(dias)){
		alert("no es un numero");
	}else {
		dias =parseInt(dias);
	}
}while (isNaN(dias)) 


do {
	porcent_tolera = prompt("¿Que porcentaje de inasistencias se tolera?");
	if (isNaN(porcent_tolera) || porcent_tolera >=100){
		alert("ingrese solo un numero menor a tres cifras");
	}else {
		porcent_tolera =parseInt(porcent_tolera);
	}
}while (isNaN(porcent_tolera)) 


function PrimeraLetraMayuscula(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

document.write("<h3>Listado de alumnos: </h3> <ol>")

//rellenar nombres de alumnos y listarlo
for (let i=0; i < cantAlumnos; i++){
	let nombreAlumno = prompt(`Nombre del alumno ${(i+1)})`)
	nombreAlumno = PrimeraLetraMayuscula(nombreAlumno);

	arrayAlumnos[i] = [nombreAlumno, 0, 0];
	document.write( 
		`<li> ${arrayAlumnos[i][0]} 	</li>`)
}
document.write("</ol>")


alert("Iniciando control de asistencias, presione P para presente o A para ausente");

//pasar lista
for (let dia = 1; dia <=dias; dia++) {

	for (let i in arrayAlumnos){
		let opcion = true;

		while (opcion == true) {
			asistencia = prompt(`DIA ${dia}, alumno ${arrayAlumnos[i][0]} (P / A)`);
			//valida la entrada
			if (asistencia.toUpperCase() !== "A" && asistencia.toUpperCase() !== "P")
				{
				alert("OPCIÓN INVÁLIDA!")
				opcion = true; 
			}

			//suma ausencias
			else if (asistencia.toUpperCase() == "A" ) {
				arrayAlumnos[i][1]++;
				opcion = false;
			}

			//suma presencias
			else {
				arrayAlumnos[i][2]++;
				opcion = false;
			}

		}
	}
}
document.write("<h4>Resumen: </h4>")
document.write("<p> Se pasó lista durante <b>" + dias + " días </b> <br>")
document.write("Se tolera un máximo de <b>" + porcent_tolera + "%</b> de inasistencias</p> ")
document.write("<ul>")

for (let i in arrayAlumnos){
//calculo el porcentaje de inasistencias de cada alumnto
		inas_porcent = Math.round((arrayAlumnos[i][1] / dias)*100) ;

//imprimo en pantalla los datos de las inasistencias
		document.write(`<li><b> ${arrayAlumnos[i][0]}: </b> <br>
		Presencias: ${arrayAlumnos[i][2]}<br>  
		Ausencias: ${arrayAlumnos[i][1]}  (${inas_porcent} %)</li>`)
		if (inas_porcent > porcent_tolera) {
			document.write("<b>REPROBADO POR INASISTENCIAS </b><br><br>" );
		} 
			else if (inas_porcent == 0) {
				document.write("<b>ASISTENCIA PERFECTA </b><br><br>");
			}
			else if (inas_porcent !== 0) {
				document.write("<br><br>");
			}			
			else {
				continue
			}
}
document.write("</ul>")


// document.write(typeof cantAlumnos)