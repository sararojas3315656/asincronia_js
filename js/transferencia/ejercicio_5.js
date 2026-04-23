/*5. Integración de servicios: disponibilidad, datos del usuario, historial y
recomendaciones
Enunciado
Un sistema central debe preparar la información de un usuario consultando cuatro
servicios externos:
1. Servicio A: disponibilidad de un recurso.
2. Servicio B: información detallada del usuario.
3. Servicio C: historial de acciones.
4. Servicio D: motor de recomendaciones (depende de la información de los servicios
B y C).
El aprendiz debe simular todo el flujo utilizando asincronía avanzada, integrando procesos
dependientes y paralelos, registrando tiempo, orden y validaciones.
Requerimientos
• Ejecutar varios servicios en paralelo.
• Controlar dependencias del servicio D.
• Generar informe final unificado.
• Registrar tiempo total y tiempo por servicio.
• Manejar errores tanto aislados como globales.
Datos de entrada
• ID del usuario.
• Tiempo simulado por cada servicio.
• Parámetro que indica si algún servicio debe fallar (para evaluar manejo de errores).
Datos de salida

• Resultado de cada servicio.
• Informe central detallado.
• Orden real de finalización.
• Estado general del sistema (“Integración exitosa” o error general).
*/