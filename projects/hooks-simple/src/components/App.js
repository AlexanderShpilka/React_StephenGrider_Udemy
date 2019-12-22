import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [ resource, setResource ] = useState('posts');
  // const [ counter, setCounter ] = useState(0);

  return (
      <div>
        <UserList />
        <div>
          <button onClick={() => setResource('posts')}>Posts</button>
          <button onClick={() => setResource('todos')}>Todos</button>
        </div>

        <ResourceList resource={resource} />
      </div>
  );
};

export default App;

/*
* The Hooks system in React ads some functionality to a functional component.
* useState function - allows to use component-level state
* useEffect - allows to use 'lifecycle methods'
* useContext - allows to use the Context system
* useRef - allows to use the ref system.
*
* These functions can be imported directly from react module.
*
* useState function returns an array which we then destructure into two variables. The 1st variable contains the present value of this piece of state. The 2nd variable contains function to call when we want to update our state (and rerender). It is equivalent to calling setState inside of a class bases component. When we call useState we pass an initial value for this piece of state.
*
* resource: this.state.resource in class based component.
* setResource: this.setState({ resource: 'posts' })
* useState('posts'): state = { resource: 'posts' }
*
* In this case we make use of only one property in 'state' object. If we need to have 2nd prop in the state then we need to repeat the operation one more time. */
