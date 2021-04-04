import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import repositoriesData from '@site/static/repos.json';
import Repositories from "./Repositories";
import Social from "./Social";

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;
  const {heroConfig, repositoriesConfig, socialLinks} = siteConfig.customFields;
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
          <Repositories reposData={repositoriesData} reposConfig={repositoriesConfig}/>
          <Social socialLinks={socialLinks}/>
      </main>
    </Layout>
  );
}

export default Home;
