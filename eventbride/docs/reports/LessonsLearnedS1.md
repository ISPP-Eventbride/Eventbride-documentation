# Lecciones Aprendidas tras el Sprint 1
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

### Fecha: 21/04/2025

### Entregable: PPL

---

### Historial de versiones

| Fecha      | Versión | Descripción                                 | Entrega | Contribuyente(s)                    |
|------------|---------|---------------------------------------------|---------|-------------------------------------|
| 21/04/2025 | v1.0    | Creación del documento y estructura básica  | PPL     | María de la Salud Carrera Talaverón |
| 21/04/2025 | v1.1    | Tablas incidencias, índice actualizado      | PPL     | María de la Salud Carrera Talaverón |
| 21/04/2025 | v1.2    | Análisis de las condiciones de fallo        | PPL     | María de la Salud Carrera Talaverón |
| 22/04/2025 | v1.3    | Revisión y correción general                | PPL     | Pablo Jesús Castellanos Compaña     |
| 22/04/2025 | v1.4    | Metodología empleada y lista de incidencias | PPL     | Natalia Olmo Villegas               |

---

## Contenido
1. [Introducción](#introducción)
2. [Análisis de las condiciones de fallo](#análisis-de-las-condiciones-de-fallo)
3. [Lista de incidencias](#lista-de-incidencias)
    1. [Identificadas por el equipo antes de la entrega](#identificadas-por-el-equipo-antes-de-la-entrega)
    2. [Identificadas por el equipo después de la entrega](#identificadas-por-el-equipo-después-de-la-entrega)
    3. [Identificadas por el profesorado](#identificadas-por-el-profesorado)
4. [Metodología empleada](#metodología-empleada)
5. [Conclusiones](#conclusiones)
6. [Bibliografía](#bibliografía)


## Introducción

## Introducción

Este documento recopila las lecciones aprendidas por el Grupo 3 (Eventbride) durante el desarrollo del Sprint 1 en la asignatura de Ingeniería del Software y Práctica Profesional (ISPP). El objetivo principal es reflexionar sobre los aspectos que funcionaron correctamente, aquellos que generaron incidencias y cómo hemos aplicado acciones correctivas para mejorar nuestro proceso de trabajo y la calidad del entregable.

A lo largo de este informe se analiza el cumplimiento de las condiciones de fallo definidas en el entregable, se presenta una lista detallada de incidencias identificadas antes y después de la entrega, así como por el profesorado, y se describen las causas técnicas y de proceso asociadas a cada una. Además, se expone la metodología ágil Scrum seguida, los roles asumidos por los miembros del equipo y las estrategias de comunicación empleadas.


## Análisis de las condiciones de fallo

Se van a analizar las condiciones de fallo de un equipo una a una, descritas en el documento de Condiciones de Fallo del Entregable v2.1, presente en Enseñanza Virtual.

**T-1. No informar (al inicio de una clase de evaluación) de que un miembro del grupo no está presente.** Esta condición de fallo fue cumplida, ya que se avisó de aquellos miembros del grupo que llegaban con retraso a la clase del día 14/03/2025.

**T-2. Excederse del tiempo estipulado para la presentación (aunque sean tan sólo unos segundos).** Esta condición de fallo fue cumplida.

**T-3. Finalizar la presentación antes del último minuto.** Esta condición de fallo fue cumplida.

**T-4. Que la presentación utilizada en clase difiera con respecto a la entregada en EV como parte del entregable.** Esta condición de fallo fue cumplida.

**T-5. No respetar o no reaccionar al feedback recibido en clase sin una justificación explícita, que debe estar reflejada en la presentación.** Esta condición de fallo fue cumplida, ya que el equipo tuvo en cuenta todo el feedback recibido en las clases anteriores a la entrega del Sprint 1.

**T-6. Omitir en la presentación cualquiera de los contenidos esperados según lo que se pidió en la clase anterior.** Esta condición de fallo fue cumplida. Le pusimos especial atención, debido a que en la entrega anterior no cumplimos con la condición T-6, al olvidarnos de incluir la planificación del proyecto.

**T-7. Tener texto en las diapositivas que no sea legible desde el fondo de la clase.** Esta condición de fallo fue cumplida.

**T-8. Presentar un documento en el entregable sin una portada adecuada. Esta portada debe incluir, al menos:**
- **El número del grupo de EV.**
- **El nombre del grupo.**
- **El nombre del entregable.**
- **Un título descriptivo del documento.**
- **Nombre y apellidos de los miembros del grupo que han contribuido al documento, y el tipo de contribución hecha. Esta información debe concordar con los registros de Clockify.**

Esta condición fue cumplida casi en su totalidad, puesto que se redactó una plantilla con todos estos elementos y más para utilizarla a partir de ese entregable. Sin embargo, en muchos documentos al miembro del equipo que los redactó se le olvidó modificar el nombre de "Título del Documento" a uno descriptivo. La mayoría fueron corregidos a tiempo antes de la entrega, pero otros fueron pasados por alto y se han descubierto en el Sprint 3, al hacer el despliegue de la página web de documentación, desarrollada con Docusaurus.

**T-9. Hacer una entrega incorrecta. Una entrega correcta debe:**
- **Aportar la URL del repositorio de GitHub.** Esto fue cumplido.
- **Tener una carpeta separada para cada entregable.** Esto fue cumplido.
- **Incluir el archivo de la presentación (`presentation.pdf`).** Esto fue cumplido.
- **Incluir los siguientes archivos en una carpeta "docs" en el repositorio:**
    - **Informe de contribuciones a la Base del Conocimiento o KB (`KBreport.md`), incluyendo, al menos:**
        - **El enlace a la Base del Conocimiento compartida.** Esto fue cumplido.
        - **El contenido específico que el equipo ha añadido al KB, incluyendo, al menos, el feedback que ha recibido y las anotaciones sobre el feedback general.** Esto fue cumplido.
        - **Las acciones de consolidación llevadas a cabo. Si no se ha llevado a cabo ninguna, especificarlo explícitamente.** Esto fue cumplido.
    - **Informe de usuarios piloto, al menos considerando la lista de usuarios piloto, el plan de gestión y comunicación, la gestión del feedback, etc (`pilotUsers.md`).** Esto fue cumplido.
    - **Evaluación del desempeño individual (`performaceEvaluation.md`), siguiendo la plantilla proporcionada en EV.** Esto fue cumplido.
    - **Informe de tiempo-esfuerzo de cada miembro y del grupo, incluyendo los gráficos pertinentes (`timeEffortReport.md`).** Esto fue cumplido.
    - **Informe detallado del uso de la IA (`AIusage.md`).** Esto fue cumplido.
    - **Commitment Agreement (`commitmentAgreement.md`).** Esto fue cumplido, habiendo un documento por integrante del grupo.
    - **Commitment Agreement de Usuarios Piloto (`pilotUsersCommitmentAgreement.md`).** Esto fue cumplido, habiendo un documento por usuario piloto.
    - **La guía o manual de usuario para que el proyecto pueda ser corregido (`revision.md`). Debe incluir:**
        - **Un mapeo explícito de los casos de uso (UC) a interacciones en el software que deje claro cómo ejecutar el UC core.** Esto fue cumplido en el S1; sin embargo, debido al incumplimiento de la condición T-10, que veremos más adelante, las funcionalidades aquí descritas quedaron desactualizadas. Además, durante el Sprint 2 hubo un problema con las imágenes de la guía del Sprint 1 y hubo que actualizarlas, ya que se borraron del repositorio por error.
        - **Datos necesarios para poder corregir la entrega, como: usuarios, contraseñas o ejemplos de entradas de datos, si éstos son muy complejos. En particular:**
            - **La URL de la landing page.** Esto fue cumplido.
            - **Credenciales de al menos dos usuarios clientes y un administrador.** Esto fue cumplido; sin embargo, por el mismo motivo ya mencionado, todas las credenciales excepto dos quedaron obsoletas durante el Sprint 2 y no se pudo realizar la corrección.
            - **La URL del despliegue.** Esto fue cumplido.
            - **La URL del repositorio de GitHub.** Esto fue cumplido.
            - **La URL y las credenciales de acceso a la herramienta de registro de tiempo.** Esto fue cumplido.
        - **Requisitos potenciales para usar el sistema (como tener que activar el acceso a la ubicación, por ejemplo).** Esto no fue necesario.
        - **Un enlace a la demo enseñada en clase, en formato mp4 e incluida en el repositorio de GitHub.** Esto fue cumplido a medias, ya que se proporcionó un enlace a la demo pero ésta no se incluyó en el repositorio.
- **Cualquier otro documento o vídeo que consideremos relevante debe estar en formato md, pdf, ppt, pptx o mp4.** Esto fue cumplido.
- **Enseñar datos realistas en la demo del software.** Esto no fue cumplido en el Sprint 1, pero se corrigió como parte del feedback recibido de los profesores.
- **Incluir una etiqueta apropiada para la versión entregada del código y de la documentación.** Esto fue cumplido.
- **Hacer una release de GitHub enlazando la etiqueta apropiada. La release debe incluir un archivo zip con todo el contenido del repositorio**. Esto fue cumplido.

**T-10. En todos los entregables que incluyan software, no se debe incurrir en ninguna de las siguientes condiciones de fallo:**
- **Una interacción legal con el sistema resulta en un error HTTP perceptible por el usuario.** Esta condición fue cumplida.
- **Una interacción legal con el sistema resulta en un panic o crasheo de la aplicación perceptible por el usuario.** Esta condición fue cumplida.
- **Una interacción legal con el sistema no da el comportamiento esperado.** Esta condición fue cumplida.
- **No hay validación de formularios.** Esta condición no fue cumplida, pero se subsanó en sprints posteriores.
- **Un actor puede realizar operaciones con datos de otro usuario y que sólo el administrador debería poder gestionar.** Esta condición no fue cumplida, pero se subsanó en sprints posteriores.
- **El sistema no está desplegado en la nube o no está disponible en cualquier momento durante el curso (hasta Julio).** Esta condición no se cumplió, ya que el despliegue del Sprint 2 se hizo sobre el enlace del Sprint 1, no quedando esta versión disponible hasta final de curso. Se subsanó rescatando la versión correspondiente del repositorio y desplegandola en un nuevo enlace.
- **El sistema desplegado se modifica/actualiza tras la fecha límite de entrega.** Esta condición no fue cumplida debido a lo mencionado anteriormente, pero se subsanó en sprints posteriores.


## Lista de incidencias

List of issues and their relation to the failure conditions.
- Origin of the problem at the technical level. For example, the incompatibility of the use of a certain technology or library with another technology or deployment infrastructure used.
- Origin at the process level. For example, if you follow SCRUM, it is common to find problems by inadequately performing or not performing activities such as Sprint Planning, Sprint Review or Daily Scrum.
- Error source:
    - Person/People or System who introduced or generated the specific failure condition.
    - In case of a Person/People: Role(s) in the team.
- People responsible for the issue:
    - Person/People who allowed the failure condition to be part of the deliverable.
    - Role(s) in the team.
- Mitigating actions aimed at resolving or mitigating the issue in future deliverables at both the technical and process level.
- Status of the issue (along with a justification if not "Resolved"):
    - "Resolved"
    - "In-progress"
    - "Pending analysis"

### Identificadas por el equipo antes de la entrega

| Issue | Origen técnico | Origen en el proceso | Fuente del error | Responsable(s) de la issue | Acciones correctivas | Estado | Justificación |
| - | - | - | - | - | - | - | - |
| Inicio tardío de las tareas de código | Problemas en la configuración del nuevo entorno, sobre todo con la integración de MySQL y los archivos de configuración de application-properties. Por otra parte, el hecho de que crear un login desde 0 supuso muchos problemas sobre todo con JWT, algo con lo que no estábamos tan familiarizados | No se ha realizado Daily Scrum, por lo que era complicado llevar al día todo lo que se estaba por cada miembro del grupo | En este caso, no se acusará a nadie como fuente de este error, pues al crear un proyecto siempre suelen ocurrir problemas de configuración del entorno, ya sea por dependecias, incompatibilidades entre librerías o desconocimiento del nuevo entorno. El login también fue algo nuevo, por lo que la fuente de este error ha sido el propio sistema que estábamos intentando comprender| Esto fue corregido a tiempo, por lo que nadie del equipo permitió que este problema afectara al entregable | Para tomar acción en esto, más miembros del equipo trabajaron activamente en investigar cómo solucionar el problema del login. Afortunadamente, este problema fue resuelto y las demás tareas fueron replanificadas, para no sobrecargar de trabajo a aquellos que estuvieron arreglando el login. Finalmente, todas las tareas del Sprint pudieron ser entregadas a tiempo. | Resuelto | Esta incidencia podría haber sido un posible motivo para convertirse en un failure condition, como se especifa en el T-10. Todos los puntos de ese apartado podrían suponer un problema si no se conseguía avanzar en el código|
| Intentamos abordar demasiado en lugar de iterar y mejorar gradualmente | Aquí no se destaca ningún problema técnico, pues ha sido más un problema más relacionado con la gestión del reparto de tareas | Problema con la estimación de los tiempos establecidos en cada tarea en el Sprint Planning, pues se se subestimó la complejidad de estas primeras funcionalidades y no se tuvieron en cuenta problemas que pudieran acontecer al configurar el nuevo entorno y el tiempo que llevaría arreglarlo. Todo esto no hubiera sucedido si se hubiera gestionado mejor el Sprint Planning | Project Manager y Jefes de Desarrollo | Esto fue corregido a tiempo, por lo que nadie del equipo permitió que este problema afectara al entregable | Replanificación de las tareas, donde aquellas relacionadas con código que no se exigía para este entregable fueron desplazadas al S2, equilibrando el esfuerzo de todos los componentes del grupo y cumpliendo con las 10 horas semanales propuestas por la asignatura | Resuelto | Podría convertirse en un problema relacioando con el T-10 igualmente, ya que si se intentaba abordar demasidas funcionalidades para esta entrega, quizás no quedaría tiempo para llevar a cabo aquellas tareas que eran realmente necesarias especificadas en el T-10. Por ejemplo: An actor can list, edit or delete data that belong to another actor and only the admin should manage. Esto es algo que casi no conseguimos subsanar a tiempo por querer implementar más funcionalidades. |
| Aislamiento de información | Aquí no se destaca ningún problema técnico, pues ha sido más un problema más relacionado con la gestión de la comunicación del equipo | Debido a esta falta de Daily Scrum y que las comunicaciones eran únicamente a través del grupo general de Whatsapp, este grupo llegaba a tener al día más de 200 mensajes, por lo que era inviable que todos los compañeros estuvieran leyendo constantemente el grupo. Además, mucha de esta información quizás no les interesaba, pues nno tenía ningún tipo de relación con el trabajo que ellos estaban destinados a hacer | Project Manager y Jefes de Proyecto | Esto fue corregido a tiempo, por lo que nadie del equipo permitió que este problema afectara al entregable | Se crearon canales y comunicación y grupos de Whatsapp para cada subgrupo, reduciendo el número de mensajes considerablemente. El canal principal se usaría para dar avisos sobre asuntos importantes que interesaban a todos los integrantes del grupo. Estos avisos sólo podían ser mandados por la Project Manager y los Jefes de grupo. El grupo general sigue existiendo por si alguien que no pueda dar avisos quisiera comentar algo con todo el grupo. |  Resuelto| Esto podría haberse convertido en un failure condition por cualquiera de los puntos declarados en el documento oficial. Pero, sobre todo afectarían al T-9 y T-10, para el formato de la entrega y aquellas actividades de código que eran necesarias para superar este Sprint  |

### Identificadas por el equipo después de la entrega

| Issue | Origen técnico | Origen en el proceso | Fuente del error | Responsable(s) de la issue | Acciones correctivas | Estado | Justificación |
| - | - | - | - | - | - | - | - |
| Mismo enlace de despliegue para Sprint 1 y Sprint 2 |  |  |  |  |  |  |  |

### Identificadas por el profesorado

| Issue | Origen técnico | Origen en el proceso | Fuente del error | Responsable(s) de la issue | Acciones correctivas | Estado | Justificación |
| - | - | - | - | - | - | - | - |
| La IU se ha actualizado respecto a la entrega S1 descrita en revision.md |  |  |  |  |  |  |  |
| Datos realistas en la plataforma |  |  |  |  |  |  |  |


## Metodología empleada
Se ha seguido durante todo el proyecto la metodología ágil y scrum, reforzando el enfoque flexible y colaborativo entre los compañeros. En concreto se ha creado un Product Backlog priorizando las tareas para el equipo que debiera implementarlas, así como un Sprint Backlog. El rol de Scrum Master ha sido desempeñado por Natalia Olmo, ya que es la Project Manager del grupo. Además, al principio del Sprint, la Project Manager, junto con los Jefes de Desarrollo se reunieron para el Sprint Planning. Ese mismo día, tuvo lugar una reunión para comunicar medidas nuevas que se tomaran y para explicar cómo se había realizado el trabajo de tareas. El Sprint Retrospective también fue realizado por el grupo a mitad de Sprint y antes de finalizar el Sprint para saber cómo mejorar en la siguiente entrega y cómo se sentían los integrantes del grupo. No obstante, se ha optado por no realizar Daily Scrum ni Sprint Review por falta de tiempo de todos los compañeros y consideramos que con las reuniones establecidas sería suficiente. Se ha respetado en todo momento los 4 pilares fundamentales de la metodología ágil:
1) Valorar más a los individuos e interacciones sobre procesos y herramientas.
2) Software funcionando sobre documentación extensiva.
3) Colaboración con el cliente sobre negociación contractual, de este cabe destacar la colaboración a través de las encuentas de usuarios pilotos potenciales.
4) Respuesta ante el cambio sobre seguir un plan.

A continuación, se van a describir los roles de los integrantes del grupo y sus responsabilidades:

- **Natalia Olmo** (Project Manager): Asegurar la correcta gestión del proyecto, facilitando la comunicación y coordinación del equipo, así como el cumplimiento de plazos y objetivos.
  
- **Manuel Pérez y Antonio Montero** (Aseguramiento de la calidad): Velar por la calidad del trabajo entregado, asegurando que los estándares definidos sean cumplidos en cada fase del desarrollo.
  
- **Ignacio Blanquero y Pablo Jesús Castellanos** (Secretarios): Registrar y documentar reuniones, acuerdos y decisiones clave, manteniendo organizada la información del proyecto.
  
- **Héctor Noguera** (Polity Manager): Garantizar que las reglas de trabajo en equipo se cumplan, fomentando un ambiente colaborativo y respetuoso.
  
- **Daniel Benito** (Diseño): Desarrollar y validar aspectos visuales y de experiencia de usuario, asegurando alineación con los requerimientos del equipo.
  
- **Daniel Benito y Gonzalo Navas** (Gestores Usuarios Piloto): Gestionar la comunicación entre el equipo de desarrollo y los usuarios piloto, recopilando sus comentarios, resolviendo dudas y ayudando a que los usuarios piloto se adapten al software de forma sencilla y sin complicaciones. También analizan el feedback para mejorar el producto.
  
- **Pablo Jesús Castellanos** (Coordinador de tiempos): Revisar que los tiempos asignados a las actividades sean razonables y acordes a las responsabilidades de cada miembro del equipo. Utilizando Clockify, analiza los registros de tiempo para asegurar que los plazos sean realistas y las tareas realizadas correspondan con las que cada miembro del equipo tenga asignadas.
  
- **María Carrera** (Jefe de Desarrollo 1), **Pablo Jesús Castellanos** (Jefe de Desarrollo 2) y **Fran Avilés** (Jefe de Desarrollo 3): Supervisar y coordinar el trabajo de desarrollo en sus respectivas áreas, asegurando que el código cumpla con los requisitos técnicos y funcionales.

El grupo de 17 integrantes fue dividido en 3 subgrupos según sus habilidades de la siguiente forma:

Grupo 1
María de la Salud Carrera
Fernando José de Celis
Gonzalo Navas
Adrián Cabello
Antonio Montero

Grupo 2
Natalia Olmo
Pablo Jesús Castellanos
Ignacio Blanquero
Manuel Pérez
Héctor Noguera
Sergio Pons

Grupo 3
Francisco Avilés
Andrés Pizzano
Lorenzo Torralba
David Godoy
Miguel Hernández
Daniel Benito


## Conclusiones

Conclusiones.


## Bibliografía

Bibliografía.
