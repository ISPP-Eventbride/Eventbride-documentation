# Monetización de la aplicación
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

### Fecha: 03/04/2025

### Entregable: Sprint 3

---

### Historial de versiones

|Fecha |Versión |Descripción |Entrega |Contribuyente(s) |
| - | - | - | - | - |
|16/02/2025 |1\.0 |Creación del documento y redacción del mismo |DP ||
|08/03/2025 |2\.0 |Actualización requisitos |Sprint 1 |<p>Pablo Jesús Castellanos Compaña, </p><p>Natalia Olmo Villegas,</p><p> María de la Salud Carrera Talaverón </p>|
|11/03/2025|v2.1|Pasar el documento a markdown| Sprint 1 | Sergio Pons López |
|13/03/2025|v2.2|Introducir estimación de costos y beneficios| Sprint 1 | Lorenzo Torralba Lanzas |
|20/03/2025|v2.3|Ajustar estimación de costos a nuevos CAPEX y OPEX | Sprint 2 | Francisco Avilés Carrera y Pablo Jesús Castellanos Compaña 
|25/03/2025|v2.4|Ajustar monetización| Sprint 2 | Francisco Avilés Carrera y Pablo Jesús Castellanos Compaña |
|03/04/2025|v2.5|Ajuste Opex| Sprint 3 | Francisco Avilés Carrera y Pablo Jesús Castellanos Compaña |
|03/04/2025|v2.6|Cambio Opex| Sprint 3 | Francisco Avilés Carrera |


## Contenido 

