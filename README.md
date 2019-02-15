# web-fingerprint

## 使用方式

不依赖jquery

Fingerprint实例化时，可以不传参数
```
let Fingerprint = require('../component/Fingerprint.js');

new Fingerprint({
    size: '30px',
    color: '#f1f1f1', 
    id: 'fingerprint',
    text: 'Jay',
    density: 200,
    clarity: 1,
    supportTip: '你的浏览器不支持Canvas'
})
```

## 参数含义
```
size: 文字大小
color: 字体颜色
id: 元素id
text: 显示的文字
density: 指纹间距,
clarity: 清晰度,
supportTip: 不支持canvas时，提示文字
```

## 可调用的方法
### resetText
修改显示文字
```
let Fingerprint = require('web-fingerprint');
let fingerprint = new Fingerprint();
fingerprint.resetText('change');
```

## 编译
```
npm run build
```

## 例子

https://tianshengjie.cn/apps/web_fingerprint