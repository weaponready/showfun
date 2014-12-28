<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<style>
    #galleria {
        height: 320px
    }
</style>
<script type="text/javascript">
    $(function () {
        // Load the classic theme
        Galleria.loadTheme('${ctx}/static/galleria/galleria.classic.min.js');
        <%--Galleria.loadTheme('${ctx}/static/galleria/plugins/history/galleria.history.min.js');--%>
        // Initialize Galleria
        Galleria.run('#galleria');
    })
</script>
<div class="line line-dashed"></div>
<div class="line line-dashed"></div>
<div class="line line-dashed"></div>
<div class="line line-dashed"></div>
<div class="modal-over ">
    <div class="col-sm-8 col-sm-offset-2">
        <div style="padding: 10px;background: #ffffff">
            <div id="galleria">
                <c:forEach var="picture" items="${work.pictures}">
                    <a href="${picture.url}">
                        <img src="${picture.url}" title="${picture.description}">
                    </a>
                </c:forEach>
            </div>
        </div>
        <div class="line line-dashed"></div>
        <a href="#" class="btn btn-primary btn-block rounded" data-dismiss="modal"><i class="fa fa-back"></i>返回</a>
    </div>
</div>
