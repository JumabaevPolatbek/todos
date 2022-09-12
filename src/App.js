import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    var arr = [];
    this.arr = arr;
    this.state = {
      todos: this.arr,
    };
    this.addNote = this.addNote.bind(this);
    this.checkNote = this.checkNote.bind(this);
    this.NeedToDo = this.NeedToDo.bind(this);
    this.DoneToDo = this.DoneToDo.bind(this);
  }
  addNote(e) {
    if (e.code === "Enter" && e.target.value !== "") {
      var note = {
        text: e.target.value,
        done: false,
      };
      this.arr.push(note);
      this.setState({
        todos: this.arr,
      });
      e.target.value = "";
    }
  }
  checkNote(e) {
    var id = e.target.parentElement.dataset.id;
    this.arr[id].done = e.target.checked;
    this.setState({
      todos: this.arr,
    });
  }
  NeedToDo({ todo, id }) {
    if (todo.done === false) {
      return (
        <div data-id={id}>
          <input type="checkbox" id={`note` + id} onClick={this.checkNote} />
          <label htmlFor={`note` + id}>{todo.text}</label>
        </div>
      );
    }
  }
  DoneToDo({ todo, id }) {
    if (todo.done === true) {
      return (
        <div data-id={id}>
          <input
            type="checkbox"
            id={`note` + id}
            onClick={this.checkNote}
            defaultChecked
          />
          <label htmlFor={`note` + id}>{todo.text}</label>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="container">
        <input type="text" onKeyUp={this.addNote} placeholder="Добавить" />
        <div>
          <h3>Нужно сделать</h3>
          {this.state.todos.map((todo, index) => {
            return <this.NeedToDo todo={todo} key={index} id={index} />;
          })}
        </div>
        <div>
          <h3>Выполнено</h3>
          {this.state.todos.map((todo, index) => {
            return <this.DoneToDo todo={todo} key={index} id={index} />;
          })}
        </div>
      </div>
    );
  }
}
export default App;
