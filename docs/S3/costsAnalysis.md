# <center>Análisis de costes</center>
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

### Fecha: 10/04/2025

### Entregable: Sprint 3

---

### Historial de versiones

| Fecha      | Versión | Descripción                                | Entrega  | Contribuyente(s) |
|------------|---------|--------------------------------------------|----------|------------------|
| 05/02/2025 | v1.0    | Creación del documento y redacción del mismo | DP | |
| 11/02/2025 | v1.1    | Corrección feedback semana 1 | DP | |
| 16/02/2025 | v1.2    | Corrección feedback semana 2 | DP | | 
| 19/02/2025 | v1.3    | Revisión y finalización del documento | DP | |
| 13/03/2025 | v1.4    | Desglose en CAPEX y OPEX | Sprint 1 | |
| 20/03/2025 | v1.5    | Retoques en CAPEX y OPEX y adición de punto Costes estimados vs Costes reales | Sprint 2 | Francisco Avilés Carrera, Pablo Jesús Castellanos Compaña y Sergio Pons López |
| 27/03/2025 | v1.6    | Costes estimados vs Costes reales S2 | Sprint 2 | Francisco Avilés Carrera y Pablo Jesús Castellanos Compaña |
| 03/04/2025 | v1.7    | Costes estimados vs Costes reales mitad S3 | Sprint 3 | Francisco Avilés Carrera y Pablo Jesús Castellanos Compaña |
|03/04/2025|v1.8|Ajuste Opex| Sprint 3 | Francisco Avilés Carrera y Pablo Jesús Castellanos Compaña |
|03/04/2025|v1.9|Costes estimados vs Costes reales S3| Sprint 3 | Francisco Avilés Carrera y Pablo Jesús Castellanos Compaña |
|03/04/2025|v2.0|Costes de Marketing añadidos a Capex y Sprint 3| Sprint 3 | Francisco Avilés Carrera |


---

