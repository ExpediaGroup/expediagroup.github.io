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
import HeroBanner from "../components/HeroBanner";
import HeroBanner3d from '../components/3d/HeroBanner3d';
import repositoriesData from '@site/static/repos.json';
import Repositories from "../components/Repositories";
import Social from "../components/Social";

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;
  const {heroConfig, repositoriesConfig, socialConfig} = siteConfig.customFields;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
        {heroConfig.hero3d.enabled
            ? <HeroBanner3d title={heroConfig.hero3d.title} subtitle={heroConfig.hero3d.subtitle}/>
            : <HeroBanner title={heroConfig.hero2d.title} subtitle={heroConfig.hero2d.subtitle} imageUrl={heroConfig.hero2d.imageUrl}/>
        }
        <main>
            <Repositories reposData={repositoriesData} reposConfig={repositoriesConfig} showOnlyFeatured={true}/>
            <Social socialConfig={socialConfig}/>
        </main>
    </Layout>
  );
}

export default Home;
