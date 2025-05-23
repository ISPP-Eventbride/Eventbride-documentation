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

### Fecha: 24/04/2025

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
| 23/04/2025 | v1.5    | Explicación incidencia mismo enlace despliegue S1 y S2 | PPL     | Francisco Avilés Carrera               |
| 24/04/2025 | v1.6    | Revisión final | PPL     | Francisco Avilés Carrera y Pablo Jesús Castellanos Compaña               |

---

## Contenido
- [Introducción](#introducción)
- [Análisis de las condiciones de fallo](#análisis-de-las-condiciones-de-fallo)
- [Lista de incidencias](#lista-de-incidencias)
  - [Identificadas por el equipo antes de la entrega](#identificadas-por-el-equipo-antes-de-la-entrega)
  - [Identificadas por el equipo después de la entrega](#identificadas-por-el-equipo-después-de-la-entrega)
  - [Identificadas por el profesorado](#identificadas-por-el-profesorado)
- [Metodología empleada](#metodología-empleada)
- [Conclusiones](#conclusiones)
- [Bibliografía](#bibliografía)


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
        - **Un enlace a la demo enseñada en clase, en formato mp4 e incluida en el repositorio de GitHub.** Esto fue cumplido a medias, ya que se proporcionó un enlace a la demo pero esta no se incluyó en el repositorio.
- **Cualquier otro documento o vídeo que consideremos relevante debe estar en formato md, pdf, ppt, pptx o mp4.** Esto fue cumplido.
- **Enseñar datos realistas en la demo del software.** Esto no fue cumplido en el Sprint 1, pero se corrigió como parte del feedback recibido de los profesores.
- **Incluir una etiqueta apropiada para la versión entregada del código y de la documentación.** Esto fue cumplido.
- **Hacer una release de GitHub enlazando la etiqueta apropiada. La release debe incluir un archivo zip con todo el contenido del repositorio**. Esto fue cumplido.

**T-10. En todos los entregables que incluyan software, no se debe incurrir en ninguna de las siguientes condiciones de fallo:**
- **Una interacción legal con el sistema resulta en un error HTTP perceptible por el usuario.** Esta condición fue cumplida.
- **Una interacción legal con el sistema resulta en un panic o crasheo de la aplicación perceptible por el usuario.** Esta condición fue cumplida.
- **Una interacción legal con el sistema no da el comportamiento esperado.** Esta condición fue cumplida.
- **No hay validación de formularios.** Esta condición no fue cumplida, pero se subsanó en Sprints posteriores.
- **Un actor puede realizar operaciones con datos de otro usuario y que sólo el administrador debería poder gestionar.** Esta condición no fue cumplida, pero se subsanó en Sprints posteriores.
- **El sistema no está desplegado en la nube o no está disponible en cualquier momento durante el curso (hasta Julio).** Esta condición no se cumplió, ya que el despliegue del Sprint 2 se hizo sobre el enlace del Sprint 1, no quedando esta versión disponible hasta final de curso. Se subsanó rescatando la versión correspondiente del repositorio y desplegandola en un nuevo enlace.
- **El sistema desplegado se modifica/actualiza tras la fecha límite de entrega.** Esta condición no fue cumplida debido a lo mencionado anteriormente, pero se subsanó en Sprints posteriores.


## Lista de incidencias

### Identificadas por el equipo antes de la entrega

| Issue | Origen técnico | Origen en el proceso | Fuente del error | Responsable(s) de la issue | Acciones correctivas | Estado | Justificación |
| - | - | - | - | - | - | - | - |
| Inicio tardío de las tareas de código | Problemas en la configuración del nuevo entorno, sobre todo con la integración de MySQL y los archivos de configuración de application-properties. Por otra parte, el hecho de que crear un login desde 0 supuso muchos problemas sobre todo con JWT, algo con lo que no estábamos tan familiarizados | No se ha realizado Daily Scrum, por lo que era complicado llevar al día todo lo que estaba haciendo cada miembro del grupo | En este caso, no se acusará a nadie como fuente de este error, pues al crear un proyecto siempre suelen ocurrir problemas de configuración del entorno, ya sea por dependecias, incompatibilidades entre librerías o desconocimiento del nuevo entorno. El login también fue algo nuevo, por lo que la fuente de este error ha sido el propio sistema que estábamos intentando comprender| Esto fue corregido a tiempo, por lo que nadie del equipo permitió que este problema afectara al entregable | Para tomar acción en esto, más miembros del equipo trabajaron activamente en investigar cómo solucionar el problema del login. Afortunadamente, este problema fue resuelto y las demás tareas fueron replanificadas, para no sobrecargar de trabajo a aquellos que estuvieron arreglando el login. Finalmente, todas las tareas del Sprint pudieron ser entregadas a tiempo. | Resuelto | Esta incidencia podría haber sido un posible motivo para convertirse en un failure condition, como se especifa en el T-10. Todos los puntos de ese apartado podrían suponer un problema si no se conseguía avanzar en el código|
| Se intentó de abarcar demasiado en lugar de iterar y mejorar gradualmente | Aquí no se destaca ningún problema técnico, pues ha sido más un problema relacionado con la gestión del reparto de tareas | Problema con la estimación de los tiempos establecidos en cada tarea en el Sprint Planning, pues se se subestimó la complejidad de estas primeras funcionalidades y no se tuvieron en cuenta problemas que pudieran acontecer al configurar el nuevo entorno y el tiempo que llevaría arreglarlo. Todo esto no hubiera sucedido si se hubiera gestionado mejor el Sprint Planning | Project Manager y Jefes de Subequipo | Esto fue corregido a tiempo, por lo que nadie del equipo permitió que este problema afectara al entregable | Replanificación de las tareas, donde aquellas relacionadas con código que no se exigía para este entregable fueron desplazadas al S2, equilibrando el esfuerzo de todos los componentes del grupo y cumpliendo con las 10 horas semanales propuestas por la asignatura | Resuelto | Podría convertirse en un problema relacioando con el T-10 igualmente, ya que si se intentaba abordar demasidas funcionalidades para esta entrega, quizás no quedaría tiempo para llevar a cabo aquellas tareas que eran realmente necesarias especificadas en el T-10. Por ejemplo: An actor can list, edit or delete data that belong to another actor and only the admin should manage. Esto es algo que casi no conseguimos subsanar a tiempo por querer implementar más funcionalidades |
| Aislamiento de información | Aquí no se destaca ningún problema técnico, pues ha sido más un problema más relacionado con la gestión de la comunicación del equipo | Debido a esta falta de Daily Scrum y que las comunicaciones eran únicamente a través del grupo general de Whatsapp, este grupo llegaba a tener al día más de 200 mensajes, por lo que era inviable que todos los compañeros estuvieran leyendo constantemente el grupo. Además, mucha de esta información quizás no les interesaba, pues no tenía ningún tipo de relación con el trabajo que ellos estaban destinados a hacer | Project Manager y Jefes de Subequipo | Esto fue corregido a tiempo, por lo que nadie del equipo permitió que este problema afectara al entregable | Se crearon canales y comunicación y grupos de Whatsapp para cada subgrupo, reduciendo el número de mensajes considerablemente. El canal principal se usaría para dar avisos sobre asuntos importantes que interesaban a todos los integrantes del grupo. Estos avisos sólo podían ser mandados por la Project Manager y los Jefes de Subequipo. El grupo general sigue existiendo por si alguien que no pueda dar avisos quisiera comentar algo con todo el grupo |  Resuelto| Esto podría haberse convertido en un failure condition por cualquiera de los puntos declarados en el documento oficial. Pero, sobre todo afectarían al T-9 y T-10, para el formato de la entrega y aquellas actividades de código que eran necesarias para superar este Sprint  |
| Desconexión total con el despligue | Había ciertas funcionalidades que no funcionaron en el despliegue | El equipo se centró exclusivamente en el desarrollo en local, sin pensar en que a la hora de hacer el despligue podrían haber surgido errores, hecho que ocurrió | No se planificó correctamente que tuvieramos el tiempo necesario para realizar el despligue y corregirlo. Además, a ningún desarrollador le surgió esa inquietud, lo que no propició que nos diéramos cuenta a lo largo del Sprint |  Project Manager y Jefes de Subequipo  | Para los posteriores Sprints se hizo un cambio en el Planning para incluir esta tarea, así como adelantar la finalización de código para paliar estas situaciones|  Resuelto | Esto podría haber incumplido la sección T-10, específicamente el sexto punto  |

### Identificadas por el equipo después de la entrega

| Issue | Origen técnico | Origen en el proceso | Fuente del error | Responsable(s) de la issue | Acciones correctivas | Estado | Justificación |
| - | - | - | - | - | - | - | - |
| Mismo enlace de despliegue para Sprint 1 y Sprint 2 | No procede | Debido a la no realización de la Sprint Review, no se revisaron los progresos a nivel técnico de la aplicación de manera generalizada (en la retrospectiva se nombraron los cambios importantes que cada uno consideró), impidiendo esto detectar la necesidad de un despliegue por cada entregable | El encargado de la realización del despliegue de la aplicación ha sido Andrés Pizzano Cerrillos, el cual desconocía, al igual que el resto del equipo, la necesidad de una URL distinta para cada entregable | Project Manager y Jefes de Subequipo, puesto que eran los encargados de la revisión de los Deliverable Failure Conditions de este entregable | Preparar el despliegue con más tiempo y asegurarse de que los depliegues están en distintos enlaces | Resuelto | Esto afectaría directamente al T-10, puesto que como hasta ese momento usábamos un único enlace de despliegue, este pudo haber sido actualizado durante el Sprint 2, a la vez que se corregía el entregable del Sprint 1 |
|  Falta de restricción de permisos (un actor puede realizar operaciones con datos de otro usuario y que sólo el administrador debería poder gestionar) | No procede | No hubo una análisis de la seguridad cuando se establecieron los requisitos, y por tanto se pasó por alto. Por ello, no se definieron las tareas necesarias en el Sprint Planning | El grupo en su conjunto, pues nadie tuvo en cuenta esto a la hora de realizar los controladores | Project Manager y Jefes de Subequipo, puesto que son los responsables de estipular los procedimientos y garantizar la seguridad | Asegurar que la seguridad se corresponde con los estándares establecidos, verificando la integridad de la plataforma, además de tareas creadas en el Sprint Planning del siguiente Sprint para subsanar el problema | Resuelto | Esto afectaría directamente al T-10, al punto 5 específicamente |

### Identificadas por el profesorado

| Issue | Origen técnico | Origen en el proceso | Fuente del error | Responsable(s) de la issue | Acciones correctivas | Estado | Justificación |
| - | - | - | - | - | - | - | - |
| La UI se ha actualizado respecto a la entrega S1 descrita en revision.md | Redacción del documento en un momento muy temprano de la entrega | La persona encargada de realizar el revision.md no tuvo en cuenta a la hora de hacerlo que al avanzar los días la aplicación podía cambiar de aspecto y funcionalidad. Consideramos también como parte del error el hecho de que no se avisase a esa persona el día de la entrega que comprobase si la aplicación había variado respecto al documento ya redactado | Tanto el encargado de realizar el documento, como los supervisores del mismo debido a lo previamente mencionado | Project Manager y Jefes de Subequipo, puesto que eran los encargados de la revisión de todo antes de la entrega | En el Sprint 2 se corrigió ese documento respecto a la release final del Sprint 1 y se estableció que ese documento en específico debería realizarse el día de la entrega puesto que el límite para tocar código en ese momento era los miércoles y así nos asegurábamos el correcto versionado del documento | Resuelto | Si bien no se especifica en la Deliverable Failure Conditions que el contenido del revision.md se deba corresponder a lo entregado, damos por hecho que es algo intrínseco del propio documento y comprendemos que esto sea un motivo de invalidez del Sprint 1 |
| Datos no realistas en la plataforma | El data.sql no poseía datos realistas | No se tuvo en cuenta a la hora de crear usuarios que estos fueran realistas | A la hora de realizar el data.sql, Pablo Jesús Castellanos Compaña no se aseguró de que los datos quedasen lo más realistas posible en el contexto de la aplicación y simplemente rellenó los usuarios con los nombres que le fueron surgiendo | Project Manager y Jefes de Subequipo, puesto que eran los encargados de la revisión de todo antes de la entrega | Se planificó una actividad al inicio de S2 para subsanar todo esto. Para tener datos realistas se decidió que los clientes iban a ser miembros del equipo y los proveedores, los usuarios piloto. Posteriormente al final del Sprint, se rellenaron datos ficticios al final del archivo para darle menos sensación de vacío a la pagina web, pero siempre dentro de la realidad y señalándolo correctamtente en el archivo data.sql | Resuelto | Si bien esto no presenta un motivo evidente para la invalidez del Sprint, no se ve de manera adecuada dentro del contexto de una aplicación real que se planea lanzar a mercado |
| No se validan los formularios | No se implementaron validaciones en los formularios | Las personas encargadas de crear dichos formularios no comprobaron que no se pudieran introducir datos no válidos | Error del equipo de desarrollo en general, ya sea por acumulación de trabajo que lleva a saturación o por simple despiste | Project Manager y Jefes de Subequipo, puesto que eran los encargados de la revisión de todo antes de la entrega | Se planificaron actividades en los posteriores Sprints para corregir esto | Resuelto | Esto incumple directamente el apartado T-10 del Deliverable Failure Conditions |

## Metodología empleada
Se ha seguido durante todo el proyecto la metodología ágil y Scrum, reforzando el enfoque flexible y colaborativo entre los compañeros. En concreto se ha creado un Product Backlog priorizando las tareas para el equipo que debiera implementarlas, así como un Sprint Backlog. El rol de Scrum Master ha sido desempeñado por Natalia Olmo, ya que es la Project Manager del grupo. Además, al principio del Sprint, la Project Manager, junto con los Jefes de cada uno de los tres subequipos se reunieron para el Sprint Planning. Ese mismo día, tuvo lugar una reunión para comunicar medidas nuevas que se tomaran y para explicar cómo se había realizado el trabajo de tareas. El Sprint Retrospective también fue realizado por el grupo a mitad de Sprint y antes de finalizar el Sprint para saber cómo mejorar en la siguiente entrega y cómo se sentían los integrantes del grupo. No obstante, se ha optado por no realizar Daily Scrum ni Sprint Review por falta de tiempo de todos los compañeros y consideramos que con las reuniones establecidas sería suficiente. Se ha respetado en todo momento los 4 pilares fundamentales de la metodología ágil:
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
  
- **María Carrera** (Jefe de subequipo 1), **Pablo Jesús Castellanos** (Jefe de subequipo 2) y **Fran Avilés** (Jefe de subequipo 3): Supervisar y coordinar el trabajo de desarrollo en sus respectivas áreas, asegurando que el código cumpla con los requisitos técnicos y funcionales.

El grupo de 17 integrantes fue dividido en 3 subgrupos según sus habilidades de la siguiente forma:

- **Grupo 1**: María de la Salud Carrera, Fernando José de Celis, Gonzalo Navas, Adrián Cabello, Antonio Montero.

- **Grupo 2**: Natalia Olmo, Pablo Jesús Castellanos, Ignacio Blanquero, Manuel Pérez, Héctor Noguera, Sergio Pons.

- **Grupo 3**: Francisco Avilés, Andrés Pizzano, Lorenzo Torralba, David Godoy, Miguel Hernández, Daniel Benito.


## Conclusiones

A lo largo del Sprint 1 hemos experimentado numerosos aprendizajes valiosos tanto a nivel técnico como de gestión de equipo. Este primer ciclo de desarrollo ha supuesto una base fundamental para construir una dinámica de trabajo más eficaz, organizada y alineada con los principios ágiles. A continuación, se destacan las principales conclusiones:

### 1. La planificación y la comunicación son clave

La falta de *Daily Scrums* afectó negativamente a la visibilidad del estado de las tareas y provocó descoordinación entre subgrupos. La creación de canales temáticos de comunicación y una mejor estructura para la distribución de avisos ayudó a reducir el ruido y mejorar el seguimiento de los avances.

### 2. La validación técnica no debe dejarse para el final

Problemas como la falta de validaciones en formularios o errores en el despliegue muestran la necesidad de integrar fases de testing y revisión técnica desde etapas tempranas del desarrollo. Se han programado medidas específicas para reforzar la validación en futuros sprints, incluyendo automatización y revisión cruzada.

### 4. Roles definidos y responsabilidades claras

La asignación explícita de roles (Project Manager, Jefes de Desarrollo, QA, etc.) permitió resolver incidencias más rápido y tener puntos de referencia claros ante problemas. A futuro, seguiremos utilizando este modelo, complementado con rotación de tareas clave para fomentar la polivalencia del equipo.

### 5. La entrega debe reflejar fielmente lo desarrollado

Casos como el `revision.md` desactualizado o el uso del mismo enlace de despliegue para distintos sprints demostraron la importancia de alinear entregable y software real. Se han tomado medidas correctivas para evitar que documentación y aplicación diverjan.

En resumen, este Sprint ha sido una fase de adaptación, organización y reflexión. Sentamos unas bases sólidas que nos permitirán afrontar los siguientes desafíos con mayor madurez y eficiencia.



## Bibliografía

Grade Recovery Guidelines for #S1 and #S2.
