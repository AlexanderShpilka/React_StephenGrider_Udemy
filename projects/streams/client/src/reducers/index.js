import { combineReducers } from 'redux';
// We use form reducer provided by redux-form module
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    // we have to assign formReducer to a very particular key
    // inside of combineReducers call
    // we are required to wire it up to a key of 'form'
    form: formReducer,
    streams: streamReducer
});