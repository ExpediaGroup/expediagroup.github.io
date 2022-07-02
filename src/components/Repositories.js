/*
Copyright 2021 Expedia, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import styles from "./Repositories.module.css";
import clsx from "clsx";
import ArrowLink from "./ArrowLink";

function Repositories({reposData, reposConfig, showOnlyFeatured = false}) {
    return (
        <section className={clsx(styles.repositoriesSection, showOnlyFeatured && styles.featuredRepositories)}>
            <div className={clsx('container', styles.repositoriesContainer)}>
                <div className="row">
                    { reposData
                        .filter(repo => showOnlyFeatured ? repo.featured : true)
                        .sort((repo1, repo2) => repo1.name.localeCompare(repo2.name))
                        .map(repo => (<Repository key={repo.name} {...repo} />))
                    }
                </div>
            </div>
            <ExploreMore text={showOnlyFeatured ? reposConfig.exploreMoreText : reposConfig.exploreOnGithubText}
                         link={showOnlyFeatured ? reposConfig.repositoriesPage.link : reposConfig.githubReposLink}/>
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
                <a href={repoUrl} target="_blank">
                    <h3>{name}</h3>
                </a>
                <ArrowLink link={repoUrl}/>
            </div>
            <p className={styles.repositoryDescription}>{description}</p>
        </div>
    );
}

function ExploreMore({text, link}) {
    return (
        <a className={clsx('button button--primary', styles.exploreMore)} href={link}>{text}</a>
    );
}

export default Repositories;
