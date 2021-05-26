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
            <ExploreMore text={reposConfig.exploreMoreText} link={reposConfig.allReposLink}/>
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
        <a className={clsx('button button--primary', styles.exploreMore)} href={link} target="_blank">{text}</a>
    );
}

export default Repositories;
