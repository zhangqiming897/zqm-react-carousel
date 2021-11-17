// 轮播图组件
import React, { ReactElement, useState } from 'react';
import styles from './carousel.module.less';


const Carousel = (): ReactElement => {
    let [next, setPrev] = useState(0);
    return (
        <div className={styles.carousel}>
            <span>{next}</span>
            <div onClick={() => setPrev(next++)}>点击</div>
            <div className={styles.carouseli}></div>
        </div>
    )
}

export default Carousel;