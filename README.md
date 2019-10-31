# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

1.先检查npm和node的版本
查看npm版本：npm -v
升级npm： npm install -g npm
查看node版本：node -v
升级node版本：https://nodejs.org/ 官网现在下载最新的node安装
2.卸载vue-cli
npm uninstall -g vue-cli
3.重新安装vue-cli
npm install -g vue-cli
4.再运行，生成vue项目
vue init webpack vue-demo 成功
5.进入目录
cd vue-demo
6.安装axios
安装cnpm，淘宝镜像cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
cnpm install axios --save

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
