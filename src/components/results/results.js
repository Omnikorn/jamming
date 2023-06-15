import React, { Component } from "react";
import "./results.css"
import TrackList from "../tracklist/tracklist";

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} />
            </div>
        )
    }
}

export default SearchResults