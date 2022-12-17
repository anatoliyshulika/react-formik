import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    isVisible: false,
  };

  toggle = () => {
    this.setState((currentState) => ({
      isVisible: !currentState.isVisible,
    }));
  };

  //   show = () => {
  //     this.setState({
  //       isVisible: true,
  //     });
  //   };

  //   hide = () => {
  //     this.setState({
  //       isVisible: false,
  //     });
  //   };

  render() {
    return (
      <div className="Dropdown">
        {/* <button type="button" className="Dropdown__toggle" onClick={this.show}>
          Show
        </button>
        <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Hide
        </button> */}
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.isVisible ? "HIDE" : "SHOW"}
        </button>

        {this.state.isVisible && (
          <div className="Dropdown__menu">Dropdown menu</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
