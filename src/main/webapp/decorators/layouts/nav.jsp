<%@ page language="java" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!-- nav -->
<nav class="nav-primary hidden-xs">
    <ul class="nav bg clearfix">
        <li>
            <a href="${ctx}/about">
                <i class="icon-emoticon-smile icon text-info"></i>
                <span class="font-bold">关于</span>
            </a>
        </li>
        <li>
            <a href="#modal-form" data-toggle="modal">
                <i class="icon-bubbles icon text-primary-lter"></i>
                <span class="font-bold">联系</span>
            </a>
        </li>

        <li class="m-b hidden-nav-xs"></li>
    </ul>
    <ul class="nav" data-ride="collapse">
        <li class="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
        </li>
        <li >
            <a href="#" class="auto">
                        <span class="pull-right text-muted">
                          <i class="fa fa-angle-left text"></i>
                          <i class="fa fa-angle-down text-active"></i>
                        </span>
                <i class="icon-camera icon">
                </i>
                <span>作品</span>
            </a>
            <ul class="nav dk text-sm">
                <li >
                    <a href="${ctx}/category/wedding" class="auto">
                        <i class="fa fa-angle-right text-xs"></i>

                        <span>婚纱</span>
                    </a>
                </li>
                <li >
                    <a href="${ctx}/category/portrait" class="auto">
                        <i class="fa fa-angle-right text-xs"></i>

                        <span>写真</span>
                    </a>
                </li>
                <li >
                    <a href="${ctx}/category/kids" class="auto">
                        <i class="fa fa-angle-right text-xs"></i>

                        <span>儿童</span>
                    </a>
                </li>
                <li >
                    <a href="${ctx}/category/life" class="auto">
                        <i class="fa fa-angle-right text-xs"></i>

                        <span>生活</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
    <div class="modal fade" id="modal-form">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body wrapper-lg">
                    <form class="form-horizontal" data-validate="parsley">
                        <section class="panel panel-default">
                            <header class="panel-heading">
                                <span class="h4">联系我们</span>
                            </header>
                            <div class="panel-body">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="姓名" data-required="true">
                                </div>
                                <div class="form-group">
                                    <input type="text" data-type="phone" data-required="true" class="form-control"
                                           placeholder="联系电话">
                                </div>
                                <div class="form-group">
                                    <input type="text" data-type="address" data-required="false" class="form-control"
                                           placeholder="您的地址">
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="6" data-minwords="6" data-required="true"
                                              placeholder="留言"></textarea>
                                </div>
                            </div>
                            <footer class="panel-footer text-right bg-light">
                                <div class="btn btn-danger" onclick="javascript:$('#modal-form').modal('');">取消</div>
                                <button type="submit" class="btn btn-success btn-s-xs">提交</button>
                            </footer>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script>

    </script>
</nav>
<!-- / nav -->