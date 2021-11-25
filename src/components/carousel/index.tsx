// 轮播图组件
import React, { ReactElement, useState } from 'react';
import styles from './carousel.module.less';

interface imgListType {
    state: number,
    img?: string
}

interface propsInfoType {
    imgArr?: Array<string>,
    height?: number,
    transition?: number
}

const Carousel = (props: propsInfoType): ReactElement => {

    // 定义props
    const { imgArr, height, transition } = props;

    // 图片高度设置
    const imgHeight: number = height ? height : 500;

    // 图片展示设置
    const imgList: Array<imgListType> = imgArr ?
        imgArr.map((item, index) => { return { state: index + 1, img: item } })
        : new Array(3).fill(1).map((item, index) => { return { state: index + 1 } })
    const imgSize: number = imgList.length;

    // 图片无缝切换设置
    const newImgList: Array<imgListType> = [imgList[imgSize - 1]].concat(imgList).concat([imgList[0]]);
    const newImgSize: number = newImgList.length;
    const transitionTime: number = transition ? transition : 500;

    // 声明状态属性
    let [controls, setControls] = useState(1);
    let [animate, setAnimate] = useState({ transform: '100%', transition: '' });

    // 返回
    const prevFunc = () => {
        let prevStep: number = controls ? (controls - 1) % newImgSize : newImgSize - 1;
        setAnimate({ transform: `${100 * prevStep}%`, transition: `${transitionTime / 1000}s` });
        if (prevStep == 0) {
            setTimeout(() => {
                setAnimate({ transform: `${100 * imgSize}%`, transition: '' })
            }, transitionTime)
        };
        return prevStep == 0 ? setControls(imgSize) : setControls(prevStep);
    }

    // 前进
    const nextFunc = () => {
        let nextStep: number = (controls + 1) % newImgSize;
        setAnimate({ transform: `${100 * nextStep}%`, transition: `${transitionTime / 1000}s` });
        if (nextStep == newImgSize - 1) {
            setTimeout(() => {
                setAnimate({ transform: `100%`, transition: '' });
            }, transitionTime)
        }
        return nextStep == newImgSize - 1 ? setControls(1) : setControls(nextStep);
    }

    // Tab切换
    const tabConvert = (convertIndex: number) => {
        setAnimate({ transform: `${100 * convertIndex}%`, transition: `${transitionTime / 1000}s` })
        setControls(convertIndex);
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.carouseul} style={{ height: `${imgHeight}px`, width: `${100 * newImgSize}%` }}>
                {
                    newImgList.map((item, index) => {
                        return <div className={styles.carouseli} key={index} style={{ width: `calc(100% / ${newImgSize})`, transform: `translateX(-${animate.transform})`, transition: animate.transition }}>
                            {
                                item.img ? <div className={styles.carouselImg}><img src={item.img} /></div> : <div className={styles.carouseText}>{item.state}</div>
                            }
                        </div>
                    })
                }
            </div>
            <div className={styles.carouselSzul} style={{ left: `calc(50% - ${82 * imgSize}px / 2)` }}>
                {
                    imgList.map((item, index) => {
                        return <div className={`${styles.carouselSzli} ${item.state == Math.abs(controls % imgSize ? controls % imgSize : imgSize) ? styles.carouselSzliActive : null}`} key={index} onClick={() => tabConvert(item.state)} />
                    })
                }
            </div>
            <div className={styles.carouselCz}>
                <p onClick={prevFunc}>返回</p>
                <p onClick={nextFunc}>前进</p>
            </div>
        </div>
    )
}

export default Carousel;