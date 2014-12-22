<%@ page language="java" pageEncoding="UTF-8" isErrorPage="true" %>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html>
<html lang="en" class="app">
<head>
    <meta charset="utf-8" />
    <title><fmt:message key="login.title"/></title>
    <meta name="description" content="app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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
<body class="bg-info dker">
<section id="content" class="m-t-lg wrapper-md animated fadeInUp">
    <div class="container aside-xl">
        <a class="navbar-brand block" href="${ctx}/home"><span class="h1 font-bold">周末摄影</span></a>
        <section class="m-b-lg">
            <header class="wrapper text-center">
                <strong><fmt:message key="login.heading"/></strong>
            </header>

            <form method="post" id="loginForm" action="<c:url value='/j_security_check'/>"
                  onsubmit="saveUsername(this);return validateForm(this)" class="form-signin" autocomplete="off">
                <div class="form-group">
                    <input type="text" name="j_username" id="j_username" class="form-control rounded input-lg text-center no-border"
                           placeholder="<fmt:message key="label.username"/>" required tabindex="1">
                </div>

                <div class="form-group">
                    <input type="password" class="form-control rounded input-lg text-center no-border" name="j_password" id="j_password" tabindex="2"
                           placeholder="<fmt:message key="label.password"/>" required>
                </div>
                <c:if test="${param.error != null}">
                    <div class="alert alert-danger alert-dismissable">
                        <fmt:message key="errors.password.mismatch"/>
                    </div>
                </c:if>
                <div>
                    <c:if test="${appConfig['rememberMeEnabled']}">
                        <label for="rememberMe" class="checkbox">
                            <input type="checkbox" name="_spring_security_remember_me" id="rememberMe" tabindex="3"/>
                            <fmt:message key="login.rememberMe"/></label>
                    </c:if>
                </div>
                <button type="submit" class="btn btn-lg btn-rounded btn-warning lt b-white b-2x btn-block"><i class="icon-arrow-right pull-right"></i><span class="m-r-n-lg"><fmt:message key='button.login'/></span></button>
                <%--<div class="text-center m-t m-b"><a href="#"><small>Forgot password?</small></a></div>--%>
                <div class="line line-dashed"></div>
                <p class="text-muted text-center"><small>
                    <fmt:message key="login.signup">
                    <fmt:param><c:url value="/signup"/></fmt:param>
                </fmt:message></small></p>
                <div class="">
                <p><fmt:message key="login.passwordHint"/></p>
                </div>
            </form>
        </section>
    </div>
</section>
<!-- footer -->
<footer id="footer">
    <div class="text-center padder">
        <p>
            <small>WEEKEND STUDIO &copy; 2014</small>
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
<c:set var="scripts" scope="request">
    <%@ include file="/scripts/login.js"%>
</c:set>
</body>
</html>
