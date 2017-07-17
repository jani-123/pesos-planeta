
var peso = parseFloat("Ingrese su peso")
function planetas(){
	
	var peso_mercurio = peso * 3.7;
	var peso_venus=peso * 8.87;
	var peso_tierra=peso * 9.807;
	var peso_marte=peso * 3.711;
  var pesoJupiter = peso * 23.12;
	var pesoSaturno = peso * 8.96;
	var pesoUrano = peso * 8.69;
	var pesoNeptuno = peso * 11;

   alert("tu peso en jupiter es " + pesoJupiter.toFixed(1));
	alert("tu peso en saturno es " + pesoSaturno.toFixed(1));
	alert("tu peso en urano es " + pesoUrano.toFixed(1));
	alert("tu peso en neptuno es " + pesoNeptuno.toFixed(
	 alert("tu peso en mercurio es" + peso_mercurio);
	 alert("tu peso en venus es" + peso_venus);
	 alert("tu peso en tierra es" + peso_tierra);
	 alert("tu peso en martes es" + peso_marte);
}



planetas()