---
title: CSS（三）平面转换、动画、移动适配、less、bootstrap
date: 2024-03-26
category:
	- 前端
tag:
	- HTML
---

### 平面转换-2D转换

为元素添加动态效果，配合过渡使用

改变盒子在平面内的形态（位移，旋转，缩放，倾斜）

transform：

#### 属性-平移

translate（x移动距离,y移动距离）

距离可写像素，百分比（参照盒子自身的尺寸），正负值，

只写一个值的时候沿着x轴移动，  也可以使用translatex（）或者translatey（）

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-27_18-32-46.png)

#### 属性-旋转

rotate（旋转角度deg）  deg为单位

正负值为顺时针或者逆时针

#### 原点变换（缩放，旋转）

默认旋转原点是盒子的中心通过transform-origin ：x y 改变原点位置常用就是方位名词，也可以取像素、百分比，谁转在谁身上加属性，比如按盒子底部中间去旋转   属性就是 center bottom

#### 属性-多重转换

也就是transform的复合属性 ，先平移，再旋转

transform: translate(800px)  rotate(360deg)

注意1，旋转会改变坐标轴向，也就是x轴会随着旋转的度数转一圈，如果此时复合属性中先旋转后平移的话就会造成，x轴在转，同时也在平移造成盒子由内到外的旋转，因为多重转换以第一个属性的轴为准，所以一般涉及平移和旋转的操作，平移参数要写旋转参数前头

注意2 ，属性不能分开写，因为后面写的css会覆盖前面的css，层叠性

#### 属性-缩放

如果修改宽高触发的话，会从左上角缩放，效果不对，应该以中心点缩放

scale（缩放倍数）x，y等比缩放 /scale（X轴倍数，Y轴倍数）

中间值为1 ，大于放大小于缩小

#### 属性-倾斜

skew(xxdeg)  ，取值角度

#### 属性-渐变

一般用于盒子背景

分为线性渐变/径向渐变

##### 线性渐变

background-image：linear-gradient（渐变方向，颜色1 终点位置，颜色2 终点位置....）

终点位置可写可不写，取值为%

渐变方向可写to+方位名词/角度度数

渐变默认由上到下

linear-gradient（to right,xx 80%,xx 20%）

transparent 透明关键字可作为颜色

##### 径向渐变

一般用于提升按钮立体

radial-gradient（半径 at 圆心位置，颜色1 终点位置，颜色2 终点位置....）

半径的取值可以是两条，变为椭圆渐变

圆心取值可为像素、百分比、方位名词

### 空间转换X，Y，Z

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-28_21-02-37.png)

z轴的方向和视线的方向相同

#### 空间-平移

默认状态无法观察 z轴的平移效果，因为电脑也是平面的

transform: translate3d(x,y,z) 三个值缺一不可

transform: translatex()

transform:translatey()

transform:translatez() 

参数可取像素，正负值都可以或者百分比参照盒子的大小计算

##### 视距perspective

指定观察者与z=0平面距离，为元素添加透视效果（近大远小，近实远虚）

参数直接加给父级（必须直接父级），取值范围最佳为800-1200

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-28_21-11-10.png)

#### 空间-旋转

一定要配合视距属性使用才有正常的视觉效果

transform:rotateZ()

rotateZ的旋转和正常旋转一样，因为都是在中心点

transform:rotateX()

transform:rotateY()

注意，旋转会改变坐标轴方向，如果一个平面以x轴旋转90度，那么他的视距z就会变道上面，根据z轴可以推断x，y轴的方向做平移等操作

##### 左手法则

用于根据原型图，判断旋转取值的正负

左手握住旋转轴，拇指指坐标轴正数方向，其他四个手指的弯曲方向即为正值方向，反之为负值

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-28_21-50-29.png)

##### 拓展（不常用）

rotate3d（x,y,z,角度度数），用来设置自定义旋转轴的位置以及旋转的角度

x,y,z 取值为0-1之间的数字

#### 立体呈现

transform-style 该参数加给父级，取值flat为子级处为平面中preserve-3d子级处于3d空间中

作用：设置子元素位于3d空间中还是平面空间中

注意，每个盒子都有自己的坐标轴，互相不影响 

