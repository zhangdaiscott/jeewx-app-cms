### 项目介绍
Jeewx-app-cms是jeewx开发的小程序网站项目，基于小程序wepy语言，具备cms网站的基本功能，能够打造简单易用的公司官网。

### 开发常用命令

#### 1、安装（更新）wepy命令行工具
	npm install wepy-cli -g

#### 2、安装依赖包
	npm install

#### 3、开发实时编译
	npm run dev

#### 4、生产压缩
	npm run build //上传代码时，请先执行此命令，否则会提示包体积过大

#### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择dist目录。

2、微信开发者工具-->项目-->关闭ES6转ES5。 <font color=red>重要：漏掉此项会运行报错。</font> 

3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。  <font color=red>重要：某些情况下漏掉此项也会运行报错。</font> 

4、微信开发者工具-->项目-->关闭代码压缩上传。  <font color=red>重要：开启后，会导致真机computed, props.sync 等等属性失效。</font> 

### 开发工具
本项目推荐使用WebStorm + Nodejs + 微信web开发者工具作为开发和调试环境。 开发工具打包下载：
	https://pan.baidu.com/s/1ojF_aqKtf3ooQ15FNdtTJQ 密码：0wa5
	
### 文档帮助

#### wepy开发文档地址：
	https://tencent.github.io/wepy/

#### 小程序开发文档
	http://mp.weixin.qq.com/debug/wxadoc/dev/

### 在线体验
扫码关注微信公众号【JEEWX捷微管家】体验，或直接扫描小程序码。

![github](https://img-blog.csdn.net/20180604194414442?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW5nZGFpc2NvdHQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70 "jeewx-app-cms")
	
### 目录结构

    ├── api
    │   └── api.js              //接口
    ├── app.wpy                 //入口文件
    ├── components                  //组件
    │   └── tab.wpy             //选项卡组件
    ├── img                  //图片文件夹
    │   └── alert.png
    │   └── contact.png
    │   └── contact_selected.png
    │   └── error.png
    │   └── icon_API.png
    │   └── icon_API_HL.png
    │   └── icon_component.png
    │   └── icon_component_HL.png
    │   └── jeecg.png
    │   └── location.png
    │   └── logo.png
    ├── pages                   //页面
    │   └── article.wpy			//文章详情页
    │   └── articleList.wpy		//文章列表页
    │   └── contact.wpy			//联系我们页
    │   └── index.wpy			//首页
    │   └── theme.wpy			//专题页
    └── utils                   //工具类
    │   ├── md5.js                  //md5
    │   ├── tip.js                  //提示弹框组件
    │   ├── util.js                 //工具
    │   └── wxRequest.js            //ajax请求
    └── wxParse             //富文本
        ├── html2json.js
        ├── htmlparser.js
        ├── showdown.js
        ├── wxDiscode.js
        ├── wxParse.js
        ├── wxParse.wxml
        └── wxParse.wxss    


		
### 功能截图
![github](https://img-blog.csdn.net/20180604194422754?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW5nZGFpc2NvdHQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70 "jeewx-app-cms")
![github](https://img-blog.csdn.net/20180604194436526?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW5nZGFpc2NvdHQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70 "jeewx-app-cms")
![github](https://img-blog.csdn.net/20180604194441960?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW5nZGFpc2NvdHQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70 "jeewx-app-cms")
![github](https://img-blog.csdn.net/20180604194447937?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW5nZGFpc2NvdHQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70 "jeewx-app-cms")
![github](https://img-blog.csdn.net/20180604194452656?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW5nZGFpc2NvdHQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70 "jeewx-app-cms")


### 技术交流

*   官 	  网：	www.jeewx.com
*   邮    箱：	jeecg@sina.com
*   QQ交流群：	131894955
