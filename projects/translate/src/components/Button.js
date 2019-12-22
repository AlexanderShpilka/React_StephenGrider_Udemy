import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {({ language }) => this.renderSubmit(language)}
          </LanguageContext.Consumer>
        </button>
    );
  }

  render() {
    return (
        <ColorContext.Consumer>
          {color => this.renderButton(color)}
        </ColorContext.Consumer>
    );
  }
}

export default Button;

/**
 * The second way that we can consume data out of a pipe is by creating a Consumer component. The Consumer is created for us automatically when we create a new Context object.
 * When we're using a Consumer we don't have to specify a 'contextType' static property.
 *
 * Whenever we place a Consumer we always provide one argument to it or one child. This one child is always going to be a function. This function is going to be automatically called by the Consumer and it's going to be called with whatever current value is inside of pipe.
 *
 * That value is going to show up as the first argument inside of a function. So only inside this function we can get access to that value and use it.
 */

/**
 * Question about the Consumer is: why would we use this as opposed to just using this.context?
 *
 * The answer: we'll make use of Consumer any time that we want to get data out of multiple different Context objects inside of a single component.
 */
