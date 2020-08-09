import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  state = {
    name: "Parth"
  };
  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          defaultValue="Name"
          onChange={this.nameChangeHandler}
        />
        <h1>Hello {this.state.name}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
