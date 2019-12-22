import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import StreamForm from './StreamForm';
import { fetchStream, editStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id); // *
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.stream, 'title', 'description')} // **
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchStream, editStream }
)(StreamEdit);

/**
 * Inside props this component has such an objects: history, location, match. We only have access to these props specifically because the StreamEdit component inside App.js file is being rendered by a Route component. Because StreamEdit component is being rendered by Route component react-router-dom automatically is going to add in a bunch of different props to StreamEdit.
 * 
 * Inside props.match.params we see a param with the name of 'id' specifically because that is what we put after the colon inside of routing definition (App.js -> <Route path="/streams/edit/:id" component={StreamEdit} />).
 * 
 * We now know the exact ID of the stream that we are trying to edit any time that we click on 'edit' button.
 * 
 * mapStateToProps is called with two arguments. The first one is always our state object. The second argument is the ownProps and this is a reference to the props object that shows up inside StreamEdit component.
 * 
 * * With react-router each component needs to be designed to work in isolation (fetch its own data). If we don't do this and if we rely upon the user first going to page A and then over to page B, eventually a user is going to go straight to page B and the data that you might expect to have is not going to actually exist.
 */

 /**
  * ** When we export StreamForm it gets wrapped inside of reduxForm. We have StreamEdit that is showing StreamForm wrapped inside of that reduxForm helper. So when we pass props from StreamEdit down to StreamForm we are not actually passing props directly to our StreamForm component. Instead we are technically passing props to reduxForm, reduxForm then passes those props onto our component. There are some very special props that we can pass dowm into reduxForm wrapped component. One special propis 'initialValues'. If we pass some initialValues prop from StreamEdit down to reduxForm wrapped StreamForm it's going to provide some initial values to show inside of the text inputs inside of StreamForm. initialValues should be an object and if that object contains a 'title' and 'description' properties then those will be used as the initial values for our form. Value of 'title' property will be used for the initial value of Field with name of 'title'. The same for 'description'.
  * 
  * And with help of 'lodash' library we pick only 'title' and 'description' properties from stream object.
  */