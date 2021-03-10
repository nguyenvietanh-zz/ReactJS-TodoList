import "./App.css";
import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskName: "", tasks: [] };
  }

  render() {
    return (
      <div className="App">
        <table border="1" cellSpacing>
          <thead>
            <tr>
              <th>Task Name 1</th>
              <th>Task Name 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <TodoList name="Mission 1" />
              </td>

              <td>
                <TodoList name="Mission 2" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
