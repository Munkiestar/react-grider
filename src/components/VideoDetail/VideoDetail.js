import React from "react";

const VideoDetail = ({video}) => {

    if (!video) {
        return (
            <div className="ui segment">
                <div className="ui active transition visible dimmer">
                    <div className="content">
                        <div className="ui massive text loader">Loading</div>
                    </div>
                </div>
                <img
                    src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                    className="ui image"
                />
                <img
                    src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                    className="ui image"
                />
                <img
                    src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                    className="ui image"
                />
            </div>
        )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe title='video player' src={videoSrc}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;