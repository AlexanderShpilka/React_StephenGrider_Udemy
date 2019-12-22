import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';
import streams from '../apis/streams';
import history from '../history';

export const signIn = userId => {
    return { type: SIGN_IN, payload: userId };
};

export const signOut = () => {
    return { type: SIGN_OUT };
};

export const createStream = formValues => {
    return async (dispatch, getState) => { // *
        const { userId } = getState().auth;

        // returns an object
        const response = await streams.post('/streams', { ...formValues, userId });

        dispatch({
            type: CREATE_STREAM,
            payload: response.data
        });

        // do programmatic navigation to the root of the app
        history.push('/');
    };
};

export const fetchStreams = () => {
    return async dispatch => {
        // returns an array of objects
        const response = await streams.get('/streams');

        dispatch({
            type: FETCH_STREAMS,
            payload: response.data
        });
    };
};

export const fetchStream = id => {
    return async dispatch => {
        // returns an object
        const response = await streams.get(`/streams/${id}`);

        dispatch({
            type: FETCH_STREAM,
            payload: response.data
        });
    };
};

export const editStream = (id, formValues) => {
    return async dispatch => {
        // returns an object
        // const response = await streams.put(`/streams/${id}`, formValues);
        const response = await streams.patch(`/streams/${id}`, formValues); // **

        dispatch({
            type: EDIT_STREAM,
            payload: response.data
        });

        history.push('/');
    };
};

export const deleteStream = id => {
    return async dispatch => {
        // returns nothing
        await streams.delete(`/streams/${id}`);

        dispatch({
            type: DELETE_STREAM,
            payload: id
        });

        history.push('/');
    };
};

/**
 * * When we return a function from an action creator the function gets called by redux-thunk with two arguments: dispatch and getState function which allows us to reach into Redux store and pull out some piece of information.
 */

/**
 * ** When we make put request the actual thing that happens is whatever properties you put inside the body of that request are going to replace all the properties inside of the record that you are trying to update. In this case userId (passed when stream is created) will be removed from the record on the API. The one property that is usually immute is the 'id' property.
 * 
 * If we really want to just update some properties we are actually supposed to use a different type of request called a PATCH. So that patch request we are going to pass some properties inside the body of the request that are supposed to be updated on the API.
 */