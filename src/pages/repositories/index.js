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

import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import repositoriesData from '@site/static/repos.json';
import Repositories from "../../components/Repositories";

function RepositoriesPage() {
    const {repositoriesConfig} = useDocusaurusContext().siteConfig.customFields;
    return (
        <Layout
            title={repositoriesConfig.repositoriesPage.title}
            description={repositoriesConfig.repositoriesPage.subtitle}>
            <main>
                <Repositories reposData={repositoriesData} reposConfig={repositoriesConfig}/>
            </main>
        </Layout>
    );
}

export default RepositoriesPage;
