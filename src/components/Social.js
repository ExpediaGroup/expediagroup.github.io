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

import React from "react";
import styles from "./Social.module.css";
import TwitterTimeline from "./TwitterTimeline";
import BlogPosts from "./BlogPosts";
import posts from '@site/static/posts.json';
import SocialHeader from "./SocialHeader";
import SocialFooter from "./SocialFooter";
import careersImageUrl from '@site/static/img/careers.jpg';

function Social({socialConfig}) {
    return (
        <section className={styles.social}>
            <div className="container">
                <div className="row">
                    <div className='col col--4'>
                        <div className={styles.socialColumn}>
                            <div className={styles.socialHeaderAndBody}>
                                <SocialHeader title={socialConfig.blog.title}/>
                                <div className={styles.socialBody}>
                                    <BlogPosts posts={posts}/>
                                </div>
                            </div>
                            <SocialFooter text={socialConfig.blog.footerText} link={socialConfig.blog.link}/>
                        </div>
                    </div>
                    <div className='col col--4'>
                        <div className={styles.socialColumn}>
                            <div className={styles.socialHeaderAndBody}>
                                <SocialHeader title={socialConfig.careers.title}/>
                                <div className={styles.socialBody}>
                                    <a href={socialConfig.careers.link} target="_blank">
                                        <img className={styles.careersImage} src={careersImageUrl} alt={socialConfig.careers.title}/>
                                    </a>
                                </div>
                            </div>
                            <SocialFooter text={socialConfig.careers.footerText} link={socialConfig.careers.link}/>
                        </div>
                    </div>
                    <div className='col col--4'>
                        <div className={styles.socialColumn}>
                            <div className={styles.socialHeaderAndBody}>
                                <SocialHeader title={socialConfig.twitter.title}/>
                                <div className={styles.socialBody}>
                                    <TwitterTimeline twitterLink={socialConfig.twitter.link}/>
                                </div>
                            </div>
                            <SocialFooter text={socialConfig.twitter.footerText} link={socialConfig.twitter.link}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social;
