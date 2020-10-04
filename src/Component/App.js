import React, { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

export class App extends Component {
  // States.
  state = { videos: [], selectedVideo: null };
  // Async call to Youtube API and passing list of videos to the state | Default selected video is the first from the list.
  onFormSubmit = async (term) => {
    const response = await youtube.get("search/", {
      params: { q: term },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  // Adding selected video to state.
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="content">
          <VideoDetail video={this.state.selectedVideo} />
          <div className="video-list">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
        <div className="footer">Copyrights @YouTube</div>
      </div>
    );
  }
}

export default App;
