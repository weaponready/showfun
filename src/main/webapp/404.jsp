<%@ include file="/common/taglibs.jsp"%>

<!DOCTYPE html>
<html lang="en" class="app">
<head>
    <meta charset="utf-8" />
    <title>Musik | Web Application</title>
    <meta name="description" content="app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="${ctx}/static/awesome/js/jPlayer/jplayer.flat.css" type="text/css" />
    <link rel="stylesheet" href="${ctx}/static/awesome/css/bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="${ctx}/static/awesome/css/animate.css" type="text/css" />
    <link rel="stylesheet" href="${ctx}/static/awesome/css/font-awesome.min.css" type="text/css" />
    <link rel="stylesheet" href="${ctx}/static/awesome/css/simple-line-icons.css" type="text/css" />
    <link rel="stylesheet" href="${ctx}/static/awesome/css/font.css" type="text/css" />
    <link rel="stylesheet" href="${ctx}/static/awesome/css/app.css" type="text/css" />
    <!--[if lt IE 9]>
    <script src="${ctx}/static/awesome/js/ie/html5shiv.js"></script>
    <script src="${ctx}/static/awesome/js/ie/respond.min.js"></script>
    <script src="${ctx}/static/awesome/js/ie/excanvas.js"></script>
    <![endif]-->
</head>
<body class="bg-light dk">
<section id="content">
    <div class="row m-n">
        <div class="col-sm-4 col-sm-offset-4">
            <div class="text-center m-b-lg">
                <h1 class="h text-white animated fadeInDownBig">404</h1>
            </div>
            <div class="list-group auto m-b-sm m-b-lg">
                <a href="index.html" class="list-group-item">
                    <i class="fa fa-chevron-right icon-muted"></i>
                    <i class="fa fa-fw fa-home icon-muted"></i> Goto homepage
                </a>
                <a href="#" class="list-group-item">
                    <i class="fa fa-chevron-right icon-muted"></i>
                    <i class="fa fa-fw fa-question icon-muted"></i> Send us a tip
                </a>
                <a href="#" class="list-group-item">
                    <i class="fa fa-chevron-right icon-muted"></i>
                    <span class="badge bg-info lt">021-215-584</span>
                    <i class="fa fa-fw fa-phone icon-muted"></i> Call us
                </a>
            </div>
        </div>
    </div>
</section>
<!-- footer -->
<footer id="footer">
    <div class="text-center padder clearfix">
        <p>
            <small>Web app framework base on Bootstrap<br>&copy; 2014</small>
        </p>
    </div>
</footer>
<!-- / footer -->
<script src="${ctx}/static/awesome/js/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="${ctx}/static/awesome/js/bootstrap.js"></script>
<!-- App -->
<script src="${ctx}/static/awesome/js/app.js"></script>
<script src="${ctx}/static/awesome/js/slimscroll/jquery.slimscroll.min.js"></script>
<script src="${ctx}/static/awesome/js/app.plugin.js"></script>
</body>
</html>

<page:applyDecorator name="default">

<head>
    <title><fmt:message key="404.title"/></title>
    <meta name="heading" content="<fmt:message key='404.title'/>"/>
</head>

<p>
    <fmt:message key="404.message">
        <fmt:param><c:url value="/home"/></fmt:param>
    </fmt:message>
</p>
<p style="text-align: center">
    <a href="http://www.flickr.com/photos/mcginityphoto/6716288117/" title="Lake McDonald by McGinityPhoto, on Flickr">
      <img src="http://farm8.staticflickr.com/7035/6716288117_5d84ab851d_z.jpg" width="640" height="426" 
      alt="Lake McDonald" style="margin: 20px; border: 1px solid black"></a>
</p>
</page:applyDecorator>