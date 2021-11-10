// 轮播图组件
import React, { Component } from 'react';
import styles from './carousel.module.less';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prev: 0,
            next: 0
        }
    }
    render() {
        return (
            <div className={styles.carousel}>
               <div className={styles.carouseli}></div>
            </div>
        )
    }
}

export default Carousel;