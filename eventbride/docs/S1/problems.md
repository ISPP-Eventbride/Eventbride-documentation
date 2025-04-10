# Problemas encontrados
## Ingeniería del Software y Práctica Profesional (ISPP)
<center><img src="https://iili.io/3BcQ3YJ.md.png" alt="Event Image"></img></center>

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

### Fecha: 10/03/2025

### Entregable: Sprint 1

---

### Historial de versiones

| Fecha      | Versión | Descripción                                | Entrega  | Contribuyente(s)                    |
|------------|---------|--------------------------------------------|----------|-------------------------------------|
| 03/03/2025 | v1.0    | Creación del documento y redacción del problema 1 | Sprint 1 | Ignacio Blanquero Blanco |
| 06/03/2025 | v1.1    | Redacción del problema 2 | Sprint 1 | Ignacio Blanquero Blanco |
| 10/03/2025 | v1.2    | Redacción del problema 3 | Sprint 1 | Ignacio Blanquero Blanco |

---

## Contenido
1. [Introducción](#intro)
2. [Problema 1: Problema de Integración de JWT en Funcionalidades de Login y Registro](#id1)
3. [Problema 2: Diversidad en los grupos de trabajo y dificultad de horarios](#id2)
4. [Problema 3: Alcance excesivo](#id3)
5. [Conclusiones](#concl)
6. [Bibliografía](#bib)


<div id='intro'></div>

## Introducción

En el presente documento se exponen de manera detallada los problemas identificados durante el proceso de desarrollo.

<div id='id1'></div>

## Problema 1: Problema de Integración de JWT en Funcionalidades de Login y Registro

### Trazabilidad del problema:

El problema fue diagnosticado el martes 4 de marzo de 2025 por María de la Salud Carrera, quien, al trabajar en la implementación de la funcionalidad de la feature 67 “navbar”, identificó que los formularios de inicio de sesión (login) y registro de usuarios (register) no funcionaban correctamente. Ante esta situación, se creó una propuesta de cambio titulada “[Change] Arreglar login y sign in”. En esta tarea fueron asignados los miembros del equipo María de la Salud Carrera, Daniel Benito, Adrián Cabello y Pablo Jesús Castellanos, con el objetivo de solucionar los problemas relacionados con el uso del JWT en estas funcionalidades.

La issue de tipo “change” se creó en la tarde del 4 de marzo de 2025, y el equipo comenzó a trabajar en la resolución del problema a lo largo de esa tarde y parte de la noche. Durante este proceso, se revisaron otros proyectos previos, se visualizaron recursos formativos y se generaron controladores y servicios nuevos para abordar el inconveniente. Finalmente, tras realizar algunos ajustes en el frontend y realizar las correcciones necesarias, el problema se resolvió al mediodía del 5 de marzo de 2025.

### Estado del problema

El problema ha sido solucionado con éxito, y tanto la funcionalidad de inicio de sesión como la de registro de usuario están operativas. Además, la resolución del problema requirió un tiempo total de 15 horas, desde la notificación inicial hasta la corrección definitiva.

### Lecciones aprendidas

Este escenario ha demostrado la necesidad de realizar testing, aunque sea informal, en las funcionalidades de autenticación y registro, puesto que son esenciales para el funcionamiento de la plataforma, y evitan que sean detectados en fases avanzadas del desarrollo, lo que puede retrasar el proyecto y afectar la calidad de este.

Por otro lado, la integración de tecnologías como JWT (JSON Web Token) en el proceso de autenticación tiene que ser revisada cuidadosamente, ya que se trata de una parte crucial de la arquitectura de seguridad de la aplicación. La falta de identificación de este tipo de componentes como un riesgo resalta la importancia de mapear las dependencias críticas y evaluar su impacto en el proyecto.

El equipo también se ha percatado de que este proceso pudo haberse agilizado con una planificación más estratégica de recursos educativos y documentación accesible, como tutoriales o ejemplos, lo que puede reducir significativamente el tiempo necesario para resolver problemas como este.

Finalmente, la colaboración efectiva dentro del equipo fue clave para resolver este problema en un plazo relativamente corto de tiempo. Sin embargo, este problema resalta la importancia de una comunicación constante de todos los miembros del equipo durante todo el proceso, lo que aumenta la efectividad para resolver problemas complejos.

### Identificación previa en el registro de riesgos

Este problema no había sido identificado como un riesgo en el proyecto, lo que indica la importancia de estar preparados para abordar problemas no previstos que puedan surgir durante el desarrollo de este. En adición, esta experiencia pone de manifiesto la necesidad de incorporar pruebas más rigurosas y análisis de dependencias de funcionalidades críticas, como la autenticación, desde las primeras fases del proyecto.

---

<div id='id2'></div>

## Problema 2: Diversidad en los grupos de trabajo y dificultad de horarios

### Trazabilidad del problema:

Al inicio del proyecto, se decidió que cada tarea fuera asignada a un grupo de personas diferente, con el objetivo de fomentar la colaboración entre todos los miembros del equipo y asegurar que cada uno pudiera trabajar con los demás en distintos aspectos del proyecto. Esta estrategia buscaba promover la diversidad de perspectivas y habilidades dentro de cada tarea. No obstante, a medida que avanzaba el desarrollo, surgieron dificultades significativas para coordinar los horarios de trabajo debido a la amplia variedad de disponibilidades de los miembros del grupo. La diferencia en los horarios laborales, académicos y personales de cada miembro dificultó la programación de reuniones y sesiones de trabajo colaborativas, lo que impidió que el equipo pudiera avanzar de manera eficiente y en los plazos establecidos. Esta falta de sincronización afectó negativamente el progreso de algunas tareas, provocando retrasos en el desarrollo general del proyecto y obligando a reajustar la planificación de las actividades.

### Estado del problema

El problema ha sido abordado progresivamente y, desde la finalización del Sprint 1, se ha implementado una solución parcial. A partir de ese momento, se ha decidido reorganizar la asignación de tareas en función de los distintos subgrupos existentes dentro del equipo. Esta reestructuración tiene como objetivo facilitar la coordinación interna, permitiendo que los miembros de cada subgrupo determinen un horario adecuado para trabajar de manera conjunta, sin la necesidad de coordinarse con todos los 17 miembros del grupo. Al limitar la cantidad de personas involucradas en cada sesión de trabajo, se busca optimizar la eficiencia de las reuniones y sesiones de trabajo, reduciendo así los conflictos de horarios y mejorando la productividad. Este enfoque ha demostrado ser efectivo para agilizar el desarrollo de las tareas y garantizar que cada subgrupo pueda avanzar de manera autónoma y con mayor flexibilidad, contribuyendo al progreso general del proyecto.

### Lecciones aprendidas

Este problema ha puesto de manifiesto la importancia de una planificación inicial más detallada en cuanto a la coordinación de horarios en equipos grandes. Aunque la diversidad de miembros en un equipo puede enriquecer la resolución de problemas y la innovación, también es crucial tener en cuenta las diferencias de disponibilidad y las limitaciones logísticas que surgen cuando se trabaja con personas que tienen horarios muy diversos. La dificultad para encontrar momentos comunes para las reuniones resaltó la necesidad de establecer mecanismos eficientes de gestión del tiempo desde las primeras fases del proyecto.

Una de las lecciones más valiosas de este incidente ha sido la importancia de segmentar el equipo en subgrupos más pequeños. Al concentrarse en equipos reducidos, se facilita la coordinación y se minimizan los conflictos de horarios, lo que mejora la productividad y acelera el progreso. Esta estrategia permite una mayor autonomía dentro de los subgrupos, lo cual es esencial para la ejecución eficiente de tareas complejas.

Además, la experiencia subraya la relevancia de utilizar herramientas de programación y coordinación en línea que ayuden a los equipos a gestionar sus tiempos de manera más efectiva. El uso de calendarios compartidos y plataformas de programación automática es fundamental para optimizar la gestión de recursos y evitar retrasos innecesarios.

### Identificación previa en el registro de riesgos

Este problema no había sido identificado como un riesgo en el proyecto, lo que indica la importancia de estar preparados para abordar problemas no previstos que puedan surgir durante el desarrollo de este.

---

<div id='id3'></div>

## Problema 3: Alcance excesivo

### Trazabilidad del problema:

Desde el inicio del proyecto, adoptamos una estrategia que buscaba abordar múltiples tareas y objetivos de manera simultánea, con la intención de avanzar rápidamente en varias áreas del proyecto. Sin embargo, esta aproximación resultó ser contraproducente, ya que intentamos abarcar demasiados aspectos a la vez, sin enfocarnos en un desarrollo progresivo y gradual. La falta de un enfoque iterativo generó una sobrecarga de trabajo en los primeros pasos, lo que dificultó la adaptación a posibles cambios y la optimización de los procesos a medida que avanzaba el proyecto.

En lugar de avanzar paso a paso y refinar cada componente antes de pasar al siguiente, nos vimos obligados a lidiar con un abanico de tareas y problemas simultáneamente. Esto afectó negativamente la calidad y la eficiencia del trabajo, ya que no se dedicó el tiempo necesario a cada área para su perfeccionamiento. Además, esta estrategia aumentó la presión sobre los miembros del equipo, quienes debían enfrentar un volumen de tareas que no podía ser manejado adecuadamente en el tiempo previsto.

A medida que el proyecto avanzaba, nos dimos cuenta de que un enfoque más centrado en iteraciones pequeñas y mejoras graduales podría haber permitido obtener resultados más sólidos y haber facilitado una mejor integración de las distintas partes del proyecto. La implementación de este enfoque no solo habría reducido los riesgos asociados a una ejecución apresurada, sino que también habría permitido un aprendizaje continuo y una mayor flexibilidad para realizar ajustes conforme surgieran nuevos desafíos.

### Estado del problema

Para abordar este desafío, hemos tomado la decisión de reorganizar y reestimar las tareas del proyecto, con el objetivo de reducir la carga de trabajo excesiva que enfrentábamos anteriormente. Este proceso implicó una revisión detallada de todas las actividades pendientes y una reevaluación de los plazos de entrega y recursos necesarios para cada una de ellas. Al realizar esta reestructuración, hemos redistribuido las tareas de manera más equitativa, asignando responsabilidades de acuerdo con la capacidad disponible de cada miembro del equipo, lo que nos ha permitido asegurar una carga de trabajo más balanceada y alcanzable.

Asimismo, se han establecido prioridades claras para cada tarea, permitiendo que el equipo se enfoque en aspectos clave del proyecto antes de pasar a otros componentes menos críticos. Este enfoque de reestimación y reorganización también ha facilitado la implementación de un sistema de trabajo más iterativo, en el que cada avance pueda ser revisado y mejorado progresivamente, reduciendo la presión por abordar múltiples objetivos a la vez.

Con esta nueva planificación, buscamos mejorar la eficiencia general del proyecto, minimizar los riesgos asociados con la sobrecarga de trabajo y optimizar la calidad de los resultados. La reestimación de los tiempos y recursos también nos ha permitido ajustar mejor las expectativas del equipo y garantizar que el avance en el desarrollo sea más constante y controlado, evitando contratiempos que pudieran surgir por intentar abarcar más de lo que podíamos manejar en un principio.

### Lecciones aprendidas

Este problema ha subrayado la importancia de establecer un alcance adecuado y realista desde el principio del proyecto. La ambición de abordar múltiples tareas simultáneamente, aunque bien intencionada, resultó ser contraproducente al no considerar adecuadamente la capacidad del equipo y los recursos disponibles. La falta de un enfoque gradual y progresivo generó una sobrecarga de trabajo que no solo afectó la calidad del desarrollo, sino que también dificultó la adaptación a cambios necesarios a medida que el proyecto avanzaba.

Una de las lecciones clave es la necesidad de trabajar con un enfoque iterativo, en el que cada fase del proyecto se construya sobre la anterior, permitiendo que el equipo refine cada componente antes de pasar a la siguiente. Este enfoque reduce la presión de abordar demasiados problemas a la vez y permite una integración más fluida de las distintas partes del proyecto, lo que resulta en una mejor calidad y eficiencia.

Además, se aprendió que la planificación debe ser flexible y adaptativa. El proceso de reorganizar y reestimar las tareas fue fundamental para equilibrar la carga de trabajo y asegurar que las tareas más críticas recibieran la atención adecuada. A través de esta reestructuración, comprendimos que la prioridad debe ser siempre la calidad sobre la cantidad, y que es más efectivo concentrarse en una serie de objetivos bien definidos y alcanzables en lugar de intentar abarcar demasiados aspectos simultáneamente.

Finalmente, esta experiencia destacó la importancia de gestionar las expectativas tanto del equipo como del proyecto en su conjunto. La reestimación de los tiempos y recursos permitió que el equipo tuviera una visión más clara de lo que era posible lograr dentro de los plazos establecidos, evitando el agotamiento y mejorando la motivación al establecer metas más alcanzables y controladas.

### Identificación previa en el registro de riesgos

Este problema no había sido identificado como un riesgo en el proyecto, lo que indica la importancia de estar preparados para abordar problemas no previstos que puedan surgir durante el desarrollo de este.

---

## Conclusiones

A lo largo del desarrollo del proyecto, se han identificado varios problemas significativos que han afectado tanto el avance como la eficiencia del equipo. Sin embargo, estos problemas han proporcionado valiosas lecciones que nos han permitido implementar soluciones efectivas y mejorar la planificación futura. El problema de la integración de JWT en las funcionalidades de inicio de sesión y registro, aunque no había sido anticipado, fue resuelto rápidamente mediante una colaboración efectiva y el uso de recursos educativos. Este incidente subraya la importancia de realizar pruebas exhaustivas, incluso de manera informal, en las funcionalidades críticas para evitar retrasos en fases posteriores del desarrollo.

En cuanto a la dificultad de coordinar los horarios debido a la diversidad en los grupos de trabajo, aprendimos la importancia de segmentar el equipo en subgrupos más pequeños, lo que permitió mejorar la organización interna y reducir los conflictos de horarios. La experiencia también resaltó la necesidad de utilizar herramientas de gestión del tiempo más efectivas y de planificar con mayor detalle desde el inicio para evitar problemas logísticos que afecten el progreso del proyecto.

Finalmente, el problema del alcance excesivo nos enseñó la necesidad de trabajar con un enfoque iterativo, donde se prioricen tareas específicas antes de pasar a otras. Al intentar abordar múltiples tareas simultáneamente, nos dimos cuenta de que esto genera sobrecarga de trabajo y afecta la calidad del desarrollo. La reorganización de las tareas y la adaptación de la planificación ha permitido mejorar el enfoque y la eficiencia, asegurando que cada fase del proyecto se construya sobre la anterior de manera controlada.

En resumen, estas experiencias han puesto de manifiesto la importancia de una planificación adecuada, la flexibilidad para adaptarse a cambios y la necesidad de una colaboración constante dentro del equipo. Las lecciones aprendidas en cada uno de estos problemas se incorporarán en la planificación futura, lo que nos permitirá optimizar el trabajo en equipo y mejorar la calidad y eficiencia del proyecto en las próximas etapas.

<div id='bib'></div>

## Bibliografía

Intencionalmente en blanco.