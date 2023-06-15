import React, { Component } from "react";
import "./playlist.css"
import TrackList from "../tracklist/tracklist";


class Playlist extends Component {
    render() {
        return (
            <div className="Playlist">
                <input value={this.props.playlistName} />
                <TrackList tracks={this.props.playlistTracks}/> 
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist