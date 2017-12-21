# 视频播放器组件

## ckplayer


### 引入方式
`
<link rel="stylesheet" type="text/css" href="../share.css"/>
<script type="text/javascript" src='../dist/ckplayer.js'></script>
<script type="text/javascript" src='../index.js'></script>
`

### 调用方法
`
var videoObject = {
            container: '#video_box',//“#”代表容器的ID，“.”代表容器的class
            variable: 'player',//该属性必需设置，值等于下面的new ckplayer()的对象
            autoplay:true,//是否自动播放
            //loaded: 'loadedHandler', //当播放器加载后执行的函数      
            live:false,//是否直播;时移时是false
            poster:hmypic,//封面图片
            video:hm3u8//视频地址
        };
        var player=new ckplayer(videoObject);
`
### 主要配置和接口
`
在播放器加载后的回调函数里添加监听函数
function loadedHandler(){
          player.addListener('ended', endedHandler); //监听播放结束
        }

`

### 使用注意事项

####安装启动http-server 可访问demo/index.html演示
####分享的视频object代码必须引用ckplayer.js , 否则分享的视频跨域不能播放
####crossdomain.xml 文件放在网站的根下

## 百度分享组件

### 组件介绍

### 调用方式

##



