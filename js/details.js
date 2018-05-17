
//放大镜特效
;(function(){
	var wrap=$('.fdj')
	 var $spic = $('.spic');
    var $bpic = $('.bpci');
    var $sf = $('.sf');
    var $bf = $('.bf');
    var cd=$spic.width()*$bf.width() / $bpic.width();
    var scale = $bf.width() / $sf.width();//比例
    $spic.on('mouseenter',function(){
    	$sf.css({'width':cd,'height':cd,'visibility':'visible'})//长方形
    	$bf.show()
    	$spic.on('mousemove',function(ev){
    		var x = ev.pageX - wrap.offset().left - $sf.width() / 2;
            var y = ev.pageY - wrap.offset().top - $sf.width() / 2 ;
            
             if (x < 0) {
                x = 0;
            } else if (x >= $spic.width() - $sf.width() - 2) {
                x = $spic.width() - $sf.width() - 2;
            }
            if (y < 0) {
                y = 0;
            } else if (y >= $spic.height() - $sf.height() - 2) {
               y = $spic.height() - $sf.height() - 2;
            }
            $sf.css({'top':y,'left':x})
            $bpic.css({'left':-x* 1.85,'top':-y * 1.85})
       
    	})
    	
    	$spic.on('mouseleave',function(){
    		$sf.css({'visibility':'hidden'})
    		$bf.hide()
    		
    	})
    	
    })
	
	//给下面每个小图标都加一个点击事件
	$.each($('.fdj-list>li>a'), function(i,n) {
    		$(n).on('mouseover',function(){
    			var img=$(this).children('img').attr('src')
    			$('.bpci').attr('src',img)
    			$('.spicimg').attr('src',img)
    			
    			
    		})
    	});
	
	
})();

//点击做抛物线运动
;(function(){
	//抛物线运动的插件
	var ooff=$('#buycay').offset()
	var se=$('#boll').offset()
	
	
	
	
	
	
	$('#comm-jion').on('click',function(){
		
		  $('#boll').stop().css({'top':se.top,'left':se.left})
		  
		ooff=$('#buycay').offset()
		var bool = new Parabola({
        el: "#boll",
        offset: [ooff.left-se.left, ooff.top-se.top],
        curvature: 0.005,
        duration: 1000,
        callback:function(){//抛物线成功之后的回调函数
        	//小球回复原来的位置
           $('#boll').css({'top':se.top,'left':se.left})
           detail()
        },
        stepCallback:function(x,y){
           
          
        }
    });
		
		bool.start()
		
	})
	
	//第一步思路：将商品的id和数量存放的cookie和数据库里面。
	//第二步思路：定义两个数组接收存放的数量和id,提前约定存放cookie的名称。
			var sidarr = [];
			var numarr = [];
	function getcookievalue(){
				if($.cookie('cartsid')){//cartsid：cookie里面id的名称
					sidarr=$.cookie('cartsid').split(',');
				}
				
				if($.cookie('cartnum')){//cartnum：cookie里面数量的名称
					numarr=$.cookie('cartnum').split(',');
				}
			}
	//第三步思路：通过判断商品的id是否存在上面获取的sid里面。
	//在抛物完成之后的运动(detail)中进行
	 function detail(){
	 	var sid=$('.spicimg').attr('sid')
	 	
	 	getcookievalue();//获取cookie中已经保存的商品的id和数量,放到对应的数组中,利用数组进行匹配
	 	
	 	if ($.inArray(sid, sidarr) != -1){//判断sid是否存在cookie中
	 		
	 		if($.cookie('cartnum')==''){//sid存在cookie中判断其数量是否为空（零） 
	 			var num=parseInt($('#lookgin').val());
	 			numarr[$.inArray(sid,sidarr)]=num;
	 			$.cookie('cartnum', numarr.toString(), 7);//修改后的结果
				sidarr[$.inArray(sid,sidarr)]=sid;//将当前id添加到对应的位置。
        		$.cookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
	 		}else{//sid存在cookie中并且数量不为零
	 			var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('#lookgin').val());
				numarr[$.inArray(sid,sidarr)]=num;
				$.cookie('cartnum', numarr.toString(), 7);//修改后的结果
	 			
	 		}
	 		
	 		
	 	}else{//不存在
	 		sidarr.push(sid);//将当前id添加到数组里面。
	 		 $.cookie('cartsid',sidarr.toString(),7)//将整个数组添加到cookie
        
        	numarr.push($('#lookgin').val());//存放输入的数量，默认是1
        	 $.cookie('cartnum',numarr.toString(),7)
        	
	 		
	 	}
	 	
	 }
	 
	 
	 
	 //商品的数量
	var $num11=$('#lookgin').val()
	
	//数量多少点击事件
	$('.addnum').on('click',function(){
		$num11++
	$('#lookgin').val($num11)
	})
	$('.reducenum').on('click',function(){
		$num11--
		if($num11<=0){
			$num11=0
		}
		$('#lookgin').val($num11)
	})
	
	
	
})();