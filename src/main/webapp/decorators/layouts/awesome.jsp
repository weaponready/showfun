<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="sitemesh" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html lang="en" class="app" xmlns:wb="http://open.weibo.com/wb">
<head>
    <title><sitemesh:title/></title>
    <meta charset="utf-8"/>
    <meta name="description"
          content="app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <link rel="stylesheet" href="${ctx}/static/awesome/js/jPlayer/jplayer.flat.css" type="text/css"/>
    <link rel="stylesheet" href="${ctx}/static/awesome/css/bootstrap.css" type="text/css"/>
    <link rel="stylesheet" href="${ctx}/static/awesome/css/animate.css" type="text/css"/>
    <link rel="stylesheet" href="${ctx}/static/awesome/css/font-awesome.min.css" type="text/css"/>
    <link rel="stylesheet" href="${ctx}/static/awesome/css/simple-line-icons.css" type="text/css"/>
    <link rel="stylesheet" href="${ctx}/static/awesome/css/font.css" type="text/css"/>
    <link rel="stylesheet" href="${ctx}/static/awesome/css/app.css" type="text/css"/>

    <!--[if lt IE 9]>
    <script src="${ctx}/static/awesome/js/ie/html5shiv.js"></script>
    <script src="${ctx}/static/awesome/js/ie/respond.min.js"></script>
    <script src="${ctx}/static/awesome/js/ie/excanvas.js"></script>
    <![endif]-->
    <script src="${ctx}/static/awesome/js/jquery.min.js"></script>
    <%--<script src="http://libs.baidu.com/jquery/1.7.1/jquery.min.js"></script>--%>
    <!-- Bootstrap -->
    <script src="${ctx}/static/awesome/js/bootstrap.js"></script>
    <script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>
    <!-- App -->
    <script src="${ctx}/static/awesome/js/app.js"></script>
    <script src="${ctx}/static/awesome/js/slimscroll/jquery.slimscroll.min.js"></script>
    <!-- parsley -->
    <script src="${ctx}/static/awesome/js/parsley/parsley.min.js"></script>
    <script src="${ctx}/static/awesome/js/parsley/parsley.extend.js"></script>
    <script src="${ctx}/static/awesome/js/app.plugin.js"></script>
    <script type="text/javascript" src="${ctx}/static/awesome/js/jPlayer/jquery.jplayer.min.js"></script>
    <script type="text/javascript" src="${ctx}/static/awesome/js/jPlayer/add-on/jplayer.playlist.min.js"></script>
    <script type="text/javascript" src="${ctx}/static/awesome/js/jPlayer/demo.js"></script>
    <sitemesh:head/>
