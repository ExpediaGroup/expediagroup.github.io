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
import styles from './BlogPosts.module.css';

function BlogPosts({posts}) {
    return (
        <div className={styles.posts}>
            { posts.map(post => (
                <BlogPost key={post.title} post={post}/>
            )) }
        </div>
    );
}

function BlogPost({post}) {
    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <a href={post.link} target="_blank">
                    <h4>{post.title}</h4>
                </a>
            </div>
            <div className={styles.postBody}>
                <span className={styles.creator}>{post.creator}</span>
                <span className={styles.date}>{post.date}</span>
            </div>
        </div>
    );
}

export default BlogPosts;
