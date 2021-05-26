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

import React from 'react';
import styles from './ArrowLink.module.css';

function ArrowLink({link}) {
    return (
        <a href={link} target="_blank">
            <svg className={styles.arrowImage} viewBox="0 0 7.3365 3.9447">
                <g transform="translate(22.946 -57.633)">
                    <path d="m-18.159 57.65a0.086607 0.086607 0 0 0-0.12092 0.01705 0.086607 0.086607 0 0 0 0.01757 0.12144l2.2975 1.7224h-6.8947a0.086607 0.086607 0 0 0-0.08682 0.08682 0.086607 0.086607 0 0 0 0.08682 0.0863h6.9117l-2.3146 1.7368a0.086607 0.086607 0 0 0-0.01757 0.12144 0.086607 0.086607 0 0 0 0.06615 0.03514 0.086607 0.086607 0 0 0 0.05529-0.01705l2.5141-1.8872a0.086616 0.086616 0 0 0 0-0.13849zm2.3136 1.9503 0.0047 0.0036-0.03256 0.02429a0.086607 0.086607 0 0 0 0.02791-0.02791z"/>
                </g>
            </svg>
        </a>
    );
}

export default ArrowLink;
