//一开始的弹出框

;(function(){
	
	$('.tc-agree').on('click',function(){
		$('.tc').hide()
	})
	
	$('.tc-back').on('click',function(){
		$(location).attr('href', 'index.html'); 
		
	})
		
})();


//表单验证-用户名密码和邮箱
;(function(){
				//检验用户名
				var bstop=true;//用户不通过
				var bstop1=true;//密码不通过
				var bstop2=true;//重复
				var bstop3=true;//邮箱不通过
				var usereg=/^([\u4e00-\u9fa5]|[\w\-]){3,15}$/;
				$('#username').on('blur',function(){
					
					var username=$(this).val();//获取用户名值
					if(username!=''){//检测用户名是否为空
						if(usereg.test(username)){//不为空的情况下//检测用户名是否满足正则
							//满足格式的条件后
							//将当前的用户名给后端，后端和数据库进行匹配，不管是否存在，后端返回结果
							$.ajax({
								type:'post',
								url:'./php/reg.php',
								data:{
									name:username//获取用户名给后端
								},
								success:function(d){
									if(d){
										$('#username').next('span').css('color','red').html('用户名已存在');
										bstop=true;
									}else{
										$('#username').next('span').css('color','green').html('√');
										bstop=false;
									}
								}
							})
						}else{
							//不满足3-15字符长度，支持汉字、字母、数字及-各式
							$(this).next('span').css('color','red').html('格式不正确');
							bstop=true;
						}
					}else{
						//如果为空
						
						$(this).next('span').css('color','red').html('用户名不能为空');
						bstop=true;
					}
				});
				
				
				//检验密码
				$('#password').on('blur',function(){
					
					var reg1=/^[0-9A-Za-z]{6,}$/;
					var username=$(this).val();
					if(username!=''){//检测用户名是否为空
						if(reg1.test(username)){
								$('#password').next('span').css('color','green').html('√');
								bstop1=false;
						}else{
							
							$(this).next('span').css('color','red').html('密码格式不正确');
							bstop1=true;
							
						}
						
						
						
					}else{
						$(this).next('span').css('color','red').html('用户名不能为空');
						bstop1=true;
						
					}
					
				})
				
				//检验密码重复
				$('#repass').on('blur',function(){
					var username=$(this).val();
					if(!bstop1){
						if(username==$('#password').val()){
							$('#repass').next('span').css('color','green').html('√');
							bstop2=false;
							
						}else{
						
							$('#repass').next('span').css('color','red').html('俩次密码不一样');
							bstop2=true;
						}
						
					}
					else{
						$('#repass').next('span').css('color','red').html('请先输入密码');
						bstop2=true;
					}
					
				})
				//检验邮箱格式
				
				$('#email').on('blur',function(){
					var usereg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/
					var username=$(this).val();
					if(username!=''){//检测用户名是否为空
						if(usereg.test(username)){
							$('#email').next('span').css('color','green').html('√');
							bstop3=false;
						}else{
							$('#email').next('span').css('color','green').html('邮箱不符合格式');
							bstop3=true;
							
						}
						
					}else{
						//如果为空
						
						$(this).next('span').css('color','red').html('邮箱不能为空');
						bstop3=true;
					}
				})
				
				
				
				
				
				
				$('form').on('submit',function(){//验证不通过无法提交的
				if(bstop||bstop1||bstop2||bstop3){
						return false;//阻止按钮跳转。
						
					}
				
				});
			


})();;
	

	

