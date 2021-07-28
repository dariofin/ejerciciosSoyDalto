helados = {

	heladoAgua: 20,
	sandwiche: 50,
	cono: 80,
	poteMedio: 100,
	especial: 100,
}


let nombre = prompt("decime tu nombre");


let dinero = parseInt (prompt ("cuanto dinero tienes?"));

if (dinero < 20) {
	document.write("no te podés comprar nada, anda a cagar");

	} else if (dinero > 20 && dinero < 50) {
		document.write("llevate un helado de agua y te sobran $" + (dinero - helados.heladoAgua));
	}
	else if (dinero >= 50 && dinero < 80) {
		document.write("llevate un Sandwiche de crema y te sobran $" + (dinero - helados.sandwiche));
	}
	else if (dinero >= 80 && dinero < 100) {
		document.write("llevate un Cono bombón y te sobran $" + (dinero - helados.cono));
	}
	else if (dinero >= 100 && dinero < 200) {
		document.write("Llevate un Pote de 1/2 kg. o un Especial y te sobran $" + (dinero - helados.especial));
	}
		else if (dinero >= 200) {
		document.write("Llevate dos Pote de 1/2 kg. o dos Especiales o uno y uno, total tenés un montón de plata... <br> y dejá el cambio");
	}
	else {
		document.write("terminamos");
	}