</head>
<body class="">
<section class="vbox">
    <%@ include file="/decorators/layouts/header.jsp" %>
    <section>
        <section class="hbox stretch">
            <!-- .aside -->
            <aside class="bg-black dk nav-xs aside hidden-print" id="nav">
                <section class="vbox">
                    <section class="w-f-md scrollable">
                        <div class="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0"
                             data-size="10px" data-railOpacity="0.2">
                            <%@ include file="/decorators/layouts/nav.jsp" %>
                        </div>
                    </section>
                    <%@ include file="/decorators/layouts/footer.jsp" %>
                </section>
            </aside>
            <!-- /.aside -->
            <section id="content">
                <section class="hbox stretch">
                    <section>
                        <section class="vbox">
                            <section class="scrollable padder-lg w-f-md" id="bjax-target">
                                <%--<a href="#" class="pull-right text-muted m-t-lg" data-toggle="class:fa-spin"><i
                                        class="icon-refresh i-lg  inline" id="refresh"></i></a>--%>

                            <%--    <h2 class="font-thin m-b">Weekend Studio<span class="musicbar animate inline m-l-sm"
                                                                              style="width:20px;height:20px">
                    <span class="bar1 a1 bg-primary lter"></span>
                    <span class="bar2 a2 bg-info lt"></span>
                    <span class="bar3 a3 bg-success"></span>
                    <span class="bar4 a4 bg-warning dk"></span>
                    <span class="bar5 a5 bg-danger dker"></span>
                  </span>
                                </h2>--%>
                                <sitemesh:body/>
                            </section>
                            <footer class="footer bg-light" style="height: 60px;">
                                <div class="col-sm-8">
                                <div id="jp_container_N">
                                    <div class="jp-type-playlist">
                                        <div id="jplayer_N" class="jp-jplayer hide"></div>
                                        <div class="jp-gui">
                                            <div class="jp-video-play hide">
                                                <a class="jp-video-play-icon">play</a>
                                            </div>
                                            <div class="jp-interface">
                                                <div class="jp-controls">
                                                    <div><a class="jp-previous"><i class="icon-control-rewind i-lg"></i></a></div>
                                                    <div>
                                                        <a class="jp-play"><i class="icon-control-play i-2x"></i></a>
                                                        <a class="jp-pause hid"><i class="icon-control-pause i-2x"></i></a>
                                                    </div>
                                                    <div><a class="jp-next"><i class="icon-control-forward i-lg"></i></a></div>
                                                    <div class="hide"><a class="jp-stop"><i class="fa fa-stop"></i></a></div>
                                                    <div><a class="" data-toggle="dropdown" data-target="#playlist"><i class="icon-list"></i></a></div>
                                                    <div class="jp-progress hidden-xs">
                                                        <div class="jp-seek-bar dk">
                                                            <div class="jp-play-bar bg-info">
                                                            </div>
                                                            <div class="jp-title text-lt">
                                                                <ul>
                                                                    <li></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="hidden-xs hidden-sm jp-current-time text-xs text-muted"></div>
                                                    <div class="hidden-xs hidden-sm jp-duration text-xs text-muted"></div>
                                                    <div class="hidden-xs hidden-sm">
                                                        <a class="jp-mute" title="mute"><i class="icon-volume-2"></i></a>
                                                        <a class="jp-unmute hid" title="unmute"><i class="icon-volume-off"></i></a>
                                                    </div>
                                                    <div class="hidden-xs hidden-sm jp-volume">
                                                        <div class="jp-volume-bar dk">
                                                            <div class="jp-volume-bar-value lter"></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <a class="jp-shuffle" title="shuffle"><i class="icon-shuffle text-muted"></i></a>
                                                        <a class="jp-shuffle-off hid" title="shuffle off"><i class="icon-shuffle text-lt"></i></a>
                                                    </div>
                                                    <div>
                                                        <a class="jp-repeat" title="repeat"><i class="icon-loop text-muted"></i></a>
                                                        <a class="jp-repeat-off hid" title="repeat off"><i class="icon-loop text-lt"></i></a>
                                                    </div>
                                                    <div class="hide">
                                                        <a class="jp-full-screen" title="full screen"><i class="fa fa-expand"></i></a>
                                                        <a class="jp-restore-screen" title="restore screen"><i class="fa fa-compress text-lt"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="jp-playlist dropup" id="playlist">
                                            <ul class="dropdown-menu aside-xl dker">
                                                <!-- The method Playlist.displayPlaylist() uses this unordered list -->
                                                <li class="list-group-item"></li>
                                            </ul>
                                        </div>
                                        <div class="jp-no-solution hide">
                                            <span>Update Required</span>
                                            To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
                                        </div>
                                    </div>

                                </div>
                                </div>

                                <div class="pull-right bg-light">
                                    <wb:follow-button uid="2313696460" type="red_4" width="100%"
                                                      height="64"></wb:follow-button>
                                </div>
                            </footer>
                        </section>
                    </section>
                </section>
                <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open"
                   data-target="#nav,html"></a>
            </section>
        </section>
    </section>
</section>

</body>
</html>