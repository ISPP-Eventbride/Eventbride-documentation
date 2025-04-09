# <center>Manual de usuario</center>
## <center>Ingeniería del Software y Práctica Profesional (ISPP)</center>
<center><img src="..\img\Eventbride.png"></center>

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

### Fecha: 08/04/2025

### Entregable: Sprint 3

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

## Contenido
1. [Introducción](#intro)
2. [Concordancia con los casos de uso](#id1)
    1. [Usuario Cliente](#id2)
    2. [Usuario Proveedor](#id3)
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

   *“Usuario cliente solicita servicio ofertado en la plataforma, para celebración. Unservicio también incluye a un recinto en este caso.”*

   Mockup - Frontend en #S1

   Una vez implementada la función, el usuario podrá solicitar el servicio para su evento realizando los siguientes pasos:

- Establecer qué tipo de servicio que desea contratar siendo las opciones: “**Recintos**” o “**Otros servicios**” situados en el navbar. Donde “**Otros**” engloba cualquier servicio que no sea un local.

- Una vez en la pagina que se haya escogido para contratar el servicio a desear, el usuario deberá seleccionar el botón de "**Añadir evento**" correspondiente al evento.

- Una vez pulsado, aparecerá un modal con una lista de los eventos del usuario, donde deberá seleccionar el evento donde desea añadir el servicio escogido.

2. **Crear evento (CC - 03)**

   *“El usuario quiere crear un evento.”*

   Para crear el evento, el usuario debe realizar los siguientes pasos:

- Seleccionar el botón “**Crear evento**” desde la pantalla principal. 

  Otra forma de realizarlo es darle a la opción “**Desde cero**” una vez haya pulsado “**Crear evento**” en el navbar.

- Una vez en la pantalla “Crear evento” el usuario debe de realizar las siguientes acciones:
  - Establecer qué tipo de evento desea crear siendo las opciones: “**Boda**”, “**Bautizo**” o “**Comunión**”.
  - Introducir el número de invitados estimados para el evento.
  - Reflejar el presupuesto estimado para todo el evento.
  - Escoger la fecha del evento.
- Ya introducidos todos los datos, pulsar el botón de “**Crear evento**”.

<div id='id3'></div>

### Usuario Proveedor

1. **Registrar servicio (CC - 02)**

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

- Ya introducidos todos los datos, pulsar el botón de “**Registrar otro servicio**”.

<div id='id4'></div>

## Guía de la aplicación

<div id='id40'></div>

### Guía común

Para comenzar, al iniciar la aplicación se muestra un formulario de inicio de sesión el cual hay que completar para poder acceder a las funcionalidades de esta.

<center><img src="..\img\login.png"></center>

En caso de no tener cuenta, se puede acceder a la pestaña de registrarse y completar el formulario correspondiente para poder crearse una cuenta pudiendo elegir el tipo de usuario que desea ser (cliente o proveedor).

<center><img src="..\img\register.png"></center>

Para cualquier tipo de usuario se puede ver una página de inicio que es la página siguiente donde nos presentamos, hay una breve descripción sobre lo que hacemos y como trabajamos, hay una barra de navegación en la parte superior de la pantalla donde se puede viajar a todas las funcionalidades de Eventbride y por último se pueden acceder a los chats abiertos en el botón verde de abajo derecha.

<center><img src="..\img\inicio.png"></center>

Para cualquier usuario, al pulsar en las ***Notificaciones***, se abre una vista como esta donde se informa de diversas cosas, según el rol que tengas dentro de la plataforma como pueden ser que tengas un mensaje nuevo o una nueva solicitud de reserva, en el caso del proveedor.

<center><img src="..\img\notificaciones.png"></center>

Para cualquier usuario, si se accede a los chats se muestra al inicio todos los chats abiertos con el último mensaje enviado de la conversación.

<center><img src="..\img\chats.png"></center>

Y si se accede a un chat en especifico, se podrá enviar mensajes escribiéndolos y enviándolos, similar a WhatsApp.

<center><img src="..\img\chatprivado.png"></center>

En todas las pestañas de nuestra plataforma, aparece abajo del todo un ***Footer*** que se muestra en la siguiente imagen. Para los los usuarios son cliente aparece la sección de Enlaces rápidos pero para los otros dos tipos de usuario no.

<center><img src="..\img\footer.png"></center>


<div id='id41'></div>

### Guía como cliente

Si iniciamos sesión con un usuario **cliente**, y accedemos a la sección de ***"Mis eventos"***, se pueden observar los eventos pertenecientes al usuario y sus respectivos datos.

<center><img src="..\img\miseventos.png"></center>

Se puede entrar en detalles de los eventos para poder leer toda la información de los mismos. 

Dentro de la vista de los detalles del evento se permite al usuario ver la fecha de celebración, el número de invitados estimados, el coste acumulado, que es la suma de todos los precios de los servicios y de los eventos y el total pagado desglosando en lo que se paga por el servicio y la señal. 

Después, se puede ver los servicios que se han contratado. De cada servicio aparece una foto, la ubicación, en el caso de que sea un recinto o una breve descripción en el caso de otro servicio, el horario en el que se contrata, la opción de pagar la reserva, la de acceder al chat o la de eliminar servicio.

Finalmente, debajo del todo, te aparece un desglose del pago de las señales, incluyendo la comisión por gastos de gestión del 5%, dando la opción de pagarlas a través de PayPal o de una tarjeta de débito o crédito.

<center><img src="..\img\detallesevento1.png"></center>
<center><img src="..\img\detallesevento2.png"></center>

Si clicas sobre la cifra que aparece en azul de ***COSTE ACUMULADO*** (en este caso 6200€), se te abre la siguiente pestaña en la que se pueden observar el coste total y el coste de las señales.

<center><img src="..\img\desgloseprecios.png"></center>

Al igual que al clicar en el coste acumulado, si clicas sobre la cifra que aparece en verde de ***PAGADO*** (en este caso 0€), se te abre lo siguiente con un desglose de pagos entre las señales y el total.

<center><img src="..\img\desglosepagos.png"></center>

Si desea pagar los servicios individualmente puede hacerlo accediendo a la pestaña de ***Pagar reserva*** que tiene cada servicio y se puede pagar por los mismos medios mencionados anteriormente, por PayPal y tarjeta de crédito/débito.

<center><img src="..\img\pagoservicio.png"></center>

Si en vez de en *Ver detalles* clicas en ***Ver invitaciones***, se abre la siguiente vista que contiene el número de invitados estimados (se establece al crear un evento), los invitados confirmados y una lista con sus nombres, pudiendo eliminarlos si fuese necesario.

<center><img src="..\img\invitaciones.png"></center>

Al pulsar en ***Crear invitación*** se te pregunta por un número máximo de invitados asociados al link creado.

<center><img src="..\img\formularioinvitaciones.png"></center>

Cuando se introduce el número máximo de invitados y se presiona el botón enviar, se copia en el portapapeles un enlace a una página en la que la persona invitada al evento puede rellenar el siguiente formulario para aparecer en la lista de invitados. Para rellenar este formulario no se debe estar registrado dentro de la plataforma.

<center><img src="..\img\invitaciones2.png"></center>

En la sección de ***Crear evento*** se muestra un formulario a completar y se crea el evento. 

<center><img src="..\img\crearevento.png"></center>

Accedediendo a la pestaña de ***Recintos*** se pueden ver los recintos disponibles, su localización en el mapa, los detalles de cada recinto y la posibilidad de chatear con el dueño del recinto. Los recintos que aparecen como ***PROMOCIONADO*** aparecen en primer lugar ya que corresponden a los usuarios que tienen plan premium.

<center><img src="..\img\recintosdisponibles.png"></center>

Si se desea añadir un recinto a uno de los eventos que tengas ya creado, se debe rellenar un formulario indicando el evento al que quieres asignar dicho recinto y completar la hora de inicio y final de la reserva del sitio. Solo te aparecerán los eventos a los que no se haya añadido previamente.

<center><img src="..\img\añadirrecinto.png"></center>

Para añadir diferentes servicios como los de catering, entretenimiento y decoración accede a la pestaña de ***Otros servicios*** y podrás ver los diferentes servicios con sus detalles y la posibilidad de chatear con el dueño del servicio.

<center><img src="..\img\otrosservicios.png"></center>

Si se desea añadir un servicio a uno de los eventos que tengas ya creado, se debe rellenar un formulario indicando el evento al que quieres asignar dicho servicio y completar la hora de inicio y final de la reserva del sitio. Solo te aparecerán los eventos a los que no se haya añadido previamente.

<center><img src="..\img\añadirservicio.png"></center>

Se puede acceder a la pestaña de detalles de perfil donde se muestran todos los datos y se da la posibilidad de editarlos o cerrar sesión.

<center><img src="..\img\detallesperfil.png"></center>

Si se desea actualizar los datos del perfil, se accede a la pestaña correspondiente, se modifican con un formulario simple y se le da a guardar.

<center><img src="..\img\editarperfil.png"></center>

<div id='id42'></div>

### Guía como proveedor

Si iniciamos sesión con un usuario ***Proveedor***, se muestra la misma página inicial que los usuarios clientes pero se muestra el plan de pago al que pertenece y las funcionalidades correspondientes.

<center><img src="..\img\inicioproveedor.png"></center>


Para ***Crear un servicio*** se te mostrará un formulario donde primeramente podrás elegir si el servicio que quieres introducir es un recinto u otro tipo. 

<center><img src="..\img\crearservicio1.png"></center>

Según la selección anterior se te muestra un formulario u otro. En el caso de que se haya elegido la opción de ***Recinto para eventos*** se muestra el siguiente formulario a rellenar.

<center><img src="..\img\crearrecinto.png"></center>

En el caso de que hayas seleccionado ***Otro tipo de servicio*** se mostrará el siguiente formulario, en el que se podrá diferenciar entre si el servicio proporcionado es dedicado al catering, al entretenimiento o a la decoración.  

<center><img src="..\img\crearotroevento.png"></center>
<center><img src="..\img\crearotroevento2.png"></center>

Si se accede a la pestaña de ***Mis servicios***, se muestran los servicios pertenecientes al proveedor pudiéndose deshabilitar, editar y crear nuevos servicios en la misma sección (justo debajo de la foto).

<center><img src="..\img\misservicios.png"></center>

Dentro de ***Editar un servicio***, se muestra un formulario a modificar si se desea cambiar algún atributo del servicio. Se permite editar todos los atributos puestos en el formulario de creación.
Al pulsar sobre guardar se actualiza cómo se muestra en los distintos sitios de la plataforma.

<center><img src="..\img\editarservicio1.png"></center>
<center><img src="..\img\editarservicio2.png"></center>

Si nos movemos a la pestaña de ***Solicitudes*** se muestran las solicitudes pendientes que le queda al proveedor por aceptar o cancelar según su criterio. En el caso de haber solicitudes, se mostrarán todos los datos importantes de la misma y los botones de aceptar o cancelar.

<center><img src="..\img\solicitudes.png"></center>

En la pestaña de ***Contrataciones*** podemos ver de forma rápida un resumen de las solicitudes realizadas hasta el momento incorporando un filtro en la que puedes visualizar las que tienes pendientes, las que has aceptado y las que has rechazado. También se incorpora un calendario donde puedes ver los eventos, usando el mismo filtro, dentro del mismo.


En el ***Historial de ventas*** podemos ver un resumen de los pagos que han realizado los clientes.


El ***Soporte Técnico*** para los proveedores de nuestra plataforma consiste en una sección de preguntas rápidas donde los proveedores pueden obtener respuestas rápidas a las preguntas frecuentes. En el caso de que su duda no se resuelva, pueden acceder a un chat con el administrador pulsando en el icono azul que aparece abajo a la derecha.

<center><img src="..\img\soporteproveedor.png"></center>

Al hacer clic sobre tu foto de perfil, te redirige a la pestaña de ***Ver perfil***. Esta es la misma que la del usuario cliente, pero en el caso de que tengas el plan *Basic* te aparece un botón que te permite cambiarte de plan a premium, como podemos ver en la segunda imagen.

<center><img src="..\img\editarperfilproveedor.png"></center>
<center><img src="..\img\editarperfilproveedor2.png"></center>

Si pulsas sobre ***Editar perfil*** se te abre la siguiente vista donde puedes editar todos los aspectos que aparecen en pantalla.

<center><img src="..\img\editarperfilproveedor3.png"></center>

Si se desea ***Actualizar al plan premium***, se puede realizar indicando el número de meses que se desea y se puede pagar con tarjeta o con PayPal.

<center><img src="..\img\contratarpremium.png"></center>

<div id='id43'></div>

### Guía como administrador

Si iniciamos sesión con un usuario **admin**, se muestra la misma página inicial que los usuarios clientes pero se muestran las funcionalidades correspondientes al administrador.

<center><img src="..\img\inicioadmin.png"></center>

Si accedemos a ***Administrar servicios***, se muestran todos los servicios del sistema dando la opción de editar y eliminar. 

<center><img src="..\img\administrarservicios.png"></center>

Si accedemos a la sección de ***Editar***, se nos muestra el formulario a rellenar.

<center><img src="..\img\admineditarservicio.png"></center>

La sección de ***Administrar eventos*** funciona de la misma manera que la anterior mencionada (administrar servicios).

<center><img src="..\img\administrareventos.png"></center>

Si accedemos a la sección de ***Editar***, se nos muestra el formulario a rellenar.

<center><img src="..\img\admineditarevento.png"></center>

Y por último, si accedemos a la sección de ***Administrar usuarios***, se encuentran todos los usuarios del sistema devolviéndolos directamente en forma de formulario y si se desea editar se modifica dicho formulario y se pulsa el botón de editar. Está la opción de buscar por id del usuario.

<center><img src="..\img\administrarusuarios.png"></center>

Para ***Visualizar el perfil del administrador*** simplemente tienes que clicar sobre la foto de perfil. Ahí podrás editarlo si ha cambiado algún dato, de forma similar a los otros usuarios del sistema.

<center><img src="..\img\perfiladmin.png"></center>

<div id='id5'></div>

## Información necesaria para utilizar todo lo relacionado con Eventbride

**Landing page:** <https://sites.google.com/view/eventbride/inicio?authuser=0>

**Credenciales de la aplicación:**

Clientes:

- Usuario: **alice123** Contraseña: **1234**
- Usuario: **D4nielBH** Contraseña: **1234**
- Usuario: **Natalii** Contraseña: **1234**
- Usuario: **PabloCC** Contraseña: **1234**
- Usuario: **MariaCT** Contraseña: **1234**
- Usuario: **Fraan** Contraseña: **1234**

Proveedores:

- Usuario: **El castillo de Maxi** Contraseña: **1234**
- Usuario: **JLMorilla** Contraseña: **1234**
- Usuario: **JMGomez** Contraseña: **1234**
- Usuario: **JMGonzalez** Contraseña: **1234**
- Usuario: **FelipeGN** Contraseña: **1234**
- Usuario: **DLDecor** Contraseña: **1234**
- Usuario: **Master Sound** Contraseña: **1234**
- Usuario: **ARCOS 3 CATERING** Contraseña: **1234**
- Usuario: **Mongo mango** Contraseña: **1234**
- Usuario: **SurMusic** Contraseña: **1234**
- Usuario: **PandoCatering&Hacienda** Contraseña: **1234**

Administrador:

- Usuario: **Admin** Contraseña: **1234**

**URL del despliegue de la aplicación: <https://ispp-2425-03.ew.r.appspot.com/login>** 

**URL de GitHub: <https://github.com/ISPP-Eventbride>**

**Credenciales correo gmail:**

- Usuario: **[eventbride6@gmail.com](mailto:eventbride6@gmail.com)** Contraseña: **3vent\_Br1de**

**Credenciales correo corporativo:**

- Usuario: **[info@eventbride.fun](mailto:info@eventbride.fun)** Contraseña: **0P7csMTH#wT%baj1**

**Credenciales de correo de soporte:**

- Usuario: **[soporte@eventbride.fun](mailto:soporte@eventbride.fun)** Contraseña: **4&f545@nE#z8^6J%**

> [!IMPORTANT]
> Si quiere iniciar sesión con los correos de soporte o corporativo en Outlook, hay que cambiar el tipo de cuenta a IMAP

**Credenciales de Clockify:** cuando inicies sesión con clockify te pedirá un correo electrónico, meter el correo corporativo. Acto seguido te enviará una clave al correo corporativo.

<div id='id6'></div>

## Requisitos para utilizar el sistema
Todo lo relacionado para la puesta en marcha del proyecto viene indicado en el [README](../../README.md) del repositorio de GitHub.

<div id='id7'></div>

## Videos demo de la aplicación
Los videos demo de la aplicación se encuentran en el siguiente [enlace](https://uses0-my.sharepoint.com/personal/natolmvil_alum_us_es/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fnatolmvil%5Falum%5Fus%5Fes%2FDocuments%2FISPP%2FSPRINT1%2FVideo%20demo&ga=1).

<div id='id8'></div>

## Bibliografía
Intencionalmente en blanco.
