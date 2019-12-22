import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  const renderList = (resources) => {
    return resources.map((item) => <li key={item.id}>{item.title}</li>);
  };

  return (
      <ul>
        {renderList(resources)}
      </ul>
  );
};

export default ResourceList;

/*
* useEffect function is called every time Component is rendered. Every time a Component is rendered we are recreating that array (in useEffect function) and possibly putting a different value into the array. Between subsequent renders of our Component if the elements inside of that array are different the arrow function that we pass to useEffect is going to be called. */

/*
* First render: useEffect(() => {}, ['posts'])
* Second render: useEffect(() => {}, ['todos'])
* Different values in array, so arrow function is called */

/*
* First render: useEffect(() => {}, ['posts'])
* Second render: useEffect(() => {}, ['posts'])
* Same values, so arrow function is not called */

/*
* The second argument of useEffect function (array) controls whether or not this function (1st argument) is going to be invoked.
*
* useEffect(() => {})
* useEffect(() => {})
* arrow function is going to be called infinitely (bad scenario)
*
* useEffect(() => {}, [])
* useEffect(() => {}, [])
* arrow function will be called only one time when Component is initially rendered (componentDidMount analogy)
*
* useEffect(() => {}, [1])
* useEffect(() => {}, [1])
* arrow function will be called only one time when Component is initially rendered (componentDidMount analogy)
*
* useEffect(() => {}, ['hi'])
* useEffect(() => {}, [1])
* arrow function will be called as the value inside array was changed
*
* useEffect(() => {}, [{ color: 'red' }])
* useEffect(() => {}, [{ color: 'red' }])
* arrow function will be called as these two object are two different objects in memory
*
* useEffect(() => {}, [10, 10])
* useEffect(() => {}, [10, 10])
* arrow function won't be called as arguments are the same
*
* useEffect(() => {}, [10, 10])
* useEffect(() => {}, [10])
* arrow function will be called as arguments changed */

/*
* RULE!!!
* If we want to make a request with useEffect or do any type of asynchronous logic inside we have to define a second function and call the second function from within useEffect. */
