# Plan de Pruebas
## Ingeniería del Software y Práctica Profesional (ISPP)
<center><img src="https://iili.io/3BcQ3YJ.md.png"></img></center>

### Grupo 3: Eventbride

### Miembros:
- Francisco Avilés Carrera
- Daniel Benito Hidalgo
- Ignacio Blanquero Blanco
- Adrián Cabello Martín
- María de la Salud Carrera Talaverón
- Pablo Jesús Castellanos Compaña
- Fernando José de Celis Hurtado
- David Godoy Fernández
- Miguel Hernández Sánchez
- Antonio Montero López
- Gonzalo Navas Remmers
- Héctor Noguera González
- Natalia Olmo Villegas
- Manuel Pérez Vélez
- Andrés Pizzano Cerrillos
- Sergio Pons López
- Lorenzo Torralba Lanzas

### Fecha: 01/05/2025

### Entregable: PPL

---

### Historial de versiones

| Fecha      | Versión | Descripción                                | Entrega  | Contribuyente(s)                    |
|------------|---------|--------------------------------------------|----------|-------------------------------------|
| 02/04/2025 | v1.0    | Creación del documento de pruebas          | Sprint 3 | Ignacio Blanquero Blanco |
| 01/05/2025 | v2.0    | Actualización del documento          | PPL | Ignacio Blanquero Blanco |

---

