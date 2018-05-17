//是否有cookie用户名
;(function(){
	
	if($.cookie('usename')){
		
		$('.login').hide();
		$('.sign').show()
		$('.sign-name').html($.cookie('usename'))
		
		$('.sign-fasle').on('click',function(){
			
			$.cookie('usename',null)
			$('.login').show();
			$('.sign').hide();
		})
		
	}
	
})();


//固定的顶部shearch显示
;(function(){
	
	$(window).on('scroll',function(){
		if($(this).scrollTop()>=793){
			
			$('.fix-header').stop().slideDown(200)
		}else{
			$('.fix-header').stop().slideUp(200)
		}
	})
	
	
})();



//3级导航ajax的数据传入
;(function(){
	$.ajax({
		type:"get",
		url:"./php/companydata.php",
		async:true,
		success:function(a){
			
			var $oDiv=$('<div class="category-sub"</div>');
			var $oDiv1=$('<div class="detal-word"></div>');
			var $oUl=$('<ul class="detal-l"></ul>');
			$oDiv.append($oDiv1);
			$oDiv1.append($oUl);
			
			var str2=''
			
			var arr=JSON.parse(a);
			var str3=''
			var $logoDiv=$('<div class="clear detal-logo"></div>');
			$.each(arr, function(i,n) {
				if(i!='imgaa'){//拼接3级导航的文字内容
					 var str=''
					 
					$.each(arr[i], function(i,n) {
						str+='<a class=tk'+n.id+' href="#">'+n.title+'</a>'
						
					});
					
					
					str2+=`<li>
								<h3>
									<span>${i}</span>
									<i class="iconfont title-icon"></i>
								</h3>
								<div class="line-con">
								${str}
								</div>
							</li>`
					
				}else{//拼接3级导航的logo图片内容
					
					$.each(arr['imgaa'], function(i,n) {
						str3+=`<a class="imglogo"><img src="${n['url']}"></a>`
					});
					
					
				}
				
				
			});
			
			
			
				$oUl.html(str2);
				$('#category').append($oDiv)
				$logoDiv.html(str3)
				$('.detal-word').after($logoDiv)
				
			
			
			
			
		}
	});
	
})();



//智能搜索框
;(function(){
	var $oUl=$('<ul class="search-api"></ul>')
	
	$('.search-test').on('input',function(){
		
		$('.search-main').append($oUl);
		$.ajax({
			type:'get',
			url:`https://suggest.taobao.com/sug?code=utf-8&q=${$(this).val()}&callback=Cb`,
			dataType:'jsonp',
			jsopCallback:'Cb',
			success:function(a){
				
				var arr=a.result;
				var str='';
				
				
				
				
				$.each(arr,function(i,n){
					str+=`<li>
							<a target="_blank" href="#">
										<span >${n[0]}</span>
									   <span class="count">约${n[1]}个结果</span>
							</a>
					</li>`
				})
				
				$oUl.html(str);
				
				}
		
		})
		
		if($(this).val()==''){
			$('ul.search-api').hide()
		}else{
			$('ul.search-api').show()
		};
	})
	
	
})();


//end


;(function(){
	
//3级导航的鼠标移入显示	事件委托
			$('li.nav-item').on('mouseover',function(ev){
				$(this).css('background','#fff').siblings().css('background',0).children().css('color','#fff')
				$(this).children().css('color','#999999')
			
				$('div.category-sub').eq($(this).index()).css({'display':'block'})
				
				if($(ev.target).parent('.cg-tab')){
					var $dd=$(ev.target).parent('.cg-tab').parent().siblings('.category-sub');
					$dd.on('mouseover',function(){
				
							$('li.nav-item').eq($(this).index()-1).css('background','#fff').children().css('color','#999999')
								
							$(this).css({'display':'block'})
								})
					
					
					
					$dd.on('mouseout',function(){
				
				$(this).css({'display':'none'})
				$('li.nav-item').css('background',0).children().css('color','#fff')
			})
					
					
					
					
				}
			})
			
			$('li.nav-item').on('mouseout',function(ev){
				$('div.category-sub').eq($(this).index()).css({'display':'none'})
				$(this).css('background',0).children().css('color','#fff')
				
				
				
			})
			
			
			
	
})();

//3级导航的鼠标移入显示	--end	






