import React from "react";
import styles from "./Social.module.css";
import clsx from "clsx";
import TwitterTimeline from "./TwitterTimeline";
import ArrowLink from "./ArrowLink";

function Social({socialLinks}) {
    return (
        <section className={styles.social}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--4', styles.blog)}>
                        <div className="text--center">
                            <p>Placeholder for blog</p>
                        </div>
                    </div>
                    <div className={clsx('col col--4', styles.careers)}>
                        <div className="text--center">
                            <p>Placeholder for careers</p>
                        </div>
                    </div>
                    <div className={clsx('col col--4', styles.twitterTimeline)}>
                        <div className="text--center">
                            <TwitterTimeline twitterLink={socialLinks.twitter}/>
                            <div className={styles.twitterText}>
                                <p>What we're saying on Twitter</p>
                                <ArrowLink link={socialLinks.twitter}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social;
