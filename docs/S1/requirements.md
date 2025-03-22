# <p style="text-align: center;">Requisitos</p>
## <p style="text-align: center;">Ingeniería del Software y Práctica Profesional (ISPP)</p>
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

### Fecha: 12/03/2025

### Entregable: Sprint 1

---

### Historial de versiones

|Fecha|Versión|Descripción|Entrega|Contribuyente(s)|
|---|---|---|---|---|
|24/02/2025|v1.0|Añadidos requisitos funcionales y no funcionales|DP|Pablo Jesús Castellanos Compaña, David Godoy Fernández, Gonzalo Navas Remmers|
|27/02/2025|v2.0|Añadidos requisitos funcionales, no funcionales, de usabilidad, de seguridad, y de información|DP|Lorenzo Torralba Lanzas|
|11/03/2025|v3.0|Requisitos actualizados|Sprint 1|Antonio Montero López, Pablo Jesús Castellanos Compaña, Natalia Olmo Villegas, María de la Salud Carrera Talaverón|
|12/03/2025|v3.1|Documento pasado a markdown|Sprint 1|María de la Salud Carrera Talaverón|

## Contenido
1. [Requisitos funcionales](#id1)
2. [Requisitos no funcionales](#id2)
3. [Requisitos de información](#id3)
4. [Requisitos de seguridad](#id4)
5. [Requisitos de usabilidad](#id5)
6. [Reglas de negocio](#id6)
7. [Bibliografía](#bib)

<div id='id1'></div>

## Requisitos funcionales

| ID   | Título                                           | Prioridad | Descripción                                                                                                                                                                                                 |
|------|--------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RF-1 | Registro de usuarios                             | Alta      | Los distintos usuarios de la aplicación podrán registrarse en la plataforma.                                                                                                                                 |
| RF-2 | Inicio de sesión                                 | Alta      | Los distintos usuarios de la aplicación podrán iniciar sesión en la aplicación una vez registrados.                                                                                                          |
| RF-3 | Cierre de sesión                                 | Alta      | Los distintos usuarios de la aplicación podrán cerrar la sesión que tengan abierta.                                                                                                                          |
| RF-4 | Edición de perfil                                | Alta      | Los distintos usuarios de la aplicación podrán editar su perfil y datos de usuario.                                                                                                                          |
| RF-5 | Registro de servicios                            | Alta      | Los proveedores podrán registrar los servicios que ofrezcan en la plataforma.                                                                                                                                |
| RF-6 | Búsqueda y visualización de servicios            | Alta      | Los usuarios cliente podrán buscar y visualizar los distintos servicios ofrecidos por los proveedores y filtrarlos por tipo.                                                                                 |
| RF-7 | Solicitud de reserva de contratación de servicios| Alta      | Los usuarios cliente podrán solicitar la contratación de los distintos servicios ofrecidos por los proveedores.                                                                                              |
| RF-8 | Anulación de servicios                           | Alta      | Los proveedores pueden cancelar un servicio si lo considerasen.                                                                                                                                              |
| RF-9 | Pagar la señal                                   | Alta      | A la hora de reservar un servicio, este se confirmará y se procederá a pedir los datos de tarjeta del cliente, esta se guardará para el posterior pago del evento. Aquí se obra una señal, especificada por el servicio. |
| RF-10| Proceder al pago del evento                      | Alta      | Se procede al pago del evento completo un tiempo antes de la celebración de este. 4 meses en caso de ser una boda, 2 meses en caso de ser una comunión y 1 mes en caso de ser un bautizo.                    |
| RF-11| Cancelación del servicio                         | Alta      | Los proveedores podrán cancelar sus servicios en caso de algún imprevisto o inconveniente y el dinero será devuelto al cliente.                                                                              |
| RF-12| Organización eventos                             | Alta      | Los usuarios cliente podrán crear un nuevo evento. Al inicio del formulario de la creación, se indicará el presupuesto del mismo. También se indicará un número estimado de invitados (en un rango).         |
| RF-13| Creación y gestión de listas de invitados        | Alta      | Los usuarios cliente podrán crear y gestionar una lista de invitados a su evento.                                                                                                                            |
| RF-14| Edición de información de invitados              | Alta      | Los usuarios cliente podrán editar la información de los invitados de la lista.                                                                                                                              |
| RF-15| Envío de invitaciones digitales                  | Media     | Los usuarios cliente podrán enviar invitaciones digitales a los invitados de la lista.                                                                                                                       |
| RF-16| Precio total del evento                          | Alta      | Los usuarios cliente podrán obtener el precio total estimado del evento al finalizar la configuración (añadir los servicios al evento/carrito).                                                              |
| RF-17| Registro de gastos por categoría                 | Media     | Los usuarios cliente podrán obtener un desglose de los gastos según la categoría, que es catering, local, etc. En la que lo hayan gastado.                                                                   |
| RF-18| Cálculo de presupuesto restante                  | Media     | Los usuarios clientes podrán ver en directo cuanto les queda del presupuesto seleccionado previamente.                                                                                                       |
| RF-19| Alertas de presupuesto                           | Media     | Los usuarios clientes serán advertidos cuando su presupuesto sea superado.                                                                                                                                   |
| RF-20| Atención al cliente                              | Alta      | Los distintos usuarios podrán acceder a una sección de atención al cliente en la que conseguir ayuda o contactar con el equipo.                                                                              |
| RF-21| Emisión de reseñas y calificaciones              | Alta      | Los usuarios cliente podrán emitir reseñas y calificaciones de los proveedores.                                                                                                                              |
| RF-22| Visualización de reseñas y calificaciones        | Alta      | Los usuarios cliente podrán ver las reseñas y calificaciones emitidas por otros usuarios cliente.                                                                                                            |
| RF-23| Recepción de notificaciones                      | Media     | Los distintos usuarios podrán recibir notificaciones informándoles o recordándoles hechos importantes (confirmaciones, cancelaciones, fechas, etc.)                                                          |
| RF-24| Confirmación de asistencia                       | Alta      | Los invitados podrán confirmar su asistencia a través de un enlace poniendo sus datos sin necesidad de registro.                                                                                             |
| RF-25| Plan Premium                                     | Alta      | Los proveedores podrán pagar un plan premium que elimine su límite de servicios ofertados y le aporte estadísticas valiosas.                                                                                 |

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

| ID   | Título                           | Prioridad | Descripción                                                                                                                                                                                                 |
|------|----------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RI-1 | Datos de usuario                 | Alta      | De los usuarios se almacenará su nombre, apellido, nombre de usuario, email, número de teléfono, contraseña, DNI y foto de perfil. Estarán diferenciados entre cliente y proveedor (rol).                    |
| RI-2 | Datos de servicio                | Alta      | De los servicios se almacenará su nombre, disponibilidad, la ciudad o ciudades en las que se ofertan, su precio fijo/por persona/por hora, una descripción, si está limitado a precio por persona, si está limitado a precio por hora y el usuario propietario del servicio. |
| RI-3 | Datos específicos de recintos    | Alta      | De los servicios de tipo recinto se almacenará el código postal, las coordenadas, la dirección, el aforo máximo y la superficie.                                                                             |
| RI-4 | Datos específicos de otros servicios | Alta   | De los servicios de otro tipo se almacenará su tipo concreto (Catering, Entretenimiento o Decoración) junto a información extra.                                                                             |
| RI-5 | Datos de las reseñas             | Alta      | De las reseñas se almacenará la calificación en estrellas, un comentario, el servicio que se califica y el usuario autor.                                                                                    |
| RI-6 | Datos de eventos                 | Alta      | De los eventos se almacenará el tipo de evento (Boda, Bautizo o Comunión), el número de invitados estimados, el presupuesto, la fecha, el usuario que lo crea, la lista de invitaciones, la fecha de pago, el número de invitados confirmados y si está pagado o no. |
| RI-7 | Invitación                       | Alta      | La invitación constará de nombre, apellidos, número de teléfono, email y el estado de la misma (Enviada, Recibida o Aceptada).                                                                               |

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
| RU-2 | Accesibilidad                   | Baja      | El sistema deberá cumplir con los estándares de accesibilidad para facilitar su uso a personas con discapacidades. |
| RU-3 | Ayuda y soporte                 | Media     | Se incluirá una sección de preguntas frecuentes y soporte en línea para resolver dudas de los usuarios. |
| RU-4 | Personalización                 | Baja      | Los usuarios podrán personalizar la apariencia y configuración de la página.                      |

<div id='id6'></div>

## Reglas de negocio

| ID   | Título                          | Prioridad | Descripción                                                                                       |
|------|---------------------------------|-----------|---------------------------------------------------------------------------------------------------|
| RN-1 | Registrar servicios             | Alta      | Solo los proveedores podrán registrar servicios en la plataforma                                                                        |
| RN-2 | Aceptación de solicitud         | Alta      | Un proveedor tiene un plazo máximo de 48 horas para aceptar o rechazar una solicitud de reserva                                        |
| RN-3 | Pago                            | Alta      | Solo se permitirá hacer pagos a través de la pasarela de pago integrada en la aplicación                                               |
| RN-4 | Límite de servicios ofertados   | Alta      | Los proveedores tendrán un máximo de 5 servicios ofertados con el plan estándar                                                        |

<div id='bib'></div>

## Bibliografía

En blanco a propósito.