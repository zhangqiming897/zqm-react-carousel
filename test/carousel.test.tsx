import React from "react";
import renderer from "react-test-renderer";
import Carousel from "../src/components/carousel";

test("轮播图插件", () => {
  const component = renderer.create(<Carousel />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
