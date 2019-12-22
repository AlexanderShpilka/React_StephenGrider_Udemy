export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};

/**
 * Rules of Reducers:
 * 
 * 1. Must return any value besides 'undefined'.
 * 
 * 2. Produces 'state', or data to be used inside of your app using only previous state and the action.
 * 
 * When reducers gets called for the very first time (automatically when the app first starts up) it allows them to produce some app default state. The first time reducer gets called during initialization process it's going to receive two arguments: the first argument is going to have a value of 'undefined' (that is why we put some default value for the first argument); the second argument will be some initialization 'action' object. Then it is up to the reducer to take these two arguments and return some initial state value. 
 * 
 * The next time the reducer gets called the first argument is no longer going to be equal to the value 'undefined' - instead it's going to be whatever the reducer returned the last time it was ran.
 * 
 * 3. Must not return reach 'out of itself' to decide what value to return (Reducers are pure). Not allowed for the reducer: API requests, reading files from the drive, waiting for some input from a user, extracting data from a DOM. The only thing the reducer is allowed to do is to make computations based on previous state and the action objects and return new state.
 * 
 * 4. Must not mutate its input 'state' argument. We need to return a new state object from a reducer. Only in that case Redux will inform our application about changes in state. And that will cause our React application to rerender.
 * */