## Contenido
1. [Introducción](#intro)
2. [Alcance](#alcance)
3. [Estrategia de Pruebas](#estrategia)
    1. [Pruebas Unitarias](#unitarias)
    2. [Pruebas de Integración](#integracion)
    3. [Pruebas de Aceptación](#aceptacion)
    4. [Pruebas de Rendimiento](#rendimiento)
4. [Resultados](#resultados)
5. [Conclusiones](#concl)
6. [Bibliografía](#bib)

<div id='intro'></div>

## Introducción

El presente documento recoge el plan de pruebas del proyecto Eventbride, desarrollado por el Grupo 3 dentro de la asignatura Ingeniería del Software y Práctica Profesional (ISPP). Este plan tiene como objetivo definir y estructurar el conjunto de pruebas necesarias para validar la calidad, fiabilidad y correcto funcionamiento del sistema en sus diferentes componentes.

Eventbride es una plataforma orientada a facilitar la organización de bodas, bautizos y comuniones. Dada la complejidad del sistema y la variedad de actores implicados (clientes y proveedores), resulta imprescindible garantizar que cada funcionalidad cumple con los requisitos esperados.

Para ello, se han establecido distintas estrategias de prueba que abarcan tanto el backend como los aspectos funcionales clave de la aplicación. Estas pruebas incluyen pruebas unitarias, de integración, de aceptación y de rendimiento, y se apoyan en herramientas como JUnit, Spring Boot Test y JMeter. El resultado de estas pruebas permitirá identificar errores, validar comportamientos esperados y asegurar una experiencia de usuario fluida y consistente.

<div id='alcance'></div>

## Alcance

- Se realizarán pruebas sobre los componentes desarrollados por el grupo.
- Se incluirán pruebas unitarias, de integración, de rendimiento y de aceptación.
- Las pruebas end-to-end se realizarán si el desarrollo del frontend lo permite.
- No se contemplan pruebas relacionadas con ciberseguridad avanzada ni hacking.

<div id='estrategia'></div>

## Estrategia de Pruebas

<div id='unitarias'></div>

### Pruebas Unitarias

Las pruebas unitarias buscan alcanzar al menos un 90% de cobertura del backend. Se incluyen casos positivos (happy path) y negativos.

**Herramientas:** [JUnit 5](https://junit.org/junit5/), Spring Boot Test.

**Escenarios:**
- Controladores, servicios y repositorios de:
  - `User`
  - `Event`
  - `Venue`
  - `Accommodation`
  - `OtherService`
  - `Reservation`
  - `Review`
  - `Rating`
  - `ChatMessage` y `ChatRoom`
- Validaciones de fechas, precios y disponibilidad.

<div id='integracion'></div>

### Pruebas de Integración

Verifican la interacción correcta entre los diferentes componentes internos del sistema, y con servicios externos como el sistema de pagos.

**Herramientas:** JUnit 5 con Spring Boot.

**Escenarios:**
- Flujo completo de reservas (verificación → pago → confirmación).
- Integración con la base de datos.
- Integración con PayPal en el controlador de pagos.

<div id='aceptacion'></div>

### Pruebas de Aceptación

Estas pruebas verifican que la funcionalidad entregada cumple los requisitos funcionales establecidos.

**Herramientas:** Exploración manual en despliegue local.

**Criterios:**

- **Organizadores:**
  - Crear eventos y añadir servicios.
  - Reservar alojamientos y otros servicios.
  - Modificar perfil y ver reseñas.
  - Eficiencia: reserva o gestión en menos de 3 clics.

- **Proveedores:**
  - Publicar y modificar servicios.
  - Gestionar reservas y mensajes.
  - Ver estadísticas y reseñas.

<div id='rendimiento'></div>

### Pruebas de Rendimiento

El objetivo es asegurar una experiencia de usuario fluida. Todas las llamadas deben tener un tiempo de respuesta inferior a 2 segundos.

**Herramientas:** [JMeter](https://www.baeldung.com/jmeter)

**Escenarios:**
- Carga de:
  - Página principal.

<div id='resultados'></div>

## Resultados

### Pruebas Unitarias

Se han ejecutado correctamente un total de 187 pruebas unitarias correspondientes a los distintos módulos del sistema, incluyendo funcionalidades relacionadas con eventos, propiedades de eventos, servicios adicionales, usuarios, notificaciones, invitaciones, pagos, valoraciones y chat. Todas las pruebas unitarias han pasado satisfactoriamente, lo que indica que los métodos probados funcionan correctamente de manera aislada, conforme a los requisitos definidos y sin producir errores en condiciones esperadas y excepcionales.

### Pruebas de Integración

Se han ejecutado un total de 77 pruebas de integración, abarcando múltiples componentes del sistema como eventos, propiedades de eventos, servicios adicionales, usuarios, notificaciones, invitaciones, pagos y chat. Estas pruebas han permitido verificar la correcta interacción entre los distintos módulos y capas del sistema, asegurando que los flujos completos de uso funcionan adecuadamente en escenarios reales. La mayoría de las pruebas han finalizado con éxito, mientras que algunas han servido para detectar errores o comportamientos inesperados que deberán ser revisados en siguientes iteraciones del desarrollo.

<div id='concl'></div>

### Pruebas de Rendimiento

Se ha llevado a cabo únicamente una prueba de carga utilizando la herramienta Locust, la cual consistió en evaluar el rendimiento de la página principal.

## Conclusiones

El plan de pruebas desarrollado para el proyecto *Eventbride* ha permitido validar de forma rigurosa la calidad y robustez del sistema a través de diferentes niveles de verificación: unitario, integración, aceptación y rendimiento. La ejecución satisfactoria de **187 pruebas unitarias** y **77 pruebas de integración** refleja un alto grado de estabilidad en los componentes individuales y en su interacción conjunta. 

Además, las pruebas de aceptación han confirmado que las funcionalidades clave cumplen los requisitos funcionales esperados tanto para organizadores como para proveedores, garantizando una experiencia de usuario coherente y eficiente. Aunque el apartado de rendimiento aún está en una fase inicial, la base establecida permite escalar las pruebas en futuras entregas.

En conjunto, los resultados obtenidos proporcionan una base sólida para avanzar hacia la entrega final del proyecto, minimizando riesgos y favoreciendo la confianza en la solución desarrollada.

<div id='bib'></div>

## Bibliografía

- Documentación oficial de [Spring Boot](https://spring.io/projects/spring-boot)
- Documentación oficial de [JUnit 5](https://junit.org/junit5/)
- Guía de pruebas con [JMeter](https://www.baeldung.com/jmeter)
- Repositorio del proyecto: [Eventbride - GitHub](https://github.com/ISPP-Eventbride/Eventbride)
