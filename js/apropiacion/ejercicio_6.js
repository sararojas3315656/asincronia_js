/*6. Manejo de errores con Promesas
Ejercicio:
Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve y
reject.
Meta: entender .catch() y la importancia del manejo de errores.*/

export function ejecutarProceso() {
  new Promise((resolve, reject) => {
    const exito = Math.random() >= 0.5;

    if (exito) {
      resolve("Proceso completado exitosamente.");
    } else {
      reject(new Error(" El proceso falló inesperadamente."));
    }
  })
    .then((mensaje) => console.log("ÉXITO:", mensaje))
    .catch((error) => console.error("ERROR:", error.message))
    .finally(() => console.log(" Proceso terminado."));
}