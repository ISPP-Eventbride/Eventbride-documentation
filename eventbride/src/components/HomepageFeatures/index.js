import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: '¿Quiénes somos y qué hacemos?',
    
    description: (
      <>
        Somos un grupo de estudiantes de la Universidad de Sevilla comprometidos
        con el <b> desarrollo de una aplicación innovadora para la gestión de eventos</b>.
        Apasionados por la tecnología, buscamos ofrecer una herramienta que facilite
        tanto la organización como la asistencia a eventos. Nuestro objetivo es 
        mejorar la experiencia de los usuarios, brindando una solución eficaz, intuitiva
        y centrada en sus necesidades durante todo el proceso del evento.
      </>
    ),
    Img: require('@site/static/img/equipo.png').default,
  },
  {
    title: '¿Qué zonas abarcamos?',
    description: (
      <>
        Actualmente estamos <b>centrados en la provincia de Sevilla</b>, donde hemos realizado
        pruebas piloto y hemos recibido comentarios positivos de los usuarios. En un futuro, planeamos
        expandirnos a otras provincias de Andalucía y, eventualmente, a otras zonas de España.
      </>
    ),
    Img: require('@site/static/img/Sevilla.png').default,
  },
  {
    title: '¿Por qué elegirnos?',
    description: (
      <>
        Elegir Eventbride significa <b>optar por una solución innovadora y eficiente para la gestión de
        eventos</b>. Nuestro equipo está comprometido con la mejora continua y la satisfacción del
        cliente. Nos esforzamos por ofrecer un servicio de calidad y adaptarnos a las necesidades de
        nuestros usuarios. Además, contamos con una gran variedad de servicios que se adaptan a
        diferentes tipos de eventos o temáticas.
      </>
    ),
    Img: require('@site/static/img/servicios.png').default,
  },
];

function Feature({ Svg, Img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>

        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : Img ? (
          <img src={Img} className={styles.featureImg} alt={title} />
        ) : null}

        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
