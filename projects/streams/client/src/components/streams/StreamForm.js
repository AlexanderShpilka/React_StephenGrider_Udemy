 import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    // takes in an object from Field component
    // gets args every time Field is rendered
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                {/* take all props of input
                and add them as props to the input */}
                <input {...input} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    };

    // receives object with form input values
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form
                className="ui form error"
                // take handleSubmit() provided by redux-form
                // and call it passing our own onSubmit() handler
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field
                    name="title" // required
                    component={this.renderInput}
                    label="Enter Title"
                />
                <Field
                    name="description" // required
                    component={this.renderInput}
                    label="Enter Description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

// will be called when component first rendered on the screen
// and every time a user interacts with a form
const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'streamForm', // value can be any string (should describe the purpose of the form)
    validate
})(StreamForm);

/**
 * reduxForm - function that takes configuration object and returns a new function; use it to wrap your form component and bind user interaction to dispatch of Redux actions.
 * 
 * <Field /> - component that lives inside your wrapped form component; use it to connect the input components to the redux-form logic.
 */

/**
 * When the component is wrapped with reduxForm it receives additional props and methods (handleSubmit), which can be accessed by this.props.
 * 
 * Every time form gets submitted handleSubmit is invoked. Internally this function takes event object and calls preventDefault on it (event.preventDefault()). So we don't have to call it on our own. Instead our custom onSubmit receives all the values existed inside input fields.
 */

/**
 * Form gets validated every time user somehow interacts with the form. For this goal redux-form is going to call function called 'validate'. We need to define this validate() function. This function is going to be called with all the current values in the form. validate() must be defined outside Component.
 * 
 * If all values are valid we need to return an empty object from validate().
 * If value is invalid we need to return an object where property ia a NAME of a Field and some text indicating an error as a value ( errors = { title: 'You must enter a title' }).
 * 
 * To wire up this validate() function we need to pass it into config object for reduxForm function.
 * 
 * If redux-form sees that there is a match between a NAME property on Field component and property on object returned from validate() - then redux-form takes an error message from 'errors' object and passes it to renderInput(). The error message can then be found on error prop of meta object.
 * 
 * If at least one field is not valid the form won't be submitted.
 */

/**
 * Field is a react component. 'reduxForm' - is a function that is going to have the same functionality as a 'connect' function from 'react-redux' module. 'reduxForm' accepts an object with parameters.
 * 
 * When component and redux-form are wired up through reduxForm function the component starts to receive properties from the module. All these additional methods are part of the automatic system that is going to be used to get form values into a DOM element and then get changes back out and update Redux form reducer.
 * 
 * We make use of the Field component any time that we want to show a field to a user. A Field is a some type of input e.g. checkbox, radio, text, dropdown. Field component requires some number of props. A 'name' prop is always required.
 * 
 * The Field component doesn't know how to show an actual form element. In order to tell this Field how to show some text input we have to assign a prop to it called 'component'. Component might be either a React component or a function. These component or a function needs to return some element that is goiong to be shown on a screen.
 * 
 * In order to turn the input returned from the renderInput function - any time the Field call renderInput it'g going to pass some number of arguments to it.
 * 
 * Any time we add props to Field component 'redux-form' passes them through the object with properties (formProps).
 */