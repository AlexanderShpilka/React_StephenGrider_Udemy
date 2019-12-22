import _ from 'lodash';

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(userId => {
        dispatch(fetchUser(userId));
    });
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};


// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });

/**
 * Asynchronous action creator takes some amount of time for it to get its data ready to go.
 * 
 * If we want to have async action creator inside Redux app we have to install something called a middleware. It's going to allow to deal with async action creators.
 * 
 * In case of using middleware when an action is dispatched it first goes to this middleware layer and only after it an action get sent to the reducers.
 * 
 * Middleware - is a plain JS function that gets called with every action we dispatch. It has the ability to STOP, MODIFY, or otherwise mess around with actions.
 * 
 * Rules with Redux Thunk:
 * 1. Action creators can return action objects or
 * 2. Action creators can return functions
 * 3. If an action object gets returned, it must have a type
 * 4. If an action object gets returned, it can optionally have a 'payload'
 * 
 * If an Action creator returns a function this function gets called by the Redux Thunk.
 */