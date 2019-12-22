import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div
                    className="item"
                    key={song.title}
                >
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = state => {
    return { songs: state.songs };
};

export default connect(
    mapStateToProps,
    { selectSong }
)(SongList);

/* The objects returned from 'mapStateToProps' is going to show up as props inside component: this.props === { songs: state.songs }. 

'selectSong' - is an action creator. When we call it, it's going automatically to take an action that gets returned and send it into Redux 'dispatch' function. We have to pass an action creator to 'connect' function and only then call it inside component: this.props.selectSong(). Every time we call an action creator the 'mapStateToProps' is invoked with the new state. 

By passing an action creator into 'connect' function whenever we call 'this.props.actionCreator' the connect function is going automatically take an action that gets returned and throw it into 'dispatch' function for us. */