import React from 'react';

// create a Context object and provide a default value
// export default React.createContext('english');

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
        <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
          {this.props.children}
        </Context.Provider>
    );
  }
}

export default Context;

/**
 * The context system is all about communicating some information from a parent component down to a nested child. In order to communicate this information we're going to create something called a Context object. We can think of this Context object as being like a pipe where data goes through. So we have some data that is going to move from the top of the pipe and then it's going to flow through to the very bottom where it can then be consumed by some child component.
 */

/**
 * In total there are two ways that we can get information into a Context object. And there are two ways that we can get information out of Context object.
 */

/**
 * To get data into the Context object we can either set up something called a default value when our Context object is created. Or alternatively inside of our parent component we can create something called a Provider component and this Provider component can push information into the Context object.
 */

/**
 * Once we want to get some data out of the Context object we can either reference the this.context property inside of a nested child component. Or inside the nested child we can create a component called a Consumer.
 */

/**
 * The purpose of this file is to create a context and export it.
 */

/**
 * Besides others Context object has Provider and Consumer properties. They are React components.
 */
