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
import styles from './ExploreMore.module.css';
import clsx from "clsx";

function ExploreMore({text, link}) {
    return (
        <a className={clsx('button button--primary', styles.exploreMore)} href={link}>{text}</a>
    );
}

export default ExploreMore;
