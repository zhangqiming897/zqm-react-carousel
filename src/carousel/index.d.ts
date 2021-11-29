import { ReactElement } from 'react';
interface propsInfoType {
    imgArr?: Array<string>;
    height?: number;
    transitionTime?: number;
}
declare const Carousel: (props: propsInfoType) => ReactElement;
export default Carousel;