操作步骤

1. 父元素添加transform-style:preserve-3d
2. 子级定位
3. 调整盒子的位置（位移或者旋转）

#### 空间-缩放

transform:scale(x,y,z);

transform:scaleX();

transform:scaleY();

transform:scaleZ();

参数同平面缩放

### 动画-animation

过度和动画的区别

过渡实现两个状态间的变化过程

动画，实现多个状态间的变化过程，动画过程可控（重复播放，最终画面，是否暂停）

#### 定义动画

``` css
@keyframes 动画名称{
    from{
        
    }
    to{
        
    }
}

@keyframes 动画名称{
    0%{
        
    }
    10%{
        
    }
    ...
    100%{
        
    }
}
```

第一种写法控制两个状态

第二个写法控制过程中的状态，其中百分比表示动画时长的百分比

animation：动画名称 动画时长，谁的动画属性就加给谁

#### 属性

animation:动画名称 动画时长 速度曲线 延迟时间 重复次数 动画方向 执行完毕时的状态

取值不分前后顺序，动画名称 动画时长必填

如有两个时间值，第一个表示时长，第二个表示延迟

速度曲线可取 linear匀速，steps（2）分部展示 参数可变，一般用于精灵图动画

重复次数 infinite的话就是无限播放

动画方向 alternate  反向

完成时的状态 forwards结束时的状态，backwards开始时的状态（默认）

##### 拆分属性写法

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-29_10-09-03.png)

#### 无缝动画实现

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-29_10-23-21.png)

如图， 框中只能显示三张图片一共7张，每张图片宽为200px，实现滚动动画的话需要往左动画1400px，但动画完成后框中会留三张图片的宽度，所以根据框中可以承载内容的宽度再去复制内容的开头，也就是如图再去复制开头三张照片做填充，项目中根据实际情况填充

#### 逐帧动画

看起来平滑的是补间动画，看起来一跳一跳的就是逐帧动画

利用动画的速度曲线steps（）实现 

##### 精灵动画

1. 准备显示区域
2. 定义动画 移动背景，移动的距离=精灵图的宽度
3. 使用动画steps（N），n与小图的个数相同

#### 多组动画

animation:动画1，动画2,....;

每组动画包含名称 时长 等必要参数中间用空格隔开，动画间用，号

省略from，比如盒子的默认位置就是translate（0），动画要移动到800px的位置，那么可以直接to{}

### 移动适配

- rem

- vw

缩放比计算  就是除以对应缩放比如1920 /150

物理分辨率 实体硬件的大小

逻辑分辨率 操作系统调节的大小，一般参考逻辑分辨率开发 

#### 视口

- 手机屏幕尺寸不同，网页宽度均为100%
- 网页的宽度与逻辑分辨率尺寸相同

注意：移动端默认分辨率的宽和逻辑宽不一致，pc一致

为了匹配移动端与逻辑宽，使用视口标签来约束html尺寸

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

自动生成的，不用管，认识就行

width=device-width ： 视口宽度=设备宽度

initial-scale=1.0   缩放1倍（不缩放）

#### 二倍图

防止图片在高分辨率屏幕下失真

目前参考iphone6/7/8

看宽度  1倍图逻辑分辨率375，2倍图物理分辨率750

#### 适配方案

- 宽度适配

  宽度自适应，高度为像素单位，百分比布局和flex布局

- 等比适配

  rem

  vw

#### rem适配

rem 单位为相对单位

rem单位相对于html标签的字号计算结果也就是根字号

1rem=1html字号大小

##### 媒体查询

能够检查视口的宽度，编写差异化的css

当某个条件成立，执行对应的css

``` css
@media (媒体特性) {
    选择器{
        属性
    }
}
```

实现根据不同的视口宽度，配置不同的属性

##### 不同视口宽度设置html字号多少合适？

rem布局方案中，将网页分成10份，html标签的字号为视口宽度的十分之一

如视口宽度375  ，html字号为37.5px

320 就是32px

414就是41.4

##### rem-flexible.js

淘宝开发的用来一个适配移动端的js库

核心原理，根据不用的视口宽度给网页中html根节点设置不同的font-size

body标签中最下面引入js

