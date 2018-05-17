<?php

	require "connect.php";
	//确认前端是否将用户名传输过来。
	//如果用户名存在，或者点击了submit按钮
	if(isset($_POST['name']) || isset($_POST['submit'])){
		$username=@$_POST['name'];//@:容错
	}else{
		
		exit('非法操作');//输出文字，退出程序
	}
	
	//判断用户输入的用户名是否存在数据库中,引号。
	//username:数据库的字段
	//$username：前端传输过来的值
	$query1="select * from user where username='$username'";
	
	$result=mysql_query($query1);//如果$result有结果，代表用户名存在数据库中
	
	if(mysql_fetch_array($result)){//有重复
		echo true;//1
	}else{
		echo false;//空
	}
	
	
	
	
	
	//注册的信息放置到数据库里面
	if(isset($_POST['submit'])){
		$user=$_POST['username'];//用户名
		$pass=md5($_POST['password']);//密码
		$email=$_POST['email'];//邮箱
		$query="insert user values(null,'$user','$pass','$email',null)";
		mysql_query($query);
		header('location:../login.html');//跳转到login.html页面
	}
	
	
	

?>