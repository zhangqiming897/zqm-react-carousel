import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import Carousel from "@/components/carousel";

const App = (): ReactElement => {
  return (
    <div>
      <Carousel 
        height = {600}
        
        />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
