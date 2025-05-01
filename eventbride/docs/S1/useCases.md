# Casos de uso
## Ingeniería del Software y Práctica Profesional (ISPP)
<center><img src="https://iili.io/3BcQ3YJ.md.png" alt="Eventbride Logo"></img></center>

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

### Fecha: 12/03/2025

### Entregable: Sprint 1

---

### Historial de versiones

|Fecha|Versión|Descripción|Entrega|Contribuyente(s)|
|---|---|---|---|---|
|12/02/2025 |v1.0|Creación del documento y redacción del mismo| DP |Adrián Cabello Martín, David Godoy Fernández, Andrés Pizzano Cerrillos|
|26/02/2025 |v1.1 |Corrección feedback semana 2| DP |Adrián Cabello Martín, David Godoy Fernández, Andrés Pizzano Cerrillos|
|27/02/2025 |v1.2 |Finalización del documento| DP |Adrián Cabello Martín, David Godoy Fernández, Andrés Pizzano Cerrillos|
|10/03/2025 |v1.3 |Actualización y revisión | Sprint 1 |Pablo Jesús Castellanos Compaña y Natalia Olmo Villegas|
|10/03/2025 |v1.4 |Pasar a formato Markdown | Sprint 1 |Daniel Benito Hidalgo|
|12/03/2025 |v1.5 |Adición de información requerida en la plantilla | Sprint 1 |María de la Salud Carrera Talaverón|
|13/03/2025 |v1.6 |Corrección del título del documento | Sprint 1 |Fernando José de Celis Hurtado|

