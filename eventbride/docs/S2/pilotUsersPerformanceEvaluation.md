# Evaluación del Rendimiento de los Usuarios Piloto
## Ingeniería del Software y Práctica Profesional (ISPP)
<center><img src="../../img/Eventbride.png"></img></center>

### Grupo 3: EventBride

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

### Fecha: 27/03/2025

### Entregable: Sprint 2

---

### Historial de versiones

|Fecha|Versión|Descripción|Entrega|Contribuyente(s)|
|---|---|---|---|---|
|12/02/2025 |v1.0|Creación del documento y redacción del mismo| Sprint 1 |Daniel Benito Hidalgo|
|12/02/2025 |v1.1|Correcciones ortográficas y de redacción| Sprint 1 |Gonzalo Navas Remmers|
|12/02/2025 |v1.1|Cambios en los criterios de evaluación| Sprint 1 |Gonzalo Navas Remmers|
|13/02/2025 |v2.0|Estudiantes calificados| Sprint 1 | David Godoy Fernández y Gonzalo Navas Remmers|
|25/03/2025 |v2.1|Estudiantes calificados| Sprint 2 | David Godoy Fernández y Daniel Benito Hidalgo|
|27/03/2025 |v2.2|Inserción del doc en la carpeta correcta| Sprint 2 | Daniel Benito Hidalgo|

