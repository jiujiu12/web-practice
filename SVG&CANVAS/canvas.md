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

重新定位原点

```javascript
context.translate(200,200);//将（200，200）设置为坐标原点
```

旋转元素

```javascript
context.rotate(1);
```

跟踪上下文状态变化

调用`save()`方法将所有设置保存入栈，然后对上下文进行其他修改，需要之前保存的状态时，调用`restore()`方法，将保存的栈结构位置向前返回一级，回复之前的状态。

### 绘制图像