//轮播事件委托----
;(function(){
	
	var $num=0;
	var timer=null
	 timer=setInterval(function(){
	
			var $img2 = $('.banner-con');//移动的图片
			var $btn2 = $('.btn>li');//按钮		 	
					 	$num++
					 	if($num==6){
					 		$num=0
					 	}
					 	$btn2.removeClass('active').eq($num).addClass('active')
					 	$img2.stop(true).animate({
					    		opacity:0
					    	},200,function(){
					    		$img2.eq($num).animate({opacity:1},200)
					    	})
					 },2500);	

	
	$('.banner-slide').hover(function(){
			clearInterval(timer)
	},function(){
			timer=setInterval(function(){
	var $img2 = $('.banner-con');//移动的图片
	var $btn2 = $('.btn>li');//按钮
					 	
					 	$num++
					 	if($num==6){
					 		$num=0
					 	}
					 	$btn2.removeClass('active').eq($num).addClass('active')
					 	$img2.stop(true).animate({
					    		opacity:0
					    	},200,function(){
					    		$img2.eq($num).animate({opacity:1},200)
					    	})
					 },2500)
	})

	
	
		
			$('.btn>li').on('mouseover',function(ev){
				var $img= $(ev.target).parent().siblings('.bannerul').children('.banner-con')//移动的图片
				var $btn = $('.btn>li');//按钮
			
					if($num!=$(this).index()){
							 		$num=$(this).index()
							    	
							    	$btn.removeClass('active').eq($num).addClass('active')
							    	
							    	$img.stop(true).animate({
							    		opacity:0
							    	},200,function(){
							    		$img.eq($num).animate({opacity:1},200)
							    	})
							 		
						}
			
				})					    	
})(); 	 

	

//轮播事件委托end-----


//轮播的ajax数据导入
;(function(){
	
	
	$.ajax({
		type:"get",
		url:"./php/loop.php",
		async:true,
		success:function(a){
			
			var arr=JSON.parse(a);
		
			var $oDiv=$('<div class="bannerul"></div>');
			var str=''
			
			
			$.each(arr,function(i,n){
				if(n['minurl']!=null){
					str+=`<div class="banner-con">
						<a href="#">
							<img class="tanx-banner" src="${n['url']}">
						</a>
						<a class="con-top">
							<img alt="" src="${n['minurl']}" > 
						</a>
						<a class="con-bottom">
							<img alt="" src="${n['min2url']}" > 
						</a>
					</div>`
				}else{
					str+=`<div class="banner-con">
						<a href="#">
							<img class="tanx-banner" src="${n['url']}">
						</a>
						</div>`
				}
				
			})
			
			
		
			
			$oDiv.html(str)
			$('.btn').before($oDiv);
			
			
			//轮播图
			/*	;(function(){
					
					var $img = $('.banner-con');//移动的图片
					var $btn = $('.btn>li');//按钮
					var $num=0;
					var timer=null
					 $btn.on('mouseover',function(){
					 	if($num!=$(this).index()){
					 		$num=$(this).index()
					    	
					    	$btn.removeClass('active').eq($num).addClass('active')
					    	
					    	$img.stop(true).animate({
					    		opacity:0
					    	},200,function(){
					    		$img.eq($num).animate({opacity:1},200)
					    	})
					 		
					 		
					 	}
					    	
					    	
					    })
					 
					 timer=setInterval(function(){
					 	
					 	$num++
					 	if($num==6){
					 		$num=0
					 	}
					 	$btn.removeClass('active').eq($num).addClass('active')
					 	$img.stop(true).animate({
					    		opacity:0
					    	},200,function(){
					    		$img.eq($num).animate({opacity:1},200)
					    	})
					 },2500)
					 
					 $('.bannerul').hover(function(){
					 	clearInterval(timer)
					 },function(){
					 	timer=setInterval(function(){
					 	
					 	$num++
					 	if($num==6){
					 		$num=0
					 	}
					 	$btn.removeClass('active').eq($num).addClass('active')
					 	$img.stop(true).animate({
					    		opacity:0
					    	},200,function(){
					    		$img.eq($num).animate({opacity:1},200)
					    	})
					 },2500)
					 })
					 
					 $('.btn').on('mouseover',function(){
					 	clearInterval(timer)
					 })
					
				})()*/
				//轮播图end

			
			
			
		}
	});
})();


