import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import Carousel from "@/components/carousel";

const App = (): ReactElement => {
  return (
    <div>
      <Carousel
        height={600}
        // imgArr={[
        //   'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F19100122420C335-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640416123&t=8534c3648b0315ca366121944bee6447',
        //   'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2F92%2F69%2F9d%2F92699dfebec7af164c81596afe4ff735.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640416123&t=0ef32c0611752bf849c1d9c6cce7e2fd',
        //   'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640417101&t=6eeda26db7241d1e29e89752b079df5f'
        // ]}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
