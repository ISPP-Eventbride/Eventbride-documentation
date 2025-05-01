# Requisitos
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

|Fecha|Versión|Descripción|Entrega|Contribuyente(s)|
|---|---|---|---|---|
|24/02/2025|v1.0|Añadidos requisitos funcionales y no funcionales|DP|Pablo Jesús Castellanos Compaña, David Godoy Fernández, Gonzalo Navas Remmers|
|27/02/2025|v2.0|Añadidos requisitos funcionales, no funcionales, de usabilidad, de seguridad, y de información|DP|Lorenzo Torralba Lanzas|
|11/03/2025|v3.0|Requisitos actualizados|Sprint 1|Antonio Montero López, Pablo Jesús Castellanos Compaña, Natalia Olmo Villegas, María de la Salud Carrera Talaverón|
|12/03/2025|v3.1|Documento pasado a markdown|Sprint 1|María de la Salud Carrera Talaverón|
|25/03/2025|v3.2|Retoque de requisitos|Sprint 2|Francisco Avilés Carrera y Pablo Jesús Castellanos Compaña|
|07/04/2025|v4.0|Actualización y comprobación de los requisitos|Sprint 3|Manuel Pérez Vélez y Sergio Pons López|
|01/05/2025|v5.0|Revisión y actualización de requisitos|PPL|Francisco Avilés Carrera|


