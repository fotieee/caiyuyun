;(function(){
	//显示哪种登入方式
				$('.lg-account .way-icon').on('click',function(){
					$('.lg-qrcode').show();
					$('.lg-account').hide()
						
				})
				
				
				$('.lg-qrcode .way-icon').on('click',function(){
					$('.lg-qrcode').hide();
					$('.lg-account').show()
						
				})
				
		//cooik记入密码
		//console.log($('#rememberpass').prop("checked"))
		//$.cookie("example", "foo",{expires:10});  
		
		$('#lg-btn').on('click',function(){
					var $username=$('#username').val();//用户名
					var $password=$('#password').val();//密码
					$.ajax({
						type:'post',
						url:'./php/login.php',
						data:{//将用户名和密码传输给后端
							name:$username,
							pass:$password
						},
						success:function(data){//请求成功，接收后端返回的值
							if(!data){//用户名或者密码错误
								
								//$('#error').html('用户名或者密码错误');
								$('#password').val('');
								alert('输入的用户名或者密码错误')
							}else{//成功
								
								$.cookie('usename',$username,7)
								
								location.href='index.html';
							}
						}
					})
				});
		
		
		
		
		
		
		})();
