<?php

require "connect.php";

if(isset($_POST['name'])){//前端ajax传输过来的额
	$username=$_POST['name'];//获取用户名
	$password=md5($_POST['pass']);//获取密码
}else{
	exit('非法操作');
}

//匹配用户名和密码是否同时相等
$query="select * from user where username='$username' and password='$password'";
$result=mysql_query($query);

if(mysql_fetch_array($result)){
	echo true;//登陆成功
}else{
	echo false;//登陆失败
}



?>