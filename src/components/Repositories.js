/*
Copyright 2022 Expedia, Inc.

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
import React, { useRef, useState, useEffect } from "react";
import styles from "./Repositories.module.css";
import clsx from "clsx";
import Repository from "./Repository";
import ExploreMore from "./ExploreMore";
import Paginator from "./Paginator";

function Repositories({ reposData, reposConfig, showOnlyFeatured = false }) {
    const allRepos = reposData.filter(repo => showOnlyFeatured ? repo.featured : true)
                              .sort((repo1, repo2) => repo1.name.localeCompare(repo2.name));
    const pageCount = Math.ceil(allRepos.length / reposConfig.repositoriesPerPage);
    const getPageRepos = (page) =>
        allRepos.slice(page * reposConfig.repositoriesPerPage, (page + 1) * reposConfig.repositoriesPerPage);
    
    const [currentRepos, setCurrentRepos] = useState(getPageRepos(0));
    const [isVisible, setIsVisible] = useState(false);
    const thisElementRef = useRef();

    const handlePageClick = (event) => {
        setIsVisible(false); 
        setCurrentRepos(getPageRepos(event.selected));
        thisElementRef.current.scrollIntoView();
    };

    useEffect(() => {
        setIsVisible(true); 
    }, [currentRepos]);

    return (
        <section
            ref={thisElementRef}
            className={clsx(styles.repositoriesSection, showOnlyFeatured && styles.featuredRepositories)}
        >
            <CurrentPageRepositories repos={currentRepos} isVisible={isVisible} />
            <Paginator pageCount={pageCount} handlePageClick={handlePageClick} />
            <ExploreMore
                text={showOnlyFeatured ? reposConfig.exploreMoreText : reposConfig.exploreOnGithubText}
                link={showOnlyFeatured ? reposConfig.repositoriesPage.link : reposConfig.githubReposLink}
            />
        </section>
    );
}

function CurrentPageRepositories({ repos, isVisible }) {
    return (
        <div className={clsx('container', styles.repositoriesContainer, { visible: isVisible })}>
            <div className="row">
                {repos.map(repo => (<Repository key={repo.name} {...repo} />))}
            </div>
        </div>
    );
}

export default Repositories;