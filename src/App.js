import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import {createStore } from "redux";

const initialState = {tech : "Redux"};
const store = createStore(reducer,initialState);

class App extends Component {
  state = store.getState();
  render() {
    return <HelloWorld tech={this.state.tech} /> ;
  }
}

export default App;
