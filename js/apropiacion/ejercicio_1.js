/* 1. Explorando la asincronía básica
Ejercicio:
Escribe un código que imprima “Inicio”, luego una operación con setTimeout que tarde 2 segundos
y finalmente “Fin”.
Meta: que reconozcan el orden real de ejecución. */

function ejercicio1() {
console.log("Inicio");

setTimeout(function() {
}, 2000);

console.log("Fin");

}

export { ejercicio1 };

ejercicio1();