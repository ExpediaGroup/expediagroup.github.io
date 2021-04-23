import React from 'react';
import useScript from "react-script-hook";

function TwitterTimeline({twitterLink}) {
    useScript({
        src: "https://platform.twitter.com/widgets.js"
    });
    return (
        <div>
            <a
                className="twitter-timeline"
                href={twitterLink}
                data-height="535"
                data-chrome="noheader nofooter">
                <h3>Loading tweets..</h3>
            </a>
        </div>
    )
}

export default TwitterTimeline;
