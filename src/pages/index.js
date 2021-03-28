import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import repos from '@site/static/repos.json';
import TwitterTimeline from './TwitterTimeline';

function Social() {
    return (
        <section className={styles.social}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--4', styles.blog)}>
                        <div className="text--center">
                            <p>Placeholder for blog</p>
                        </div>
                    </div>
                    <div className={clsx('col col--4', styles.careers)}>
                        <div className="text--center">
                            <p>Placeholder for careers</p>
                        </div>
                    </div>
                    <div className={clsx('col col--4', styles.twitterTimeline)}>
                        <div className="text--center">
                            <TwitterTimeline/>
                            <div className={styles.twitterText}>
                                <p>What we're saying on Twitter</p>
                                <a className={styles.arrowLink} href="https://twitter.com/ExpediaGroupEng">→</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

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
  const {heroConfig} = siteConfig.customFields;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx('hero__title', styles.heroTitle)}>{heroConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{heroConfig.subtitle}</p>
        </div>
      </header>
      <main>
          <Repositories/>
          <Social/>
      </main>
    </Layout>
  );
}

export default Home;
