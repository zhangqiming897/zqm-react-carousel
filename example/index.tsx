import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import Carousel from '@/index';

const App= (): ReactElement => {
  return <Carousel height={700} 
  prevIcon="icon-fanhui"
  nextIcon="icon-qianjin"
  configType="circle" />
};

ReactDOM.render(<App />, document.getElementById("root"));
