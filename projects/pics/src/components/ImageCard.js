import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        // Create a reference to access DOM element
        // using React 'ref' system.
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // As downloading an image is asynchronous
        // we add a listener which lets us know
        // when an image loads
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }

    render() {
        const { urls, alt_description } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    src={urls.regular}
                    alt={alt_description}
                    ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;

// React 'ref' system gives access to a single DOM element
// rendered by a Component.
// 'Refs' are created in constructors.