# myfood-web-app-cust
---
- 项目开始制作时间：2016-07-20
- 项目端口号：3002
- mongodb 作为SESSION 存储仓库
- express 基本框架
- 模板引擎为velocityjs
- views文件夹：为HTMl或者模板引擎文件
- public文件夹：为CSS IMG HTML JSON 等静态文件
- 项目打包使用了gulp工具
    > public 文件夹下面有dist文件夹
    > dist 文件夹 存放压缩后的css js 文件
    > 文件引用方式
        > views 下面的html文件的引用 css： `/dist/css/*.css`
        > views 下面的html文件的引用 js： `/dist/js/*.js`
        > views 下面的html文件的引用 img： `/img/*.*`