## Contenido
1. [Introducción](#intro)
2. [Requisitos funcionales](#id1)
3. [Requisitos no funcionales](#id2)
4. [Requisitos de información](#id3)
5. [Requisitos de seguridad](#id4)
6. [Requisitos de usabilidad](#id5)
7. [Reglas de negocio](#id6)
8. [Conclusiones](#concl)
9. [Bibliografía](#bib)


<div id='intro'></div>

## Introducción

El presente documento recoge de forma estructurada y detallada los requisitos del sistema Eventbride, una plataforma orientada a la organización de eventos sociales como bodas, bautizos y comuniones. A lo largo del documento se especifican los requisitos funcionales y no funcionales, así como aspectos clave de seguridad, usabilidad, reglas de negocio e información necesaria para el correcto desarrollo e implementación del sistema.

<div id='id1'></div>

## Requisitos funcionales

| ID   | Título                                           | Prioridad | Descripción                                                                                  |
|------|--------------------------------------------------|-----------|----------------------------------------------------------------------------------------------|
| RF-1 | Registro de usuarios                             | Alta      | Los distintos usuarios de la aplicación podrán registrarse en la plataforma. |
| RF-2 | Inicio de sesión                                 | Alta      | Los distintos usuarios de la aplicación podrán iniciar sesión en la aplicación una vez registrados. |
| RF-3 | Cierre de sesión                                 | Alta      | Los distintos usuarios de la aplicación podrán cerrar la sesión que tengan abierta. |
| RF-4 | Edición de perfil                                | Alta      | Los distintos usuarios de la aplicación podrán editar su perfil y datos de usuario. |
| RF-5 | Recuperación de contraseña                     | Alta      | Los distintos usuarios podrán solicitar la recuperación de su contraseña mediante correo electrónico en caso de olvido. |
| RF-6 | Cambio de contraseña                           | Alta      | Los distintos usuarios podrán cambiar su contraseña desde su perfil tras introducir la contraseña actual. |
| RF-7| Atención al cliente                              | Alta      | Los distintos usuarios podrán acceder a una sección de atención al cliente en la que conseguir ayuda o contactar con el equipo a través de un chat de incidencias. |
| RF-8 | Eliminación de cuenta                          | Alta      | Los distintos usuarios podrán eliminar permanentemente su cuenta desde su perfil. Sus datos serán anonimizados.  |
| RF-9| Recepción de notificaciones                      | Media     | Los distintos usuarios podrán recibir notificaciones informándoles o recordándoles hechos importantes (confirmaciones, cancelaciones, fechas, etc.) |
| RF-10| Organización eventos                             | Alta      | Los usuarios cliente podrán crear un nuevo evento. Al inicio del formulario de la creación, se indicará el tipo de evento, el nombre, la fecha y un número estimado de invitados.  |
| RF-11 | Búsqueda y visualización de servicios            | Alta      | Los usuarios cliente podrán buscar y visualizar los distintos servicios ofrecidos por los proveedores y filtrarlos por tipo. |
| RF-12 | Solicitud de reserva de contratación de servicios| Alta      | Los usuarios cliente podrán solicitar la contratación de los distintos servicios ofrecidos por los proveedores. |
| RF-13| Precio total del evento                          | Alta      | Los usuarios cliente podrán obtener el precio total una vez se vayan reservando servicios. |
| RF-14 | Pagar la señal                                   | Alta      | Una vez el servicio esté aprobado por el proveedor, los usuarios cliente podrán pagar la señal de este. |
| RF-15| Proceder al pago del evento                      | Alta      | Los usuarios cliente tendrán que proceder al pago del evento completo un tiempo antes de la celebración de este. |
| RF-16| Creación y gestión de listas de invitados        | Alta      | Los usuarios cliente podrán crear y gestionar una lista de invitados de su evento. |
| RF-17| Envío de invitaciones                            | Media     | Los usuarios cliente podrán enviar invitaciones por correo a los invitados de la lista. |
| RF-18| Confirmación de asistencia                       | Alta      | Los invitados podrán confirmar su asistencia a través de un enlace poniendo sus datos sin necesidad de registro. |
| RF-19 | Valoración de servicios                        | Alta      | Los usuarios cliente podrán valorar los servicios que hayan contratado, asignando una puntuación de 1 a 5 estrellas y dejando un comentario. |
| RF-20 | Registro de servicios                            | Alta      | Los proveedores podrán registrar los servicios que ofrezcan en la plataforma. |
| RF-21 | Anulación de servicios                           | Alta      | Los proveedores pueden cancelar un servicio si así lo considerasen. |
| RF-22| Contrataciones                                    | Alta      | Los proveedores podrán consultar el estado de cada una de las contrataciones que le han hecho. |
| RF-22| Historial de ventas                                     | Alta      | Los proveedores podrán consultar el historial de ventas de sus servicios. |
| RF-23| Plan Premium                                     | Alta      | Los proveedores podrán pagar un plan premium que aumente su límite de servicios ofertados y sus servicios serán más visibles en la aplicación. |
| RF-24| Chat                                   | Alta      | Los usuarios cliente y los proveedores podrán ponerse en contacto gracias al chat ofecido por la plataforma. |
| RF-25| Cuenta de administrador                          | Alta      | Los usuarios administradores podrán administrar los servicios ofrecidos por la plataforma, administrar usuarios, tanto clientes como proveedores y visulaizar y gestionar los eventos de Eventbride. |


<div id='id2'></div>

## Requisitos no funcionales

| ID    | Título          | Prioridad | Descripción                                                                                       |
|-------|-----------------|-----------|---------------------------------------------------------------------------------------------------|
| RNF-1 | Escalabilidad   | Alta      | El sistema deberá ser capaz de manejar al menos 1000 eventos activos simultáneamente sin degradar el rendimiento. |
| RNF-2 | Disponibilidad  | Alta      | La plataforma deberá estar disponible el 99.9% del tiempo, asegurando su funcionamiento ininterrumpido. |
| RNF-3 | Rendimiento     | Alta      | Las páginas deberán cargarse en menos de 3 segundos en condiciones de red estándar.               |
| RNF-4 | Compatibilidad  | Alta      | La aplicación debe ser accesible desde los navegadores actuales y en dispositivos móviles y de escritorio. |
| RNF-5 | Mantenibilidad  | Media     | El código del sistema deberá seguir las buenas prácticas de desarrollo para facilitar futuras modificaciones. |

<div id='id3'></div>

## Requisitos de información

| ID   | Título        | Prioridad |Descripción  |
|------|---------------|-----------|---------------|
| RI-1 | Datos de usuario  | Alta | De los usuarios se almacenará su nombre, apellido, nombre de usuario, email, número de teléfono, contraseña, DNI, tipo de usuario, si quiere recibir notificaciones y si ha aceptado los términos, condiciones de la aplicación y foto de perfil. Estarán diferenciados entre cliente, proveedor y administrador (rol) pero solo se tiene la posibilidad de elegir entre los dos primeros al registrarte. Si un usuario es proveedor tendrá un plan, la fecha de inicio de este y la fecha de expiración del plan.  |
| RI-2 | Datos de servicio   | Alta      | De los servicios se almacenará su nombre, disponibilidad, la ciudad o ciudades en las que se ofertan, su precio fijo/por persona/por hora, una descripción, una imagen, el usuario propietario del servicio, el tipo de servicio(Catering, Entretenimiento o Decoración) y la información adicinal que se le quiera añadir. |
| RI-3 | Datos específicos de recintos    | Alta      | De los recintos se almacenarán el nombre, ciudad en la que se encuentra, disponibilidad, tipo de tarifa (fijo/por persona/por hora), foto del local, descripción, código postal, las coordenadas, la dirección, el aforo máximo, la superficie en m<sup>2</sup>, el horario en el que estaría disponible y el usuario que lo crea. |
| RI-4 | Datos de eventos | Alta | De los eventos se almacenará el nombre, el tipo de evento (Boda, Bautizo o Comunión), el número de invitados estimados, la fecha, el usuario que lo crea, la fecha de pago, el número de invitados confirmados y si está pagado o no. |
| RI-5 | Invitación | Alta | La invitación constará de nombre, apellidos, número de teléfono, email, número máximo de invitados asociados a la invitación, número de invitados que finalmente van, el evento al que corresponde y el estado de la misma (Enviada, Recibida o Aceptada).|
| RI-6 | Pagos | Alta | Se guardará la siguiente información de cada pago realizado: usuario que lo realiza, la cantidad pagada, la fecha y hora de la operación, el tipo y el evento al que está asociado.|
| RI-7 | Mensajes del chat | Alta | Se guardará la siguiente información de cada mensaje del chat: usuario que lo realiza, usuario que lo recibe, el contenido del mensaje y la fecha y hora del mensaje.|
| RI-8 | Datos de servicios de eventos | Alta | Se guardará la siguiente información de cada servicio de un evento concreto: la fecha de la reserva, la cantidad a pagar tanto la señal como la total, la fecha de inicio y de fin, el estado (Pendiente, Aprobado, Cancelado, Señal pagada o Completado), el servicio con el que se corresponde (si es un lugar u otro servicio) y el id del evento.|
| RI-9 | Datos de notificaciones | Alta | Se guardará la siguiente información de las notificaciones: la fecha de creación, mensaje, tipo y el usuario.|
| RI-10 | Datos de valoraciones | Alta | Se guardará la siguiente información de las valoraciones: la fecha de creación, el comentario, el número de estrellas (de 1 a 5), el servicio o recinto asociado y el usuario.|


<div id='id4'></div>

## Requisitos de seguridad

| ID   | Título                          | Prioridad | Descripción                                                                                       |
|------|---------------------------------|-----------|---------------------------------------------------------------------------------------------------|
| RS-1 | Autenticación y autorización    | Alta      | Se deberá implementar autenticación con credenciales seguras. Además, se deben definir roles de usuario con permisos específicos para cada acción dentro del sistema. |
| RS-2 | Protección de datos personales  | Alta      | Toda la información personal de los usuarios deberá ser almacenada de acuerdo con el Reglamento General de Protección de Datos. |
| RS-3 | Cifrado de datos                | Alta      | La información sensible deberá ser almacenada y transmitida utilizando cifrados.                  |
| RS-4 | Protección contra ataques       | Alta      | La aplicación deberá contar con medidas de protección contra ataques como SQL Injection, XSS y CSRF. |

<div id='id5'></div>

## Requisitos de usabilidad

| ID   | Título                          | Prioridad | Descripción                                                                                       |
|------|---------------------------------|-----------|---------------------------------------------------------------------------------------------------|
| RU-1 | Interfaz intuitiva y responsiva | Alta      | La aplicación deberá contar con una interfaz amigable y de fácil navegación, responsiva.          |
| RU-2 | Accesibilidad                   | Baja      | El sistema deberá cumplir con los estándares de accesibilidad para facilitar su uso. |
| RU-3 | Ayuda y soporte                 | Media     | Se incluirá una sección de preguntas frecuentes y soporte en línea para resolver dudas de los usuarios. |

<div id='id6'></div>

## Reglas de negocio

| ID   | Título                          | Prioridad | Descripción                                                                                       |
|------|---------------------------------|-----------|---------------------------------------------------------------------------------------------------|
| RN-1 | Registrar servicios             | Alta      | Solo los proveedores podrán registrar servicios en la plataforma.  |                                       
| RN-2 | Pago                            | Alta      | Solo se permitirá hacer pagos a través de la pasarela de pago integrada en la aplicación. |
| RN-3 | Límite de servicios ofertados 1 | Alta      | Los proveedores tendrán un máximo de 3 servicios ofertados con el plan estándar.        |
| RN-4 | Límite de servicios ofertados 2  | Alta      | Los proveedores tendrán un máximo de 10 servicios ofertados con el plan premium.         |
| RN-5 | Eliminación de cuenta                           | Alta      | Una vez eliminada una cuenta, todos los datos asociados al usuario serán anonimizados según lo requerido por la normativa de protección de datos. |
| RN-6 | Restricción de valoraciones                     | Alta      | Solo los usuarios cliente que hayan contratado un servicio podrán valorarlo. |


<div id='concl'></div>

## Conclusiones

Este documento ha permitido establecer una base sólida y consensuada para el desarrollo de Eventbride, reflejando tanto las funcionalidades principales del sistema como los requisitos técnicos, de seguridad y experiencia de usuario. A través de la definición clara de roles y limitaciones, se facilita el trabajo coordinado entre el equipo de desarrollo. La actualización constante de los requisitos garantiza que el sistema evolucione de acuerdo con las necesidades del proyecto y de los usuarios finales.

<div id='bib'></div>

## Bibliografía

Intencionalmente en blanco.
