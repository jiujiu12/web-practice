[TOC]

# canvas

1. 必须指定宽高，确定可绘图区域的大小

2. canvas标签里写的是浏览器不支持canvas时展示的内容

``` html
<canvas id="drawing" width="1200" height="1200">Your browser does not support canvas attribute.</canvas>
```

## 上下文

首先要获取canvas的上下文对象。

```javascript
var context=drawing.getContext('2d');
```

### 填充和描边

2d上下文的两种基本操作：

1. 填充，对应属性：fillStyle 
2. 描边，对应属性：strokeStyle

### 绘制矩形

1> 绘制矩形

​     与矩形相关的操作方法有：fillRect，strokeRect，clearRect。三个方法参数：4个。x，y，矩形宽度，矩形高度

### 绘制路径

2> 画布上绘制路径，必须先用`beginPath()`，最后`context.stroke();`对路径进行描边

### 绘制文本

3> 绘制文本。主要有两个方法：fillText(),strokeText()。

​        有4个参数：要绘制的文本参数；x坐标；y坐标；最大像素宽度（可选）

​      3个属性：

​      --》1. font，文本样式，大小，字体

​      --》2. textAlign，文本对齐方式。start，end（推荐）；left，right；center

​      --》3. textBaseline可能的值： top，hanging，middle，alphabetic，ideographic和bottom

### 变换

1. 重新定位原点

```javascript
context.translate(200,200);//将（200，200）设置为坐标原点
```

2. 旋转元素

```javascript
context.rotate(1);
```

3. 跟踪上下文状态变化

   调用`save()`方法将所有设置保存入栈，然后对上下文进行其他修改，需要之前保存的状态时，调用`restore()`方法，将保存的栈结构位置向前返回一级，回复之前的状态。

   这里save的是调用该方法前的状态，调用一次restore时，回到的便是最后一次用save保存的状态。

### 绘制图像

​	**遇到问题：**找到图片img元素后，将参数传给`context.drawImage(image,10,10)`后图片并没有在画布上展示。

​	**解决方案**：图像需调用onload事件，包裹住绘制图像方法。

​	代码如下：

```javascript
 document.images[0].onload=function(){
                var context=drawing.getContext('2d');
                // 获取img元素
                var image=document.images[0];
                context.drawImage(image,0,10,50,50,0,100,40,60);
           }
```



