import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={clsx("container-image", styles.containerImage)}>
          <img
            src="img/Eventbride2.png"
            alt="Eventbride's logo"
            className={clsx("hero-image", styles.heroImage)}
          />
          <div>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Acceso a la documentación
          </Link>
        </div>
      </div>
    </header>
  );
}

function ImportantDoc() {
  const documents = [
    {
      name: "Acuerdo de usuarios pilotos",
      url: "/docs/category/commitment-agreements-usuarios-piloto",
    },
    {
      name: "Commitment Agreement",
      url: "/docs/category/commitment-agreements",
    },
    {
      name: "Implicaciones legales",
      url: "/docs/WPL/legalImplications",
    },
  ];
  return (
    <div
      id="importantDoc"
      className={clsx("important-documents-container", styles.importantDoc)}
    >
      <div className="container">
        <h2 className="section-title">Documentos relevantes</h2>
        <div className={clsx("documents-card-container", styles.documentsCardContainer)}>
          {documents.map((document, index) => (
            <div
              key={index}
              className={clsx("document-card", styles.documentCard)}
            >
              <Link
                className={clsx("document-title", styles.documentTitle)}
                to={document.url}
              >
                {document.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Esta es la documentación de Eventbride, una plataforma para la gestión de eventos como Bodas, Bautizos y Comuniones.">
      <HomepageHeader />
      <main>
        <HomepageFeatures/>
        <ImportantDoc/>
      </main>
    </Layout>
  );
}
