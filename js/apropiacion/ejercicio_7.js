/*7. Uso de Async/Await
Ejercicio:
Crear una función async que espere una promesa de 2 segundos y luego muestre el resultado.
Meta: comprender cómo await pausa la ejecución sin bloquear el hilo.*/

function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promesa resuelta después de ${ms}ms`);
    }, ms);
  });
}
 
// Función async que usa await para esperar la promesa
export async function ejecutarAsync() {
  console.log("Iniciando función async...");
 
  const resultado = await esperar(2000); // pausa SOLO esta función, no el hilo
 
  console.log("Resultado:", resultado);
}
