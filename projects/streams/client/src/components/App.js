import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" component={StreamCreate} />
                        <Route path="/streams/edit/:id" component={StreamEdit} />
                        <Route path="/streams/delete/:id" component={StreamDelete} />
                        <Route path="/streams/:id" component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;

/**
 * localhost:3000               --->    /
 * localhost:3000/pageone       --->    /pageone
 * localhost:3000/posts/5       --->    /posts/5
 * localhost:3000/tweets/new    --->    /tweets/new
 * twitter.com/tweets/new       --->    /tweets/new
 * airbnb.com/listings/spain    --->    /listings/spain
 * google.com/search            --->    /search
 * 
 * When we created our application and loaded it up inside a browser we created an instance of BrowserRouter component. The BrowserRouter internally created an object on its own called 'history'. This 'history' object is going to look at the url inside address bar and it's going to extract just that portion of the url that ReactRouter cares about - just anything after the domain name and the port. The 'history' object is then going to communicate that path over to the BrowserRouter. And then BrowserRouter is going to communicate that path down to Route components. The Route components are then going to decide either to show themselves or hide themselves depending on the path inside of the url that the user is visiting and the path property that was created for Route component.
 * 
 * A single url can be matched by different Routes inside our application.
 * 
 * How ReactRouter decides what Routes to show? The ReactRouter takes an extracted path from url (part after domain name and port) and checks whether it contains path from path property of Route component.
 * 
 * !!! Why NOT use <a> tags inside React app !!!
 * If we put <a> tags inside app and click on them we make a brans new request to some outside server that is going to return a brand new html document. During that process the normal operation inside browser is to dump all variables in memory, akk JS data get entirely dumped. In context React/Redux app any data that was loaded up, any data user typed in - any data is going to be wiped.
 * 
 * Instead of <a> tags Link component should be used from 'react-router-dom' module.
 * 
 * How ReactRouter works?
 * 
 * 1. User wants to navigate to another page in our app.
 * 2. User clicks a 'Link' tag.
 * 3. ReactRouter prevents the browser from navigating to the new page and fetching new index.html file.
 * 4. URL still changes.
 * 5. 'History' sees updated URL, takes URL and sends it to BrowserRouter.
 * 6. BrowserRouter communicates the URL to Route components.
 * 7. Route components rerender to show new set of components.
 * 
 * **************************************************************************************
 * 
 * Because we created our own history object we switched from BrowserRouter to just Router as a top component. We need to pass our own history object to that Router through 'history' prop.
 */

/**
 * Switch - is going to look at all these different Routes and it's only going to show one og these given Routes for any path that we go to.
 */