import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        // load client module
        window.gapi.load('client:auth2', () => {
            // after module is loaded we have access to gapi.client.init
            window.gapi.client.init({ // init app
                clientId: '828823550980-cnejthjjjot14pcf43efga535j8sd67t.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                // get object ('GoogleAuth') with props and methods
                // which allow to work with authentication
                this.auth = window.gapi.auth2.getAuthInstance();
                // set initial state
                this.onAuthChange(this.auth.isSignedIn.get());
                // register a callback for a change in an authentication state
                // onAuthChange is called with a boolean flag - true or false
                // indicating whether user is signed in or not
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    // function receiving boolean flag
    // indicating whether user is signed in or not
    onAuthChange = isSignedIn => {
        // if user is signed in - call signIn() action creator
        // and pass user's Google Id
        if (isSignedIn) {
            // pass user's google id
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            // otherwise - signOut() action creator
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSignOutClick}
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSignInClick}
                >
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

/**
 * gapi object initially loads through script defined in index.html
 * When it first loads it has only one method: load.
 * With help of this method we can download additional
 * modules for this library to perform specific tasks.
 * In this case we load 'client:auth2' module.
 * 
 * The second parameter of load() is a callback function
 * which gets invoked when the 'client:auth2' loads into gapi.
 * So when client library is successfully loaded we need to initialize our app
 * with clientId generated at https://console.developers.google.com.
 * This callback function we pass in an object with clientId and scope properties.
 * 
 * After app is initialized we use getAuthInstance() to get a link
 * to the object with functions and properties 
 * (signIn(), signOut(), isSignedIn (has get() and listen() functions))
 * that we can use to manipulate the user's authentication status.
 * As window.gapi.client.init() returns a promise object we then()
 * to run some code after the app was initialized. In this code we get
 * a reference to 'GoogleAuth' object and save it to GoogleAuth instance.
 * 
 * isSignedIn prop on 'GoogleAuth' object has listen method
 * that takes in a callback function as its argument. This callback
 * is invoked every time the user's authentication status is changed.
 * 
 * When user clicks 'Google' button it invokes whether 'SignIn' or 'SignOut' method.
 * These methods changes the user's authentication status.
 * That causes onAuthChange method to be called as it's registered as a callback
 * and gets called every time when the user's authentication status changes.
 * 
 * All the process of changing the user's authentication status
 * is going through this.auth 'GoogleAuth' object with its methods
 * signIn() and signOut().
 */