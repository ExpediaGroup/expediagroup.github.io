import React, { Component } from 'react';

class TwitterTimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render(){
        return (
            <div>
                <a
                    class="twitter-timeline"
                    href="https://twitter.com/ExpediaGroupEng?ref_src=twsrc%5Etfw"
                    width="320"
                    data-height="480">
                    Tweets by ExpediaGroupEng
                </a>
            </div>
        )
    }
}

export default TwitterTimeline;
