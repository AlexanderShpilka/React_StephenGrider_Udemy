import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div
            className="ui dimmer modals visible active"
            onClick={props.onDismiss} // *
        >
            <div
                className="ui standard modal visible active"
                onClick={e => e.stopPropagation()} // **
            >
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;

/**
 * With portals we don't have to stick with type of component heirarchy where everything is a child if div with id of 'root'. Instead when we use a portal we can essentially say: StreamDelete, we want you to render a modal component. But we don't want to have you render a modal as a direct child. Instead, try to render the modal component but make it a child of some other element in our HTML hierarchy, such as the body element.
 * 
 * A portal allows us to render some element not as a direct child. We can instead render that component as a child of some other element inside our HTML - most commonly the body.
 */

/**
 * When we create a portal the return value of our component is going to change a little bit. Function 'createPortal' is going to take two arguments. The first argument is going to be some blob of jsx - something that we want to show on the screen. The second argument we are going to provide a reference to the element that we want to render this portal into.
 * 
 * If we attach this blob of jsx to the body element then the portal is going to replace all the current content in the body. So instead what we usually do when we create a portal is we will go into our index.html file and we'll create a new div with some id and we'll target that div to place our modal into.
 */

/**
 * * Go to the root when clicking on the grey background.
 * ** Prevent going to the root when clicking inside modal window itself.
 */