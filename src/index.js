import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/carousel";

const App = () => {
    return (
      <div>
        <Carousel />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById("root"));
