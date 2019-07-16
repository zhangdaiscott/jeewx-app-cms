### 项目介绍
Jeewx-app-cms是jeewx开发的小程序网站项目，基于小程序wepy语言，具备cms网站的基本功能，可以快速搭建小程序官网。

JAVA后台代码下载地址： https://github.com/zhangdaiscott/jeewx-boot

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


### 技术交流

*   QQ交流群：	97460170
*  	[入门教程](http://shop.jeewx.com/#/doc/rumen)
* 	[常见问题](http://shop.jeewx.com/#/doc/wepydevelop/common-problems)
* 	[wepy开发文档](https://tencent.github.io/wepy/) 


	
### 快速安装教程
* [小程序官网发布教程](http://shop.jeewx.com/#/doc/projectreleased/CMS-release)
* [小程序微网站安装视频](http://www.h5huodong.com/h5/vdetail.html?id=ff80808166d4317b0166d43c3e87008f)


### 在线体验
扫码下方二维码体验小程序。

![github](https://camo.githubusercontent.com/216b65a5ed50cea24e3e335e20e5d1fdd930f8a2/687474703a2f2f696d672d626c6f672e6373646e2e6e65742f32303138303630353137353135373232353f77617465726d61726b2f322f746578742f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33706f5957356e5a47467063324e766448513d2f666f6e742f3561364c354c32542f666f6e7473697a652f3430302f66696c6c2f49304a42516b46434d413d3d2f646973736f6c76652f3730 "jeewx-app-cms")



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

![github](https://camo.githubusercontent.com/27345cadda41b765684ebf7ee416fde7fb98c504/687474703a2f2f696d672d626c6f672e6373646e2e6e65742f32303138303630343139343432323735343f77617465726d61726b2f322f746578742f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33706f5957356e5a47467063324e766448513d2f666f6e742f3561364c354c32542f666f6e7473697a652f3430302f66696c6c2f49304a42516b46434d413d3d2f646973736f6c76652f3730 "jeewx-app-cms")
![github](https://camo.githubusercontent.com/f28b473fc32d6c35ef63f24e415b87ad5be1e796/687474703a2f2f696d672d626c6f672e6373646e2e6e65742f32303138303630343139343433363532363f77617465726d61726b2f322f746578742f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33706f5957356e5a47467063324e766448513d2f666f6e742f3561364c354c32542f666f6e7473697a652f3430302f66696c6c2f49304a42516b46434d413d3d2f646973736f6c76652f3730 "jeewx-app-cms")
![github](https://camo.githubusercontent.com/8cee67c8ad1f2091691904d9c1e0c9bce64adcb5/687474703a2f2f696d672d626c6f672e6373646e2e6e65742f32303138303630343139343434313936303f77617465726d61726b2f322f746578742f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33706f5957356e5a47467063324e766448513d2f666f6e742f3561364c354c32542f666f6e7473697a652f3430302f66696c6c2f49304a42516b46434d413d3d2f646973736f6c76652f3730 "jeewx-app-cms")
![github](https://camo.githubusercontent.com/b420a1516bb811b27414ed5c96666e5af65d33a9/687474703a2f2f696d672d626c6f672e6373646e2e6e65742f32303138303630343139343434373933373f77617465726d61726b2f322f746578742f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33706f5957356e5a47467063324e766448513d2f666f6e742f3561364c354c32542f666f6e7473697a652f3430302f66696c6c2f49304a42516b46434d413d3d2f646973736f6c76652f3730 "jeewx-app-cms")
![github](https://camo.githubusercontent.com/abb27297dc3b22659dab275b0538909575038f75/687474703a2f2f696d672d626c6f672e6373646e2e6e65742f32303138303630343139343435323635363f77617465726d61726b2f322f746578742f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33706f5957356e5a47467063324e766448513d2f666f6e742f3561364c354c32542f666f6e7473697a652f3430302f66696c6c2f49304a42516b46434d413d3d2f646973736f6c76652f3730 "jeewx-app-cms")
