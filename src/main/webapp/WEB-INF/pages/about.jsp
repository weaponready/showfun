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
        .form-control{
            padding: 0px 0px;
        }
    </style>
</head>
<body>
<div class="line line-dashed"></div>
<div class="row">
    <div class="col-lg-8 col-lg-offset-2">
        <div class="blog-post">
            <div class="post-item">
                <div class="post-media">
                    <img src="images/m42.jpg" class="img-full">
                </div>
                <div class="caption wrapper-lg">
                    <h2 class="post-title"><a href="#">7 things you need to know about the flat design</a></h2>
                    <div class="post-sum">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat.
                            <br><br>
                            Phasellus at ultricies neque, quis malesuada augue. Donec eleifend condimentum nisl eu consectetur. Integer eleifend, nisl venenatis consequat iaculis, lectus arcu malesuada sem, dapibus porta quam lacus eu neque.</p>
                    </div>
                    <div class="line line-lg"></div>
                    <div class="text-muted">
                        <i class="fa fa-user icon-muted"></i> by <a href="#" class="m-r-sm">Admin</a>
                        <i class="fa fa-clock-o icon-muted"></i> Feb 20, 2013
                        <a href="#" class="m-l-sm"><i class="fa fa-comment-o icon-muted"></i> 2 comments</a>
                    </div>
                </div>
            </div>
            <div class="post-item">
                <div class="caption wrapper-lg">
                    <h2 class="post-title"><a href="#">Bootstrap 3: What you need to know</a></h2>
                    <div class="post-sum">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat.
                        </p>
                        <h3>Html5 and CSS3</h3>
                        <p>
                            Phasellus at ultricies neque, quis malesuada augue. Donec eleifend condimentum nisl eu consectetur. Integer eleifend, nisl venenatis consequat iaculis, lectus arcu malesuada sem, dapibus porta quam lacus eu neque.</p>
                    </div>
                    <div class="line line-lg"></div>
                    <div class="text-muted">
                        <i class="fa fa-user icon-muted"></i> by <a href="#" class="m-r-sm">Admin</a>
                        <i class="fa fa-clock-o icon-muted"></i> Feb 15, 2013
                        <a href="#" class="m-l-sm"><i class="fa fa-comment-o icon-muted"></i> 4 comments</a>
                    </div>
                </div>
            </div>
        </div>

        <h4 class="m-t-lg m-b">Leave a comment</h4>
        <form>
            <div class="form-group pull-in clearfix">
                <div class="col-sm-6">
                    <label>Your name</label>
                    <input type="text" class="form-control" placeholder="Name">
                </div>
                <div class="col-sm-6">
                    <label >Email</label>
                    <input type="email" class="form-control" placeholder="Enter email">
                </div>
            </div>
            <div class="form-group">
                <label>Comment</label>
                <textarea class="form-control" rows="5" placeholder="Type your comment"></textarea>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success">Submit comment</button>
            </div>
        </form>
    </div>

</div>
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