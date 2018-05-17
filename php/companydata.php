<?php
	//新建数据库(模拟表和数据)
	//连接数据库
	//header('content-type:text/html;charset=utf-8');	
	//$conn=mysql_connect('localhost','root','');
	//if(!$conn){
	//	die('数据库连接失败'.mysql_error());
	//}
	//mysql_select_db('tianmao');
	//mysql_query('SET NAMES UTF8');
	//引入连接数据库的文件
	require "connect.php";
	
	$query1="select * from clss1";//这是一条查询sql语句
	$query2="select * from clss";
	$query3="select * from djrm";
	$query4="select * from lxxp";
	$query5="select * from navlogo";
	
	$result1=mysql_query($query1);//执行sql语句,存储结果
	//print_r(mysql_fetch_array($result1,MYSQL_ASSOC));//返回记录集的第一条记录，同时也是一个数组
	$result2=mysql_query($query2);
	$result3=mysql_query($query3);
	$result4=mysql_query($query4);
	$result5=mysql_query($query5);
	
	$array1=array();
	for($i=0;$i<mysql_num_rows($result1);$i++){
		$array1[$i]=mysql_fetch_array($result1,MYSQL_ASSOC);
	}
	
	$array2=array();
	for($i=0;$i<mysql_num_rows($result2);$i++){
		$array2[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);
	}
	
	$array3=array();
	for($i=0;$i<mysql_num_rows($result3);$i++){
		$array3[$i]=mysql_fetch_array($result3,MYSQL_ASSOC);
	}
	
	$array4=array();
	for($i=0;$i<mysql_num_rows($result4);$i++){
		$array4[$i]=mysql_fetch_array($result4,MYSQL_ASSOC);
	}
	
	$array5=array();
	for($i=0;$i<mysql_num_rows($result5);$i++){
		$array5[$i]=mysql_fetch_array($result5,MYSQL_ASSOC);
	}
	
	//php面向对象
	
	class infomation{//创建一个类
		//属性和方法：共有的属性，私有的，受保护的
		/*public $name='zhangsan';
		private $sex='女';
		protected $age=100;
		
		public function fn(){
			return $this->name;
		}*/
	}
	
	
	
	$data=new infomation();//实例化
	
	//echo $data->name;//zhangsan  获取属性(成员的值)；
	
	$info1='当季流行';
	$info2='精选上装';
	$info3='浪漫裙装';
	$info4='特色女装';
	$info5='女士下装';
	$info6='家居服';
	$info7='imgaa';
	$data->$info1=$array1;
	$data->$info2=$array2;
	$data->$info3=$array3;
	$data->$info4=$array4;
	$data->$info5=$array2;
	$data->$info6=$array4;
	$data->$info7=$array5;//logo
	echo json_encode($data);//实例
	//echo json_encode($array1)
?>