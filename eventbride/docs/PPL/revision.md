# Manual de usuario
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
| 09/03/2025 | v1.0    | Creación del documento y estructura básica | Sprint 1 | Fernando José de Celis Hurtado      |
| 12/03/2025 | v1.1    | Edición de Concordancia con los casos de uso  | Sprint 1 | Fernando José de Celis Hurtado, Antonio Montero López       |
| 13/03/2025 | v2.0    | Finalización del documento  | Sprint 1 | Fernando José de Celis Hurtado, Antonio Montero López       |
| 25/03/2025 | v2.1    | Actualización de credenciales de la aplicación | Sprint 2 | Fernando José de Celis Hurtado, Antonio Montero López       |
| 27/03/2025 | v2.2    | Actualización de enlace de github | Sprint 2 | Fernando José de Celis Hurtado, Antonio Montero López       |
| 27/03/2025 | v2.3    | Actualización de la guía de la aplicación | Sprint 2 | Fernando José de Celis Hurtado, Antonio Montero López       |
| 08/04/2025 | v3.0    | Actualización de la guía de la aplicación con los avances del sprint 3 | Sprint 3 | Sergio Pons López       |
| 30/04/2025 | v3.1    | Migración de imágenes a host de Internet| PPL | María de la Salud Carrera Talaverón |
| 30/04/2025 | v4.0    | Actualización de la guía de la aplicación con los avances del PPL | PPL | Sergio Pons López, Francisco Avilés Carrera       |
| 01/05/2025 | v4.1    | Adición de nuevas pantallas y cambio de las que se han actualizado | PPL | Sergio Pons López, Pablo Jesús Castellanos Compaña       |
| 01/05/2025 | v4.2    | Adición de casos de uso al punto 2 | PPL | Francisco Avilés Carrera      |

