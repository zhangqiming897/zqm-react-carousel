// 轮播图组件
import React, { Component } from 'react';
import styles from './carousel.module.less';

class Carousel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.carousel}>修订的轮播图组件可以使用</div>
        )
    }
}

export default Carousel;