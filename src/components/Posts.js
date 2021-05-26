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
import styles from './Posts.module.css';
import useScript from 'react-script-hook';

function Posts({link}) {
    useScript({
        src: "https://medium-widget.pixelpoint.io/widget.js",
        onload: () => {
            MediumWidget.Init({
                renderTo: `.${styles.mediumWidgetPosts}`,
                params: {
                    "resource": `${link}`,
                    "postsPerLine": 1,
                    "limit": 10,
                    "picture": "small",
                    "fields": ["description", "author", "publishAt"],
                    "ratio": "square"
                }})
        }
    });
    return (
        <div className={styles.mediumWidget}>
            <div className={styles.mediumWidgetPosts}>
                <h3>Loading posts..</h3>
            </div>
        </div>
    );
}

export default Posts;
