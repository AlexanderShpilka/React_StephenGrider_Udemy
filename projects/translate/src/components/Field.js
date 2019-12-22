import React from 'react';

// 1 - import Context object
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // 2 - hook up Context to Field component
  static contextType = LanguageContext;

  render() {
    // 3 - access/use value inside Context object
    const text = this.context.language === 'english' ? 'Name' : 'Naam';

    return (
        <div className="ui field">
          <label>{text}</label>
          <input/>
        </div>
    );
  }
}

export default Field;

/**
 * To hook up the LanguageContext object to Field component we're going to set up something called context type that is going to link Field component to the Context object. And then to actually reference the information that is inside of the Context object we're going to make use of the this.context property.
 */

/**
 * 'contextType' is a very special property name. The context stuff is going to work correctly only if property is called 'contextType'. When we make use of 'static' keyword we're adding a property to the class itself.
 */

/**
 * When we have added a reference of contextType to our Context object to our Field component our Field can now reference this context and get access to the data inside of that Context object.
 */
