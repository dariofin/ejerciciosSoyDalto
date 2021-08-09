
const sumar = () => {
	let num1 = parseInt(prompt("Primer cifra a sumar"));
	let num2 = parseInt(prompt("Segunda cifra a sumar"));
	let resultado = num1 + num2;
	alert(`${num1} + ${num2} = ${resultado}`);
	document.write(`${num1} + ${num2} = ${resultado}`);
}
const restar = () => {
	let num1 = parseInt(prompt("Primer cifra a restar"));
	let num2 = parseInt(prompt("Segunda cifra a restar"));
	let resultado = num1 - num2;
	alert(`${num1} - ${num2} = ${resultado}`);
	document.write(`${num1} - ${num2} = ${resultado}`);
}
const dividir = () => {
	let num1 = parseInt(prompt("Primer cifra a dividir"));
	let num2 = parseInt(prompt("Segunda cifra a dividir"));
	let resultado = num1 / num2;
	alert(`${num1} / ${num2} = ${resultado}`);
	document.write(`${num1} / ${num2} = ${resultado}`);
}

const multiplicar = () => {
	let num1 = parseInt(prompt("Primer cifra a multiplicar"));
	let num2 = parseInt(prompt("Segunda cifra a multiplicar"));
	let resultado = num1 * num2;
	alert(`${num1} x ${num2} = ${resultado}`);
	document.write(`${num1} x ${num2} = ${resultado}`);
}


function Calculadora () {

	while (opcion) {
		let operacion = prompt(`Tipo de operación a realizar: S (Suma) | R (Resta) | D (División | M (Multiplicación)`);
		operacion = operacion.toUpperCase();

		if (operacion == "S") {
			sumar();
			opcion =false;

		}else if (operacion == "R") {
			restar();
			opcion =false;
		}else if (operacion == "D") {
			dividir();
			opcion =false;
		}else if (operacion == "M") {
			multiplicar();
			opcion =false;
		}else {
			alert("no es una opción válida!");
			opcion = true;
		}

	}

 }

Calculadora();




