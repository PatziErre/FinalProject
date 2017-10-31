// Pedimos el número de tarjeta
var numeroDeTarjeta = prompt("Ingresa el número de tarjeta a validar");
// Lo pasamos al array para comprobar
isValidCard(numeroDeTarjeta);

function isValidCard(numeroDeTarjeta) {
  // Si el número es un campo en blanco o nulo, regresar un error
  if (!numeroDeTarjeta || numeroDeTarjeta === " ") {
    alert("No introdujiste un número validable, por favor, intenta de nuevo");
  } else {
    // Pasamos todos los dígitos a un arreglo
    var tarjetaEnArreglo = numeroDeTarjeta.split("");
    // Volteamos el arreglo en un nuevo arreglo
    var tarjetaInversa = tarjetaEnArreglo.reverse();
    // Inicializar un arreglo nuevo con los números del algoritmo de luhn
    var tarjetaDigitalizada = [];
    
    // Recorrer uno por uno los dígitos de la tarjejta inversa
    for (var i = 0; i< tarjetaInversa.length; i++){
      
      // Si el número esta en una posición impar, lo agregamos tal cual al arreglo que vamos a sumar
		  if (i == 0 || i % 2 == 0){
        tarjetaDigitalizada[i] = parseInt(tarjetaInversa[i]);
      }

		  if (i % 2 != 0){
        var digitoDoble = tarjetaInversa[i] * 2;
        // Si el número esta en posición par y su suma al doble es mayor a 10, sumamos sus dos dígitos
        if (digitoDoble >=10) {
          var arregloDecimal = digitoDoble.toString().split("");
          // Y los agregamos a su posición en el arreglo cómo suma
          tarjetaDigitalizada[i] = parseInt(arregloDecimal[0]) + parseInt(arregloDecimal[1]);
        } else {
          // Si el número esta en una posición par, lo agregamos al doble al arreglo que vamos a sumar
          tarjetaDigitalizada[i] = parseInt(digitoDoble);
        }
	    }
		} 
    
    // Inicializamos en cero una nueva variable
    var sumaTotal = 0;
    
    // Recorremos nuestro nuevo arreglo para sumar uno por uno sus dígitos
    for (var i = 0; i< tarjetaDigitalizada.length; i++){ 
      sumaTotal+= tarjetaDigitalizada[i];
    }

    // Si la suma es múltiplo de 10, la tarjeta es válida
    if (sumaTotal % 10 == 0){
      alert('La tarjeta es válida!');
    // Si la suma no es múltiplo de 10, la tarjeta no es válida
  } else {
      alert('La tarjeta no es válida');
    }

  }
}