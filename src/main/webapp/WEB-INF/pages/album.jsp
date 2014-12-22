<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE HTML>
<html>
<head>
    <link rel="stylesheet" href="${ctx}/static/waterfall/css/reset.css">
    <link rel="stylesheet" href="${ctx}/static/waterfall/css/waterfall.css">
    <style>
        * {
            box-sizing: content-box !important;
        }
    </style>
</head>
<body>
<div id="container"></div>
<script type="text/x-handlebars-template" id="waterfall-tpl">
    {{#result}}
    <div class="item">
        <a href="/" data-toggle="ajaxModal">
            <img src="{{cover.url}}" width="192"/>
        </a>
        <div class="">
            {{name}}
        </div>
    </div>
    {{/result}}
</script>
<script src="${ctx}/static/waterfall/libs/jquery.easing.js"></script>
<script src="${ctx}/static/waterfall/libs/handlebars/handlebars.js"></script>
<script src="${ctx}/static/waterfall/libs/mustache/mustache.js"></script>
<script src="${ctx}/static/waterfall/waterfall.min.js"></script>
<script type="text/javascript">
    $(function () {
        $('#container').waterfall({
            itemCls: 'item',
            colWidth: 222,
            gutterWidth: 15,
            gutterHeight: 15,
            checkImagesLoaded: true,
            isAnimated: true,
            loadingMsg: '<div style="text-align:center;padding:10px 0; color:#999;">\
                    <img src="data:image/gif;base64,R0lGODlhEAALAPQAAP///zMzM+Li4tra2u7u7jk5OTMzM1hYWJubm4CAgMjIyE9PT29vb6KiooODg8vLy1JSUjc3N3Jycuvr6+Dg4Pb29mBgYOPj4/X19cXFxbOzs9XV1fHx8TMzMzMzMzMzMyH5BAkLAAAAIf4aQ3JlYXRlZCB3aXRoIGFqYXhsb2FkLmluZm8AIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7" alt="">\
                    <br />使劲加载中...</div>',
            animationOptions: {
            },
            path: function (page) {
                return '${ctx}/api/v1/work?page=' + (page - 1);
            },
            callbacks: {
                renderData: function (data) {
                    var template = $('#waterfall-tpl').html();
                    return Mustache.to_html(template, data);
                }
            }
        });
    });

</script>
</body>
</html>