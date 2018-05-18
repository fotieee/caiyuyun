//按钮的事件
/*;(function(){
	function totalprice() { //计算总价
	var total = 0; //总的价格
	
	
	var countnum = 0; //总的数量
	$('.oderitem-lsit>li:visible').each(function(){
		console.log($(this).find('.checketbox').css('background-position-y'))
		if($(this).find('.checketbox').css('background-position-y')=='-20px'){//勾选上了
			
			total += parseFloat($(this).find('.amut-price span').html());
			countnum += parseInt($(this).find('.countPanel').find('input').val());
		}
	})
	//赋值
	$('.allmo').html('￥' + total.toFixed(2));
	$('.goodsCountNum').html(countnum);
}
	
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
	
	$('.oderitem-lsit>li').find('.checketbox').on('click',function(ev){
		
		ev.stopPropagation();
		if($(this).css('background-position-y')=='0px'){
			$(this).css('background-position-y',-20)
		
		}else{
			$('.allselect>.checketbox').css('background-position-y',0)
			$(this).css('background-position-y',0)
			$(this).parent().parent().parent().siblings('.orderItem-top').find('.checketbox').css('background-position-y',0)
		}
		totalprice()
	})
	//商品数量的按钮
	$('.reduce').on('click',function(){
		var num=$(this).siblings('input').val()
		num--
		if(num<0){
			num=0;
		}
		$(this).siblings('input').val(num)
		
		
		var kk=$(this).parent().parent().siblings('.unitprice').children('span').html()//单价
		var price=$(this).siblings('input').val();
		
		$(this).parent().parent().siblings('.amut-price').children('span').html((kk*price).toFixed(2))
		
	})
	
	$('.addd').on('click',function(){
		var num=$(this).siblings('input').val()
		num++
		
		$(this).siblings('input').val(num)
		
		
		var kk=$(this).parent().parent().siblings('.unitprice').children('span').html()//单价
		var price=$(this).siblings('input').val();
		
		$(this).parent().parent().siblings('.amut-price').children('span').html((kk*price).toFixed(2))
	
		
		
	})
	
	
})();*/

//推荐商品的数据导入
;(function(){
	
	$.ajax({
		type:"get",
		url:"./php/likes.php",
		async:true
	}).done(function(a){
		var arr=JSON.parse(a)['info2'];
		var str=''
		var $oUl=$('<ul class="cart-last-list"></ul>')
		
		$(arr).each(function(i){
			
			if(i==4){
				return false
			}
			
			str+=`<li>
					<div class="last-img">
						<a href="details.html"><img src="${arr[i]['url']}" sid="${arr[i]['sid']}"></a>
					</div>
					<div class="last-title">
						<div>${arr[i]['title']}</div>
					</div>	
					<div class="last-price">
						<div>
							¥<span>${arr[i]['price']}</span>
						</div>
					</div>
					<div class="cart-join">
						<button>加入购物车</button>
					</div>
				</li>`
			
		})
		
		$oUl.html(str)
		
		$('.cart-last').append($oUl)
		
	})
	
})();

