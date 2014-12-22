<%@ page language="java" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!-- nav -->
<nav class="nav-primary hidden-xs">
<ul class="nav bg clearfix">
    <li>
        <a href="${ctx}/category">
            <i class="icon-camera icon text-success"></i>
            <span class="font-bold">作品</span>
        </a>
    </li>
    <li>
        <a href="${ctx}/about">
            <i class="icon-emoticon-smile icon text-info"></i>
            <span class="font-bold">关于</span>
        </a>
    </li>
    <li>
        <a href="${ctx}/contact">
            <i class="icon-bubbles icon text-primary-lter"></i>
            <span class="font-bold">联系</span>
        </a>
    </li>

    <li class="m-b hidden-nav-xs"></li>
</ul>

</nav>
<!-- / nav -->