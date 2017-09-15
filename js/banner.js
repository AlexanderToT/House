$(function(){
			var timer=null;
			var num=0;
			var One=$('.Abo_img li').width();//每一个 li的宽度
			var imgLis = $('.Abo_img li');//图片li给个简化
			var firstimg=$('.Abo_img li').first().clone(); //复制第一张图片
			$('.Abo_img').append(firstimg).width($('.Abo_img li').length*($('.Abo_img li').width())); 
			 //第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
			 
	        var Bstop = true; //开关效果
	        function play(){
		            //从左向右时，判断num，是否大于最大值
		            if(num < 0){
		                num = imgLis.length-1;
		                $('.Abo_img').css({left:-imgLis.length*One});
		            }
		            //从右向左时，判断num，是否大于最大值
		            if(num > imgLis.length-2){
		                num = 1;
		                $('.Abo_img').css({left:'0'});
		            }
		            var left = num*One;
		            $('.Abo_img').animate({left:-left},function(){
		                Bstop = true;
		            });
		        }
		        //自动播放
		        function autoPlay(){
		                timer = setInterval(function(){
		                num++;
		                play();
		
		            },2000);
		        }
		        
		        //添加鼠标移入暂停，移出继续事件
		        $('.Abo_banner_box').mouseover(
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
		        $('.btn_prev').click(function(){
		            if(Bstop == true){
		                Bstop = false;
		                num--;
		                play(); 
		            }
		
		        });
		        $('.btn_next').click(function(){
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