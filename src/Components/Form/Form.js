import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    license: false,
  };

  // handkeNameChange = (evt) => {        Есть такой вариант обработки событий, вешать на каждый инпут формы
  //   this.setState({                    А можно сделать один обработчк
  //     name: evt.currentTarget.value,
  //   });
  // };

  // handkeTagChange = (evt) => {
  //   this.setState({
  //     tag: evt.currentTarget.value,
  //   });
  // };

  handkeChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.formSubmit(this.state);
    this.reset();
  };

  handleLicenseChange = (evt) => {
    this.setState({
      license: evt.currentTarget.checked,
    });
    console.log(evt.currentTarget.checked);
  };

  reset() {
    this.setState({ name: "", tag: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handkeChange}
          ></input>
        </label>
        <label>
          Прозвище
          <input
            name="tag"
            type="text"
            value={this.state.tag}
            onChange={this.handkeChange}
          ></input>
        </label>
        <p>Ваш уровень</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handkeChange}
            checked={this.state.experience === "junior"}
          ></input>
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="midl"
            onChange={this.handkeChange}
            checked={this.state.experience === "midl"}
          ></input>
          Midl
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handkeChange}
            checked={this.state.experience === "senior"}
          ></input>
          Senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          ></input>
          Согласен с условиями
        </label>

        <button type="submit" disabled={!this.state.license}>
          Отправить
        </button>
      </form>
    );
  }
}
