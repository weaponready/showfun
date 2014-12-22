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
    <script src="${ctx}/static/awesome/js/app.plugin.js"></script>
    <script type="text/javascript" src="${ctx}/static/awesome/js/jPlayer/jquery.jplayer.min.js"></script>
    <script type="text/javascript" src="${ctx}/static/awesome/js/jPlayer/add-on/jplayer.playlist.min.js"></script>
    <%--<script type="text/javascript" src="${ctx}/static/awesome/js/jPlayer/demo.js"></script>--%>
    <sitemesh:head/>
</head>
<body class="">
<section class="vbox">
    <%@ include file="/layouts/header.jsp" %>
    <section>
        <section class="hbox stretch">
            <!-- .aside -->
            <aside class="bg-black dk nav-xs aside hidden-print" id="nav">
                <section class="vbox">
                    <section class="w-f-md scrollable">
                        <div class="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0"
                             data-size="10px" data-railOpacity="0.2">
                            <%@ include file="/layouts/nav.jsp" %>
                        </div>
                    </section>
                    <%@ include file="/layouts/footer.jsp" %>
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
                                <div class="pull-right-lg bg-light">
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