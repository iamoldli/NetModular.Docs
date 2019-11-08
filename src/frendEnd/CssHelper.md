# Css 帮助类

前端框架中预定义了一些常用的 css 帮助类，所有代码都在[packages/styles/\_helper.scss](https://github.com/iamoldli/NetModular.UI/blob/master/packages/styles/_helper.scss)文件中，可以满足大部分简单的样式需求~

### 文本颜色

<nm-demo>
<p class="nm-text-info">nm-text-info</p>
<p class="nm-text-primary">nm-text-primary</p>
<p class="nm-text-success">nm-text-success</p>
<p class="nm-text-warning">nm-text-warning</p>
<p class="nm-text-danger">nm-text-danger</p>
<p class="nm-text-white nm-bg-info">nm-text-white</p>
</nm-demo>

<nm-devline/>

```html
<p class="nm-text-info">nm-text-info</p>
<p class="nm-text-primary">nm-text-primary</p>
<p class="nm-text-success">nm-text-success</p>
<p class="nm-text-warning">nm-text-warning</p>
<p class="nm-text-danger">nm-text-danger</p>
<p class="nm-text-white nm-bg-info">nm-text-white</p>
```

### 文本对齐(align)

<nm-demo>
<p class="nm-text-left nm-text-primary">居左 nm-text-left</p>
<p class="nm-text-center nm-text-success">居中 nm-text-center</p>
<p class="nm-text-right nm-text-warning">居右 nm-text-right</p>
</nm-demo>

<nm-devline/>

```html
<p class="nm-text-left nm-text-primary">居左 nm-text-left</p>
<p class="nm-text-center nm-text-success">居中 nm-text-center</p>
<p class="nm-text-right nm-text-warning">居右 nm-text-right</p>
```

### 文本加粗

<nm-demo>
<p class="nm-text-primary">正常</p>
<p class="nm-text-bold nm-text-primary">加粗nm-text-bold</p>
</nm-demo>

<nm-devline/>

```html
<p class="nm-text-primary">正常</p>
<p class="nm-text-bold nm-text-primary">加粗nm-text-bold</p>
```

### 字体大小

::: warning
支持 1-50px
:::

<nm-demo>
<div class="nm-size-10">nm-size-10</div>
<div class="nm-size-20">nm-size-20</div>
<div class="nm-size-30">nm-size-30</div>
</nm-demo>

<nm-devline/>

```html
<div class="nm-size-10">nm-size-10</div>
<div class="nm-size-20">nm-size-20</div>
<div class="nm-size-30">nm-size-30</div>
```

### 背景颜色

<nm-demo>
<p class="nm-bg-info nm-text-white">nm-bg-info</p>
<p class="nm-bg-primary nm-text-white">nm-bg-primary</p>
<p class="nm-bg-success nm-text-white">nm-bg-success</p>
<p class="nm-bg-warning nm-text-white">nm-bg-warning</p>
<p class="nm-bg-danger nm-text-white">nm-bg-danger</p>
</nm-demo>

<nm-devline/>

```html
<p class="nm-bg-info nm-text-white">nm-bg-info</p>
<p class="nm-bg-primary nm-text-white">nm-bg-primary</p>
<p class="nm-bg-success nm-text-white">nm-bg-success</p>
<p class="nm-bg-warning nm-text-white">nm-bg-warning</p>
<p class="nm-bg-danger nm-text-white">nm-bg-danger</p>
```

### 内边距(padding)

::: warning
以下所有内边距都支持从 1-30px
:::

> 完整内边距(p 表示 padding)

<nm-demo>
<p class="nm-p-1 nm-bg-info nm-text-white">nm-p-1</p>
<p class="nm-p-5 nm-bg-primary nm-text-white">nm-p-5</p>
<p class="nm-p-10 nm-bg-success nm-text-white">nm-p-10</p>
<p class="nm-p-30 nm-bg-warning nm-text-white">nm-p-30</p>
</nm-demo>

<nm-devline/>

```html
<p class="nm-p-1 nm-bg-info nm-text-white">nm-p-1</p>
<p class="nm-p-5 nm-bg-primary nm-text-white">nm-p-5</p>
<p class="nm-p-10 nm-bg-success nm-text-white">nm-p-10</p>
<p class="nm-p-30 nm-bg-warning nm-text-white">nm-p-30</p>
```

> 上内边距(t 表示 top)

<nm-demo>
<p class="nm-p-t-1 nm-bg-info nm-text-white">nm-p-t-1</p>
<p class="nm-p-t-5 nm-bg-primary nm-text-white">nm-p-t-5</p>
<p class="nm-p-t-10 nm-bg-success nm-text-white">nm-p-t-10</p>
<p class="nm-p-t-30 nm-bg-warning nm-text-white">nm-p-t-30</p>
</nm-demo>

<nm-devline/>

```html
<p class="nm-p-t-1 nm-bg-info nm-text-white">nm-p-t-1</p>
<p class="nm-p-t-5 nm-bg-primary nm-text-white">nm-p-t-5</p>
<p class="nm-p-t-10 nm-bg-success nm-text-white">nm-p-t-10</p>
<p class="nm-p-t-30 nm-bg-warning nm-text-white">nm-p-t-30</p>
```

> 下内边距(b 表示 bottom)

将上内边距的 t 换成 b~

> 左内边距(l 表示 left)

将上内边距的 t 换成 l~

> 右内边距(r 表示 right)

将上内边距的 t 换成 r~

> 组合内边距

<nm-demo>
<p class="nm-p-t-15 nm-p-l-30 nm-bg-primary nm-text-white">nm-p-t-15 nm-p-l-30</p>
</nm-demo>

<nm-devline/>

```html
<p class="nm-p-t-15 nm-p-l-30 nm-bg-primary nm-text-white">
  nm-p-t-15 nm-p-l-30
</p>
```

### 外边距(margin)

外边距用户与内边距相同，只是把 `nm-p-5` 换成 `nm-m-5` 即可~

### 阴影

<nm-demo>
<div class="nm-box-shadow nm-m-30 nm-p-30">简单阴影效果</div>
</nm-demo>

<nm-devline/>

```html
<div class="nm-box-shadow nm-m-30 nm-p-30">简单阴影效果</div>
```
