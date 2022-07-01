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
import styles from './HeroBanner.module.css';
import clsx from "clsx";

function HeroBanner({title, subtitle, imageUrl}) {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}
                style={{backgroundImage: imageUrl ? `url(${imageUrl})` : 'none'}}>
            <div className='container'>
                <h1 className={clsx('hero__title', styles.heroTitle)}>{title}</h1>
                <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{subtitle}</p>
            </div>
        </header>
    );
}

export default HeroBanner;
