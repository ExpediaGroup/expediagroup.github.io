import React from 'react';
import styles from './SocialHeader.module.css';

function SocialHeader({title}) {
    return (
        <div className={styles.socialHeader}>
            <h1>{title}</h1>
        </div>
    );
}

export default SocialHeader;
