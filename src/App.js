import React, { Component } from "react";
import shortid from "shortid";
import "./App.css";
// import Counter from "./Components/Counter/Counter";
// import Dropdown from "./Components/Dropdown/Dropdown";
import TodoList from "./Components/TodoList";
import TodoEditor from "./Components/TodoEditor";
// import Form from "./Components/Form/Form";
import Filter from "./Components/TodoEditor/Filter";

class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "1. Выучить React", completed: false },
      { id: "id-2", text: "2. Разобраться с React роутер", completed: true },
      { id: "id-3", text: "3. Пережить Redux", completed: false },
    ],
    filter: "",
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  toggleCompleted = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  changeFilter = (evt) => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    const normalizeFilterText = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizeFilterText)
    );
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    const { todos, filter } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    const fiteredTodos = this.getFilteredTodos();

    return (
      <div className="App">
        {/* <Counter initialValue={1} />
        <Dropdown /> */}
        <TodoEditor onSubmit={this.addTodo} />

        <Filter filter={filter} onChange={this.changeFilter} />

        <h1>Состояние компонента</h1>
        <div>
          <p>Общее количество: {todos.length}</p>
          <p>Количество выполненых: {completedTodos}</p>
        </div>
        <TodoList
          todos={fiteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {/* <Form formSubmit={this.formSubmitHandler} /> */}
      </div>
    );
  }
}

export default App;
