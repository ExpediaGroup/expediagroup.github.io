import React from "react";
import styles from "./Social.module.css";
import TwitterTimeline from "./TwitterTimeline";
import Posts from "./Posts";
import SocialHeader from "./SocialHeader";
import SocialFooter from "./SocialFooter";

function Social({socialLinks}) {
    return (
        <section className={styles.social}>
            <div className="container">
                <div className="row">
                    <div className='col col--4'>
                        <div className={styles.socialColumn}>
                            <SocialHeader title="Blog Posts"/>
                            <div className={styles.socialBody}>
                                <Posts link={socialLinks.techBlog}/>
                            </div>
                            <SocialFooter text="Read more stories on our tech blog" link={socialLinks.techBlog}/>
                        </div>
                    </div>
                    <div className='col col--4'>
                        <div className={styles.socialColumn}>
                            <SocialHeader title="Our Careers"/>
                            <div className={styles.socialBody}>
                            </div>
                        </div>
                    </div>
                    <div className='col col--4'>
                        <div className={styles.socialColumn}>
                            <SocialHeader title="Tweets"/>
                            <div className={styles.socialBody}>
                                <TwitterTimeline twitterLink={socialLinks.twitter}/>
                            </div>
                            <SocialFooter text="What we're saying on Twitter" link={socialLinks.twitter}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social;
