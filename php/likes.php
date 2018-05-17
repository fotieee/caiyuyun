<?php
require "connect.php";
	
	$query1="select * from like1";//这是一条查询sql语句
//	$query2="select * from second";
	
	
	$result1=mysql_query($query1);//执行sql语句,存储结果
	//print_r(mysql_fetch_array($result1,MYSQL_ASSOC));
	//$result2=mysql_query($query2);
	
	
	$array1=array();
	for($i=0;$i<mysql_num_rows($result1);$i++){
		$array1[$i]=mysql_fetch_array($result1,MYSQL_ASSOC);
	}
	
	
	//$array2=array();
	//for($i=0;$i<mysql_num_rows($result2);$i++){
	//	$array2[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);
	//}
	
	class infomation{//构造函数
		
	}
	$data=new infomation();//实例化
	
	//echo $data->name;//zhangsan  获取属性(成员的值)；
	$data->info1=$array1;
	//$data->info2=$array2;
	
	echo json_encode($data);
	//echo json_encode($array1)

?>