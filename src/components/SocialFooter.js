import React from 'react';
import styles from './SocialFooter.module.css';
import ArrowLink from "./ArrowLink";

function SocialFooter({text, link}) {
    return (
        <div className={styles.socialFooter}>
            <p>{text}</p>
            <ArrowLink link={link}/>
        </div>
    );
}

export default SocialFooter;
