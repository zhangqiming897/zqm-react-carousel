import React, { Component } from "react";
import ReactDOM from "react-dom";
import Carousel from "./carousel";

class App extends Component {
   render() {
     return <Carousel />
   }
}

ReactDOM.render(<App />, document.getElementById("root"));
