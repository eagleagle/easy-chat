# Easy Chat (developing)

## [前端](./client)

## [后端](./server)

### 在线预览

 [clickMe](http://39.108.103.20/easychat/)  请使用*现代*(很重要)浏览器,移动端浏览效果更佳哦！

### 启动

1. 前提

+ 安装nodejs
+ 安装yarn
+ 安装MongoDB

2. 安装依赖

``` code
yarn install
cd client/ && yarn install
cd server/ && yarn install
```

3. 运行

+ 从服务端运行(访问localhost:3000)

``` code
cd client/ && yarn run build:mv
cd server/ && yarn start
```

+ 从客户端运行(访问localhost:8080)

``` code
cd client/ && yarn start
cd server/ && yarn start
```
