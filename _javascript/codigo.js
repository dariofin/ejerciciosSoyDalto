let array1 = ["maría", "pedro", "juana"];
let array2 = ["Ramón", "Pocho", array1 , "Pedro"];



bucle:
for (let arrays in array2) {

	if (arrays == 2) {
		for (let arrays of array1){
			document.write("Esto viene de array1 <br>")
			break bucle;
			// document.write(arrays + "<br/>")
		}
	}

	else {
		document.write(array2[arrays] + "<br/>")
	}
	

}