## Contenido
1. [Introducción](#intro)
2. [Procesos y metricas aplicdas en la evaluación ](#med)
3. [Evaluación de usuarios piloto](#eval)
3. [Bibliografía](#bib)

<div id='intro'></div>

## Introducción

En este documento se introducirá la **información** referente al **proceso** de **evaluación** de los **usuarios piloto** de la plataforma, en primer lugar se realziará una definición del proceso de evaluación y las métricas usadas para efectuar dicha valoración, tras lo que se darán las evaluaciones de los usuarios piloto durante este primer sprint.

<div id='med'></div>

## Procesos y métricas aplicadas en la evaluación

El proceso de evaluación de los usuarios piloto será **realizado** tras el **recepción y análisis** del feedback aportado por todos y cada uno de los usuarios. Las notas establecidas para cada usuario estaran delimitadas en el **rango 0 a 10**, siendo **0** la nota **mínima** y **10** la **máxima**, el proceso de evaluación **consistirá** en el **análisis** de varias **métricas** que se aplicarán al **feedback** y **actuación** general del usuario a lo largo del sprint.

Para la **evaluación** de la labor del usuario piloto en relación a las encuestas asignadas se usarán 2 métricas principales:

- **Tiempo de respuesta del usuario**: Para cada encuesta se ha establecido un **periodo de 5 días** para la resolución de esta, este periodo ha sido establecido en el **commitment agreement** que dichos **usuarios** han tenido que aceptar y es recordado en cada comunicación referente a las encuestas y feedback. Esta métrica se tendrá en cuenta en la evaluación según el número de **días de retraso (DR)** con los que responda el usuario.
Ante **posibles cambios** en las fechas para la entrega se **actualziará** el **commitment agreement** de los usuarios piloto   para que estos los acepten.

- **Resolución de encuesta (R)**: Esta métrica será valorada como **apta (1)** en caso de que la **encuesta** sea **realizada** respondiendo a las preguntas obligatorias. En caso de que existan **preguntas obligatorias de tipo comentario** o texto largo, se considerará como **apto (1)** siempre que dichas **respuestas** ofrezcan **comentarios coherentes** en **relación** al objeto de la **pregunta**. En caso contrario se considerará como **no apto (0)**.

Con estas **2 métricas** expresadas, pasamos a explicar como medimos la **calidad del feedback** proporcionado:

Para evaluar la calidad del feedback recibido hemos establecido 2 tipos de feedback principales que podemos recibir. Esta división ha sido realizada teniendo en cuenta la forma en la que se aporta dicha infromación y el volumen de esta que nos aporta cada respuesta concreta. 
- **Respuestas rapidas**: En esta categoría podemos valorar las **respuestas** de tipo **selección** , todas aquellas que no requieren que el usuario justifique o argumente la selección realizada.

- **Comentarios y justificaciones**: Esta categoria contiene las respuestas de texto largo de las encuestas y posibles comentarios recibidos por otros medios externos a la encuesta ( Reuniones, correos, comunicación informal...). Debido a que este tipo de respuestas puede ser analizada más en profundidad, se **valorará** la **justificación** de los comentarios enviados, así como la introducción de posibles **alternativas** o formas de resolver/mejorar el objeto de comentario. 

La calidad del feedback (Q) se calificará según la siguiente tabla:

| | 0 | 1-4 | 5-7 | 8-10 |
|---|---|---|---|---|
|Criterio | No se ha entregado feedback o no tiene relación con lo que se pedía. | El feedback entregado no está del todo relacionado, está incompleto o es poco específico. | El feedback entregado es útil pero podría ser más preciso, detallado o relevante. | El feedback entregado está bien detallado, justificado y es relevante y valioso para el equipo. |

La fórmula que se usará para calcular la calificación individual de cada usuario es la siguiente:
```math
max(0, (R-0.3*DR)*Q)
```

<div id='eval'></div>

## Evaluación de usuarios piloto

Una vez explicados los diferentes criterios y prácticas que rigen el proceso de evaluación de los usuarios piloto de EventBride, se procederá a calificarlos:

|Alumno|Sprint|Nota asignada|Justificación|
|---|---|---|---|
|Alba Ramos Vargas |DP| 10 | Al no haberse declarado los criterios de evaluación al momento de aportarse el feedback, se ha tenido en cuenta que aportar feedback útil supone la máxima calificación  |
|Felipe Solís Agudo |DP| 10 | Al no haberse declarado los criterios de evaluación al momento de aportarse el feedback, se ha tenido en cuenta que aportar feedback útil supone la máxima calificación  |
|Hugo Borrero Ángulo |DP| 10 | Al no haberse declarado los criterios de evaluación al momento de aportarse el feedback, se ha tenido en cuenta que aportar feedback útil supone la máxima calificación  |
|Jorge Muñoz Rodríguez |DP| 10 | Al no haberse declarado los criterios de evaluación al momento de aportarse el feedback, se ha tenido en cuenta que aportar feedback útil supone la máxima calificación|
|Luis Mellado Díaz |DP| 10 | Al no haberse declarado los criterios de evaluación al momento de aportarse el feedback, se ha tenido en cuenta que aportar feedback útil supone la máxima calificación  |
|Ramón Vergara Garrido |DP| 10 | Al no haberse declarado los criterios de evaluación al momento de aportarse el feedback, se ha tenido en cuenta que aportar feedback útil supone la máxima calificación|

|Alumno|Sprint|Nota asignada|Justificación|
|---|---|---|---|
|Alba Ramos Vargas |Sprint 1| 0 | No se ha aportado feedback en esta entrega, aunque ha avisado de que no podria hacerlo |
|Felipe Solís Agudo |Sprint 1| 10 | Ha seguido correctamente los criterios establecidos y el feedback útil y aporta soluciones |
|Hugo Borrero Ángulo |Sprint 1| 8 | El feedback aportado es útil pero hay ocasiones en el que este esta poco detallado |
|Jorge Muñoz Rodríguez |Sprint 1| 6 | Se ha aprotado feedback pero este es muy mejorable, no aporta soluciones y es algo escueto |
|Luis Mellado Díaz |Sprint 1| 0 | No se ha aportado feedback en esta entrega, además no se ha comunicado con nosotros de ninguna forma  |
|Ramón Vergara Garrido |Sprint 1| 5 | Ha aportado el feedback mínimo y necesario segun el criterio |


<div id='bib'></div>

## Bibliografía

Intencionalmente en blanco



