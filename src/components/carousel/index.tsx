// 轮播图组件
import React, { ReactElement, useState, useEffect } from 'react';
import styles from './carousel.module.less';


interface imgListType {
    img: string,
    state: number,
    zIndex: number
}

const Carousel = (): ReactElement => {
    const imgList: Array<imgListType> = [
        {
            img: '#1e80ff',
            state: 1,
            zIndex: 1,
        },
        {
            img: '#f35353',
            state: 2,
            zIndex: 1,
        },
        {
            img: '#44b9a4',
            state: 3,
            zIndex: 1,
        },
        {
            img: '#4e5969',
            state: 4,
            zIndex: 1,
        }
    ];

    let imgSize: number = imgList.length;

    let [controls, setControls] = useState(1);
    let [carouselImg, setCarouselImg] = useState(imgList);

    useEffect(() => {
        let changeImgList: Array<imgListType> = imgList.map((item: imgListType) => {
            let convert: number = Math.abs(controls ? controls : imgSize);
            return Object.is(item.state, convert) ? Object.assign(item, { zIndex: imgSize + 1 }) : Object.assign(item, { zIndex: 1 })
        })
        setCarouselImg(changeImgList);
    }, [controls])

    return (
        <div className={styles.carousel}>
            <div className={styles.carouseul}>
                {
                    carouselImg.map((item, index) => {
                        return <div className={styles.carouseli} key={index} style={{ background: item.img, zIndex: item.zIndex }}>
                            <div className={styles.carouseText}>{item.state}</div>
                        </div>
                    })
                }
            </div>
            <div className={styles.carouselCz}>
                <p onClick={() => setControls(controls ? (controls - 1) % imgSize : imgSize - 1)}>prev</p>
                <p onClick={() => setControls((controls + 1) % imgSize)}>next</p>
            </div>
        </div>
    )
}

export default Carousel;