## Contenido
1. [Introducción](#intro)
2. [Costes de Desarrollo](#id1)
3. [Costes de Infraestructuras y Licencias](#id2)
4. [Coste Inicial Total](#id3)
5. [Coste de Mantenimiento](#id4)
6. [Total Cost of Ownership (TCO)](#id5)
7. [Costes de Recompensa de Usuarios Piloto](#id6)
8. [Desglose de Gastos en CAPEX y OPEX](#id7)
9. [Costes estimados vs Costes reales](#id8)
10. [Conclusiones](#concl)
11. [Bibliografía](#bib)


<div id='intro'></div>

## Introducción

Este documento presenta una estimación detallada de los costos previstos por el equipo del proyecto para el desarrollo de la aplicación EventBride dentro del período de cuatro meses correspondiente a la asignatura Ingeniería de Software y Práctica Profesional (ISPP). Asimismo, se describen las distintas categorías de costos y se analizan los beneficios esperados con el objetivo de amortizar el Costo Total de Propiedad (TCO). Todos los costes de presupuesto son brutos.

<div id='id1'></div>

## Costes de Desarrollo

| Costes de Desarrollo | | | | | 68.800,00 € |
|---|---|---|---|---|---|
| **Id** | **Rol** | **HBS** | **Cantidad** | **Horas** | **Total** |
| **Dirección del proyecto** |  |  |  |  |  |
| 1.0 | Jefe de proyecto | 40,00 € | 1 | 160 | 6.400,00 € |
| **Jefe de sub-equipos** |  |  |  |  |  |
| 1.1 | Jefe de sub-equipo 1 | 30,00 € | 1 | 160 | 4.800,00 € |
| 1.2 | Jefe de sub-equipo 2 | 30,00 € | 1 | 160 | 4.800,00 € |
| 1.3 | Jefe de sub-equipo 3 | 30,00 € | 1 | 160 | 4.800,00 € |
| **Desarrollo** |  |  |  |  |  |
| 1.4 | Programador Web | 20,00 € | 9 | 160 | 28.800,00 € |
| 1.5 | Analista Programador Web | 30,00 € | 2 | 160 | 9.600,00 € |
| 1.6 | Diseñador gráfico | 30,00 € | 2 | 160 | 9.600,00 € |

Tabla 2.1. Costes de desarrollo

Los costes de desarrollo corresponden a la inversión total en recursos humanos requerida para la ejecución del proyecto. Como se detalla en la Tabla 2.1, cada recurso se encuentra definido por un rol específico, asociado a una Hora Básica de Servicio (HBS) [1]. El equipo del proyecto se estructura en función de estos roles y desempeña sus actividades con una dedicación de 10 horas semanales a lo largo de 16 semanas.

<div id='id2'></div>

## Costes de Infraestructuras y Licencias

| Costes de Infraestructuras y Licencias | | | | | 5.927,40 € |
|---|---|---|---|---|---|
| Id   | Servicio          | Precio mensual | Cantidad | Meses | Total     |
| 2.1  | Google Cloud      | 315,31 €      | 1        | 4     | 1.261,24 € |
| 2.2  | GitHub Enterprise | 20,01 €       | 17       | 4     | 1.360,68 € |
| 2.3  | GitHub Copilot    | 9,53 €        | 17       | 4     | 648,04 €  |
| 2.4  | Codacy            | 14,29 €       | 1        | 4     | 57,16 €   |
| 2.5  | APIs externas     | 200,07 €      | 1        | 4     | 800,28 €  |
| 2.6  | Oficina           | 450,00 €      | 1        | 4     | 1.800,00 € |

Tabla 2.2. Costes de Infraestructura y Licencias

Los costes de infraestructura comprenden la suma de los pagos mensuales por el alquiler de oficina, mientras que los costes de licencias corresponden al inmovilizado inmaterial del proyecto. Ambos se encuentran definidos exclusivamente para la etapa de desarrollo (véase Tabla 2.2).

A continuación, se detallan los costes mensuales asociados a los distintos servicios utilizados:
*   Google Cloud: 315,31 € [2], correspondiente a dos instancias de App Engine y una instancia de Cloud SQL.
*   GitHub Enterprise: 20,01 € por usuario al mes [3].
*   GitHub Copilot: 9,53 € por usuario al mes [4].
*   Codacy: 14,29 € al mes [5].
*   API de Google Maps: 200,07 €, estimado para un volumen mensual de 30.000 solicitudes y 1.000 usuarios diarios, con un coste de 0,007 $ por consulta [6].
*   Alquiler de oficina en Mairena del Aljarafe: 450,00 € al mes [7].

<div id='id3'></div>

## Coste Inicial Total

El coste inicial total (CI) se define como la suma de los costes de desarrollo y los costes de infraestructuras y licencias.

Asimismo, considerando un plan de contingencia del 10%, el CI asciende a 82.200,14 € brutos.

<div id='id4'></div>

## Coste de Mantenimiento

| Costes de Mantenimiento Mensuales | | | | | 2.218,29 € |
|---|---|---|---|---|---|
| Id   | Servicio          | Precio mensual | Cantidad | Meses | Total     |
| 3.1  | Técnico de soporte nivel 1 | 800,00 €      | 2        | 1     | 1.600,00 € |
| 3.2  | Google Cloud      | 315,31 €      | 1        | 1     | 315,31 €  |
| 3.3  | GitHub Enterprise | 20,01 €       | 3        | 1     | 60,03 €   |
| 3.4  | GitHub Copilot    | 9’53€        | 3        | 1     | 28’59€    |
| 3.5  | Codacy            | 14,29 €       | 1        | 1     | 14,29 €   |
| 3.6  | APIs externas     | 200,07 €      | 1        | 1     | 200,07 €  |

Tabla 3.1. Costes de Mantenimiento Mensuales

Los costes de mantenimiento (MRO) comprenden los gastos asociados al personal y a las licencias necesarias para garantizar el funcionamiento de la aplicación durante un año tras la finalización de la fase de desarrollo.

En relación con la Tabla 3, los costes mensuales se calculan de la misma manera que en las Tablas 2.1 y 2.2. No obstante, es importante destacar que la Hora Básica de Servicio (HBS) de un técnico de soporte se establece en 20,00 €. Dado que cada técnico desempeñará una jornada de 130 horas mensuales, el coste mensual por cada perfil asignado asciende a 2.600,00 €.

| Sueldo Mensual de Mantenimiento | | | | | 1.600,00 € |
|---|---|---|---|---|---|
| Id   | Rol                     | HBS      | Cantidad | Horas | Total     |
| 3.7  | Técnico de soporte nivel 1 | 20,00 €  | 17        | 130    | 44.200,00 € |

Tabla 3.2. Sueldo Mensual de Mantenimiento

<div id='id5'></div>


## Total Cost of Ownership (TCO)

El Coste Total de Propiedad (Total Cost of Ownership, TCO) proporciona un resumen detallado de los costes estimados en los apartados anteriores, compuesto por la suma del Coste Inicial (CI) y los Costes de Mantenimiento (MRO).

A partir del análisis de costes [8], se ha determinado que, para cubrir los gastos de desarrollo, será necesario alcanzar entre 74 y 111 transacciones dentro de la aplicación (relacionadas con la organización de eventos). Adicionalmente, una vez finalizada la etapa de desarrollo, se ha estimado que el coste de mantenimiento asciende a 2.218’29 € brutos mensuales, lo que implica que serían necesarios entre 2 y 3 pagos mensuales para cubrir dicho importe.

Cabe destacar que estos cálculos han sido realizados sin considerar las suscripciones premium de los proveedores. Además, deberíamos añadir los costes de la API de Stripe, que tiene un coste de comisión de un 1’5% + 0.25€ por cada transacción dentro de la unión europea y España, y de 2’9% + 0.25€ con el pago de tarjetas internacionales [9]. Posteriormente se hará un análisis de los gastos de la API de Stripe y se decidirá la posibilidad de adquirir el plan Enterprise el cual funciona de forma de pago mensual en vez de mediante comisiones.


<div id='id6'></div>

## Costes de Recompensa de Usuarios Piloto

| Costes de Recompensa de Usuarios Piloto | | | | | 4.320,00 € |
|---|---|---|---|---|---|
| Id   | Servicio              | Precio mensual | Cantidad | Meses | Total     |
| 5.1  | Usuario Piloto Proveedor | 90,00 €        | 8        | 6     | 4.320,00 €  |

Tabla 4. Costes de Recompensa de Usuarios Piloto

Dado nuestro programa de usuarios piloto, a los proveedores que se le proporcione nuestra aplicación a modo de prueba, recibirán de manera gratuita la aplicación con la suscripción premium durante medio año. Además, a los usuarios pilotos organizadores de eventos se les quitará la comisión al realizar el pago.

## Costes de Marketing

| Costes de Marketing totales | | | | 3.400,00 € |
|---|---|---|---|---|
| Id   | Servicio          | Precio mensual | Meses | Total     |
| 6.1  | Material para grabar (Cámara, micrófono, trípode, tarjeta SD, mochila) | 1.000,00 €   | 1     | 1.000,00 € |
| 6.2  | Publicidad en redes sociales (Instagram y LinkedIn) | 500,00 €   | 2     | 1.000,00 € |
| 6.3  | Publicidad impresa (Carteles, flyers, trípticos) | 400,00 €   | 2     | 800,00 € |
| 6.4  | Regalos promocionales (Camisetas, bolígrafos, tazas...) | 300,00 €   | 2     | 600,00 € |
| 6.5  | Editor de vídeos (CapCut) | 0,00 €   | 2     | 0,00 € |


Tabla 5. Costes de Marketing

Los costes de Marketing estarán incluidos en el CAPEX, cobrados los dos últimos meses de la etapa de desarrollo de la aplicación (mayo y junio), que será cuando se empezará con las campañas de publicidad.

<div id='id7'></div>

## Desglose de Gastos en CAPEX y OPEX

A continuación, vamos a desglosar los gastos en CAPEX(Gastos de capital), que son todos los gastos de inversión que se realizan en la adquisición de activos fijos, es decir, gastos necesarios para la creación del producto, y en OPEX(Gastos operativos), que son todos los gastos recurrentes necesarios para mantener la operatividad del producto una vez finalizada la fase de desarrollo.

CAPEX

| Concepto                                                    | Coste (€) |
|-------------------------------------------------------------|-----------|
| Desarrollo del software (salarios de equipo de desarrollo) | 68.800,00 |
| Licencias iniciales (GitHub Enterprise, Copilot, Codacy, APIs externas) | 2.866,16  |
| Infraestructura inicial (Google Cloud, oficina)            | 3.061,24  |
| Plan de contingencia (10% del CI)                           | 7.472,74  |
| Coste usuarios piloto                                        | 4.320,00  |
| Costes de Marketing                                         |   3.400,00         |
| Total CAPEX                                                 | 89.920,14 |

OPEX

| Concepto                                          | Coste mensual (€) | Coste anual (€) |
|---------------------------------------------------|-------------------|-----------------|
| Mantenimiento de software (salarios técnicos de soporte) | 44.200,00          | 530.400,00         |
| Infraestructura (Google Cloud, oficina)           | 765,31            | 9.183,72          |
| Licencias operativas (GitHub Enterprise, Copilot, Codacy, APIs externas) | 302,98           | 3.635,76         |
| Total OPEX                                        | 45.268,29          | 543.219,48         |


<div id='id8'></div>

## Costes estimados vs Costes reales
En este apartado vamos a comparar los costes estimados con los costes reales en cada Sprint. Es importante recordar que estos costes forman parte del CAPEX, ya que incluyen todos los gastos de los primeros cuatro meses de desarrollo de la aplicación.

Además, hay que tener en cuenta que algunos costes, como licencias, infraestructura o suscripciones mensuales, solo se contabilizan al final de cada mes. Esto significa que si analizamos un periodo que no coincide con el cierre de mes, esos gastos no aparecerán reflejados en ese momento.

### Sprint 1 (hasta Sprint 1, 31/01/25 - 13/03/25)

| Concepto                      | Coste Estimado (€) | Coste Real (€) | Información Adicional |
|--------------------------------|--------------------|----------------|-----------------------|
| Desarrollo de software         | 27.735,00          | 33.980,00      | Salarios del equipo de desarrollo hasta el momento (teniendo en cuenta las horas) |
| Licencias iniciales            | 716,54             | 716,54         | (GitHub Enterprise, Copilot, Codacy, APIs externas) - Mes de febrero |
| Infraestructura inicial        | 765,31             | 765,31         | Google Cloud, oficinas - Mes de febrero |
| Plan de contingencia           | 7.472,74           | 7.472,74       | 10% del coste inicial - Entero |
| Coste usuarios piloto          | 720,00 (8 usuarios) | 540,00 (6 usuarios) | Mes de febrero |
| **Total**                      | **36.409,59**      | **43.474,59**  | **Diferencia: -7.065,00** |



| Nombre                          | Horas | Rol                   | Coste por hora (€) | Coste (€)  |
|---------------------------------|-------|----------------------|------------------|-----------|
| Natalia Olmo Villegas           | 90    | Jefe de proyecto     | 40               | 3.600     |
| Francisco Avilés Carrera        | 64    | Jefe de subgrupo     | 30               | 1.920     |
| María de la Salud Carrera Talaverón | 68  | Jefe de subgrupo     | 30               | 2.040     |
| Pablo Jesús Castellanos Compaña | 101   | Jefe de subgrupo     | 30               | 3.030     |
| Daniel Benito Hidalgo           | 84    | Programador web      | 20               | 1.680     |
| Ignacio Blanquero Blanco        | 88    | Programador web      | 20               | 1.760     |
| Adrián Cabello Martín           | 62    | Programador web      | 20               | 1.240     |
| Fernando José de Celis Hurtado  | 63    | Programador web      | 20               | 1.260     |
| David Godoy Fernández           | 65    | Programador web      | 20               | 1.300     |
| Miguel Hernández Sánchez        | 64    | Programador web      | 20               | 1.280     |
| Antonio Montero López           | 76    | Programador web      | 20               | 1.520     |
| Gonzalo Navas Remmers           | 69    | Programador web      | 20               | 1.380     |
| Héctor Noguera González         | 65    | Programador web      | 20               | 1.300     |
| Manuel Pérez Vélez              | 74    | Analista programador | 30               | 2.220     |
| Andrés Pizzano Cerrillos        | 57    | Analista programador | 30               | 1.710     |
| Sergio Pons López               | 76    | Diseñador gráfico    | 30               | 2.280     |
| Lorenzo Torralba Lanzas         | 52    | Diseñador gráfico    | 30               | 1.560     |
| **TOTAL**                       |       |                      |                   | **33.980** |




### Sprint 2 (hasta mitad Sprint 2, 14/03/25 - 20/03/25)

| Concepto                      | Coste Estimado (€) | Coste Real (€) | Información Adicional |
|--------------------------------|--------------------|----------------|-----------------------|
| Desarrollo de software         | 4.515,00           | 6.420,00       | Salarios del equipo de desarrollo en este periodo (teniendo en cuenta las horas) |
| Licencias iniciales            | 0                  | 0              | - |
| Infraestructura inicial        | 0                  | 0              | - |
| Plan de contingencia           | 0                  | 0              | - |
| Coste usuarios piloto          | 0                  | 0              | - |
| **Total**                      | **4.515,00**       | **6.420,00**   | **Diferencia: -1.905,00** |



| Nombre                          | Horas | Rol                   | Coste por hora (€) | Coste (€)  |
|---------------------------------|-------|----------------------|------------------|-----------|
| Natalia Olmo Villegas           | 23    | Jefe de proyecto     | 40               | 920       |
| Francisco Avilés Carrera        | 15    | Jefe de subgrupo     | 30               | 450       |
| María de la Salud Carrera Talaverón | 9  | Jefe de subgrupo     | 30               | 270       |
| Pablo Jesús Castellanos Compaña | 28    | Jefe de subgrupo     | 30               | 840       |
| Daniel Benito Hidalgo           | 17    | Programador web      | 20               | 340       |
| Ignacio Blanquero Blanco        | 10    | Programador web      | 20               | 200       |
| Adrián Cabello Martín           | 15    | Programador web      | 20               | 300       |
| Fernando José de Celis Hurtado  | 12    | Programador web      | 20               | 240       |
| David Godoy Fernández           | 13    | Programador web      | 20               | 260       |
| Miguel Hernández Sánchez        | 15    | Programador web      | 20               | 300       |
| Antonio Montero López           | 8     | Programador web      | 20               | 160       |
| Gonzalo Navas Remmers           | 14    | Programador web      | 20               | 280       |
| Héctor Noguera González         | 9     | Programador web      | 20               | 180       |
| Manuel Pérez Vélez              | 10    | Analista programador | 30               | 300       |
| Andrés Pizzano Cerrillos        | 21    | Analista programador | 30               | 630       |
| Sergio Pons López               | 13    | Diseñador gráfico    | 30               | 390       |
| Lorenzo Torralba Lanzas         | 12    | Diseñador gráfico    | 30               | 360       |
| **TOTAL**                       |       |                      |                   | **6.420** |






### Sprint 2 (segunda mitad Sprint 2, 21/03/25 - 27/03/25)

| Concepto                      | Coste Estimado (€) | Coste Real (€) | Diferencia (€)  |
|-------------------------------|--------------------|----------------|-----------------|
| Desarrollo de software        | 4.515,00           | 8.000,00       |   -     |
| Licencias iniciales           | 716,54             | 716,54         | -            |
| Infraestructura inicial       | 765,31             | 765,31         | -            |
| Plan de contingencia          | 0,00               | 0,00           | -            |
| Coste usuarios piloto         | 720,00             | 540,00         | -         |
| TOTAL                     | **6.716,85**       | **10.021,85**  | **-3.305,00**   |



| Nombre                                | Horas | Rol                   | Coste por hora (€) | Coste (€) |
|---------------------------------------|-------|-----------------------|--------------------|-----------|
| Natalia Olmo Villegas                 | 28    | Jefe de proyecto      | 40                 | 1120      |
| Francisco Avilés Carrera              | 16    | Jefe de subgrupo      | 30                 | 480       |
| María de la Salud Carrera Talaverón   | 14    | Jefe de subgrupo      | 30                 | 420       |
| Pablo Jesús Castellanos Compaña       | 35    | Jefe de subgrupo      | 30                 | 1050      |
| Daniel Benito Hidalgo                 | 15    | Programador web       | 20                 | 300       |
| Ignacio Blanquero Blanco              | 14    | Programador web       | 20                 | 280       |
| Adrián Cabello Martín                 | 16    | Programador web       | 20                 | 320       |
| Fernando José de Celis Hurtado        | 19    | Programador web       | 20                 | 380       |
| David Godoy Fernández                 | 11    | Programador web       | 20                 | 220       |
| Miguel Hernández Sánchez              | 21    | Programador web       | 20                 | 420       |
| Antonio Montero López                 | 14    | Programador web       | 20                 | 280       |
| Gonzalo Navas Remmers                 | 9     | Programador web       | 20                 | 180       |
| Héctor Noguera González               | 21    | Programador web       | 20                 | 420       |
| Manuel Pérez Vélez                    | 20    | Analista programador  | 30                 | 600       |
| Andrés Pizzano Cerrillos              | 22    | Analista programador  | 30                 | 660       |
| Sergio Pons López                     | 18    | Diseñador gráfico     | 30                 | 540       |
| Lorenzo Torralba Lanzas               | 11    | Diseñador gráfico     | 30                 | 330       |
| **TOTAL**                             |       |                       |                    | **8000**  |




### Sprint 3 (hasta mitad Sprint 3, 28/03/25 - 03/04/25)

| Concepto                      | Coste Estimado (€) | Coste Real (€) | Información Adicional |
|--------------------------------|--------------------|----------------|-----------------------|
| Desarrollo de software         | 4.515,00           |  6.570,00      | Salarios del equipo de desarrollo en este periodo (teniendo en cuenta las horas) |
| Licencias iniciales            | 0                  | 0              | - |
| Infraestructura inicial        | 0                  | 0              | - |
| Plan de contingencia           | 0                  | 0              | - |
| Coste usuarios piloto          | 0                  | 0              | - |
| **Total**                      | **4.515,00**       | **6.570,00**   | **Diferencia: -2.055.00** |



| Nombre                                | Horas | Rol                   | Coste por hora (€) | Coste (€) |
|---------------------------------------|-------|-----------------------|--------------------|-----------|
| Natalia Olmo Villegas                 | 23    | Jefe de proyecto      | 40                 | 920       |
| María de la Salud Carrera Talaverón   | 22    | Jefe de subgrupo      | 30                 | 660       |
| Pablo Jesús Castellanos Compaña       | 22    | Jefe de subgrupo      | 30                 | 660       |
| Ignacio Blanquero Blanco              | 10    | Programador web       | 20                 | 200       |
| Adrián Cabello Martín                 | 20    | Programador web       | 20                 | 400       |
| Fernando José de Celis Hurtado        | 20    | Programador web       | 20                 | 400       |
| David Godoy Fernández                 | 12    | Programador web       | 20                 | 240       |
| Miguel Hernández Sánchez              | 12    | Programador web       | 20                 | 240       |
| Antonio Montero López                 | 9     | Programador web       | 20                 | 180       |
| Francisco Avilés Carrera              | 12    | Jefe de subgrupo      | 30                 | 360       |
| Gonzalo Navas Remmers                 | 13    | Programador web       | 20                 | 260       |
| Héctor Noguera González               | 13    | Programador web       | 20                 | 260       |
| Daniel Benito Hidalgo                 | 19    | Programador web       | 20                 | 380       |
| Manuel Pérez Vélez                    | 10    | Analista programador  | 30                 | 300       |
| Andrés Pizzano Cerrillos              | 18    | Analista programador  | 30                 | 540       |
| Sergio Pons López                     | 8     | Diseñador gráfico     | 30                 | 240       |
| Lorenzo Torralba Lanzas               | 11    | Diseñador gráfico     | 30                 | 330       |
| **TOTAL**                             |       |                       |                    | **6570**  |


### Sprint 3 (segunda mitad Sprint 3, 04/04/25 - 10/04/25)

| Concepto                      | Coste Estimado (€) | Coste Real (€) | Información Adicional |
|--------------------------------|--------------------|----------------|-----------------------|
| Desarrollo de software         | 4.515,00           |  5.610,00      | Salarios del equipo de desarrollo en este periodo (teniendo en cuenta las horas) |
| Licencias iniciales            | 716,54                  | 716,54              | (GitHub Enterprise, Copilot, Codacy, APIs externas) - Mes de marzo |
| Infraestructura inicial        | 765,31                  | 765,31               | Google Cloud, oficinas - Mes de marzo |
| Plan de contingencia           | 0                  | 0              | - |
| Coste usuarios piloto          | 720,00 (8 usuarios)              | 540,00 (6 usuarios)              |  Mes de marzo |
| Material para grabar          | 1.000,00              | 1.000,00               |  Pago único |
| Publicidad en redes sociales         | 500,00              | 500,00               |  Mes de marzo |
| Publicidad en impresa         | 400,00              | 400,00               |  Mes de marzo |
| Regalos promocionales         | 300,00              | 300,00               |  Mes de marzo |
| **Total**                      | **8.916,85**       | **9.831,85**   | **Diferencia: -915,00** |



| Nombre                                | Horas | Rol                   | Coste por hora (€) | Coste (€) |
|---------------------------------------|--------|------------------------|---------------------|-----------|
| Natalia Olmo Villegas                 | 12     | Jefe de proyecto       | 40                  | 480       |
| María de la Salud Carrera Talaverón  | 8      | Jefe de subgrupo       | 30                  | 240       |
| Pablo Jesús Castellanos Compaña      | 20     | Jefe de subgrupo       | 30                  | 600       |
| Ignacio Blanquero Blanco             | 13     | Programador web        | 20                  | 260       |
| Adrián Cabello Martín                | 18     | Programador web        | 20                  | 360       |
| Fernando José de Celis Hurtado       | 15     | Programador web        | 20                  | 300       |
| David Godoy Fernández                | 8      | Programador web        | 20                  | 160       |
| Miguel Hernández Sánchez             | 10     | Programador web        | 20                  | 200       |
| Antonio Montero López                | 10     | Programador web        | 20                  | 200       |
| Francisco Avilés Carrera             | 11     | Jefe de subgrupo       | 30                  | 330       |
| Gonzalo Navas Remmers                | 12     | Programador web        | 20                  | 240       |
| Héctor Noguera González              | 14     | Programador web        | 20                  | 280       |
| Daniel Benito Hidalgo                | 14     | Programador web        | 20                  | 280       |
| Manuel Pérez Vélez                   | 15     | Analista programador   | 30                  | 450       |
| Andrés Pizzano Cerrillos             | 12     | Analista programador   | 30                  | 360       |
| Sergio Pons López                    | 17     | Diseñador gráfico      | 30                  | 510       |
| Lorenzo Torralba Lanzas              | 12     | Diseñador gráfico      | 30                  | 360       |
| **TOTAL**                            |        |                        |                     | **5.610** |


<div id='concl'></div>

## Conclusiones

El presente documento ha detallado minuciosamente la estimación de costos asociados al desarrollo de la aplicación EventBride, abordando tanto los costos iniciales como los de mantenimiento y operación.

En primer lugar, el costo de desarrollo asciende a 68.800,00 €, con una inversión en recursos humanos distribuida en distintos roles, asegurando la correcta ejecución del proyecto en el período de cuatro meses.

Por otro lado, los costos de infraestructura y licencias suman 5.927,40 €, incluyendo servicios esenciales como Google Cloud, GitHub Enterprise y el alquiler de oficina, necesarios para el funcionamiento del proyecto durante la fase de desarrollo.

El costo total inicial (CI), sumando desarrollo, licencias e infraestructura, más un 10 % de contingencia, se ha estimado en 82.200,14 €.

En cuanto al mantenimiento, se prevé un gasto mensual de 2.218,29 €, considerando salarios de técnicos de soporte y costos de infraestructura recurrentes. Para cubrir estos costos, se estima que la aplicación deberá generar entre 74 y 111 transacciones en su fase operativa.

Adicionalmente, el análisis del Costo Total de Propiedad (TCO) ha puesto de manifiesto la importancia de alcanzar un equilibrio entre ingresos y gastos operativos. Se ha contemplado el impacto de la API de Stripe y la posibilidad de adoptar un plan Enterprise con un modelo de pago mensual.

Finalmente, el programa de usuarios piloto implicará un gasto de 4.320,00 €, proporcionando suscripciones premium gratuitas durante seis meses a proveedores y eximiendo de comisiones a los primeros organizadores de eventos que utilicen la aplicación.

<div id='bib'></div>

## Bibliografía

[1]: Perfiles profesionales ámbito informático

[2]: Google Cloud Calculator

[3]: GitHub Enterprise

[4]: GitHub Copilot

[5]: https://www.codacy.com/pricing

[6]: API Google Maps

[7]: Alquiler oficina Mairena del Aljarafe

[8]: Excel con análisis de costes

[9]: Pricing Stripe