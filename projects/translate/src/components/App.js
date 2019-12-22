import React from 'react';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  render() {
    return (
        <div className="ui container">
          <LanguageStore>
            <LanguageSelector />

            <ColorContext.Provider value="primary">
              <UserCreate/>
            </ColorContext.Provider>
          </LanguageStore>
        </div>
    );
  }
}

export default App;

/**
 * If we want to change the value inside of Context object we have to create a component that is going to act as a source of information - App component in our case. App component knows what currently selected language is. So we want to communicate some information from the App component into the Context object. To do so we're going to create something called a Provider component. We're going to use this Provider component to update the value inside of our Context object. This Provider should wrap a component that is going to make use of a data from Context object. When we render LanguageContext.Provider (or ColorContext.Provider) we're going to assign a 'value' prop - a very special property name. A value that we'll assign to prop 'value' will be used to update Context object.
 */

/**
 * Each separate use of Context.Provider creates a new, separate 'pipe' of information. E.g. if we wrap two different components with the same Context.Provider object but with different values assigned to 'value' prop then nested components will have different values from the Context object.
 */

/**
 * If some component needs to consume data from different Context objects it's totally fine to wrap this component with different Context.Provider components - one inside another. The order doesn't matter.
 */