//logo图ajax导入数据
;(function(){
	
	$.ajax({
		type:"get",
		url:"./php/logo.php",
		async:true
	}).then(function(a){
		var arr=JSON.parse(a);
		var $odiv=$('<div class="big-logo"><div class="wrap"><ul class="biglogo-list clear"></ul></div></div>')
		var str=''
		
		
		
		$.each(arr, function(i,n) {
			
			if(i==4){
				return false
			}
			
			$.each(arr, function(j,k) {
				
				str+=`<li>	
							<a href="">
								<img src="${k['url']}">
							</a>
							<div class="fliter">
								<p class="logo-name">${k['text']}</p>
								<p class="btn-enter"><span>点击进入</span></p>
							</div>
					</li>`
			});
			
		});
		
		
		
		str+=`<li>
		<a href=""><img src="${arr[0]['url']}"></a><div class="fliter"><p class="logo-name">${arr[1]['text']}</p><p class="btn-enter"><span>点击进入</span></p></div>
		</li>
		<li><a href=""><img src="${arr[1]['url']}"></a><div class="fliter"><p class="logo-name">${arr[1]['text']}</p><p class="btn-enter"><span>点击进入</span></p></div></li>
		<li><a href=""><img src="${arr[0]['url']}"></a><div class="fliter"><p class="logo-name">${arr[1]['text']}</p><p class="btn-enter"><span>点击进入</span></p></div></li>
		<li><a href=""><img src="${arr[0]['url']}"></a><div class="fliter"><p class="logo-name">${arr[1]['text']}</p><p class="btn-enter"><span>点击进入</span></p></div></li>
		<li><a href=""><img src="${arr[0]['url']}"></a><div class="fliter"><p class="logo-name">${arr[1]['text']}</p><p class="btn-enter"><span>点击进入</span></p></div></li><li class=" biglogo-last">
									<a href="#">
										<i class="iconfont rotate-icon"></i>
										<span>换一批</span>
									</a>
								</li>`
		
		$odiv.children('.wrap').children('.biglogo-list').html(str)
		
		
		$('.pre-brand-save').after($odiv)
	});
	
})();


//天猫超市里面小的tabs切换事件委托
;(function(){
	var bstop=true;
	
	$('.showgoods>.wrap').on('mouseover',function(ev){
		
		if($(ev.target).attr("class")!='btn1 hover'){
			$(ev.target).parent('.big-header').parent().hide().siblings().show()
		}
		if($(ev.target).attr("class")=='big'){
			clearInterval(timer)
		}
		
		
	})
	
	$('.showgoods>.wrap').on('mouseout',function(ev){
		
			
		if($(ev.target).attr("class")=='big'){
			var timer=setInterval(function(){
		if(bstop){
		
			$('.c1').hide().siblings('.c2').show();
			bstop=false;
		}else{
			$('.c2').hide().siblings('.c1').show();
			bstop=true;
		}
		
	},2000)
		}
				
	})
	
	
	var timer=setInterval(function(){
		if(bstop){
		
			$('.c1').hide().siblings('.c2').show();
			bstop=false;
		}else{
			$('.c2').hide().siblings('.c1').show();
			bstop=true;
		}
		
	},2000)
	
	
	
	
	
})();
//天猫超市里面小的tabs切换----end		
		


