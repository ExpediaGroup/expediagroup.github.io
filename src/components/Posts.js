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
