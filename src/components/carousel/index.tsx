// 轮播图组件
import React, { ReactElement, useState, useEffect } from 'react';
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
    const { imgArr, height, transition }: propsInfoType = props;

    // 图片高度设置
    const imgHeight: number = height ? height : 500;

    // 图片展示设置
    const imgList: Array<imgListType> = imgArr ?
        imgArr.map((item, index) => { return { state: index + 1, img: item } })
        : new Array(4).fill(1).map((item, index) => { return { state: index + 1 } })
    const imgSize: number = imgList.length;

    // 图片无缝切换设置
    const newImgList: Array<imgListType> = [imgList[imgSize - 1]].concat(imgList).concat([imgList[0]]);
    const newImgSize: number = newImgList.length;
    const transitionTime: number = transition ? transition : 500;
    const imgDelayTime: number = 3000;

    // 声明状态属性
    let [controls, setControls] = useState(1);
    let [animate, setAnimate] = useState({ transform: '100%', transition: '' });

    // 生命周期
    useEffect(() => {
        // 自动轮播事件
        const dyamicCarousel = () => {
            const getControls = (controls: number) => {
                return controls % newImgSize == 0 ? 2 : controls % newImgSize;
            }
            setControls((controls) => controls ? getControls(controls + 1) : newImgSize - 1);
        }

        // 设置定时器
        let interval: NodeJS.Timer = setInterval(dyamicCarousel, imgDelayTime);

        // 监听鼠标移入移出事件
        let setListenMouser: Element = document.getElementsByClassName(`${styles.carousel}`)[0];
        // 移入
        setListenMouser.addEventListener('mouseover', () => { clearInterval(interval) });
        // 移出
        setListenMouser.addEventListener('mouseout', () => { interval = setInterval(dyamicCarousel, imgDelayTime) });

        return () => clearInterval(interval);
    }, [])

    // 轮播事件响应
    useEffect(() => {
        setAnimate({ transform: `${100 * controls}%`, transition: `${transitionTime / 1000}s` });
        switch (controls) {
            case newImgSize - 1: setTimeout(() => { setAnimate({ transform: `100%`, transition: '' }) }, transitionTime); break;
            case 0: setTimeout(() => { setAnimate({ transform: `${100 * (newImgSize - 2)}%`, transition: '' }) }, transitionTime); break;
            default: break;
        }
    }, [controls])

    // 返回
    const prevFunc = () => {
        let prevStep: number = (controls - 1) % newImgSize;
        switch(prevStep) {
            case imgSize: setControls(0); break;
            case -1: setControls(imgSize - 1); break;
            default: setControls(prevStep); break;
        }
    }

    // 前进
    const nextFunc = () => {
        let nextStep: number = (controls + 1) % newImgSize;
        switch(nextStep) {
            case 1: setControls(newImgSize -1); break;
            case 0: setControls(2); break;
            default: setControls(nextStep); break;
        }
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
                        return <div className={`${styles.carouselSzli} ${item.state == Math.abs(controls % imgSize ? controls % imgSize : imgSize) ? styles.carouselSzliActive : null}`} key={index} onClick={() => setControls(item.state)} />
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