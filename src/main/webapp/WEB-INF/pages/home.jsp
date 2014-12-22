<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>Weekend|Studio</title>
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
<br>
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
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m40.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Tempered Song</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Miaow</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m41.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Morbi id neque quam</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Phasellus</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m42.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Aliquam sollicitudin venenatis ipsum</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Malesuada</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m43.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Citudin venenatis ipsum ac</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Volutpat</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m44.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Vestibulum ullamcorper sodales nisi</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Mauris Qiaos</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m40.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Mauris convallis mauris at</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Neque</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m45.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Sodales nisi nec condimentum</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Augue</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m44.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Nisi nec condimentum</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Miaow</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m43.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Phasellus at ultricies nequ</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Volutpat</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m42.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Quis malesuada augue</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Feugiat</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m41.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Ipsum ac feugiat</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Quam AC</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3">
            <div class="item">
                <div class="pos-rlt">
                    <div class="item-overlay opacity r r-2x bg-black">
                        <div class="center text-center m-t-n">
                            <a href="video-detail.html"><i class="fa fa-play-circle i-2x"></i></a>
                        </div>
                    </div>
                    <a href="video-detail.html"><img src="images/m40.jpg" alt="" class="r r-2x img-full"></a>
                </div>
                <div class="padder-v">
                    <a href="video-detail.html" class="text-ellipsis">Ullamcorper sodales nisi nec condimentu</a>
                    <a href="video-detail.html" class="text-ellipsis text-xs text-muted">Convallis</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</body>
</html>