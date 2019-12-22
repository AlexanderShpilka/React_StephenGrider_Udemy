import { createBrowserHistory } from 'history';

export default createBrowserHistory();

/**
 * When a user created a stream we want to programmatically navigate user to root route. Programmatic navigation with react-router-dom sometimes is easy. But sometimes it's not easy. We are in one of the scenarios where it is not super easy to do programmatic navigation.
 * 
 * Internally the BrowserRouter creates the history object that keeps track of the address bar in a browser. Any time that address changes the history object is going to communicate that change over to the BrowserRouter. The history object is not only about watching the address bar. The history object also has the ability to change the address bar as well. And that's how we're going to do programmatic navigation.
 * 
 * Any time that the BrowserRouter renders some component the BrowserRouter passes that history object as a prop to your component. So inside of any component that gets rendered directly by react-router it's going to receive this history object. And so this component could easily trigger some navigation inside of it.
 * 
 * But in our case we are not trying to do navigation from a component. We are trying to do navigation from an action creator. Getting access to this history object inside of an action creator or any non-react component is what is a little bit challenging. It is hard for us to get a reference to that history object.
 * 
 * One very simple solution is to pass the history object from a component to an action creator any time an action creator is called inside component. This is kind of a pain because it means that every time we want to do programmatic navigation we would have to write our action creators to be called with a history object and we would make sure that all of our components called the action creator with the history object as well. It is not super ideal.
 * 
 * We are going to use an alternative solution: we are going to create the history object instead of BrowserRouter inside of a dedicated file inside of our project. Then any time that we want to get access to that history object we're just going to import that file. That is how we get easy control over history object - we created ourselves as opposed to allowing react-router to create it.
 * 
 * Because we are now creating our own history object we are no longer going to create a BrowserRouter as the top of our component hierarchy. Instead we are going to create a plain Router. We create a plain Router when we create a history object ourselves.
 */