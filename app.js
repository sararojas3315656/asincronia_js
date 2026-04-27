/* archivo para importar todo lo que hay en la carpeta js */
import * as ejercicios from "./js/index.js";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

import { processOrden } from "./index.js";
import { procesarOrden } from "./index.js";

procesarOrdenPromesa(ordenes[0]);

async function menu() {
  while (true) {
    console.log("\n===== MENÚ =====");
    console.log("1. Ejercicio 1 - Asincronía básica");
    console.log("2. Ejercicio 2 - Código bloqueante");
    console.log("3. Ejercicio 3 - Callbacks");
    console.log("4. Ejercicio 4 - Validar formulario");
    console.log("5. Ejercicio 5 - Procesar pedido");
    console.log("6. Ejercicio 6 - Proceso aleatorio");
    console.log("7. Ejercicio 7 - Async/Await");
    console.log("8. Ejercicio Integrador 3 - Versión bloqueante");
    console.log("I1. Integrador 1 - Callbacks");
    console.log("I2. Integrador 1 - Promesas");
    console.log("I3. Integrador 1 - Async/Await");
    console.log("I4. Integrador 2 - Callbacks");
    console.log("I5. Integrador 2 - Promesas");
    console.log("I6. Integrador 2 - Async/Await serie");
    console.log("I7. Integrador 2 - Async/Await paralelo");
    console.log("0. Salir");

    const opcion = prompt("Elige una opción: ").trim();

    switch (opcion) {
      case "1": await ejercicios.ejercicio1(); break;
      case "2": await ejercicios.ejercicio2(); break;
      case "3": await ejercicios.procesarPedidoEj3(); break;
      case "4": await ejercicios.validarFormulario(); break;
      case "5": await ejercicios.procesarPedido(); break;
      case "6": await ejercicios.ejecutarProceso(); break;
      case "7": await ejercicios.ejecutarAsync(); break;
      case "8": await ejercicios.versionBloqueante(); break;
      case "I1": await ejercicios.consultaUsuarioCallback(); break;
      case "I2": await ejercicios.consultaUsuarioPromesa(); break;
      case "I3": await ejercicios.consultaUsuarioAsync(); break;
      case "I4": await ejercicios.processOrden(); break;
      case "I5": await ejercicios.procesarOrden(); break;
      case "I6": await ejercicios.procesarEnSerie(); break;
      case "I7": await ejercicios.procesarEnParalelo(); break;
      case "0":
        console.log("Hasta luego.");
        process.exit(0);
      default:
        console.log("Opción no válida.");
    }
  }
}

menu();

