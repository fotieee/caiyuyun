//按钮的事件
;(function(){
	
	
	var k=$('.allselect>.checketbox').css('background-position-y');
	
	
	//全选按钮添加√的事件
	$('.allselect>.checketbox').on('click',function(ev){
		
		ev.stopPropagation()
		if($(this).css('background-position-y')=='0px'){
			
			$('.checketbox').css('background-position-y',-20)
		}else{
			$('.checketbox').css('background-position-y',0)
		}
	})
	
	//店铺按钮添加点击事件
	$('.orderItem-top>.checketbox').on('click',function(ev){
		
		ev.stopPropagation()
		if($(this).css('background-position-y')=='0px'){
			
			$(this).css('background-position-y',-20)
			$(this).parent().siblings('.orderItem-bottom').find('.checketbox').css('background-position-y',-20)
		}else{
			$('.allselect>.checketbox').css('background-position-y',0)
			$(this).css('background-position-y',0)
			
			$(this).parent().siblings('.orderItem-bottom').find('.checketbox').css('background-position-y',0)
		}
		
	})
	//每个商品的按钮点击事件
	
})();