## Contenido
1. [Casos de uso Core](#intro)
    1. [Caso de uso core 1](#id11)
    2. [Caso de uso core 2](#id12)
    3. [Caso de uso core 3](#id13)
2. [Principales casos dde uso de la aplicación](#caso)
    1. [Caso de uso 4](#id24)
    2. [Caso de uso 5](#id25)
    3. [Caso de uso 6](#id26)
    4. [Caso de uso 7](#id27)
    5. [Caso de uso 8](#id28)
    6. [Caso de uso 9](#id29)
3. [Bibliografía](#bib)

<div id='intro'></div>

## Casos de uso core

<div id='id11'></div>

### Caso de uso core 1

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Solicitar contratar un servicio para un evento 
    - **ID**: CC-01
    - **Actor(es)**: Usuario cliente. 
    - **Descripción**: Usuario cliente solicita servicio ofertado en la plataforma, para celebración. Un servicio también incluye a un recinto en este caso.
2. **Flujo de Eventos** 
    Flujo Principal (Normal o Básico) 
    1. Selección del servicio por parte del cliente.
    2. Solicitud de alquiler y selección de periodo de reserva por parte del cliente. En caso de que el servicio sea alquilado por horas, el cliente deberá especificar cuántas horas quiere contratar este servicio. En caso de que el precio sea por invitados, no hará falta especificarlos, pues en la creación del evento fue especificada una estimación del número de invitados y se calcula el precio estimado en base a eso. Por otro lado, si el precio es fijo por día, tampoco hará falta especificar nada.
    3. El sistema acepta automáticamente esta solicitud. 
    4. El cliente registra una forma de pago, para que se guarde información de su tarjeta.
    5. El sistema cobra lo correspondiente a la señal para contratar el servicio. El resto se cobrará 4 meses antes, en caso de que sea una boda, 1 mes antes en caso de ser un bautizo y 2 meses antes en caso de ser una comunión. Hay que tener en cuenta que, si el precio del servicio es por invitados, ahora se calculará a través del recuento de invitados de la aplicación y se ajustarán los precios.
    Flujo Alternativo
    1. Selección de servicio.
    2. Solicitud de alquiler y selección de periodo de reserva del servicio. En caso de que el recinto sea alquilado por horas, el cliente deberá especificar cuántas horas quiere contratar este servicio. En caso de que el precio sea por invitados, no hará falta especificarlos, pues fueron especificados en la creación del evento. Por otro lado, si el precio es fijo por día, tampoco hará falta especificar nada.
    3. El sistema acepta automáticamente esta solicitud. 
    4. El proveedor cancela la reserva de este servicio.
    5. El sistema se lo notifica al cliente correspondiente.
    6. El sistema devuelve el dinero de la señal al cliente que reservó el servicio.
3. **Requisitos Previos** 
    - Estar registrado como cliente en la página haber buscado el servicio que se quiere contratar. 
4. **Resultados Esperados** 
    - Recinto pasa a estar reservado por el cliente.


<div id='id12'></div>

### Caso de uso core 2

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Registrar servicio
    - **ID**: CC - 002
    - **Actor(es)**: Usuario proveedor.
    - **Descripción**: El usuario de un servicio quiere ofertarlos a través de la aplicación.
2. **Flujo de Eventos** 
    Flujo Principal (Normal o Básico) 
    1. El proveedor pulsa sobre la pestaña “Mis servicios”
    2. El sistema muestra todos los servicios de ese proveedor. 
    3. El proveedor pulsa sobre el botón “Crear un nuevo servicio”
    4. El sistema muestra un formulario con todos los datos a introducir del servicio.
    5. El proveedor rellena todos los campos del formulario.
3. **Requisitos Previos** 
    - Estar registrado en la aplicación como propietario de un servicio.
4. **Resultados Esperados** 
    - El sistema registra el servicio y queda disponible para que todos los clientes puedan verlos.


<div id='id13'></div>

### Caso de uso core 3

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Crear evento
    - **ID**: CC - 003
    - **Actor(es)**: Cliente.
    - **Descripción**: El usuario quiere crear un evento.
2. **Flujo de Eventos** 
    Flujo Principal (Normal o Básico) 
    1. El cliente pulsa sobre el botón “Crear evento”
    2. El sistema muestra un formulario con todos los datos a introducir del evento.
    3. El cliente rellena todos los campos del formulario.
3. **Requisitos Previos** 
    - Estar registrado en la aplicación como cliente y está en la página principal.
4. **Resultados Esperados** 
    - El sistema crea el evento y quedará visible en la pestaña “Mis eventos” del cliente.

<div id='caso'></div>

## Principales casos de uso de la aplicación

<div id='id24'></div>

### Caso de uso 4

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Gestionar lista de invitados 
    - **ID**: CU - 004
    - **Actor(es)**: Usuario cliente. 
    - **Descripción**: El usuario cliente quiere crear y gestionar la lista de invitados a su evento. 
2. **Flujo de Eventos** 
    Flujo Principal (Normal o Básico) 
    1. El usuario accede a la sección de "Lista de Invitados".
    2. El usuario añade a los invitados individualmente.
    3. El usuario confirma la lista de invitados, una vez que ha añadido a todos los invitados.
    Flujo Alternativo 
    1. El usuario accede a la sección de "Lista de Invitados".
    2. Enviar invitación con detalles del evento por otra app de mensajería instantánea o por correo.
    3. Los usuarios externos a la app, sin necesidad de registrarse, pueden aceptar la invitación poniendo su nombre.
    4. El sistema añadirá el nombre de esta persona externa a la lista de invitados.
    5. El usuario confirma la lista de invitados, una vez que ha añadido a todos los invitados.
3. **Requisitos Previos** 
    - Estar registrado en la aplicación como cliente y haber creado un evento.
4. **Resultados Esperados** 
    - La lista de invitados se guarda y se puede acceder a ella en cualquier momento. Podría añadirse nuevos invitados o eliminarlos, siempre que no haya confirmado todo y por tanto no haya pagado.
    - El sistema registra el número de invitados, que usará para calcular el precio de los servicios asociados al evento.

<div id='id25'></div>

### Caso de uso 5

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Seguimiento del presupuesto del evento 
    - **ID**: CU - 005
    - **Actor(es)**: Usuario cliente. 
    - **Descripción**: El usuario quiere establecer un presupuesto para su evento y realizar un seguimiento de los gastos.
2. **Flujo de Eventos** 
    Flujo Principal (Normal o Básico) 
    1. Al crear el evento, el usuario indica su presupuesto total para el evento.
    2. El usuario añade servicios para su evento de diferentes categorías (lugar, catering, etc.).
    3. La aplicación compara el presupuesto del usuario con el dinero que se va acumulando al contratar los servicios para que el usuario tenga una idea de cuanto presupuesto le queda disponible.
3. **Requisitos Previos**
    - Estar registrado en la aplicación como cliente.
4. **Resultados Esperados** 
    - El presupuesto se actualiza y se puede acceder a él en cualquier momento.
    - La aplicación proporciona alertas si el usuario se acerca o excede su presupuesto.

<div id='id26'></div>

### Caso de uso 6

1. **Identificación del Caso de Uso** 
   -  **Nombre del Caso de Uso**: Contactar con el servicio de atención al cliente 
    - **ID**: CU - 006
    - **Actor(es)**: Cualquier usuario de la plataforma. 
    - **Descripción**: El usuario necesita ayuda o tiene una pregunta sobre la aplicación. 
2. **Flujo de Eventos** 
    Flujo Principal (Normal o Básico) 
    1. El usuario accede a la sección de "Ayuda".
    2. Elige un método de contacto (por ejemplo, correo electrónico, chat, teléfono).
    3. Envía su consulta o solicitud.
3. **Requisitos Previos** 
    - Estar registrado en la aplicación.

4. **Resultados Esperados** 
    - El servicio de atención al cliente atiende a la petición del usuario.



<div id='id27'></div>

### Caso de uso 7

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Revisar y calificar servicios 
    - **ID**: CU - 07
    - **Actor(es)**: Usuario cliente. 
    - **Descripción**: El usuario quiere dejar una reseña y calificación de un servicio que contrató. 
2. **Flujo de Eventos** 
    Flujo Principal (Normal o Básico) 

    1. El usuario accede a la sección de "Mis Eventos".
    2. El sistema muestra todos los eventos del usuario.
    3. El usuario selecciona el evento en el que contrató el servicio.
    4. El sistema muestra todos los detales del evento y sus servicios.
    5. El usuario selecciona el servicio que desea calificar.
    6. El sistema muestra los detalles del servicio.
    7. El usuario pulsa sobre “Añadir una valoración” e introduce una calificación (1-5 estrellas) y si lo desea una reseña escrita.
3. **Requisitos Previos** 
    - El usuario debe estar registrado como cliente y haber contratado el servicio.
4. Resultados Esperados 
    - La reseña se publica en la plataforma.
    - El proveedor de servicios o el propietario del local recibe una notificación de la nueva reseña.

<div id='id28'></div>

### Caso de uso 8

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Recibir notificaciones 
    - **ID**: CU - 08
    - **Actor(es)**: Cualquier usuario de la plataforma.
    - **Descripción**: El usuario quiere recibir actualizaciones y notificaciones importantes relacionadas con sus eventos, reservas o cuenta.
2. **Flujo de Eventos**: 
    1. El usuario accede a los detalles de su perfil y marca la casilla “Quiero recibir notificaciones”.
    2. El usuario, en caso de ser cliente, recibirá notificaciones cuando un servicio sea cancelado por parte del proveedor, cuando su evento se ha creado con éxito, 48 horas antes de proceder al pago del resto del servicio menos la señal como recordatorio y cuando recibe un nuevo mensaje del chat. En caso de ser un proveedor, recibirá notificaciones cuando uno de sus servicios fue contratado, así como un mensaje de consejo para gestionar la disponibilidad del evento., cuando reciba el pago completo de su servicio y cuando recibe un nuevo mensaje del chat.
    3. La notificación llega al buzón del correo correspondiente del usuario.

3. Requisitos Previos 
    - El usuario está en la aplicación registrado con las alertas por email activas.
4. Resultados Esperados  
    - El usuario recibe notificaciones por correo electrónico o alertas en la aplicación para eventos como confirmación de reserva, recordatorios de próximos eventos, mensajes de otros usuarios o del soporte técnico y ofertas especiales o promociones.

<div id='id29'></div>

### Caso de uso 9

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Asistente de compra
    - **ID**: CU - 09
    - **Actor(es)**: Usuario cliente.
    - **Descripción**: Usuario cliente quiere organizar un evento mediante un asistente virtual para filtrar resultados.
2. **Flujo de Eventos** 
    Flujo Principal (Normal o Básico) 
    1. Seleccionar creación de evento con ayuda.
    2. Responder las preguntas predeterminadas.
    3. Visualizar los servicios ofertados por la elección de respuestas.
3. **Requisitos Previos**
    - Estar registrado en la aplicación como cliente.
4. **Resultados Esperados** 
    - El cliente obtiene un evento con las ayudas y sugerencias de la aplicación.

<div id='bib'></div>

## Bibliografía

Intencionalmente en blanco.
