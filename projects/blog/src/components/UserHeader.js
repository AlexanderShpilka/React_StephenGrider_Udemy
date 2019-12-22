import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        if (!this.props.user) {
            return null;
        }

        return (
            <div className="header">{this.props.user.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);

/**
 * 'mapStateToProps' doesn't not only get called with 'state' object out of the Redux store. It gets the second argument as well - referred to as 'ownProps'. 'ownProps' is a reference to the props that are about to be sent into Component.
 */