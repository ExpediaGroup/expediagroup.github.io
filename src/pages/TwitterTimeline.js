import React, { Component } from 'react';

class TwitterTimeline extends Component {
    constructor(props) {
        super(props);
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
                    className="twitter-timeline"
                    href={this.props.twitterLink}
                    data-height="535">
                    Tweets by ExpediaGroupEng
                </a>
            </div>
        )
    }
}

export default TwitterTimeline;
