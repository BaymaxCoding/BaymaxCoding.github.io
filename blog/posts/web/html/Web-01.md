---
title: Html介绍和基本常用标签
date: 2024-03-26
category:
	- 前端
tag:
	- HTML
---

## 标签语法

> html (Hyper Text Markup Language) 超文本标记语言

``` html
有开始标签和结束标签，简单辨别，包裹内容的标签即为双标签，特殊单标签<br>换行，<hr>水平线
<h2>这是一个二级标题</h2>
```

## 骨架

> 基本骨架包含html、head、body,其中html包裹所有标签，head标签中编写给浏览器需要识别的参数字符编码、css等，body中写网页中的内容主体。标签的关系分为兄弟标签和子父标签如html标签就是head和body的爸爸，head和body则为兄弟关系

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- 浏览器识别数据 -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 展现给用户的内容 -->
</body>
</html>
```

## 基本排版标签

> 开发中一般一个网页中只有一个h1标签 用来标识整个文章中的大标题或者用来展示LOGO

``` html
<!-- 标题标签一共六级 h1-h6 -->
<h1>一级标题</h1>
<h2>二级标题</h2>

<!-- 段落标签 标签包裹一段文字即为一个段落，段落间有空隙 -->
<p>
    这是第一个段落
</p>
<p>
    这是第二个段落
</p>

<!-- 换行标签， 浏览器不会识别文本中的换行符都会被当成一行解析必须使用换行符进行换行 -->
<br>

<!-- 水平线标签 -->
<hr>
```

## 文本格式化标签

> 加粗、删除线、斜体、下划线

``` html
<strong>加粗，b标签不常用</strong>
<del>删除线，s标签不常用</del>
<ins>下划线，u标签不常用</ins>
<em>斜体，i标签不常用</em>
```

## 两种路径

- 相对路径

  相对于当前操作文件的一个路径，开发中常用相对路径。.表示当前目录，/表示进入文件夹，如当前目录的test.txt文件 `./test.txt`。或者当前目录的上一级目录的test.txt文件`../test.txt`

- 绝对路径

  windows下写盘符的，`C://img/test.txt`

  linux和mac下直接就是从跟目录出发,`/img/text.txt`

## 超链接标签

> href 属性可指定一个网址需要写清楚协议如https://xxxx  ,也可写#不做任何跳转或者用相对路径跳转本地指定的页面也可以
>
> target 指定标签的打开方式当前页还是新开标签页

``` html
<a href="https://www.baidu.com" target="_blank">点我打开百度</a>
```

## 图像标签

> src 属性可写网络地址或指定路径
>
> alt 属性 图片加载失败时描述图片的文字
>
> title 鼠标悬停图片时显示的文本
>
> 宽高一般用样式控制，缩放为等比例缩放

``` html
<img src="./123.png" alt="加载失败显示的文本">
```

## 音频和视频标签

> 共同属性src 资源地址  controls控制面板、autoplay自动播放、loop循环播放
>
> src为必要属性，后面的三个属性参数与属性名一致直接简写本身即可
>
> 需要注意的是自动播放，为提升用户体验浏览器禁用了自动播放的功能，所以添加了属性也没用，必须手动点击播放按钮，但是视频标签还有个静音属性muted当添加了这个属性也添加了自动播放的属性那么等网页加载完成会自动播放

``` html
	<audio src="./123.mp3" controls autoplay loop ></audio>
    <video src="./123.mp4" controls autoplay muted loop></video>
```

## 列表

> 无序列表 ul标签里面只能包含li标签li标签中可以包含其他标签
>
> 有序列表 ol标签里面只能包含li标签li标签中可以包含其他标签
>
> 定义列表 dl标签里面只能包含dt和dd标签dt和dd可以包含其他标签，dt是列表标题，dd是描述/详情

``` html
	<ul>
        <li>无序列表</li>
        <li>无序列表</li>
        <li>无序列表</li>
    </ul>

    <ol>
        <li>有序列表</li>
        <li>有序列表</li>
        <li>有序列表</li>
    </ol>

    <dl>
        <dt>标题1</dt>
        <dd>详情1</dd>
        <dd>详情1</dd>
        <dt>标题2</dt>
        <dd>详情2</dd>
        <dd>详情2</dd>
    </dl>
```

## 表格

|       |                                |
| ----- | ------------------------------ |
| table | 表格标签，默认无样式需添加属性 |
| tr    | 行标签                         |
| th    | 表格头部标签                   |
| td    | 表格内容标签                   |

> 结构标签 thead、tbody、tfoot使结构清晰无视觉变化可省略，注意合并行和合并列禁止跨结构

> 合并单元格分为跨行合并和跨列合并，跨行合并保留最上面一行删除其他行，跨列合并保留最左边删除其他列属性分别为rowspan、colspan  参数为合并的个数

``` html
	<table border="2px">
        <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>张三</td>
                <td>18</td>
                <td rowspan="2">男</td>
            </tr>
            <tr>
                <td>李四</td>
                <td>28</td>
                <!-- <td>男</td> -->
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>住址</td>
                <td colspan="2">地球村</td>
                <!-- <td>地球村</td> -->
            </tr>
        </tfoot>
    </table>
```

## 表单

input单标签，type属性包含文本text、密码password、单选radio、多选框checkbox、文件file。placeholder属性可以配置文本框和密码框中的提示信息。其中radio包含name属性参数自定义与其他选项一致构成一个组实现单选其中某一个。单选和多选有一个共同是否默认选中的属性checked。file有一个多文件上传的属性multiple。

``` html
	text <input type="text" placeholder="这是一个文本框">
    password <input type="password" placeholder="这是一个密码框">


    <input type="radio" name="gender" checked>男
    <input type="radio" name="gender"> 女

    爱好
    <input type="checkbox" checked >唱
    <input type="checkbox">跳
    <input type="checkbox" checked>rap

    <input type="file" multiple>
```

## 下拉菜单

``` html
	<select>
        <option value="" selected></option>
    </select>
```



## 文本域

一般禁用拖拽大小的功能   textarea标签

resize:none 禁用拖拽大小

## label

扩大表单控件的点击范围提升用户体验 ，id和for标签绑定实现，或者直接包裹表单控件。所有表单控件都可以配合使用

```  html
	<input type="radio" name="gender" checked id="man"> <label for="man">男</label> 
    <label><input type="radio" name="gender"> 女</label>
```

## 按钮

button  type属性submit提交表单数据默认属性、reset 重置、button 配合js使用

需要配合form标签包裹所有表单控件使用，否则提交和重置不生效

## 布局标签

div独占一行

span 一行可以多个

## 常用字符实体

&nbsp 空格

&lt 小于

&gt大于

# 补充一个form表单属性

input输入框历史记录的开关

``` html
<form action="" autocomplete="off">
```

还有h5新增input 的一个属性required 不能为空
