import React, { Component } from "react";
import "./search-box.styles.css";

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className="search-box monsters-search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