//天猫活动页面的数据导入
;(function(){
	$.ajax({
		type:"get",
		url:"./php/shop.php",
		async:true
	}).then(function(a){
		var arr1=JSON.parse(a)['info1'];
		
		var $oDiv=$('<div class="tm-shop"></div>')
		var $oDivtop=$('<div class="shop-header clear"></div>')
		var str1=`<a class="cs" href=""><img src="https://img.alicdn.com/tfs/TB1Q67hXPihSKJjy0FeXXbJtpXa-428-50.png"></a>
							<ul class="shop-nav">
								<li><a href="">进口食品</a></li>
								<li><a href="">食品饮料</a></li>
								<li><a href="">粮油副食</a></li>
								<li><a href="">美容洗护</a></li>
								<li><a href="">家居家电</a></li>
								<li><a href="">家庭清洁</a></li>
								<li><a href="">母婴用品</a></li>
								<li><a href=""> 生鲜水果</a></li>
							</ul>`
		
		$oDivtop.html(str1)
		
		var $oDivbottom=$('<div class="shop-bd clear"></div>')
		var str2=`<div class="shop-left"><a class='modulebig' href="#"><img src="${arr1[0]['url']}">
							 		<div class="chihuo">
							 			<p>天猫超市</p>
							 			<p>${arr1[0]['title']}</p>
							 		</div>
							 		<img class="more" src="images/TB1IQBtXaagSKJjy0FbXXa.mVXa-68-68.png">
							 	</a>
							 </div>
							 <div class="shop-right">
							 	<ul class="shop-right-show">
							 		<li class="big">
								 		<div class="contiane">									 				
								 			<div class="c1">
									 			<div class="big-header">
									 				<a class="btn1 hover">今日量抢</a>
									 				<a class="btn1">量贩装</a>
									 			</div>
									 			<div class="big-bttom">
									 				<div class="arrow">
									 					<div class="tittle"><img src="https://img.alicdn.com/tfs/TB12RqQewMPMeJjy1XdXXasrXXa-23-23.png" />
									 						${arr1[1]['title']}
									 					</div>
									 					<div class="text">
									 						一元超值疯狂抢购
									 					</div>
									 				</div><img class="item-img" src="${arr1[1]['url']}">
									 			</div>
								 			</div>
								 			<div class="c2">
									 			<div class="big-header">
									 				<a class="btn1 ">今日量抢</a>
									 				<a class="btn1 hover">量贩装</a>
									 			</div>
									 			<div class="big-bttom">
									 				<div class="arrow">
									 					<div class="tittle">
									 						<img src="https://img.alicdn.com/tfs/TB12RqQewMPMeJjy1XdXXasrXXa-23-23.png" />
									 						${arr1[2]['title']}
									 					</div>
									 					<div class="text">
									 						限时第二杯半价
									 					</div>
									 				</div>
									 				<img class="item-img" src="${arr1[2]['url']}">
									 			</div>
								 			</div>
								 		</div>	
							 		</li>`
		
		
		for(var i=3;i<arr1.length;i++){
			str2+=`<li><div class="contiane"><img class="floor-img" src="${arr1[i]['url']}"><p class="floor-show">${arr1[i]['title']}</p><p class="floor-price">￥${arr1[i]['price']}</p></div></li>`
		}
		str2+=`</ul></div>`
		$oDivbottom.html(str2);
		var $Li=$oDivbottom.children('.shop-right').children('.shop-right-show').children()
		$Li.eq(2).addClass('no-mr').nextAll().addClass('no-bo').last().addClass('no-mr')
		
		$oDiv.append($oDivtop);
		$oDivtop.after($oDivbottom);
		
		$('.showgoods>.wrap').append($oDiv);
		
		

		
	})
	
})();

//天猫国际

;(function(){
	$.ajax({
		type:"get",
		url:"./php/shop.php",
		async:true
	}).then(function(d){
			var arr=JSON.parse(d).info2;
			var $oDiv=$('<div class="tm-shop"></div>');
			
			var $oDivtop=$('<div class="shop-header clear"></div>');
			var $oDivbottom=$('<div class="shop-bd clear"></div>')
			var str1=`<a class="cs" href=""><img src="https://img.alicdn.com/tfs/TB1R.slXGagSKJjy0FgXXcRqFXa-428-50.png"></a>
							<ul class="shop-nav">
								<li><a href="">口红</a></li>
								<li><a href="">YSL</a></li>
								<li><a href="">面膜</a></li>
								<li><a href="">防晒</a></li>
								<li><a href="">迪奥</a></li>
							
							</ul>`
			
			$oDivtop.html(str1);
			
			var str2=`<div class="shop-left">
							 	<a class="modulebig modulebig1" href="#">
							 		
							 		<img src="${arr[0]['url']}">
							 		<div class="chihuo">
							 			<p>天猫超市</p>
							 			<p>${arr[0]['title']}</p>
							 		</div>
							 		<img class="more" src="images/TB1IQBtXaagSKJjy0FbXXa.mVXa-68-68.png">
							 	</a>
							 	<a class="modulebig modulebig2" href="#">
							 		
							 		<img src="${arr[1]['url']}">
							 		<div class="chihuo">
							 			<p>天猫超市</p>
							 			<p>${arr[1]['title']}</p>
							 		</div>
							 		<img class="more" src="images/TB1IQBtXaagSKJjy0FbXXa.mVXa-68-68.png">
							 	</a>
							 </div>
							 <div class="shop-right">
							 	<ul class="shop-right-show">`
			$.each(arr,function(i,n){
				if(i>1){
					
					str2+=`<li>
							 			<div class="contiane">
							 				<img class="floor-img" src="${n['url']}">
							 				<p class="floor-show">${n['title']}</p>
							 				<p class="floor-price">￥${n['price']}</p>
							 			</div>
							 		</li>`
				}
			})
			
			str2+=`</ul></div></div>`;
			$oDivbottom.html(str2)
			var $Li=$oDivbottom.children('.shop-right').children('.shop-right-show').children()
			$Li.eq(3).addClass('no-mr').nextAll().addClass('no-bo').last().addClass('no-mr')
			$oDiv.append($oDivtop);
			$oDivtop.after($oDivbottom);
			
			
			$('.showgoods>.wrap').append($oDiv);
			
			$oDiv.after($('<div class="show-ht"><img src="https://img.alicdn.com/simba/img/TB1V5nzkYSYBuNjSspfSuwZCpXa.jpg" width="1620" height="90"></div>'))
			
			
			$('.show-ht').eq(0).after($oDiv.clone(true)).after($oDiv.clone(true)).after($oDiv.clone(true)).after($('<div class="show-ht"><img src="https://img.alicdn.com/simba/img/TB1Z8lXbL1TBuNjy0FjSuujyXXa.jpg" width="1620" height="90"></div>')).after($oDiv.clone(true)).after($oDiv.clone(true))
			
	})
	
})();


