$(function(){
	
//搜索区域下拉菜单开始
var seeW = $('body').width();
//設置窗口  获得可见区域的宽度
$('.search_centre ul li .search_centre_ej').css({'width':seeW+'px','margin-left':-seeW/2+'px'});
//	設置窗口 事件 获得可见区域的宽度
	$(window).resize(function(){
					var seeW = $('body').width();
					$('.search_centre ul li .search_centre_ej').css({'width':seeW+'px','margin-left':-seeW/2+'px'})
				})
				



//移入事件
$('.search_centre ul li').mouseenter(function  () {
//	移入时找到 find()子元素  search_centre_ej元素  .show()显示       .animate设置下拉高度300PX    和时间300
	$(this).find('.search_centre_ej').show().stop().animate({'height':'229px'},300).css({'border-top':'1px solid #e0e0e0'});
//	 	移入时找到siblings兄弟元素      中find()子元素       设置 CSS高度样式每次切换时不用再次出现弹拉效果    hide()隐藏
	$(this).siblings('li').find('.search_centre_ej').css({'height':'229px'}).hide();
});


//移出事件
$('.search_centre ul li').mouseleave(function  () {
////	移出时找到    find()子元素    .animate设置上拉高度    和时间300  
$(this).find('.search_centre_ej').stop().animate({'height':'0px'},300).css({'border':'none'});
//     移出时找到siblings兄弟元素      中find()子元素         设置 CSS高度样式每次切换时不用再次出现弹拉效果          hide()隐藏
$(this).siblings('li').find('.search_centre_ej').css({'height':'229px'}).hide();
});

//搜索区域下拉菜单结束

//轮播图开始
	var num =0;
//	设置定时器
	var timer = setInterval(run,1000);
	
	function run(){
		num++;
		
		if(num==6){
			num=0;
		}
//		让.content对应的下标为num显示,他的兄弟元素隐藏
//						eq()表示下标  show()显示siblings()兄弟元素  .hide()表示隐藏
		$('.map .map_right img').eq(num).fadeIn(1000).siblings('img').fadeOut(1000);
			
			
		$('.map .map_right ul li').eq(num).css({'background':'#757575','border':'1px solid black'}).siblings().css({'background':'#CCCCCC','border':'none'})
	}
	
	
	$('.map').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(run,2000);
	})
	
	
	$('.map_right_aa').click(function(){
		num--;
		if(num==-1){
			num=5;
		}
		$('.map .map_right img').eq(num).fadeIn(1000).siblings('img').fadeOut(1000);
		
				$('.map .map_right ul li').eq(num).css({'background':'#757575','border':'1px solid black'}).siblings().css({'background':'#CCCCCC','border':'none'})
	})
	
	
	$('.map_right_bb').click(function(){
		num++;
		if(num==6){
			num=0;
		}
		$('.map .map_right img').eq(num).fadeIn(1000).siblings('img').fadeOut(1000);
		
				$('.map .map_right ul li').eq(num).css({'background':'#757575','border':'1px solid black'}).siblings().css({'background':'#CCCCCC','border':'none'})
	})
	
		$('.map .map_right ul li').click(function(){
			num=$(this).index();
			
					$('.map .map_right img').eq(num).fadeIn(1000).siblings('img').fadeOut(1000);
		
				$('.map .map_right ul li').eq(num).css({'background':'#757575','border':'1px solid black'}).siblings().css({'background':'#CCCCCC','border':'none'})
		});
//轮播图开始	
	
	
	
	//小米明星单品 滑动效果

//  	定义一个大总管变量
    	var tum=0;
     
     
     //    	//  	给左添加点击事件
 $('.mx .mxs2  .mxs_dj2 ').click(function  () {
             tum--;
//        判断条件 当
         if (tum<=0) {
//       	
//         $('#mx .mxx ul').css({'left':'0px'});
//       	再让他滚动到第一页
 			tum=0;
         };
                         
//       设置left值,500毫秒变化
//        animate()改变css样式
  	$('.mx .mxx .mxx_ul').stop().animate({'left':-1240*tum+'px'},500);
    $(this).find('span').addClass('activexx').siblings().removeClass('activexx'); 
  
//  $(this).addClass('activeaa').siblings().removeClass('activeaa');
      });
     
     
     
     
//   ////  	给右添加点击事件
 $('.mx .mxs2  .mxs_dj1').click(function  () {
             tum++;
//        判断条件 
         if (tum>=1) {
//       	
//         $('#mx  .mxx ul').css({'left':'-2456px'});
//       	再让他滚动到第2页
 			tum=1;
         };
                  
                      
//       设置left值,500毫秒变化
//        animate()改变css样式
   	$('.mx .mxx .mxx_ul').stop().animate({'left':-1240*tum+'px'},500);
      $(this).find('span').addClass('activexx').siblings().removeClass('activexx'); 
//    $('.mxs3').addClass('activexx').siblings().removeClass('activexx'); 
      });


	
//小米明星单品 滑动效果
	
	
	
//	热门-家居tab切换
	
//$('.jd .jd_top_right .lid ')抓取 id是box里的ul 里面的 li
//				并给他们添加移入事件

