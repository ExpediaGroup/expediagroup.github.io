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
import styles from './RssPosts.module.css';

function RssPosts({postsData}) {
    return (
        <div className={styles.mediumWidget}>
            <div className={styles.mediumWidgetPosts}>
                { postsData.map(post => (
                    <RssPost key={post.title} post={post}/>
                )) }
            </div>
        </div>
    );
}

function RssPost({post}) {
    return (
        <div>{post.title}</div>
    );
}

export default RssPosts;