1. [Resumen ](#resumen)
2. [Introducción ](#intro)
3. [Funcionalidad por la que los usuarios estarían dispuestos a pagar](#id1)
4. [Contacto con los proveedores ](#id2)
5. [Ingresos de la aplicación  ](#id3)
5. [Estimación de costos e ingresos a corto y medio plazo](#id4)
6. [Bibliografía ](#bib)



<div id='resumen'></div>

## Resumen 

La aplicación facilita la organización de eventos al centralizar todos los servicios en una sola plataforma, eliminando la necesidad de buscar proveedores por separado. Ofrece seguridad mediante la verificación de los servicios y optimiza la gestión de invitados, catering y transporte, incluyendo descuentos por la contratación de múltiples servicios. Aunque  los  usuarios  podrían  contactar  a  los  proveedores  directamente  para  evitar comisiones, la conveniencia y confianza en la plataforma fomentarán su uso, como ocurre con Booking.  

El modelo de ingresos se basa en comisiones del 5% para usuarios y 2.5% para proveedores, además de un plan premium que permite a estos últimos publicar más servicios y posicionar mejor sus servicios en la aplicación. Con  este  enfoque,  la  inversión  inicial  podría amortizarse  con  un  volumen  realista  de  eventos  anuales,  asegurando  la  viabilidad  y crecimiento del proyecto. 

<div id='intro'></div>

## Introducción 

En este documento se detallará la manera en la cual se monetizará la aplicación, las funcionalidades por la que estarían dispuestos a pagar los usuarios, el contacto con los proveedores y el sistema de reembolso que queremos llevar a cabo.

<div id='id1'></div>

## Funcionalidad por la que los usuarios estarían dispuestos a pagar 

Ofrecemos un sistema centralizado para la organización de eventos. Esto es algo que le quitaría mucho trabajo a los usuarios que quieren organizar algún evento de este tipo, ya que puede generar estrés y requiere mucho tiempo y organización buscar los servicios que ofrecemos por separado.

No  podemos  negar  que  los  usuarios  podrían  utilizar  nuestra  aplicación  para encontrar los servicios que ofrecemos y contratarlos sin hacer uso de la aplicación para ahorrarse las comisiones de compra. Obviamente esto es un problema que se encuentra en muchas empresas hoy en día. Por ejemplo, la conocida aplicación “Booking” se lleva una comisión por hacer la reserva del apartamento con ellos. Sin embargo, un usuario podría contactar con el apartamento mediante número de teléfono o por el propio chat que ofrece Booking, y gestionar la reserva sin hacer uso de la aplicación. Sin embargo, hoy en día Booking es una aplicación bastante popular y la gran mayoría de los usuarios prefieren gestionar sus estancias a través de la plataforma. ¿Cuáles son los motivos?

1. Booking proporciona seguridad y tiene una política de cancelación de la estancia que normalmente suele ser cancelación gratuita hasta pocos días antes del viaje.
1. Ofrece  medios  de  transporte  como  vuelos  o  alquiler  de  coches,  además  del alojamiento para facilitarte la llegada a tu destino.
1. Facilita la compra de entradas para las atracciones.
1. Perfil  de  usuario  con  nivel  “Genius”.  A  medida  que  se  van  gestionando  más reservas, vas subiendo de nivel lo que te proporciona más ofertas.

Nosotros, al igual que Booking, ofreceremos seguridad encargándonos de verificar que todos los servicios que se ofrecen en la aplicación son fiables. Además, una de las características por las que nos destacamos es la centralización de toda la organización de tu  evento:  lugar,  entretenimiento,  decoración,  catering,  etc.  Además,  introducimos  la novedad de las invitaciones.   

Al finalizar el evento, se generará una url con toda la información del evento que se mandará a los invitados para que confirmen su asistencia a través de la aplicación, pero sin necesidad de registrarse. Deberán poner su nombre, apellidos, teléfono, dirección y correo electrónico. La aplicación mostrará una sección con todos los invitados y un recuento de cuantos son.  

Esto es importante para servicios como el catering, que suele cobrarse por número de comensales. El proceso para contratar un servicio será el siguiente:

- Se añadirán los servicios al evento.
- El proveedor te aceptará la reserva del servicio.
- Se habilitará una sección para pagar las señales de los servicios del evento.
- Una vez estén las señales pagadas se habilitará el pago restante de cada servicio.
- Se podrá pagar el evento en su completitiud una vez estén todas las señales pagadas.

Fecha límite para realizar el pago del evento:
- Bodas: 4 meses antes 
- Bautizos: 1 mes antes 
- Comuniones: 3 meses antes

Se añadirá también en el desglose el porcentaje de comisión de Eventbride, todo anteriormente referenciado arriba en el documento.

Además,  se  contempla  añadir  servicios  de  autobuses  o  taxis  de  ida  y  vuelta, privados de la propia aplicación, para facilitar el acceso al evento. Se ofrecerán descuentos en  estos  servicios  dependiendo  de  la  cantidad  de  servicios  contratados  en  nuestra aplicación. Esto es algo muy útil, pues si se ofrecen servicios de transporte ida para los invitados desde el lugar de celebración previo al evento, y servicios de transporte de vuelta con  una  o  varias  paradas,  a  un  precio  asequible,  los  invitados  podrán  sentirse  más cómodos. Esto queda sujeto a la evolución del proyecto.

En cambio, para esta aplicación no vemos necesaria la incorporación de un sistema de niveles de puntos para acumular ofertas como en Booking, ya que entendemos que nuestros usuarios la usarán más esporádicamente, ya que el tipo de celebraciones que ofrecemos no son tan recurrentes como los viajes. No obstante, pensamos expandirnos para poder ofrecer servicios para organizar más eventos como cumpleaños en un futuro. Si esto ocurre, sí que podría ser interesante incorporar este sistema de puntos.

<div id='id2'></div>

## Contacto con los proveedores 

Para contactar con los proveedores, en un primer momento lo haremos de forma manual  a  través  de  su  número  de  teléfono  o  email.  Destinaremos  a  unos  cuantos integrantes  del  equipo  a  buscar  posibles  proveedores  que  quieran  utilizar  nuestros servicios. El beneficio que pueden obtener de esto sería más publicidad y facilidad a la hora de gestionar las reservas. A los proveedores se les ofrecerá la posibilidad de añadir este evento a Google Calendar para centralizar las reservas. A cambio, se le pedirá una pequeña comisión de sus ventas, que se explicarán en más detalle en el siguiente apartado.

Una vez que dispongamos de un reconocimiento considerable en redes sociales, contactaremos con los servicios a través de estas. Pero, como se ha mencionado se requiere de tener un cierto número de seguidores para que estos proveedores puedan confiar en nuestros servicios. 

<div id='id3'></div>

## Ingresos de la aplicación 

Los  ingresos  económicos  de  la  aplicación  vendrán  dados  por  los  siguientes 

parámetros:  

- Comisiones a usuarios y proveedores
  - Comisiones por pago a los usuarios: 5%
  - Comisiones por cada venta de oferta a los proveedores: 2.5%
- Plan premium proveedores:
  - Aumento del número de servicios a ofertar
  - Patrocinio para que sus servicios salgan mejor posicionados

La aplicación será gratuita para los usuarios y ofrecerá una buena experiencia sin interrupciones con la finalidad de que el usuario pase por todo el proceso de creación de su evento hasta llegar a la pasarela de pago. En ella, se añadirá una comisión del 5% del total para el usuario. El usuario aceptará la comisión ya que está demostrado que un cliente es más susceptible a una venta una vez que abre la cartera. Además, el usuario ha ido creando la idea del evento de sus sueños en la cabeza y está a un click (pagar) de tener todo el evento organizado y por una pequeña comisión aceptará el pago.

En el caso de los proveedores, tendrán una comisión del 2.5% por cada servicio que vendan. La comisión de los proveedores debe ser baja para garantizar que los proveedores continúen usando la aplicación. No ganamos dinero por los intereses de un proveedor sino por la suma de comisiones que generan entre todos los servicios que existen en un pago.

Por último, los proveedores tendrán un número limitado de 3 ofertas. Para muchos de ellos, solo harán falta de 1 a 3 ofertas. Por ejemplo, un mago autónomo pondrá sólo su oferta  de  mago,  sin  embargo,  una  empresa  de  catering  puede  tener  varios  caterings disponibles.  

Si el proveedor está satisfecho con la aplicación querrá tener un mayor número de ofertas a causa del crecimiento de su negocio y será susceptible al pago de una membresía premium que permitirá a esta poner ofertas ilimitadas. Además se le posicionará mejor en la aplicación. Este plan premium costará 50€ al mes.

[Ver Excel Ganancias.xlsx](https://uses0-my.sharepoint.com/:x:/g/personal/danbenhid_alum_us_es/EUwnInhun7lNl22ZkGuyxnkBaTPWlwnXklO7hOZMDIzGLw?e=PGd0Ka)


Con este sistema, teniendo en cuenta sólo bodas, para amortizar la inversión inicial sólo necesitaríamos que se produjeran entre 42 a 63 pagos dependiendo de lo caras que sean las bodas. Viendo el volumen de bodas que se producen al año en Sevilla, es una cifra realista.

<div id='id4'></div>

## Estimación de costos e ingresos a corto y medio plazo 

### Costos

Comenzando con los gastos y basándonos en el documento de análisis de costes, podremos hacer una estimación sobre los gastos a corto plazo (6 meses, con dos meses de la aplicación en producción) y a medio plazo (2 años).

Para esta estimación usaremos el CAPEX y el OPEX.

CAPEX Total: 89.920,14 €

OPEX mensual: 45.268,29 €

OPEX anual: 543.219,48 €

Teniendo en cuenta estos parametros, se podría estimar que el costo a corto plazo sería de unos 180.456,72 euros (89.920,14 + 45.268,29 x 2) euros y el costo a medio plazo de unos 995.285,94 euros (89.920,14 + 45.268,29 x 20).

### Ingresos

A continuación haremos una estimación de los posibles beneficios. Para ello, tendré en cuenta las estimaciones hechas por los compañeros del costo de celebrar una boda[1], una comunión[2] y un bautizo[3]:

<center>![](../img/costo_estimado_boda.png)</center>
Imagen 1. Costo estimado de una boda


<center>![](../img/costo_estimado_comunion.png)</center>
Imagen 2. Costo estimado de una comunión


<center>![](../img/costo_estimado_bautizo.png)</center>
Imagen 3. Costo estimado de un bautizo


Nos hemos visto obligados a calcular por separado los costes de los eventos ya que varían mucho de unos a otros

Analizando estas tablas, podríamos calcular un beneficio aproximado, en el caso más esperado de 160.000€. Además, se puede observar que el mayor volumen de negocio lo haremos con las bodas, que es donde más dinero se gasta. El beneficio a corto plazo es más complejo de calcular ya que depende de como de bien funcione la aplicación en sus primeros meses de vida, lo que nos lleva a suposiciones y hace inservible cualquier estimación.

<div id='bib'></div>

## Bibliografía 

- [1] https://www.bodas.net/articulos/cuanto-cuesta-casarse--c841
- [2] https://www.cronoshare.com/cuanto-cuesta/primera-comunion-espana
- [3] https://www.bankinter.com/blog/finanzas-personales/cuanto-cuesta-un-bautizo-en-espana

