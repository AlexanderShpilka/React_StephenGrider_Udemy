import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = 'Submit';

  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText}
      </button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);