# Requisitos y Casos de Uso
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

### Fecha: 10/03/2025
### Entregable: Sprint 1

---

### Historial de versiones

|Fecha|Versión|Descripción|Entrega|
|---|---|---|---|
|12/02/2025|v1.0|Creación del documento y estructura básica| DP |
|17/02/2025|v1.1|Corrección feedback semana 2 | DP |
|18/02/2025|v1.2|Finalización del documento | DP |
|10/03/2025|v1.3|Pasar formato a Markdown | Sprint 1 |

## Contenido
1. [Principales casos de uso de la aplicación](#intro)
    1. [Caso de uso 1](#id1)
    2. [Caso de uso 2](#id2)
    3. [Caso de uso 3](#id3)
    4. [Caso de uso 4](#id4)
    5. [Caso de uso 5](#id5)
    6. [Caso de uso 6](#id6)
    7. [Caso de uso 7](#id7)
    8. [Caso de uso 8](#id8)
    9. [Caso de uso 9](#id9)
    10. [Caso de uso 10](#id10)
    11. [Caso de uso 11](#id11)
2. [Requisitos](#req)
    1. [Requisitos Funcionales](#reqfunc)
    2. [Requisitos No Funcionales](#reqnofunc)
5. [Bibliografía](#bib)


<div id='intro'></div>

## Principales casos de uso de la aplicación


<div id='id1'></div>

## Caso de uso 1

1. **Identificación del Caso de Uso**  
    - **Nombre del Caso de Uso**: Registrar recinto de evento  
    - **ID**: CU - 001  
    - **Actor(es)**: Usuario propietario del recinto.  
    - **Descripción**: Usuario propietario introduce su recinto a ofertar en la aplicación.  
2. **Flujo de Eventos**  
    Flujo Principal (Normal o Básico)  
    1. Introducir datos geográficos  
    2. Introducir datos de recinto  
    3. Introducir datos de contacto  
    4. Introducir  datos  de  tarifa  y  forma  de  pago  disponible  (por  día,  horas,  pago fragmentado...)  
    5. Recinto subido a la plataforma  
3. **Requisitos Previos**  
    - Estar registrado como propietario en la página.  
4. **Resultados Esperados**  
    - Recinto  pasa  a  estar  disponible  y  con  toda  la  información  relevante  para  los usuarios cliente en la aplicación.

<div id='id2'></div>

## Caso de uso 2

1. **Identificación del Caso de Uso**  
    - **Nombre del Caso de Uso**: Solicitar alquiler de recinto para evento  
    - **ID**: CU - 002  
    - **Actor(es)**: Usuario cliente.  
    - **Descripción**:  Usuario  cliente  solicita  recinto  ofertado  en  la  plataforma,  para celebración.  
2. **Flujo de Eventos**  
    Flujo Principal (Normal o Básico)  
    1. Selección de recinto. 
    2. Solicitud de alquiler y selección de periodo de reserva. 
    3. Registrar forma de pago. 
    4. Envío de solicitud de alquiler a propietario. 
3. **Requisitos Previos**  
    - Estar registrado como cliente en la página.  
4. **Resultados Esperados**  
    - Recinto pasa a estar reservado para el cliente y se espera a que propietario la apruebe

<div id='id3'></div>

## Caso de uso 3

1. **Identificación del Caso de Uso**  
    - **Nombre del Caso de Uso**: Resolución de solicitud de alquiler.  
    - **ID**: CU - 003  
    - **Actor(es)**: Usuario propietario del recinto.  
    - **Descripción**: Usuario propietario recibe solicitud de alquiler de su recinto por parte de usuario cliente.  
2. **Flujo de Eventos**  
    Flujo Principal (Normal o Básico)  
    1. Visualización de solicitud. 
    2. Aprobación de solicitud. 
    3. Cierre y confirmación de reserva. 
    Flujo Alternativo  
    1. Visualización de solicitud. 
    2. Denegación de solicitud. 
    3. Cierre de solicitud y recinto vuelve a estar disponible. 
3. **Requisitos Previos**  
    - Estar registrado como usuario propietario en la página y dueño del recinto ofertado. 
4. **Resultados Esperados**  
    - Recinto pasa a estar reservado para el cliente que ha solicitado el recinto y se procede al pago / Recinto vuelve a estar disponible.

<div id='id4'></div>

## Caso de uso 4

1. **Identificación del Caso de Uso**  
    - **Nombre del Caso de Uso**: Registrar catering   
    - **ID**: CU - 004  
    - **Actor(es)**: Usuario proveedor. 
    - **Descripción**: Usuario propietario de un catering quiere ofrecer los servicios de catering a través de la aplicación. 
2. **Flujo de Eventos**  
    Flujo Principal (Normal o Básico)  
    1. Introducir datos del catering. 
    2. Introducir datos de contacto. 
    3. Introducir datos de pago. 
    4. Catering pasa a estar disponible para usuarios. 
3. **Requisitos Previos**  
    - Estar registrado en la aplicación como propietario de un catering. 
4. **Resultados Esperados**  
    - El  catering  aparece  en  la  lista  de  catering  ofertados  con  toda  su  información relevante pudiendo si se desea adquirir su servicio.

<div id='id5'></div>

## Caso de uso 5

1. **Identificación del Caso de Uso**  
    - **Nombre del Caso de Uso**: Contratar servicios adicionales  
    - **ID**: CU - 005  
    - **Actor(es)**: Usuario cliente.  
    - **Descripción**: El usuario quiere añadir servicios extra a su evento, como fotografía, música, animación, etc.  
2. **Flujo de Eventos**  
    Flujo Principal (Normal o Básico)  
    1. El usuario navega a la sección de “Servicios”. 
    2. Explora las opciones disponibles. 
    3. Selecciona el tipo de servicio que necesita (fotografía, música, etc.).  
    4. Revisa los detalles del servicio y el precio. 
    5. Confirma la contratación del servicio. 
3. **Requisitos Previos**  
    - Estar registrado en la aplicación como cliente y haber seleccionado ya el local que desea alquilar. 
4. **Resultados Esperados**  
    - El servicio adicional se añade al evento del usuario. 
    - Se genera una notificación para el proveedor del servicio. 

<div id='id6'></div>

## Caso de uso 6

1. **Identificación del Caso de Uso**  
    - **Nombre del Caso de Uso**: Seleccionar temática del evento  
    - **ID**: CU - 006  
    - **Actor(es)**: Usuario cliente.  
    - **Descripción**: El usuario quiere elegir una temática para su evento (por ejemplo, vintage, moderno, etc.).  
2. **Flujo de Eventos**  
    Flujo Principal (Normal o Básico)  
    1. El usuario accede a la sección de “Temáticas”. 
    2. Explora las diferentes temáticas disponibles. 
    3. Selecciona la temática que más le guste. 
    4. Revisa los detalles de la temática y el coste adicional. 
    5. Confirma la selección de la temática. 
3. **Requisitos Previos**  
    - Estar registrado en la aplicación como cliente y haber seleccionado ya el local que desea alquilar. 
4. **Resultados Esperados**  
    - La temática se aplica al evento del usuario. 
    - La aplicación puede ofrecer sugerencias de servicios relacionados con la temática elegida.

<div id='id7'></div>

## Caso de uso 7

1. **Identificación del Caso de Uso**  
    - **Nombre del Caso de Uso**: Gestionar lista de invitados  
    - **ID**: CU - 007  
    - **Actor(es)**: Usuario cliente.  
    - **Descripción**: El usuario quiere crear y gestionar la lista de invitados a su evento.  
2. **Flujo de Eventos**  
    Flujo Principal (Normal o Básico)  
    1. El usuario accede a la sección de "Lista de Invitados". 
    2. Añade a los invitados individualmente (importar una lista desde un archivo). 
    3. Puede editar la información de los invitados (nombre, email, etc.). 
    4. Confirma la lista de invitados, una vez que ha añadido a todos los invitados. 
    5. Puede enviar invitaciones digitales a los invitados a través de la aplicación. 
3. **Requisitos Previos**  
    - Estar registrado en la aplicación como cliente y haber seleccionado ya el local que desea alquilar. 
4. R**esultados Esperados**  
    - La lista de invitados se guarda y se puede acceder a ella en cualquier momento. Podría añadirse nuevos invitados o eliminarlos,siempre que no haya confirmado todo y por tanto no haya pagado. 
    - Muestre el incrementado del precio por cada invitado.

<div id='id8'></div>

## Caso de uso 8

1. I**dentificación del Caso de Uso**  
    - **Nombre del Caso de Uso**: Gestionar el presupuesto del evento  
    - **ID**: CU - 008  
    - **Actor(es)**: Usuario cliente.  
    - **Descripción**: El usuario quiere establecer un presupuesto para su evento y realizar un seguimiento de los gastos.  
2. **Flujo de Eventos**  
    Flujo Principal (Normal o Básico)  
    1. El usuario accede a la sección de "Presupuesto". 
    2. Introduce el presupuesto total para el evento. 
    3. Añade gastos para diferentes categorías (lugar, catering, servicios, etc.). 
    4.  La  aplicación calcula  el  presupuesto  restante  y proporciona visualizaciones de  los gastos. 
3. **Requisitos Previos**  
    - Estar registrado en la aplicación como cliente. 
4. **Resultados Esperados** 
    - El presupuesto se guarda y se puede acceder a él en cualquier momento. 
    - La aplicación proporciona alertas si el usuario se acerca o excede su presupuesto.

<div id='id9'></div>

## Caso de uso 9

1. **Identificación del Caso de Uso**  
    - **Nombre del Caso de Uso**: Contactar con el servicio de atención al cliente  
    - **ID**: CU - 009  
    - **Actor(es)**: Cualquier usuario de la plataforma.  
    - **Descripción**: El usuario necesita ayuda o tiene una pregunta sobre la aplicación.  
2. **Flujo de Eventos**  
    Flujo Principal (Normal o Básico)  
    1. El usuario accede a la sección de "Ayuda". 
    2. Elige un método de contacto (por ejemplo, correo electrónico, chat, teléfono). 
    3. Envía su consulta o solicitud. 
3. R**equisitos Previos**  
    - Estar registrado en la aplicación. 
4. **Resultados Esperados**  
    - La consulta se envía al servicio de atención al cliente. 
    - El usuario recibe un mensaje de confirmación.

<div id='id10'></div>

## Caso de uso 10

1. **Identificación del Caso de Uso**  
    - **Nombre del Caso de Uso**: Revisar y calificar servicios  
    - **ID**: CU - 010  
    - **Actor(es)**: Usuario cliente.  
    - **Descripción**: El usuario quiere dejar una reseña y calificación para un lugar o servicio que contrató.  
2. **Flujo de Eventos**  
    Flujo Principal (Normal o Básico)  
    1. El usuario accede a la sección de "Eventos". 
    2. El usuario selecciona el evento en el que contrató el servicio. 
    3. El usuario selecciona el lugar o proveedor de servicios que desea reseñar. 
    4. Introduce una calificación (1-5 estrellas) y si lo desea una reseña escrita. 
3. **Requisitos Previos** 
- El usuario debe estar registrado como cliente y haber contratado el servicio. 
4. **Resultados Esperados** 
- La reseña se publica en la plataforma. 
- El proveedor de servicios o el propietario del local recibe una notificación de la 
nueva reseña

<div id='id11'></div>

## Caso de uso 11

1. **Identificación del Caso de Uso**  
    - **Nombre del Caso de Uso**: Recibir notificaciones  
    - **ID**: CU - 011  
    - **Actor(es)**: Cualquier usuario de la plataforma. 
    - **Descripción**: El usuario quiere recibir actualizaciones y notificaciones importantes relacionadas con sus eventos, reservas o cuenta. 
2. **Flujo de Eventos**: Es una función del sistema. 
3. **Requisitos Previos**  
    - El usuario ha habilitado la opción de recibir notificaciones. 
4. **Resultados Esperados**  
    - El usuario recibe notificaciones por correo electrónico o alertas en la aplicación para eventos como confirmación de reserva, recordatorios de próximos eventos, mensajes  de  otros  usuarios  o  del  soporte  técnico  y  ofertas  especiales  o promociones. 

<div id='req'></div>

## Requisitos

### Requisitos Funcionales

**Gestión de Usuarios**:  
- Registro de usuarios (propietarios de locales, proveedores y usuarios clientes). 
- Inicio de sesión y cierre de sesión. 
- Edición de perfil de usuario.

**Gestión de Recintos**:  
- Registro de recintos (datos geográficos, datos del recinto, datos de contacto, tarifas y formas de pago). 
- Búsqueda y visualización de recintos. 
- Solicitud de alquiler de recintos. 
- Aprobación/denegación de solicitudes de alquiler. 
- Gestión de reservas. 

**Gestión de Catering**:  
- Registro de servicios de catering (datos del catering, datos de contacto, datos de pago). 
- Búsqueda y visualización de servicios de catering. 
- Contratación de servicios de catering. 
- Petición de probar el catering antes de contratarlo. 

**Gestión de Servicios Adicionales**:  
- Registro de servicios adicionales (fotografía, música, animación, etc.). 
- Búsqueda y visualización de servicios adicionales. 
- Contratación de servicios adicionales. 

**Gestión de Temáticas**:  
- Selección de temáticas para eventos. 
- Visualización de detalles y costes adicionales de las temáticas. 

**Gestión de Invitados**:  
- Creación y gestión de listas de invitados. 
- Importación de listas de invitados. 
- Edición de información de invitados. 
- Envío de invitaciones digitales. 

**Gestión de Presupuesto**:  
- Establecimiento de presupuesto total para eventos. 
- Registro de gastos por categoría. 
- Cálculo de presupuesto restante. 
- Alertas de presupuesto. 

**Atención al Cliente**:  
- Sección de ayuda y contacto. 
- Métodos de contacto (correo electrónico, chat, teléfono). 

**Reseñas y Calificaciones**:  
- Revisión y calificación de lugares y servicios. 
- Visualización de reseñas y calificaciones. 

**Notificaciones**: 
- Recepción de notificaciones (confirmaciones de reserva, recordatorios, mensajes, ofertas).

### Requisitos No Funcionales

**Usabilidad**:  
    - La plataforma debe ser fácil de usar e intuitiva para todos los usuarios.

<div id='bib'></div>

## Bibliografía

Intencionalmete en blanco
