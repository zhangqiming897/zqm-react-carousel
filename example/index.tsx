import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import Carousel from '@/carousel';

const App= (): ReactElement => {
  return <Carousel height={600} />
};

ReactDOM.render(<App />, document.getElementById("root"));