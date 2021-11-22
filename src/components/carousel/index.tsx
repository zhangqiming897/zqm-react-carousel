// 轮播图组件
import React, { ReactElement, useState, useEffect } from 'react';
import styles from './carousel.module.less';


interface imgListType {
    state: number
}

const Carousel = (): ReactElement => {
    const imgList: Array<imgListType> = [
        {
            state: 1
        },
        {
            state: 2
        },
        {
            state: 3
        },
        {
            state: 4
        }
    ];
    let imgSize: number = imgList.length;
    let newImgList: Array<imgListType> = [imgList[imgSize - 1]].concat(imgList).concat([imgList[0]]);
    let newImgSize: number = newImgList.length;
    let transitionTime: number = 500;

    let [controls, setControls] = useState(1);
    let [carouselImg, setCarouselImg] = useState(newImgList);
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

    // 按钮切换
    const btnConvert = (convertIndex: number) => {
        setAnimate({ transform: `${100 * convertIndex}%`, transition: `${transitionTime / 1000}s` })
        setControls(convertIndex);
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.carouseul} style={{ width: `${100 * newImgSize}%` }}>
                {
                    carouselImg.map((item, index) => {
                        return <div className={styles.carouseli} key={index} style={{ width: `calc(100% / ${newImgSize})`, transform: `translateX(-${animate.transform})`, transition: animate.transition }}>
                            <div className={styles.carouseText}>{item.state}</div>
                        </div>
                    })
                }
            </div>
            <div className={styles.carouselSzul}>
                {
                    imgList.map((item, index) => {
                        return <div className={`${styles.carouselSzli} ${item.state == Math.abs(controls % imgSize ? controls % imgSize : imgSize) ? styles.carouselSzliActive : null}`} key={index} onClick={() => btnConvert(item.state)} />
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