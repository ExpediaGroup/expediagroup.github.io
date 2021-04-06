import React from "react";
import styles from "./Repositories.module.css";
import clsx from "clsx";
import ArrowLink from "./ArrowLink";

function Repositories({reposData, reposConfig}) {
    return (
        <section className={styles.repositoriesSection}>
            <div className={clsx('container', styles.repositoriesContainer)}>
                <div className="row">
                    { reposData.map(repo => (
                        <Repository key={repo.name} {...repo} />
                    )) }
                </div>
            </div>
            <ExploreMore link={reposConfig.allReposLink}/>
        </section>
    )
}

function Repository({name, description, imageUrl, repoUrl}) {
    return (
        <div className={clsx('col col--4', styles.repository)}>
            <div className="text--center">
                <a href={repoUrl} target="_blank">
                    <img className={styles.repositoryImage} src={imageUrl} alt={name} />
                </a>
            </div>
            <div className={styles.repositoryTitle}>
                <h3>{name}</h3>
                <ArrowLink link={repoUrl}/>
            </div>
            <p className={styles.repositoryDescription}>{description}</p>
        </div>
    );
}

function ExploreMore({link}) {
    return (
        <a className={clsx('button button--primary', styles.exploreMore)} href={link} target="_blank">Explore More Projects</a>
    );
}

export default Repositories;