## Contenido
1. [Introducción](#intro)
2. [Concordancia con los casos de uso](#id1)
    1. [Usuario Cliente](#id2)
    2. [Usuario Proveedor](#id3)
    3. [Cualquier Usuario](#user)
3. [Guía de la aplicación](#id4)
    1. [Guía común](#id40)
    2. [Guía como cliente](#id41)
    3. [Guía como proveedor](#id42)
    4. [Guía como administrador](#id43)
4. [Información necesaria para utilizar todo lo relacionado con Eventbride](#id5)
5. [Requisitos para utilizar el sistema](#id6)
6. [Video demo de la aplicación](#id7)
7. [Bibliografía](#id8)

<div id='intro'></div>

## Introducción

Bienvenid@ a Eventbride, la plataforma definitiva para la gestión y organización de eventos. Eventbride está diseñada para facilitar la planificación de eventos como bodas, bautizos y comuniones, ofreciendo herramientas intuitivas y eficientes para gestionar todos los detalles importantes. Con Eventbride, podrá coordinar proveedores, gestionar invitados, y asegurarse de que cada aspecto de su evento sea perfecto.

Este manual de usuario le guiará a través de las funcionalidades principales de la aplicación, desde la creación de una cuenta hasta la gestión de eventos y servicios. Nuestro objetivo es proporcionarle una experiencia de usuario fluida y sin complicaciones, permitiéndole disfrutar del proceso de planificación y asegurando que su evento sea memorable y único.

<div id='id1'></div>

## Concordancia con los casos de uso

<div id='id2'></div>

### Usuario Cliente

1. **Solicitar contratar un servicio para un evento (CC - 01)**

   *"Usuario cliente solicita servicio ofertado en la plataforma, para celebración. Un servicio también incluye a un recinto en este caso."*
Se deben seguir los siguientes pasos:

- Establecer qué tipo de servicio que desea contratar siendo las opciones: “**Recintos**” o “**Otros servicios**” situados en el navbar. Donde “**Otros**” engloba cualquier servicio que no sea un local.

- Una vez en la página que se haya escogido para contratar el servicio a desear, el usuario deberá seleccionar el botón de "**Añadir a mi evento**" correspondiente al evento.

- Una vez pulsado, aparecerá un modal con una lista de los eventos del usuario, donde deberá seleccionar el evento donde desea añadir el servicio escogido, con el horario deseado.


2. **Realizar pagos del evento (CC - 03)**

   *"Usuario cliente pretende hacer pagos del evento, ya sean las señales una a una de cada servicio o el pago total."*
Se deben seguir los siguientes pasos:

- El usuario acude a la pestaña de "**Mis eventos**".

- Una vez en seleccionado el evento para el que quiere realizar algún pago, podrá pagar la señal de un servicio concreto, o hacer un pago de la señal / pago completo de todos los servicios en conjunto. Para ello , utilizará la opción "**Pagar reserva**", permitiendo el pago por Paypal / Tarjeta de débito o crédito.

3. **Crear evento (CC - 05)**

   *“El usuario quiere crear un evento.”*
   Para crear el evento, el usuario debe realizar los siguientes pasos:

- Seleccionar el botón “**Crear evento**” desde la pantalla principal. 

- Una vez en la pantalla “**Crear evento**” el usuario debe de realizar las siguientes acciones:
   - Indicar el nombre del evento.
  - Establecer qué tipo de evento desea crear siendo las opciones: “**Boda**”, “**Bautizo**” o “**Comunión**”.
  - Introducir el número de invitados estimados para el evento.
  - Escoger la fecha del evento.
- Ya introducidos todos los datos, pulsar el botón de “**Crear evento**”.

4. **Gestionar lista de invitados e invitaciones (CU - 06)**

   *"El usuario cliente quiere crear y gestionar la lista de invitados mediante invitaciones de su evento."* Se deben seguir los siguientes pasos:

- El usario debe acceder a la pestaña de "**Mis eventos**".

- Una vez ahí, al darle a la opción "**Invitaciones**" del evento deseado, le redigirá a una pantalla nueva.

- Al pulsar en "**Crear invitación**", rellenará los campos número máximo de invitados y correo del invitada y pulsará "**Enviar**". Dicha invitación será recibida en el correo indicado, y el invitado responderá el formulario que recibirá sin necesidad de iniciar sesión diciendo cuántos invitados vienen con él finalmente.

5. **Seguimiento del precio del evento  (CU - 07)**

   *"El usuario quiere conocer el precio del evento en todo momento."* Se deben seguir los siguientes pasos:

- El usario debe acceder a la pestaña de "**Mis eventos**".

- Una vez ahí, pulsa sobre el evento deseado, redirigiéndole el sistema a la pantalla de los detalles de dicho evento.

- En esa pantalla, en el lugar donde se lee "**Coste acumulado**", se indica el coste total de todos los servicios que el usuario ha añadido al evento, sin tener en cuenta las comisiones que posteriormente se sumarán al total.

6. **Valoración de servicios   (CU - 09)**

   *"El usuario quiere dejar una reseña y calificación de un servicio que contrató."* Se deben seguir los siguientes pasos:

- El usario debe acceder a uno de los servicios que haya contratado, mediante las pestañas de "**Otros Servicios**" o "**Recintos**".

- Una vez seleccionado un servicio que haya contratado, mediante la opción "**Valorar**", podrá introducir una calificación de 1 a 5 estrellas y si así lo desea, una reseña escrita.

<div id='id3'></div>

### Usuario Proveedor

1. **Aceptar o rechazar la solicitud de un servicio (CC - 02)**

   *"Usuario proveedor acepta o rechaza servicio. Un servicio también incluye a un recinto en este caso.
   "*
Se deben seguir los siguientes pasos:

- El proveedor en concreto se dirige a la pestaña "**Solicitudes**".

- Una vez en la página que, mediante las opciones "**Rechazar**" o "**Confirmar**", eligirá si quiere prestar servicio en dicho evento o no.


2. **Registrar servicio (CC - 04)**

   *“El usuario de un servicio quiere ofertarlos a través de la aplicación.”*

   Para registrar un servicio, el proveedor debe realizar los siguientes pasos:

- Seleccionar el botón “**Mis servicios**” desde la pantalla principal. 
- Una vez en la pantalla donde se reflejan los servicios, el proveedor debe de pulsar en el botón “**+ Crear nuevo servicio**”.
- Ya situados en la pantalla “**Registrar Servicio**”, el proveedor deberá realizar las siguientes acciones:
  - Establecer qué tipo de servicio que desea crear siendo las opciones: “**Recinto para eventos**” u “**Otros**”. Donde “**Otros**” engloba cualquier servicio que no sea un local. Esta elección cambia los últimos valores a introducir en el formulario de creación.
  - Introducir el nombre del servicio que se desea exponer.
  - Marcar si se encuentra disponible actualmente, escribir la ciudad donde es disponible.
  - Establecer si se trata de un servicio que se cobra “**Por invitado**”, “**Por hora**” o con “**Precio fijo**” y establecer el precio.
  - Importar el enlace a la imagen que quieres mostrar en tu servicio.
  - Escribir la descripción que quieres tener en tu servicio.
  - En caso de ser un “**Recinto para eventos**”, el usuario debe de introducir los siguientes valores: el “**Código postal**” del recinto, sus “**Coordenadas**”, su “**Dirección**”, el número “**Máximo de invitados**” y su “**Superficie (m²)**” en metros cuadrados.
  - En caso de haberse establecido con “**Otros**”, el usuario debe de introducir los siguientes valores: el tipo de servicio, escogiendo entre “**Catering**”, “**Entretenimiento**” y “**Decoración**”, además, podrá introducir algo de información adicionar relevante en “**Información extra**”.

- Ya introducidos todos los datos, pulsar el botón de “**Registrar servicio**” o “**Registrar recinto**”.

<div id='user'></div>

### Cualquier usuario

1. **Contactar con el servicio de Eventbride.  (CU - 08)**

   *El usuario necesita ayuda o tiene una pregunta sobre la aplicación.”* Para contactar con el servicio de atención al cliente, el usuario debe realizar los siguientes pasos:

- El usuario en concreto (no es necesario que haya iniciado sesión), dispondrá de una sección de "**Contacto**" en el footer de la web, mediante la cual podrán contactarnos por los medios indicados en la misma.

2. **Atención al cliente.  (CU - 11)**

   *Usuario cliente o usuario proveedor quieren realizar alguna consulta.”* Para contactar con el servicio de atención al cliente, el usuario debe realizar los siguientes pasos:

- Seleccionar el botón “**Soporte Técnico**” desde la pantalla principal. 
- Una vez en la pantalla donde se reflejan distintos problemas genéricos que pueden ser de ayuda al usuario, en caso de que el usuario quiera contactar con el soporte técnico directamente, el proveedor debe de pulsar en el botón de color azul con el logo de de soporte que se encuentra abajo a la derecha.
- Una vez haya pulsado el botón, se abrirá un chat con el administrador de la aplicación, donde el usuario podrá contactar con él y poder resolver cualquier problema que pueda tener.

3. **Recibir notificaciones  (CU - 10)**

   *El usuario quiere recibir actualizaciones y notificaciones importantes relacionadas con sus eventos, reservas o cuenta.”*

   En caso de recibir alguna notificación, el usuario debe realizar podrá acceder a su contenido con los siguientes pasos:

- Seleccionar el botón que se encuentra a la izquierda del nombre de usuario con forma de campana desde la pantalla principal.
- Una vez en la pantalla donde se reflejan las notificaciones, el usuario podrá ver el contenido de cada una, junto con la información de la fecha y hora en la que la recibió.

4. **Chat entre clientes y proveedores  (CU - 12)**

   *Usuario cliente quiere organizar un evento mediante un asistente virtual para filtrar resultados.”* En caso de querer comunicarse con el cliente o proveedor, el usuario debe realizar podrá acceder a su contenido con los siguientes pasos:

- En caso de ser un cliente, acudir a alguna de las siguientes pestañas: "**Mis eventos**", "**Recintos**" u otros "**Servicios**". Pulsar sobre la opción "**Chatear**" del servicio con el que desea contactar. El sistema le abrirá un chat para que inicie la conversación.

- En caso de ser un proveedor, debe acudir a la pestaña de "**Solicitudes**". Al seleccionar la solicitud deseada, dispondrá de la opción "**Contactar cliente**". El sistema le abrirá un chat para que inicie la conversación.

<div id='id4'></div>

## Guía de la aplicación

<div id='id40'></div>

### Guía común

Para comenzar, al iniciar la aplicación se muestra un formulario de ***Inicio de sesión*** el cual hay que completar para poder acceder a las funcionalidades de esta.

<img src="https://iili.io/3hTkKGV.png"></img>

En caso de no tener cuenta, se puede acceder a la pestaña de ***registrarse*** y completar el formulario correspondiente para poder crearse una cuenta pudiendo elegir el tipo de usuario que desea ser (cliente o proveedor).

<img src="https://iili.io/3hT8g3B.png"></img> 

Para cualquier usuario, al pulsar en las ***Notificaciones***, se abre una vista como esta donde se informa de diversas cosas, según el rol que tengas dentro de la plataforma como pueden ser que tengas un mensaje nuevo o una nueva solicitud de reserva, en el caso del proveedor.

<img src="https://iili.io/3XhGFun.png"></img> 


Para cualquier usuario, si se accede a los ***chats*** se muestra al inicio todos los chats abiertos con el último mensaje enviado de la conversación.

<img src="https://iili.io/3XhWfZg.png"></img> 


Y si se accede a un ***chat en especifico***, se podrá enviar mensajes escribiéndolos y enviándolos, similar a WhatsApp.

<img src="https://iili.io/3XhXzib.png"></img> 


En todas las pestañas de nuestra plataforma, aparece abajo del todo un ***Footer*** que se muestra en la siguiente imagen. Para los los usuarios son cliente aparece la sección de Enlaces rápidos pero para los otros dos tipos de usuario no.

<img src="https://iili.io/3amdyox.png"></img> 

Dentro del perifl, si pulsas en ***editar la contraseña*** debes introducir la contraseña actual y la contraseña nueva que desees tener. 

<img src="https://iili.io/3Xj05Xf.png"></img>

<div id='id41'></div>

### Guía como cliente

La ***pestaña de inicio*** que te aparece al iniciar sesión como cliente es la siguiente: 

<img src="https://iili.io/3hTgy8B.png"></img>

El ***navbar*** de la parte del cliente es el de la siguiente imagen.

<img src="https://iili.io/3amFqCv.png"></img>

Si accedemos a la sección de ***"Mis eventos"***, se pueden observar los eventos pertenecientes al usuario y sus respectivos datos.

<img src="https://iili.io/3hT4qxe.png"></img> 

Se puede entrar en detalles de los eventos para poder leer toda la información de los mismos. 

Dentro de la vista de los detalles del evento se permite al usuario ver la fecha de celebración, el número de invitados estimados, el coste acumulado, que es la suma de todos los precios de los servicios y de los eventos y el total pagado desglosando en lo que se paga por el servicio y la señal. 

Después, se puede ver los servicios que se han contratado. De cada servicio aparece una foto, la ubicación, en el caso de que sea un recinto o una breve descripción en el caso de otro servicio, el horario en el que se contrata, la opción de pagar la reserva, la de acceder al chat o la de eliminar servicio.

Finalmente, debajo del todo, te aparece un desglose del pago de las señales, incluyendo la comisión por gastos de gestión del 5%, dando la opción de pagarlas a través de PayPal o de una tarjeta de débito o crédito.

<img src="https://iili.io/3hTPTt1.png"></img> 
<img src="https://iili.io/3hTi4II.png"></img> 

Si clicas sobre la cifra que aparece en azul de ***COSTE ACUMULADO*** (en este caso 6300€), se te abre la siguiente pestaña en la que se pueden observar el coste total y el coste de las señales.

<img src="https://iili.io/3hTLTtS.png"></img> 


Al igual que al clicar en el coste acumulado, si clicas sobre la cifra que aparece en verde de ***PAGADO*** (en este caso 0€), se te abre lo siguiente con un desglose de pagos entre las señales y el total.

<img src="https://iili.io/3hTQS7j.png"></img> 


Si desea pagar los servicios individualmente puede hacerlo accediendo a la pestaña de ***Pagar reserva*** que tiene cada servicio y se puede pagar por los mismos medios mencionados anteriormente, por PayPal y tarjeta de crédito/débito.

<img src="https://iili.io/3hTtINR.png"></img> 


Si en vez de en *Ver detalles* clicas en ***Ver invitaciones***, se abre la siguiente vista que contiene el número de invitados estimados (se establece al crear un evento), los invitados confirmados y una lista con sus nombres, pudiendo eliminarlos si fuese necesario.

<img src="https://iili.io/3amfkTF.png"></img> 

Al pulsar en ***Crear invitación*** se te pregunta por un número máximo de invitados asociados al link creado y un correo electrónico al que se enviará la invitación.

<img src="https://iili.io/3hTmdNf.png"></img> 


Cuando se introduce el número máximo de invitados y se presiona el botón enviar, se copia en el portapapeles un enlace a una página en la que la persona invitada al evento puede rellenar el siguiente formulario para aparecer en la lista de invitados. Para rellenar este formulario no se debe estar registrado dentro de la plataforma. 

<img src="https://iili.io/3hTp7If.png"></img> 

En la sección de ***Crear evento*** se muestra un formulario a completar y se crea el evento. 

<img src="https://iili.io/3huJqvt.png"></img> 


Accedediendo a la pestaña de ***Recintos*** se pueden ver los recintos disponibles, su localización en el mapa, los detalles de cada recinto y la posibilidad de chatear con el dueño del recinto. Los recintos que aparecen como ***PROMOCIONADO*** aparecen en primer lugar ya que corresponden a los proveedores que tienen plan premium. Los recintos aparecen paginados.

<img src="https://iili.io/3hud6qx.png"></img>
<img src="https://iili.io/3hu2hTF.png"></img>


Si se desea ***añadir un recinto*** a uno de los eventos que tengas ya creado, se debe rellenar un formulario indicando el evento al que quieres asignar dicho recinto y completar la hora de inicio y final de la reserva del sitio. Solo te aparecerán los eventos a los que no se haya añadido previamente.

<img src="https://iili.io/3huFIO7.png"></img>

Si clicas en un recinto, se te abre la pestaña de ***detalles de recinto*** que es la siguiente. Las valoraciones aparecen en esta pestaña.

<img src="https://iili.io/3huqpLX.png"></img>

Para añadir diferentes servicios como los de catering, entretenimiento y decoración accede a la pestaña de ***Otros servicios*** y podrás ver los diferentes servicios con sus detalles y la posibilidad de chatear con el dueño del servicio.

<img src="https://iili.io/3hufow7.png"></img>


Si se desea ***añadir un servicio*** a uno de los eventos que tengas ya creado, se debe rellenar un formulario indicando el evento al que quieres asignar dicho servicio y completar la hora de inicio y final de la reserva del servicio. Solo te aparecerán los eventos a los que no se haya añadido previamente.

<img src="https://iili.io/3huPlkl.png"></img>

Si clicas en un servicio, se te abre la pestaña de ***detalles de servicio*** que es la siguiente. Las valoraciones aparecen en esta pestaña.

<img src="https://iili.io/3huB14a.png"></img>

Una vez terminado el evento, el cliente se puede realizar una ***valoración del servicio o recinto contratado***, poniendole un rango de 1 a 5 estrellas. 

<img src="https://iili.io/3XwYCes.png"></img>

El ***Soporte Técnico*** para los usuarios cliente de nuestra plataforma consiste en una sección de preguntas rápidas donde pueden obtener respuestas rápidas a preguntas frecuentes.  En el caso de que su duda no se resuelva, pueden acceder a un chat con el administrador pulsando en el icono azul que aparece abajo a la derecha y un comentario.

<img src="https://iili.io/3XMdeBn.png"></img>

Se puede acceder a la pestaña de ***Detalles de perfil*** donde se muestran todos los datos y se da la posibilidad de editarlos o cerrar sesión. Está también la opción de cambiar la contraseña.

<img src="https://iili.io/3huc6N9.png"></img>

Si se desea ***actualizar los datos del perfil***, se accede a la pestaña correspondiente, se modifican con un formulario simple y se le da a guardar.

<img src="https://iili.io/3huVfls.png"></img>

<div id='id42'></div>

### Guía como proveedor

Si iniciamos sesión con un usuario ***Proveedor***, se muestra la página inicial.

<img src="https://iili.io/3huXF8G.png"></img>


Para ***Crear un servicio*** se te mostrará un formulario donde primeramente podrás elegir si el servicio que quieres introducir es un recinto u otro tipo. 

<img src="https://iili.io/3XfM7Nn.png"></img>

Según la selección anterior se te muestra un formulario u otro. En el caso de que se haya elegido la opción de ***Recinto para eventos*** se muestra el siguiente formulario a rellenar.

<img src="https://iili.io/3XfM5AX.png"></img>

En el caso de que hayas seleccionado ***Otro tipo de servicio*** se mostrará el siguiente formulario, en el que se podrá diferenciar entre si el servicio proporcionado es dedicado al catering, al entretenimiento o a la decoración.  

<img src="https://iili.io/3XjMena.png"></img>
<img src="https://iili.io/3XjV0Nt.png"></img>

Si se accede a la pestaña de ***Mis servicios***, se muestran los servicios pertenecientes al proveedor pudiéndose deshabilitar, editar y crear nuevos servicios en la misma sección.

<img src="https://iili.io/3hujzYu.png"></img>

Dentro de ***Editar un recinto***, se muestra un formulario a modificar si se desea cambiar algún atributo del recinto. Se permite editar todos los atributos puestos en el formulario de creación.
Al pulsar sobre guardar se actualiza cómo se muestra en los distintos sitios de la plataforma.

<img src="https://iili.io/3hueucP.png"></img>

<img src="https://iili.io/3huv1aI.png"></img>

<img src="https://iili.io/3huvZ8P.png"></img>

Si nos movemos a la pestaña de ***Solicitudes*** se muestran las solicitudes pendientes que le queda al proveedor por aceptar o cancelar según su criterio. En el caso de haber solicitudes, se mostrarán todos los datos importantes de la misma y los botones de aceptar o cancelar.

<img src="https://iili.io/3hu4TyN.png"></img>

En la pestaña de ***Contrataciones*** podemos ver de forma rápida un resumen de las solicitudes realizadas hasta el momento incorporando un filtro en la que puedes visualizar las que tienes pendientes, las que has aceptado y las que has rechazado. También se incorpora un calendario donde puedes ver los eventos, usando el mismo filtro, dentro del mismo.

<img src="https://iili.io/3amTbnI.png"></img>

En el ***Historial de ventas*** podemos ver un resumen de los pagos que han realizado los clientes. También se pueden retirar los fondos, que se irán a la cuenta que el proveedor indique.

<img src="https://iili.io/3huLlkv.png"></img>
<img src="https://iili.io/3huLpG1.png"></img>

El ***Soporte Técnico*** para los proveedores de nuestra plataforma consiste en una sección de preguntas rápidas donde los proveedores pueden obtener respuestas rápidas a las preguntas frecuentes. En el caso de que su duda no se resuelva, pueden acceder a un chat con el administrador pulsando en el icono azul que aparece abajo a la derecha.

<img src="https://iili.io/3XMdk1s.png"></img>

Al hacer clic sobre tu foto de perfil, te redirige a la pestaña de ***Ver perfil***. Esta es la misma que la del usuario cliente, pero en el caso de que tengas el plan *Basic* te aparece un botón que te permite cambiarte de plan a premium, como podemos ver en la segunda imagen. Está disponible la opción de cambiar la contraseña.

<img src="https://iili.io/3huZziP.png"></img>
<img src="https://iili.io/3hAHYoG.png"></img>

Si pulsas sobre ***Editar perfil*** se te abre la siguiente vista donde puedes editar todos los aspectos que aparecen en pantalla.

<img src="https://iili.io/3hAK39p.png"></img>

Si se desea ***Actualizar al plan premium***, se puede realizar indicando el número de meses que se desea y se puede pagar con tarjeta o con PayPal.

<img src="https://iili.io/3XfMnoJ.png"></img>

<div id='id43'></div>

### Guía como administrador

Si iniciamos sesión con un usuario **admin** se muestra la pantalla de inicio.

<img src="https://iili.io/3hABCV1.png"></img>

Si accedemos a ***Administrar servicios***, se muestran todos los servicios del sistema paginados dando la opción de editar y eliminar. 

<img src="https://iili.io/3hAz9vs.png"></img>

Si accedemos a la sección de ***Editar*** (justo abajo de cada servicio), se permite cambiar los datos de los servicios y presionando en *guardar* se actualizan los datos.

<img src="https://iili.io/3hAaQJ2.png"></img>

Y por último, si accedemos a la sección de ***Administrar usuarios***, se encuentran todos los usuarios del sistema paginados devolviéndolos directamente en forma de formulario y si se desea editar se modifica dicho formulario y se pulsa el botón de editar. Está la opción de buscar por id del usuario.

<img src="https://iili.io/3hAzyiB.png"></img>

Para ***editar usuarios***, le das al botón editar debajo de cada usuario, rellenas el formulario y le das a guardar.

<img src="https://iili.io/3hAM5ml.png"></img>

Desde la cuenta de administrador, tienes la opción de ***cambiar la contraseña a cualquier usuario***.

<img src="https://iili.io/3hAV8nS.png"></img>

La sección de ***Administrar eventos*** funciona de la misma manera que la anterior mencionada (administrar servicios).

<img src="https://iili.io/3hAT9If.png"></img>


Para ***editar eventos***, le das al botón editar debajo de cada evento, rellenas el formulario y le das a guardar.

<img src="https://iili.io/3hAT4a9.png"></img>


Si accedemos a la sección de ***Editar***, se nos muestra el formulario a rellenar.

<img src="https://iili.io/3hA1Hfs.png"></img>

Para ***Visualizar el perfil del administrador*** simplemente tienes que clicar sobre la foto de perfil. Ahí podrás editarlo si ha cambiado algún dato, de forma similar a los otros usuarios del sistema.

<img src="https://iili.io/3hAAEgI.png"></img>

<div id='id5'></div>

## Información necesaria para utilizar todo lo relacionado con Eventbride

**Landing page:** https://sites.google.com/view/eventbride/inicio?authuser=0

**Credenciales de la aplicación:**

Clientes:

- Usuario: **alice123** Contraseña: **1234**
- Usuario: **D4nielBH** Contraseña: **1234**
- Usuario: **Natalii** Contraseña: **1234**
- Usuario: **PabloCC** Contraseña: **1234**
- Usuario: **MariaCT** Contraseña: **1234**
- Usuario: **Fraan** Contraseña: **1234**

Proveedores:

- Usuario: **ElCastilloDeMaxi** Contraseña: **1234**
- Usuario: **JLMorilla** Contraseña: **1234**
- Usuario: **JMGomez** Contraseña: **1234**
- Usuario: **JMGonzalez** Contraseña: **1234**
- Usuario: **FelipeGN** Contraseña: **1234**
- Usuario: **DLDecor** Contraseña: **1234**
- Usuario: **MasterSound** Contraseña: **1234**
- Usuario: **ARCOS3CATERING** Contraseña: **1234**
- Usuario: **MongoMango** Contraseña: **1234**
- Usuario: **SurMusic** Contraseña: **1234**
- Usuario: **PandoCatering&Hacienda** Contraseña: **1234**

Administrador:

- Usuario: **Admin** Contraseña: **1234**

**URL del despliegue de la aplicación (SPRINT1): https://sprint1-dot-ispp-2425-03.ew.r.appspot.com/** 

**URL del despliegue de la aplicación (SPRINT2): https://ispp-2425-03.ew.r.appspot.com/login** 

**URL del despliegue de la aplicación (SPRINT3): https://sprint3-dot-ispp-2425-03.ew.r.appspot.com/login** 

**URL del despliegue de la aplicación (PPL): https://ppl-dot-ispp-2425-03.ew.r.appspot.com** 

**URL de GitHub: https://github.com/ISPP-Eventbride**

**Credenciales correo gmail:**

- Usuario: **[eventbride6@gmail.com](mailto:eventbride6@gmail.com)** Contraseña: **3vent\_Br1de**

**Credenciales correo corporativo:**

- Usuario: **[info@eventbride.fun](mailto:info@eventbride.fun)** Contraseña: **0P7csMTH#wT%baj1**

**Credenciales de correo de soporte:**

- Usuario: **[soporte@eventbride.fun](mailto:soporte@eventbride.fun)** Contraseña: **4&f545@nE#z8^6J%**

> [!IMPORTANT]
> Si quiere iniciar sesión con los correos de soporte o corporativo en Outlook, hay que cambiar el tipo de cuenta a IMAP

**Credenciales de Clockify:** cuando inicies sesión con clockify te pedirá un correo electrónico, meter el correo corporativo (eventbride6@gmail.com). Acto seguido te enviará una clave al correo corporativo.

<div id='id6'></div>

## Requisitos para utilizar el sistema
Todo lo relacionado para la puesta en marcha del proyecto viene indicado en el [README](https://github.com/ISPP-Eventbride/Eventbride/blob/master/README.md) del repositorio de GitHub.

<div id='id7'></div>

## Videos demo de la aplicación
Los videos demo de la aplicación se encuentran en el siguiente [enlace](https://uses0-my.sharepoint.com/personal/natolmvil_alum_us_es/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fnatolmvil%5Falum%5Fus%5Fes%2FDocuments%2FISPP%2FSPRINT1%2FVideo%20demo&ga=1).

<div id='id8'></div>

## Bibliografía
Intencionalmente en blanco.
