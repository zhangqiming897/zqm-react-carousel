import React from "react";
import ReactDOM from "react-dom";
import Carousel from "@/components/carousel";

const App = () => {
  return <Carousel height={600} />
}

ReactDOM.render(<App />, document.getElementById("root"));
