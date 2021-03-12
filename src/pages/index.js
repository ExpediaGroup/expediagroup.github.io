import React from 'react';
import clsx from 'clsx';
import fetch from 'cross-fetch';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const GITHUB_TOKEN = 'PUT YOUR GITHUB TOKEN HERE';
const githubClient = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api.github.com/graphql',
        fetch,
        headers: {
            Authorization: `bearer ${GITHUB_TOKEN}`
        }
    }),
    cache: new InMemoryCache()
});

const QUERY_REPO_INFO = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      openGraphImageUrl
    }
  }
`;

const repoNames = [
    { owner: "ExpediaGroup", name: "apiary" },
    { owner: "ExpediaGroup", name: "beekeeper" },
    { owner: "ExpediaGroup", name: "catalyst-render" },
    { owner: "ExpediaGroup", name: "catalyst-server" },
    { owner: "ExpediaGroup", name: "dr-shadow" },
    { owner: "ExpediaGroup", name: "drone-fly" },
    { owner: "ExpediaGroup", name: "flyte" },
    { owner: "ExpediaGroup", name: "fpsmeter" },
    { owner: "ExpediaGroup", name: "graphql-component" },
    { owner: "ExpediaGroup", name: "graphql-kotlin" },
    { owner: "ExpediaDotCom", name: "haystack" }
];

function Repositories() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    { repoNames.map((props, idx) => (
                        <Repository key={idx} {...props} />
                    )) }
                </div>
            </div>
        </section>
    );
}

function Repository({owner, name}) {
    const { loading, error, data } = useQuery(QUERY_REPO_INFO, {
        variables: {
            owner : owner,
            name : name
        }});

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {JSON.stringify(error)}</p>
    const repoData = data.repository
    return (
        <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center">
              <img className={styles.featureImage} src={repoData.openGraphImageUrl} alt={repoData.name} />
            </div>
            <h3>{repoData.name}</h3>
            <p>{repoData.description}</p>
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
          <ApolloProvider client={githubClient}>
              <Repositories/>
          </ApolloProvider>
      </main>
    </Layout>
  );
}

export default Home;
