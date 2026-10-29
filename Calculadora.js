var num1 = 0;
var num2 = 0;

num1 = Number(prompt ('Escribe el valor para el numero 1:'));
num2 = Number(prompt ('Escribe el valor para el numero 2:'));

var suma = num1 + num2;
var resta = num1 -num2;
var multi = num1 * num2;
var division = num1 / num2;

alert ("La suma de los dos numeros es:" + suma ); 
alert("La resta de los dos numeros es:" + resta );
alert("La multiplicación de los dos numeros es:" + multi );
alert("La division de los dos numeros:" + division );

if(suma >= 100)
{
    alert("¡TE PASAS!");
}
else{
    alert("Eres un buen alumno");
}
if( resta < 0) 
{
    alert("El numero de la resta: " + resta + " es negativo");
}
else{
    alert("El numero de la resta:" + resta + " es psoitivo");
}