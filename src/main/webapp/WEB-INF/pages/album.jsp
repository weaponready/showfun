<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE HTML>
<html>
<head>
    <link rel="stylesheet" href="${ctx}/static/waterfall/css/reset.css">
    <link rel="stylesheet" href="${ctx}/static/waterfall/css/waterfall.css">
    <link href="${ctx}/styles/camera.css" rel="stylesheet" type="text/css"/>
    <script src="${ctx}/static/galleria/galleria-1.4.2.min.js"></script>
    <%--<script src="${ctx}/static/galleria/plugins/history/galleria.history.min.js"></script>--%>
    <script src="${ctx}/static/galleria/plugins/flickr/galleria.flickr.min.js"></script>
    <style>
        .item {
            box-sizing: content-box !important;
        }

    </style>
</head>
<body>
<div class="row">
    <div class="col-lg-8 col-lg-offset-2">
        <div class="line line-dashed"></div>
        <!-- .crousel slide -->
        <div id="container"></div>
    </div>
</div>
<script type="text/x-handlebars-template" id="waterfall-tpl">
    {{#list}}
    <div class="item">
        <a href="/gallery/{{id}}" data-toggle="ajaxModal">
            <img src="{{cover}}" width="192"/>
        </a>
        <div class="split">{{memo}}</div>
        <div class="split">
            <a class="btn btn-default btn-sm pull-left" data-toggle="button">
                <i class="fa fa-heart-o text"></i>
                <i class="fa fa-heart text-active text-primary"></i>
            </a>
            <span class="thumb-sm avatar pull-right m-l-xs">
                <img src="{{avatar}}" class="dker" style="padding: 5px;" alt="...">
            </span>
        </div>
    </div>
    {{/list}}
</script>
<script src="${ctx}/static/waterfall/libs/jquery.easing.js"></script>
<script src="${ctx}/static/waterfall/libs/handlebars/handlebars.js"></script>
<script src="${ctx}/static/waterfall/libs/mustache/mustache.js"></script>
<script src="${ctx}/static/waterfall/waterfall.min.js"></script>
<script type="text/javascript">
    $(function () {
        $('#container').waterfall({
            itemCls: 'item',
            colWidth: 200,
            gutterWidth: 10,
            gutterHeight: 15,
            isAnimated: true,
            loadingMsg: '<div style="text-align:center;padding:10px 0; color:#999;">\
                    <img src="data:image/gif;base64,R0lGODlhEAALAPQAAP///zMzM+Li4tra2u7u7jk5OTMzM1hYWJubm4CAgMjIyE9PT29vb6KiooODg8vLy1JSUjc3N3Jycuvr6+Dg4Pb29mBgYOPj4/X19cXFxbOzs9XV1fHx8TMzMzMzMzMzMyH5BAkLAAAAIf4aQ3JlYXRlZCB3aXRoIGFqYXhsb2FkLmluZm8AIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7" alt="">\
                    <br />使劲加载中...</div>',

            path: function (page) {
                return '${ctx}/api/v1/work/${type}?page=' + (page - 1);
            },
            callbacks: {
                renderData: function (data) {
                    if (data.pageNumber >= data.totalPages) {
                        $('#container').waterfall('pause', function () {
                            $('#waterfall-loading').fadeOut();
                            $('#waterfall-message').html('<div class="col-sm-3"></div><div class="col-sm-4"><div class="alert alert-info">\
                                    <button type="button" class="close" data-dismiss="alert">×</button>\
                            <i class="fa fa-info-sign"></i><strong>Okay!</strong> 已经 <a href="#" class="alert-link">加载所有作品</a>, 欢迎投稿.</div></div>').fadeOut(4000);
                        });
                    }
                    var template = $('#waterfall-tpl').html();
                    return Mustache.to_html(template, data);
                },
                loadingFinished: function ($loading, isBeyondMaxPage) {

                    //alert($loading+':'+isBeyondMaxPage);
                }

            }
        });
    });

</script>
</body>
</html>