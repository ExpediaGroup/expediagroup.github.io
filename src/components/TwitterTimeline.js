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
                data-height="525"
                data-chrome="noheader nofooter">
                <h3>Loading tweets..</h3>
            </a>
        </div>
    )
}

export default TwitterTimeline;
