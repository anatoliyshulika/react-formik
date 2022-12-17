import React, { Component } from "react";

export default class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = (evt) => {
    this.setState({
      message: evt.currentTarget.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Создать</button>
      </form>
    );
  }
}
