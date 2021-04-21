import React, { useEffect } from 'react';
import styles from './Posts.module.css';

function Posts({link}) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://medium-widget.pixelpoint.io/widget.js";
        script.async = true;
        script.onload = () => {
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
        document.body.appendChild(script);
    })
    return (
        <div className={styles.mediumWidget}>
            <div className={styles.mediumWidgetPosts}/>
        </div>
    );
}

export default Posts;
