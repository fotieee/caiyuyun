<?php
	
	//引入连接数据库的文件
	require "connect.php";
	
	
	
	$query1="select * from loop2";//这是一条查询sql语句
	
	$result1=mysql_query($query1);//执行sql语句,存储结果
	//print_r(mysql_fetch_array($result1,MYSQL_ASSOC));
	$array1=array();
	for($i=0;$i<mysql_num_rows($result1);$i++){
		$array1[$i]=mysql_fetch_array($result1,MYSQL_ASSOC);
	}
	
	
	echo json_encode($array1)
?>