##### 关于设计稿中的像素与rem转换

1. 确定基准根字号（html），设计稿宽度，确定参考设备宽度（视口），确定基准根字号（十分之一视口宽度）

2. rem单位尺寸=px单位数值/基准根字号

   ![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-29_14-17-19.png)

### less

css预处理器，扩充了css语言，使css具备一定的逻辑能力，计算能力

注意：浏览器不识别less代码，目前阶段需要引入对应的css

使用插件保存less后生成对应的css文件

vscode插件easy less

#### less注释

单行  

//   ctrl+/

块注释

/* */  Shift+alt+a

单行注释不会生成到css，因为css不支持//注释

#### 运算

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-29_14-35-17.png)

如果写了多个单位，以第一个为准

#### 嵌套

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-29_14-40-03.png)

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-29_14-43-00.png)

&符号在谁的括号中表示谁，配合hover或者nth-child结构伪类使用

#### 变量

定义  @名称：数据；

使用 属性：@名称

#### 导入

导入less公共样式文件

可以省略后缀名

@import 路径

#### 导出

第一行添加

//out: 路径

如果是文件夹，最后要加/ 

禁用导出 //out:false 

### vw适配（可以直接实现移动适配效果）

相对视口的尺寸计算结果

vw：viewport width

1vw =1/100 视口宽度

vh viewport height

1vh = 1/100 视口高度

#### vm和vh计算

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-29_20-27-36.png)

#### vh单位问题

vw和vh不能混用，会导致盒子变形，一般常用vw

### 移动端项目

可以不做搜索优化也就是logo不需要包在h1标签里

#### img图片直接铺满父级盒子的小技巧

除了改和父级一样的宽高，还可以采用这种方法完美的铺满盒子，使用图片等比例完美的展现出来

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-29_21-46-33.png)

### 响应式网页

一套代码，适配多端，不管屏幕多大，手机还是电脑都能完美展示

#### 解决方案

- 媒体查询

  检测宽度 改变样式，太麻烦

- bootstrap框架

##### 媒体查询

max-width就是 <=

min-width就是>=

``` css
@media (max-width:200px){
    选择器{
        参数
    }
}

@media 关键词 媒体类型 and （媒体特性）{
    选择器{
        参数
    }
}

关键字and not only
```

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-30_14-13-58.png)

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-30_14-14-27.png)

注意书写顺序，因为css的特性层叠性，后面的会覆盖前面的样式

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-30_13-54-32.png)

##### 媒体查询-外部css，满足某些条件媒体样式比较多考虑这种方法

媒体查询作为一个css文件，单独引入,css里直接写样式，媒体查询条件放在link标签中，符合媒体条件的应用该css样式

逻辑符 媒体类型 and （媒体特性）  ：这是完整的写法一般只用一个括号写条件

``` html
<link rel="stylesheet" media="(max-width:768px)"  href="style.css">
```

#### bootstrap

twitter公司的前端框架，框架？ 人家编写好的代码，按人家的要求使用

bootstrap.min.css 压缩后的，格式乱，但是体积小（生产用这个）

bootstrap.css  完整格式的，两个文件一样，只是格式不一样（这个学习的时候用）

版心居中类container

##### 使用

直接引入css，调用对应选择器实现效果

##### 栅格系统

是将网页宽度分为12份，每个盒子占用对应的份数

例如一行四个盒子，那么每个盒子占的就是3份 

bootstrap已经分好了宽度的响应区间 6个响应区间

row里面有flex布局

![](https://cdn.jsdelivr.net/gh/baymaxcoding/pic_rep/imgs/Snipaste_2023-11-30_14-43-09.png)

vscdoe显示类名插件

IntelliSense for CSS class names ...

这里开发项目有个小，关于盒子边距与背景填充的问题，看代码最后一个案例

##### 全局样式

看官网

[Containers · Bootstrap v5 中文文档 v5.3 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/layout/containers/)

##### 组件components

引入css

引入js（看是否依赖js，简单区别有动态功能的）

复制结构应用

##### 字体图标

官网图标库，引入css使用

[Bootstrap 图标库 · Bootstrap 官方开源图标（icon）库 (bootcss.com)](https://icons.bootcss.com/#install)