//你喜欢的产品数据导入
;(function(){
	$.ajax({
		type:"get",
		url:"./php/likes.php",
		async:true,
		success:function(d){
			
			var arr=JSON.parse(d).info1;
			var str=''
			$.each(arr, function(i,n) {
				str+=`<li>
								<div class="contiane goods-mo">
									 <img class="floor-img" src="${n['url']}">
									 <p class="floor-show">${n['title']}</p>
									 <p class="floor-price">￥${n['price']}</p>
								</div>
							</li>`
			});
			
			str+=str;
			$('.likes-goods-ul').html(str)
		}
	});
	
})();

//楼梯事件 事件委托

;(function(){
	$(window).on('scroll',function(ev){
	
	if($(this).scrollTop()>$('.pre-brand-save').offset().top+200){
		$('.louti').show()
		if($(this).scrollTop()>$('.tm-shop').eq(0).offset().top&&$(this).scrollTop()<$('.tm-shop').eq(1).offset().top){
			
			$('.louti>ul>li').eq(1).addClass('hover').siblings().removeClass('hover');
		}else if($(this).scrollTop()>$('.tm-shop').eq(1).offset().top&&$(this).scrollTop()<$('.tm-shop').eq(2).offset().top){
			$('.louti>ul>li').eq(2).addClass('hover').siblings().removeClass('hover');
		}else if(($(this).scrollTop()>$('.tm-shop').eq(2).offset().top&&$(this).scrollTop()<$('.tm-shop').eq(3).offset().top)){
			$('.louti>ul>li').eq(3).addClass('hover').siblings().removeClass('hover');
		}else if(($(this).scrollTop()>$('.tm-shop').eq(3).offset().top&&$(this).scrollTop()<$('.tm-shop').eq(4).offset().top)){
			$('.louti>ul>li').eq(4).addClass('hover').siblings().removeClass('hover');
		}else if(($(this).scrollTop()>$('.tm-shop').eq(4).offset().top&&$(this).scrollTop()<$('.tm-shop').eq(5).offset().top)){
			$('.louti>ul>li').eq(5).addClass('hover').siblings().removeClass('hover');
		}else if(($(this).scrollTop()>$('.tm-shop').eq(5).offset().top&&$(this).scrollTop()<$('.tm-shop').eq(6).offset().top)){
			$('.louti>ul>li').eq(6).addClass('hover').siblings().removeClass('hover');
		}else if($(this).scrollTop()>$('.tm-shop').eq(6).offset().top){
			$('.louti>ul>li').eq(7).addClass('hover').siblings().removeClass('hover');
		}
		
		}else{
		$('.louti').hide()
		$(ev.target).parent().removeClass('hover').siblings().removeClass('hover');
	}
})
	
	
	$(document).on('click',function(ev){
		var $k=$(ev.target).parent().parent().attr('id')
		if($k=='floor-nav'){
			
			$(ev.target).parent().addClass('hover').siblings().removeClass('hover');
	     	var num=$(ev.target).parent().index()-1
			if(num<6){
				$(window).scrollTop($('.tm-shop').eq(num).offset().top)
			}else if(num==6){
				$(window).scrollTop($('.likes').eq(0).offset().top)
			}else if(num==7){
				$(window).scrollTop(0);
				$(ev.target).parent().removeClass('hover').siblings().removeClass('hover');
			}
			 
		}
	})
	
	
})();


