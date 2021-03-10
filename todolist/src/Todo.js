import "./Todo.css";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: props.id, value: props.value, done: props.done };
  }

  completeTask = () => {
    this.setState({ done: true });
    this.props.completeTask(this.props.id);
  };

  render() {
    let checkDone = "";
    if (!this.state.done) {
      checkDone = (
        <img
          src="./assets/024_034_check_tick_complete_alright_yes_ok-512.png"
          alt="Done"
          width="20"
          style={{ cursor: "pointer" }}
          title="Bấm để hoàn thành"
          onClick={() => this.completeTask(this.props.id)}
        />
      );
    }
    return (
      <div className="todo aligned">
        {checkDone}

        <img
          src="./assets/iconfinder_cross_4115230.png"
          alt="Done"
          width="20"
          style={{ cursor: "pointer" }}
          title="Bấm để xoá"
          onClick={() => this.props.deleteTask(this.props.id)}
        />
        <span className={this.state.done ? "done" : ""}>
          {this.state.value}
        </span>
      </div>
    );
  }
}
export default Todo;
