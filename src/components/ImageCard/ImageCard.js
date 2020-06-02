import React, {Component} from "react";

class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        }

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.imageRef.current.clientHeight)
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        let imgHeight = this.imageRef.current.clientHeight;
        const spans = Math.ceil(imgHeight / 10) + 1;

        this.setState({
            spans
        })
    }

    render() {

        const {description, urls} = this.props.slikaCard;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={description}
                />
            </div>
        )
    }
}

export default ImageCard;