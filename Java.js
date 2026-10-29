
/* alert('Esto se llama desde un archivo');

console.log('Nuevamente andamos por aquí');

document.write('<h2>Esto se va a descontrolar!!</h2>');
*/
/*la VARIABLE nombre guarda valores: string o cadena*/
var nombre= "Dustin Alexander Del Angel";
/*La VARIABLE edad debe de guardar un number*/
var edad= 17;

var estatura= 1.70;

/*La VARIABLE mayoriaDeEdad guarda el valor boolean*/
var mayoriaDeEdad;

console.log(nombre)
console.log(edad)
console.log(estatura)
console.log(mayoriaDeEdad)

alert(nombre);
nombre= prompt("Escribe el nombre nuevo");
alert("Mi nombre es: " +nombre + ". Y mi edad es de: " + edad);

edad = prompt('Escribe una edad:');

if (edad >= 18) {
    mayoriaDeEdad= true;
    alert('Tú eres mayor de edad')
}
if ( nombre == "Pedro") {
    alert('Hola al compa' + nombre)
}
estatura = prompt('Escribe tu estatura:')
if (estatura <= 1.50) {
    alert('Eres un niño')   
}