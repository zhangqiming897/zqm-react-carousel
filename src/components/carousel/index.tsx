// 轮播图组件
import React, { ReactElement, useState, useEffect } from 'react';
import styles from './carousel.module.less';


interface imgListType {
    img: string,
    state: number,
    opacity: number
}

const Carousel = (): ReactElement => {
    const imgList: Array<imgListType> = [
        {
            img: '#1e80ff',
            state: 1,
            opacity: 1,
        },
        {
            img: '#f35353',
            state: 2,
            opacity: 0,
        },
        {
            img: '#44b9a4',
            state: 3,
            opacity: 0,
        },
        {
            img: '#4e5969',
            state: 4,
            opacity: 0,
        }
    ];

    let imgSize: number = imgList.length;

    let [controls, setControls] = useState(1);
    let [carouselImg, setCarouselImg] = useState(imgList);
    let [transform, setTransform] = useState('0');

    useEffect(() => {

        let convert: number = Math.abs(controls ? controls : imgSize);

        let changeImgList: Array<imgListType> = imgList.map((item: imgListType) => {
            if(Object.is(item.state, convert)) setTransform(`${100 * (convert - 1) }%`);
            return Object.is(item.state, convert) ? Object.assign(item, { opacity: 1 }) : Object.assign(item, { opacity: 0 })
        })
        
        setCarouselImg(changeImgList);
    }, [controls])

    return (
        <div className={styles.carousel}>
            <div className={styles.carouseul} style={{ width: `${ 100 * imgSize }%` }}>
                {
                    carouselImg.map((item, index) => {
                        return <div className={styles.carouseli} key={index} style={{ width: `calc(100% / ${imgSize})`, background: item.img, opacity: item.opacity, transform: `translateX(-${transform})` }}>
                            <div className={styles.carouseText}>{item.state}</div>
                        </div>
                    })
                }
            </div>
            <div className={styles.carouselSzul}>
                {
                    carouselImg.map((item, index) => {
                        return <div className={`${styles.carouselSzli} ${item.state == Math.abs(controls ? controls : imgSize) ? styles.carouselSzliActive : null}`} key={index} onClick={() => setControls(item.state)} />
                    })
                }
            </div>
            <div className={styles.carouselCz}>
                <p onClick={() => setControls(controls ? (controls - 1) % imgSize : imgSize - 1)}>返回</p>
                <p onClick={() => setControls((controls + 1) % imgSize)}>前进</p>
            </div>
        </div>
    )
}

export default Carousel;