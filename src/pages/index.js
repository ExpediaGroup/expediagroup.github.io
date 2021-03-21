import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import repos from '@site/static/repos.json';


function Repositories() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    { repos.map(repo => (
                        <Repository key={repo.name} {...repo} />
                    )) }
                </div>
            </div>
        </section>
    )
}

function Repository({name, description, imageUrl}) {
    return (
        <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center">
              <img className={styles.featureImage} src={imageUrl} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
          <div>Test, remove me</div>
          <Repositories/>
      </main>
    </Layout>
  );
}

export default Home;
