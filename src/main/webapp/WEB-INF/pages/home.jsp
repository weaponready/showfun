<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>周末摄影</title>
    <link href="${ctx}/styles/camera.css" rel="stylesheet" type="text/css"/>
    <script src="${ctx}/static/camera/jquery.mobile.customized.min.js"></script>
    <script src="${ctx}/static/camera/jquery.easing.1.3.js"></script>
    <script src="${ctx}/static/camera/camera.min.js"></script>
    <script type="text/javascript">
        $(function () {
            $.ajax({
                url: '${ctx}/api/v1/work?top=true',
                async: false,
                cache: true,
                type: 'GET',
                dataType: 'json',
                success: function (response) {
                    var photos = '';
                    $.each(response, function (index, item) {
                        photos += '<div data-thumb="' + item.cover.url + '" data-src="' + item.cover.url + '"></div>';
                    });

                    $('#camera_wrap').append(photos);
                }
            });

            $('#camera_wrap').camera({
                height: '450',
                loader: 'bar',
                pagination: true,
                thumbnails: true,
                hover: true,
                opacityOnGrid: true,
                time: 1000
            });
        })
    </script>
</head>

<body>

<div class="row">
<div class="col-lg-2"></div>
<div class="col-lg-8">
    <div class="line line-dashed"></div>
<!-- .crousel slide -->
<section class="panel panel-default bg-primary">
    <div class="carousel slide auto panel-body" id="c-slide">
        <ol class="carousel-indicators out">
            <li data-target="#c-slide" data-slide-to="0" class="active"></li>
            <li data-target="#c-slide" data-slide-to="1" class=""></li>
            <li data-target="#c-slide" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
            <div class="item active">
                <p class="text-center">
                    <small class=" text-mute">你若盛开</small><br>
                    <small class="h4 text-muted">清风自来</small>
                </p>
            </div>
            <div class="item">
                <p class="text-center">
                    <small class="text-mute">你若安好</small><br>
                    <small class="h4 text-muted">便是晴天</small>
                </p>
            </div>
            <div class="item">
                <p class="text-center">
                    <small class="h4 text-mute">莆田周末私人定制摄影工作室</small><br>
                    <em class="text-muted">QQ:411751009</em>
                </p>
            </div>
        </div>
        <a class="left carousel-control" href="#c-slide" data-slide="prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a class="right carousel-control" href="#c-slide" data-slide="next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</section>
<!-- / .carousel slide -->

    <div class="camera_wrap camera_emboss pattern_41" id="camera_wrap">
    </div>

    <div class="row row-sm">
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="${ctx}/category/wedding"><i class="fa fa-heart i-2x"></i></a>
                        </div>
                    </div>
                    <a href="${ctx}/category/wedding"><img src="images/m40.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="${ctx}/category/wedding" class="text-ellipsis">一生有你</a>
                    <a href="${ctx}/category/wedding" class="text-ellipsis text-xs text-muted">婚纱>></a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="${ctx}/category/portrait"><i class="fa fa-film i-2x"></i></a>
                        </div>
                    </div>
                    <a href="${ctx}/category/portrait"><img src="images/m41.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="${ctx}/category/portrait" class="text-ellipsis">我就是我</a>
                    <a href="${ctx}/category/portrait" class="text-ellipsis text-xs text-muted">写真>></a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="${ctx}/category/kids"><i class="fa fa-fighter-jet i-2x"></i></a>
                        </div>
                    </div>
                    <a href="${ctx}/category/kids"><img src="images/m42.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="${ctx}/category/kids" class="text-ellipsis">萌萌哒</a>
                    <a href="${ctx}/category/kids" class="text-ellipsis text-xs text-muted">儿童>></a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="${ctx}/category/life"><i class="fa fa-coffee i-2x"></i></a>
                        </div>
                    </div>
                    <a href="${ctx}/category/life"><img src="images/m43.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="${ctx}/category/life" class="text-ellipsis">等一个晴天</a>
                    <a href="${ctx}/category/life" class="text-ellipsis text-xs text-muted">生活>></a>
                </div>
            </div>
        </div>
    </div>
    <div class="well bg-black b m-t">
        <div class="row">
            <div class="col-xs-6">
                <strong>联系我们</strong>
                <h4>周末摄影工作室</h4>
                <p>
                    福建 莆田 <i class="fa fa-map-marker"></i><br>
                    约片请私信或者QQ<br>
                    QQ: 411751009<br>
                    Email: 411751009@qq.com<br>
                </p>
            </div>
            <div class="col-xs-6">
                <strong>Contact</strong>
                <h4>Weekend Studio</h4>
                <p>
                    Putian Fujian<br>
                    Power by <a href="http://www.openfire.me">Jimmy</a><br>
                    QQ: 315095859<br>
                    Email: jimmy@xlet.org<br>
                </p>
            </div>
        </div>
    </div>
</div>
</div>
</body>
</html>