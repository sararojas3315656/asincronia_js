/* archivo para importar todo lo que hay en la carpeta js */

import * as ejercicios from "./js/index.js";
import promptSync from "prompt-sync";
import { procesarPedido } from "./index.js";
const prompt = promptSync({ sigint: true });

async function menu() {
  while (true) {
    console.log("\n===== MENÚ =====");
    console.log("6. Ejercicio 6 - Proceso aleatorio");
    /* Mostrar ejercicios en consola aqui:*/

    console.log("0. Salir");

    const opcion = prompt("Elige una opción: ").trim();

    switch (opcion) {
      case "6":
        await ejercicios.ejecutarProceso();
        break;

        /* introducir siguientes ejercicios aqui con este formato:
    switch (opcion) {
        case "6":
        await ejercicios.ejecutarProceso();
        break;*/

      case "0":
        console.log("Hasta luego.");
        process.exit(0);

      default:
        console.log("Opción no válida.");
    }
  }
}

menu();