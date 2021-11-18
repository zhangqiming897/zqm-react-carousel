import React from "react";
import renderer from "react-test-renderer";
import Carousel from "../src/components/carousel/index";

describe('Carousel', ()=>{
  it('should render correctly', ()=>{
    expect(
      renderer.create(
        <Carousel />
      )
    ).toMatchSnapshot()
  })
})