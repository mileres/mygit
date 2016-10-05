<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>注册</title>
<link href="css/register.css" type="text/css" rel="stylesheet"/>
</head>
<body>

<form id="register" action="<%=request.getContextPath()%>/userServlet?type=insert" method="post">
    <p>家庭信息</p>
        <br/>
		<span>账号:&nbsp;</span><input type="text" name="userId"/>
		<br><br>
		<span>密码:&nbsp;</span><input type="password" name="password"/>
		<br><br>
		<span>联系电话:&nbsp;</span><input type="text" name="phone"/>
		<br><br>
		<span>家庭地址:&nbsp;</span><input class="longer" type="text" name="address"/>
        <br><br><br/>
   <p>户主信息</p>
        <br/>
    	<span>姓名:&nbsp;</span><input type="text" name="familyMemberName">
    	<br><br>
    	<span>年龄:&nbsp;</span><input type="text" name="age">
    	<br><br>
    	<span>性别:&nbsp;</span><input class="choose" type="radio" name="sex" value="1">男
    		 <input class="choose" type="radio" name="sex" value="0">女
    	<br><br>
    	<span>教育背景:&nbsp;</span><select name="edubg">
    				<option>博士后</option>
    				<option>博士</option>
    				<option>研究生</option>
    				<option>本科</option>
    				<option>高中</option>
    				<option>初中</option>
    				<option>小学</option>
    				<option>其他</option>
    			</select>
    	<br><br>
    	<span>政治面貌:&nbsp;</span><select name="polsta">
    				<option>党员&nbsp;&nbsp;&nbsp;</option>
    				<option>团员</option>
    				<option>群众</option>
    				<option>其他</option>
    			</select>
    	<br><br>
    	<span>民族:&nbsp;</span><input type="text" name="nation">
    	<br><br>
        <span>电话:&nbsp;</span><input type="text" name="phone">
    	<br><br>
    	<span>婚姻状态:&nbsp;</span><input class="choose" type="radio" name="marriage" value="0">未婚
    		 	 <input class="choose" type="radio" name="marriage" value="1">已婚
    	<br><br>
    	
    	<span>电子邮箱:&nbsp;</span><input class="longer" type="text" name="email">
    	<br><br>
    	<span>户籍信息:&nbsp;</span><input class="longer" type="text" name="registry" ></input>
    	<br><br>
    	<span>计生信息:&nbsp;</span><input class="longer" type="text" name="birrthControl"></input>
    	<br><br>
    	<span>社保信息:&nbsp;</span><input class="longer" type="text" name="socialSecurity"></input>
    	<br><br>
    	<span>房产信息:&nbsp;</span><input class="longer" type="text" name="property"></input>
    	<br><br>
    	<input class="btn" type="submit" value="注册">
        <input class="btn" type="button" value="返回"
</form>

</body>
</html>