# zqm-react-carousel
> 公用的轮播图组件
![image](https://user-images.githubusercontent.com/38695894/172082091-f9379015-1e55-4488-96cf-bf524548b386.png)
> 引用
``` 
npm install zqm-react-carousel
```
> 参数
  * imgArr
  ```
    // 图片展示设置
    const imgList: Array<imgListType> = imgArr ?
        imgArr.map((item, index) => { return { state: index + 1, img: item } })
        : new Array(4).fill(1).map((item, index) => { return { state: index + 1 } })
  ```
  * height
  ```
    // 图片高度设置
    const imgHeight: number = height ? height : 500;
  ```
  * transitionTime
  ```
   // 过渡时间设置
    const transitionDelay: number = transitionTime ? transitionTime / 100 : 30;
  ```
  * prevIcon
  ```
   // 返回图标设置
    prevIcon ? <span className={`iconfont ${prevIcon}`} style={{ fontSize: setIconSize }}></span> : '返回'
  ```
  * nextIcon
  ```
   // 前进图标设置
   nextIcon ? <span className={`iconfont ${nextIcon}`} style={{ fontSize: setIconSize }}></span> : '前进'
  ```
  * iconSize 
  ```
   // 图标大小设置
    const setIconSize: number = iconSize ? iconSize : 45;
  ```
  * configType
  ```
   // 底部操作栏配置项 ( square, circle )
    const setConfigType: string = configType ? configType : 'square';
  ```