$('.jdqh .jd_top_right  .lid ').mouseover(function  () {
//	获取当前点击的序号
	var dum = $(this).index();
//	alert(dum)
//	让.jd_bottom_right ul对应的下标为dum显示,他的兄弟元素隐藏
//	 parents()祖先元素     find()子元素    eq()表示下标      show()显示siblings()兄弟元素  .hide()表示隐藏
$(this).parents('.jd').find('.jd_bottom_right ul').eq(dum).show().siblings('ul').hide();

$(this).addClass('active11').siblings('.lid').removeClass('active11');
})


//设置弹拉效果
$(' .jd .jd_bottom_right ul li').hover(function  () {
	
	$(this).find(' .jd_bottom_right_mb').show().stop().animate({'height':'70px'},300);
//	$(this).siblings('li').find('.jd_bottom_right_mb').css({'height':'70px'},).hide();
//	
},function  () {
	$(this).find(' .jd_bottom_right_mb').stop().animate({'height':'0px'},300);
	
})

//	热门-家居tab切换	
	

//为你推荐滑动效果

//  	定义一个大总管变量
    	var wum=0;
     
     
     //    	//  	给左添加点击事件
 $('.mx .mxs2  .mxs_dj4 ').click(function  () {
             wum--;
//        判断条件 当
         if (wum<=0) {
//       	
//         $('#mx .mxx ul').css({'left':'0px'});
//       	再让他滚动到第一页
 			wum=0;
         };
                         
//       设置left值,500毫秒变化
//        animate()改变css样式
  	$('.mx .mxx .mxx_ull').stop().animate({'left':-1240*wum+'px'},500);
    $(this).addClass('active').siblings().removeClass('active');          
      });
     
     
     
     
//   ////  	给右添加点击事件
 $('.mx .mxs2  .mxs_dj3').click(function  () {
             wum++;
//        判断条件 
         if (wum>=2) {
//       	
//         $('#mx  .mxx ul').css({'left':'-2456px'});
//       	再让他滚动到第2页
 			wum=2;
         };
                  
                      
//       设置left值,500毫秒变化
//        animate()改变css样式
   	$('.mx .mxx .mxx_ull').stop().animate({'left':-1240*wum+'px'},500);
      $(this).addClass('active').siblings().removeClass('active');          
      });


//为你推荐滑动效果





	//<!--下方内容区域开始--> 滑动效果
	
	
//
//定义大总管变
				    var rrm=0;
//				给右箭头添加点击事件
				$(' .nr .nrx .ull .nrxli .nrh_top_right').click(function(){
					var len = $(this).siblings('.ull_ul').find('.ull_li').length;
//				alert(len)
					rrm++;
					if(rrm==len){
						rrm=len-1;
//					 alert(123);
					}
//					$(this).parents('.jd').find('.jd_bottom_right ul').
					$(this).siblings(' .ull_ul').stop().animate({'left':-296*rrm+'px'})
					$(this).siblings(' .ulu' ).find('.lit').eq(rrm).addClass('active1').siblings('.lit').removeClass('active1');
					 $(this).addClass('activeaa').siblings().removeClass('activeaa');
				})
				
				
//				给左箭头添加点击事件
				$('.nr .nrx .ull .nrxli .nrh_top_left').click(function(){
					rrm--;
					if(rrm==-1){
						rrm=0;
					}
					$(this).siblings('.ull_ul').stop().animate({'left':-296*rrm+'px'})
					$(this).siblings(' .ulu').find('.lit').eq(rrm).addClass('active1').siblings('.lit').removeClass('active1');
					
					$(this).addClass('activeaa').siblings().removeClass('activeaa');
					
				})
				
				
				$('.nr .nrx .ull .nrxli .ulu .lit ').click(function(){
//					获得当前序号
					var xuhao = $(this).index();
					
//					让大总管变量等于xuhao
					rrm=xuhao;
					
					$(this).parent().siblings(' .ull_ul').stop().animate({'left':-296*rrm+'px'})
					$(this).addClass('active1').siblings('.lit ').removeClass('active1');
					$(this).addClass('activeaa').siblings().removeClass('activeaa');
				})
				
				
//				最关键的一部
			$(' .nr .nrx .ull .nrxli').mouseenter(function(){
//				    alert(11);
////					获得当前li里面小点的数组长度 this当前指向的元素
		 var Slen = $(this).find('.ulu .lit').length;
//		    alert(Slen);
				for(var a=0;a<Slen;a++){
////						判断
						if($(this).find('.ulu .lit').eq(a).hasClass('active1')){
//						alert(a);
						rrm= a;
					}
					
				}
				
			})
				
				

            $('.nr .nrx .ull .nrxli').hover(function  () {
//       	
            	$(this).find('.nrh_top_left').fadeIn({'display':'block'});
            	
            	 $(this).find(' .nrh_top_right').fadeIn({'display':'block'});
            },function () {
//          	alert(123)
            	$(this).find('.nrh_top_left').fadeOut({'display':'none'});
            	$(this).find('  .nrh_top_right').fadeOut({'display':'none'});
//      alert(456)
            })



//<!--下方内容区域开始--> 滑动效果









	
})	





