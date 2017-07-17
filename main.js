var peso = parseFloat(prompt("ingrese su peso"));
function planetas()
{
	
	var pesoJupiter = peso * 23.12;
	var pesoSaturno = peso * 8.96;
	var pesoUrano = peso * 8.69;
	var pesoNeptuno = peso * 11;

	alert("tu peso en jupiter es " + pesoJupiter.toFixed(1));
	alert("tu peso en saturno es " + pesoSaturno.toFixed(1));
	alert("tu peso en urano es " + pesoUrano.toFixed(1));
	alert("tu peso en neptuno es " + pesoNeptuno.toFixed(1));

}
planetas()