////2.根据cookie值，创建一个商品列表的函数
;(function(){
	
	function createcart(sid, num){//sid：图片的编号  num:商品的数量
		$.ajax({
		url: './php/likes.php',
		async:true,
		dataType: 'json'
	}).done(function(e){
		
		var data=e['info2']
		for(var i = 0; i < data.length; i++){ //图片的sid和数据库里里面的sid匹配
		
			if(sid == data[i].sid){
				var $clone = $('.oderitem-lsit>li:hidden').clone(true);//对隐藏的模块进行克隆
				$clone.find('.goodspice img').attr('src',data[i].url);
				$clone.find('.goodspice img').attr('sid',data[i].sid);
				$clone.find('.unitprice span').html(data[i].price);
				$clone.find('.countPanel input').val(num);
				
				var $dj1 = parseFloat($clone.find('.unitprice span').html()); //获取单价
				$clone.find('.amut-price span').html(($dj1 * num).toFixed(2));//计算总价
				$clone.css('display', 'block');//克隆的模块是隐藏，显示出来。
				$('.oderitem-lsit').append($clone)//追加
				
				//购物车空函数
				kong();
				//结算的总价和总数封装了函数
				totalprice()
			}
			
			
		}
		
	})
		
		
	}
///end	
//如果商品列表(cookie)不存在，购物车为空


function kong() {

	if($.cookie('cartsid')) { //cookie存在，有商品，购物车不再为空
		$('.kong').hide();
			
		$('.catr-main').show()
		$('.cartFooter').show()
	} else { //cookie不存在，无商品，显示kong盒子
		$('.kong').show()
			
		$('.catr-main').hide()
		$('.cartFooter').hide()
	}
}
	
//页面加载检测购物车(cookie里面)是否有数据，有的话创建商品列表
if($.cookie('cartsid') && $.cookie('cartnum')) {
	$('.oderitem-lsit>li:visible').remove();
	var s = $.cookie('cartsid').split(','); //存放sid数组
	var n = $.cookie('cartnum').split(','); //存放数量数组
	
	for(var i = 0; i < s.length; i++) {
		createcart(s[i], n[i]); //遍历创建商品列表
	}
	
	
}
//求所有商品的总价和总的商品的个数的函数

function totalprice() { //计算总价
	var total = 0; //总的价格
	
	
	var countnum = 0; //总的数量
	$('.oderitem-lsit>li:visible').each(function(){
		
		if($(this).find('.checketbox').css('background-position-y')=='-20px'){//勾选上了
			
			total += parseFloat($(this).find('.amut-price span').html());
			countnum += parseInt($(this).find('.countPanel').find('input').val());
		}
	})
	//赋值
	$('.allmo').html('￥' + total.toFixed(2));
	$('.goodsCountNum').html(countnum);
}

//修改数量的操作
//全选按钮添加√的事件
	$('.allselect>.checketbox').on('click',function(ev){
		
		ev.stopPropagation()
		if($(this).css('background-position-y')=='0px'){
			
			$('.checketbox').css('background-position-y',-20)
		}else{
			$('.checketbox').css('background-position-y',0)
		}
		
		totalprice()
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
		totalprice()
	})
	//每个商品的按钮点击事件
	
	$('.oderitem-lsit>li').find('.checketbox').on('click',function(ev){
		
		ev.stopPropagation();
		if($(this).css('background-position-y')=='0px'){
			$(this).css('background-position-y',-20)
		
		}else{
			$('.allselect>.checketbox').css('background-position-y',0)
			$(this).css('background-position-y',0)
			$(this).parent().parent().parent().siblings('.orderItem-top').find('.checketbox').css('background-position-y',0)
		}
		totalprice()
	})
	//商品数量的按钮
	//减数量按钮
	$('.reduce').on('click',function(){
		var num=$(this).siblings('input').val()
		num--
		if(num<0){
			num=0;
		}
		
		$(this).siblings('input').val(num)
		
		var kk=$(this).parent().parent().siblings('.unitprice').children('span').html()//单价
		var price=$(this).siblings('input').val();
		
		$(this).parent().parent().siblings('.amut-price').children('span').html((kk*price).toFixed(2))
		totalprice()
		setcookie($(this));
	})
	
	//加数量按钮
	$('.addd').on('click',function(){
		var num=$(this).siblings('input').val()
		num++
		
		$(this).siblings('input').val(num)
		
		var kk=$(this).parent().parent().siblings('.unitprice').children('span').html()//单价
		var price=$(this).siblings('input').val();
		
		$(this).parent().parent().siblings('.amut-price').children('span').html((kk*price).toFixed(2))
		
		totalprice()
		setcookie($(this));
	})
	
	//直接输入改变数量
$('.countPanel input').on('input', function() {
	var $reg = /^\d+$/g; //只能输入数字
	var $value = parseInt($(this).val());
	if($reg.test($value)) {
		if($value >= 99) { //限定范围
			$(this).val(99);
		} else if($value <= 0) {
			$(this).val(1);
		} else {
			$(this).val($value);
		}
	} else {
		$(this).val(1);
	}
	//改变后的价格
	
	
	var k=parseInt($(this).parents().parents().siblings('.unitprice').find('span').html())
	var ssss=parseInt($(this).val()*k).toFixed(2)
	$(this).parents().parents().siblings('.amut-price').find('span').html(ssss)
	
	totalprice();
	setcookie($(this));
});
	
	
	
	
	
	

//获取对应的cookie值，将其转换成数组
var sidarr = [];
var numarr = [];

function cookieToArray() {
	if($.cookie('cartsid')) {
		sidarr = $.cookie('cartsid').split(',');
	}

	if($.cookie('cartnum')) {
		numarr = $.cookie('cartnum').split(',');
	}
}

	//删除cookie的函数
function delgoodslist(sid, sidarr) { //sid：当前的sid，sidarr:cookie的sid的值
	var index = -1;
	for(var i = 0; i < sidarr.length; i++) {
		if(sid == sidarr[i]) {
			index = i;
		}
	}
	sidarr.splice(index, 1); //删除数组对应的值
	numarr.splice(index, 1); //删除数组对应的值
	$.cookie('cartsid', sidarr.toString(), 7); //添加cookie
	$.cookie('cartnum', numarr.toString(), 7);
}

//将改变后的数量的值存放到cookie
function setcookie(obj) { //obj:当前操作的对象
	cookieToArray();//获取对应的cookie值，将其转换成数组
	var $index = obj.parents().parents().siblings('.oderitem-img').find('img').attr('sid');
	
	numarr[sidarr.indexOf($index)] = obj.parents().children('input').val();
	$.cookie('cartnum', numarr.toString(), 7);
}


//删除cookie的函数
function delgoodslist(sid, sidarr) { //sid：当前的sid，sidarr:cookie的sid的值
	var index = -1;
	for(var i = 0; i < sidarr.length; i++) {
		if(sid == sidarr[i]) {
			index = i;
		}
	}
	
	sidarr.splice(index, 1); //删除数组对应的值
	numarr.splice(index, 1); //删除数组对应的值
	
	$.cookie('cartsid', sidarr.toString(), 7); //添加cookie
	$.cookie('cartnum', numarr.toString(), 7);
}

//删除单个商品的函数

$('.all-remove').on('click',function(){
	cookieToArray()//获得cookie里面的数组
	 if(confirm('你确定要全部删除吗？')){
   	 $('oderitem-lsit>li').remove();
   }
	//删除全部cookie
	$.cookie('cartsid', null); 
	$.cookie('cartnum', null);
	totalprice();
	kong()
	
})

//删除选择中全部的商品
$('.delected').on('click',function(){
	cookieToArray()//获得cookie里面的数组
	 if(confirm('你确定要删除吗？')){
   	 $(this).parents().parents().parents('li').remove();
   }
	//删除cookie
	var num=$(this).parents().parents('.czzz').siblings('.amout').find('input').val()
	var sid=$(this).parents().parents('.czzz').siblings('.oderitem-img').find('img').attr('sid')
	
	delgoodslist(sid,sidarr)
	totalprice();
	kong()
	
})

//推荐商品的加入购物车按钮的事件委托
$('.cart-last').on('click','.cart-last-list button',function(){
	//获取cookie里面的数据到数组里面膜
	cookieToArray()
	
	var sid=$(this).parents().siblings('.last-img').find('img').attr('sid')
	
	
	if ($.inArray(sid, sidarr) != -1){//判断sid是否存在cookie中
	 		
	 		if($.cookie('cartnum')==''){//sid存在cookie中判断其数量是否为空（零） 
	 			
	 			numarr[$.inArray(sid,sidarr)]=1;
	 			$.cookie('cartnum', numarr.toString(), 7);//修改后的结果
				sidarr[$.inArray(sid,sidarr)]=sid;//将当前id添加到对应的位置。
        		$.cookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
	 		}else{//sid存在cookie中并且数量不为零
	 			
				numarr[$.inArray(sid,sidarr)]++
				console.log(numarr)
				$.cookie('cartnum', numarr.toString(), 7);//修改后的结果
	 			
	 		}
	 		
	 		
	 	}else{//不存在
	 		sidarr.push(sid);//将当前id添加到数组里面。
	 		 $.cookie('cartsid',sidarr.toString(),7)//将整个数组添加到cookie
        	console.log('sider:'+sidarr)
        	
        	console.log('cookiesid:'+$.cookie('cartsid')) 
        	numarr.push(1);//存放输入的数量，默认是1
        	console.log('numarr:'+numarr)
        	 $.cookie('cartnum',numarr.toString(),7)
        	
	 		
	 	}
	
	
	
	if($.cookie('cartsid') && $.cookie('cartnum')) {
	$('.oderitem-lsit>li:visible').remove();
	var s = $.cookie('cartsid').split(','); //存放sid数组
	var n = $.cookie('cartnum').split(','); //存放数量数组
	
	for(var i = 0; i < s.length; i++) {
		createcart(s[i], n[i]); //遍历创建商品列表
	}
	
	
}
	
	
	
	
	
	
})


})();
