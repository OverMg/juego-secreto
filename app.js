let numero = 0;
let intentos = 0;
let listaNumerosUsados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
}

function verificarIntento() {
	let numeroUsuario = parseInt(document.getElementById("valorUser").value);

	if (numeroUsuario === numero) {
		asignarTextoElemento("p", `Acertaste el numero!\nEn ${intentos} ${ intentos == 1 ? "intento" : "intentos" }`
		);
		document.getElementById("reiniciar").removeAttribute("disabled");
	} else {
		if (numeroUsuario > numero) {
			asignarTextoElemento("p", "El numero es menor!");
		} else {
			asignarTextoElemento("p", "El numero es mayor!");
		}
		intentos++;
		limpiarCaja();
	}
	return;
}

function limpiarCaja() {
	document.querySelector("#valorUser").value = "";
}

function generarNumero() {
	const nuevoNumero = Math.floor(Math.random() * numeroMaximo) + 1;

	if (listaNumerosUsados.length === 10) {
		document.getElementById("intentar").setAttribute("disabled","true");
		asignarTextoElemento('p', 'Ya se sortearon todos los numero!.')
	} else {
		if (listaNumerosUsados.includes(nuevoNumero)) {
			return generarNumero();
		} else {
			listaNumerosUsados.push(nuevoNumero);
			return nuevoNumero;
		}
	}
}

function condicionesIniciales() {
	asignarTextoElemento("h1", "Juego del numero secreto");
	asignarTextoElemento("p", `Ingresa un numero del 1 al ${numeroMaximo}`);
	numero = generarNumero();
	intentos = 1;
}

function reiniciarJuego() {
	// limpiar caja
	limpiarCaja();
	// indicar mensaje de intervalo de numeros
	// Generar el numero aleatorio
	// Inicializar el numero de intentos
	condicionesIniciales();
	// deshabilitar el boton para volver a jugar
	document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();