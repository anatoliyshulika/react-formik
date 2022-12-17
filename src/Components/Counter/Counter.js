import React, { Component } from "react";
import Controls from "./Controls/Controls";

class Counter extends Component {
  static defaultProps = {
    //А так объявляются значения по умолчанию для пропсов, если ничего не передали.
    initialValue: 0,
  };
  //   constructor() {            Сейчас этот синтаксис с конструктором считается устаревшим
  //     super();                 появился бабел в котором это все описано и он сам

  //     this.state = {           транспилирует это в такую запись. А сейчас надо писать
  //       value: 5,              так как показано ниже.
  //     };
  //   }

  state = {
    // При вызове класса в АПП можно сюда передать какие-то значения через пропсы
    value: this.props.initialValue,
  };

  hendleIncrement = () => {
    // this.setState({  Это просто йобаный пиздец, такой записью можно только
    //   value: 10,     просто перезаписать значение, просто новое. А чтобы
    // });              увеличить существующее сейчас будет ниже.
    this.setState((prevState) => {
      // А вот здесь теперь этот йобаный пиздец на вход колбэка в виде prevState
      // получает текущее состояние свойства state, то есть ты его хоть хуем
      // назови, а придет state. И таким образом мы можем перезаписать значение
      return {
        value: prevState.value + 1,
      };
    });
  };

  hendleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        {/* <div>
          <button type="button" onClick={this.hendleIncrement}>
            +1
          </button>
          <button type="button" onClick={this.hendleDecrement}>
            -1
          </button>
        </div> */}
        <Controls
          onIncrement={this.hendleDecrement}
          onDecrement={this.hendleIncrement}
        />
      </div>
    );
  }
}

export default Counter;
