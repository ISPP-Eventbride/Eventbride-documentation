# Casos de uso
## Ingeniería del Software y Práctica Profesional (ISPP)
<center><img src="https://iili.io/3BcQ3YJ.md.png" alt="Eventbride Logo"></img></center>

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

### Fecha: 01/05/2025

### Entregable: PPL

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
|01/05/2025 |v2.0 |Revisión y adición de nuevos Casos de Uso | PPL |Fernando José de Celis Hurtado|

## Contenido
1. [Casos de uso Core](#intro)
    1. [Caso de uso core 1](#id11)
    2. [Caso de uso core 2](#id12)
    3. [Caso de uso core 3](#id13)
    4. [Caso de uso core 4](#id14)
    5. [Caso de uso core 5](#id15)
2. [Principales casos de uso de la aplicación](#caso)
    1. [Caso de uso 6](#id26)
    2. [Caso de uso 7](#id27)
    3. [Caso de uso 8](#id28)
    4. [Caso de uso 9](#id29)
    5. [Caso de uso 10](#id210)
    6. [Caso de uso 11](#id211)
    7. [Caso de uso 12](#id212)
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
    1. Acudir a la pestaña "Recintos" u "Otros Servicios".
    2. El sistema mostrará todos los recintos u otros servicios.
    3. Seleccionar la opción "Añadir a mi evento" del servicio seleccionado.
    4. Seleccionar el evento que se desea y seleccionar un periodo de reserva por parte del cliente, indicando una hora de inicio y de fin del servicio.
    5. El sistema acoge automáticamente esta solicitud. 
    
3. **Requisitos Previos** 
    - Estar registrado como cliente y tener al menos un evento creado.
4. **Resultados Esperados** 
    - El servicio pasa a estar en los detalles de dicho evento, a expensas de que el proveedor acepte o cancele la solicitud.


<div id='id12'></div>

### Caso de uso core 2

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Aceptar o rechazar la solicitud de un servicio
    - **ID**: CC-02
    - **Actor(es)**: Usuario proveedor. 
    - **Descripción**: Usuario proveedor solicita servicio ofertado en la plataforma, para celebración. Un servicio también incluye a un recinto en este caso.
2. **Flujo de Eventos** 
    
    Flujo Principal (Normal o Básico)
    1. Acudir a la pestaña "Solicitudes".
    2. El sistema mostrará todos las solicitudes de dicho proveedor.
    3. El proveedor, seleccionando Confirmar o Rechazar, podrá aceptar o rechazar la solicitud de dicho cliente en esa fecha.
    4. El sistema aprueba o rechaza esa solicitud. 
    
3. **Requisitos Previos** 
    - Estar registrado como proveedor y tener al menos un servicio creado.
4. **Resultados Esperados** 
    - El servicio pasa a estar aceptado, pasa de la pestaña "Solicitudes" a "Contrataciones".


<div id='id13'></div>

### Caso de uso core 3

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Realizar pagos del evento
    - **ID**: CC-03
    - **Actor(es)**: Usuario cliente. 
    - **Descripción**: Usuario cliente pretende hacer pagos del evento, ya sean las señales una a una de cada servicio o el pago total. 
2. **Flujo de Eventos** 
    
    Flujo Principal 1 (Normal o Básico)
    1. Acudir a la pestaña "Mis eventos".
    2. El sistema mostrará todos los eventos creados.
    3. Seleccionar el evento del que queremos hacer el pago.
    4. Seleccionar el servicio del que queremos pagar la reserva / señal y seleccionar "Pagar reserva". Sólo te permite pagar si dicho servicio ha sido aceptado por el proveedor.
    5. El sistema mostrará una pestaña para realizar el pago.
    6. El cliente hace el pago usando PayPal o una Tarjeta de débito o crédito.

    Flujo Principal 2 (Normal o Básico)
    1. Acudir a la pestaña "Mis eventos".
    2. El sistema mostrará todos los eventos creados.
    3. Seleccionar el evento del que queremos hacer el pago.
    4. Debajo del todo, permitirá hacer el pago de las señales de todos los servicios que han sido aceptados por el proveedor.
    5. El sistema mostrará una pestaña para realizar el pago.
    6. El cliente hace el pago usando PayPal o una Tarjeta de débito o crédito.

    Flujo Principal 3 (Normal o Básico)
    1. Acudir a la pestaña "Mis eventos".
    2. El sistema mostrará todos los eventos creados.
    3. Seleccionar el evento del que queremos hacer el pago.
    4. Debajo del todo, una vez que se hayan pagado las señales de todos los servicios, podrás pagar el restante de forma conjunta.
    5. El sistema mostrará una pestaña para realizar el pago.
    6. El cliente hace el pago usando PayPal o una Tarjeta de débito o crédito.
    
3. **Requisitos Previos** 
    - Estar registrado como cliente y tener al menos un evento creado.
4. **Resultados Esperados** 
    - El sistema registra el pago de cada uno de los servicios y abona el dinero a sus correspondientes proveedores.


<div id='id14'></div>

### Caso de uso core 4

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Registrar servicio
    - **ID**: CC-004
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


<div id='id15'></div>

### Caso de uso core 5

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Crear evento
    - **ID**: CC - 005
    - **Actor(es)**: Cliente.
    - **Descripción**: El usuario quiere crear un evento.
2. **Flujo de Eventos** 
    
    Flujo Principal (Normal o Básico) 
    1. El cliente pulsa sobre el botón “Crear evento”.
    2. El sistema muestra un formulario con todos los datos a introducir del evento.
    3. El cliente rellena todos los campos del formulario.
3. **Requisitos Previos** 
    - Estar registrado en la aplicación como cliente.
4. **Resultados Esperados** 
    - El sistema crea el evento y quedará visible en la pestaña “Mis eventos” del cliente.

<div id='caso'></div>

## Principales casos de uso de la aplicación

<div id='id26'></div>

### Caso de uso 6

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Gestionar lista de invitados e invitaciones
    - **ID**: CU - 006
    - **Actor(es)**: Usuario cliente. 
    - **Descripción**: El usuario cliente quiere crear y gestionar la lista de invitados mediante invitaciones de su evento. 
2. **Flujo de Eventos** 
    
    Flujo Principal (Normal o Básico) 
    1. El usuario accede a la pestaña "Mis Eventos".
    2. Se fija en el evento que quiere gestionar y selecciona la opción "Ver Invitaciones".
    3. Al pulsar en crear invitación, indicará el número máximo que pueden acudir con ella y el correo al que se enviará.
    
3. **Requisitos Previos** 
    - Estar registrado en la aplicación como cliente y haber creado un evento.
4. **Resultados Esperados** 
    - Creación de un nuevo registro que indicará el nombre del invitado que está gestionando dicha invitación y los invitados que vienen de su parte.

<div id='id27'></div>

### Caso de uso 7

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Seguimiento del precio del evento 
    - **ID**: CU - 007
    - **Actor(es)**: Usuario cliente. 
    - **Descripción**: El usuario quiere conocer el precio del evento en todo momento.
2. **Flujo de Eventos** 
    
    Flujo Principal (Normal o Básico) 
    1. Se crea un evento.
    2. El usuario añade servicios para su evento de diferentes categorías (lugar, catering, etc.).
    3. La aplicación va sumando en la opción "COSTE ACUMULADO" de la parte superior la suma de todos los servicios contratados, sin tener en cuenta las comisiones.
3. **Requisitos Previos**
    - Estar registrado en la aplicación como cliente y tener un evento creado.
4. **Resultados Esperados** 
    - El coste acumulado del evento se actualiza.

<div id='id28'></div>

### Caso de uso 8

1. **Identificación del Caso de Uso** 
   -  **Nombre del Caso de Uso**: Contactar con el servicio de Eventbride
    - **ID**: CU - 008
    - **Actor(es)**: Cualquier usuario de la plataforma. 
    - **Descripción**: El usuario necesita ayuda o tiene una pregunta sobre la aplicación. 
2. **Flujo de Eventos** 
    
    Flujo Principal (Normal o Básico) 
    1. El usuario accede a la sección de "Contacto", debajo de cada una de las pestañas de la web.
    2. Elige un método de contacto (por ejemplo, correo electrónico, presencial...)
    3. Envía su consulta o solicitud.
3. **Requisitos Previos** 
    - Estar registrado en la aplicación.

4. **Resultados Esperados** 
    - El servicio de atención al cliente atiende a la petición del usuario.



<div id='id29'></div>

### Caso de uso 9

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Valoración de servicios 
    - **ID**: CU - 09
    - **Actor(es)**: Usuario cliente. 
    - **Descripción**: El usuario quiere dejar una reseña y calificación de un servicio que contrató. 
2. **Flujo de Eventos** 
    
    Flujo Principal (Normal o Básico) 
    1. El usuario accede a la sección de "Otros Servicios" o "Recintos".
    2. El usuario selecciona un servicio que haya contratado.
    3. El sistema muestra todos los detalles del servicio y una opción de valorar.
    4. El usuario pulsa sobre "Valorar" e introduce una calificación (1-5 estrellas) y si lo desea una reseña escrita.
3. **Requisitos Previos** 
    - El usuario debe estar registrado como cliente y haber contratado el servicio.
4. Resultados Esperados 
    - La reseña se publica en la plataforma y el sistema realiza la media de las valoraciones hechas, mostradas en los detalles del servicio.

<div id='id210'></div>

### Caso de uso 10

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Recibir notificaciones 
    - **ID**: CU - 10
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

<div id='id211'></div>

### Caso de uso 11

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Atención al cliente.
    - **ID**: CU - 11
    - **Actor(es)**: Usuario cliente o usuario proveedor.
    - **Descripción**: Usuario cliente o usuario proveedor quieren realizar alguna consulta.
2. **Flujo de Eventos** 
    
    Flujo Principal (Normal o Básico) 
    1. Seleccionar la pestaña de "Soporte Técnico".
    2. El sistema mostrará abajo a la derecha un icono azul con forma de auricular.
    3. Seleccionarlo para iniciar la conversación.
3. **Requisitos Previos**
    - Estar registrado en la aplicación como cliente o proveedor.
4. **Resultados Esperados** 
    - El sistema muestra un chat con la atención al cliente de Eventbride.


<div id='id212'></div>

### Caso de uso 12

1. **Identificación del Caso de Uso** 
    - **Nombre del Caso de Uso**: Chat entre clientes y proveedores
    - **ID**: CU - 12
    - **Actor(es)**: Usuario cliente y usuario proveedor.
    - **Descripción**: Usuario cliente quiere organizar un evento mediante un asistente virtual para filtrar resultados.
2. **Flujo de Eventos** 
    
    Flujo Usuario cliente 
    1. Acceder a alguna de las siguientes pestañas de la barra superior: "Mis eventos", "Recintos" u "Otros servicios".
    2. En caso de que se la de mis "Eventos", seleccionar el evento seleccionado.
    3. Buscar el servicio con el que se desea contactar y selecciona la opción "Chatear".
    4. El chat será abierto y podrá iniciar su comunicación con el proveedor de dichos servicio.

    Flujo Usuario proveedor
    1. Acceder a la pestaña de la barra superior llamada "Solicitudes".
    2. Seleccionar la solicitud deseada.
    3. Seleccionar la opción "Contactar cliente".
    4. El chat será abierto y podrá iniciar su comunicación con el cliente.
3. **Requisitos Previos**
    - Estar registrado en la aplicación como cliente o como proveedor.
4. **Resultados Esperados** 
    - El cliente y el proveedor obtienen un chat del uno con el otro con todos los mensajes.

<div id='bib'></div>

## Bibliografía

Intencionalmente en blanco.
