import React, { Component } from "react";
import "./SearchBar.css";

export class SearchBar extends Component {
  // Initialisin state variable.
  state = { term: "" };
  // Set state when input changes.
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  // Passing the search term to the parent component
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  // Render method
  render() {
    return (
      <div className="search-bar">
        <form className="form" onSubmit={this.onFormSubmit}>
          <h3>
            <span>Video</span> Search
          </h3>

          <input
            type="text"
            className=""
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
