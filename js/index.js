//banner图的轮播js
$(function() {
	var curr = 0;
	$(".order li").each(function(i) {
		$(this).click(function() {
			curr = i;
			$(".banner_tu div").eq(i).fadeIn("fast").siblings().fadeOut("fast");
			$(this).addClass("on").siblings().removeClass("on");
		});
	});
	var timer = setInterval(function() {
		var go = (curr + 1) % 3;
		$(".order li").eq(go).click();
	}, 3000);
	$(".banner").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			var go = (curr + 1) % 3;
			$(".order li").eq(go).click();
		}, 3000);
	});
});
//广告轮播
$(function() {
	var num = 0;
	$('.next').on('click', function() {
		num++;
		$('.prev').show()
		if(num >= 2) {
			num = 2;
			$('.next').hide()
		}
		$('.scroll_one').stop().animate({
			left: -num * 1200
		}, 150)
	})
	$('.prev').on('click', function() {
		num--;
		$('.next').show()
		if(num <= 0) {
			num = 0;
			$('.prev').hide()
		}
		$('.scroll_one').stop().animate({
			left: -num * 1200
		}, 150)
	})

})
$(function() {
	var num = 0;
	$('.next_two').on('click', function() {
		num++;
		$('.prev_two').show();
		if(num >= 2) {
			num = 2;
			$('.next_two').hide()
		}
		$('.scroll_two').stop().animate({
			left: -num * 1200
		}, 150)
	})
	$('.prev_two').on('click', function() {
		num--;
		$('.next_two').show()
		if(num <= 0) {
			num = 0;
			$('.prev_two').hide();
		}
		$('.scroll_two').stop().animate({
			left: -num * 1200
		}, 150)
	})

})
/*关于我们的*/
$(function(){
	$('.Abo_navlist').eq(0).show();
	$('.Abo_nav span').on('click',function(){
		var num = $(this).index();
		$('.Abo_nav span').eq(num).addClass('active').siblings().removeClass('active')
		$('.Abo_navlist').eq(num).show().siblings().hide()
	})
})
/*列表页右侧轮播*/
$(function(){
			var timer=null;
			var num=0;
			var One=$('.img li').width();//每一个 li的宽度
			var imgLis = $('.img li');//图片li给个简化
			
			 //设置按钮的显示和隐藏
			$('#banner').hover(function(){
				  $('.btnn').show();
				 },function(){
				  $('.btnn').hide();
			})
			
			for (var j = 0; j < $('.img li').length; j++) { //创建圆点
			  $('.num').append('<li></li>')
			 }
			$('.num li').first().addClass('active'); //给第一个圆点添加样式叫active
			 
			var firstimg=$('.img li').first().clone(); //复制第一张图片
			$('.img').append(firstimg).width($('.img li').length*($('.img li').width())); 
			 //第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
			 
	        var Bstop = true; //开关效果
	        function play(){
		            //从左向右时，判断num，是否大于最大值
		            if(num < 0){
		                num = imgLis.length-1;
		                $('.img').css({left:-imgLis.length*One});
		            }
		            //从右向左时，判断num，是否大于最大值
		            if(num > imgLis.length){
		                num = 1;
		                $('.img').css({left:'0'});
		            }
		            var left = num*One;
		            $('.img').animate({left:-left},function(){
		                Bstop = true;
		            });
		            //焦点
		            $('.num li').removeClass('active');
		            $('.num li').eq(num).addClass('active');
		            if(num >= imgLis.length){
		                $('.num li').first().addClass('active');
		            }
		        }
		        //自动播放
		        function autoPlay(){
		                timer = setInterval(function(){
		                num++;
		                play();
		
		            },2000);
		        }
		        
		        //添加鼠标移入暂停，移出继续事件
		        $('#banner').mouseover(
		            function(){
		                clearInterval(timer);
		                timer = null;
		            }
		        ).mouseout(
		            function(){
		                autoPlay();
		            }
		        );
		        
		        //给左右按钮添加点击事件
		        $('.prevlist').click(function(){
		            if(Bstop == true){
		                Bstop = false;
		                num--;
		                play();                    
		            }
		
		        });
		        $('.nextlist').click(function(){
		            if(Bstop == true){
		                Bstop = false;
		                num++;
		                play();
		            }
		        });
		        
		        //给焦点添加点击事件
		        $('.num li').click(function(){
		            num = $(this).index()
		            play();
		        });
		        autoPlay();
		})