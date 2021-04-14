$(function(){

	var $li = $('.slide_list li');
	var $len = $li.length;
	var $point_con = $('.points');
	var $prev = $('.prev');
	var $next = $('.next');


	// 要运动过来的幻灯片的索引
	var nowLi = 0;
	// 要运动走的幻灯片的索引
	var preLi = 0;

	var timer = null;

	var ismove = false;

	// 幻灯片底下的小圆点
	for(var i=0;i<$len;i++){
		$point_con.append($('<li>'));
	}

	var $points = $('.points li')
	$points.eq(0).addClass('active');

	// 将不是第一个的图片全部放到右边去
	$li.not(':first').css({'left':760});

	// 小圆点点击
	$points.click(function(){

		nowLi = $(this).index();

		$(this).addClass('active').siblings().removeClass('active');

		move();

	})

	// 向前按钮,点击切换幻灯片
	$prev.click(function(){

		nowLi--;	
		if(nowLi<0){
			nowLi = $len-1;
		}
		move();
		$points.eq(nowLi).addClass('active').siblings().removeClass('active');

	})

	$next.click(function(){

		if(ismove){
			return;
		}
		ismove=true
		nowLi++;
		if(nowLi>$len-1){
			nowLi = 0;
		}
		move();
		$points.eq(nowLi).addClass('active').siblings().removeClass('active');

	})


	function move(){
		if(nowLi==preLi){
			return;
		}

		if(nowLi > preLi){
			// 从右边过来
			// 放到右边去
			$li.eq(nowLi).css({'left':760});
			$li.eq(nowLi).animate({'left':0});
			$li.eq(preLi).animate({'left':-760},function(){
				ismove=false;
			});
			preLi = nowLi;
		}
		else{
			// 从左边过来
			$li.eq(nowLi).css({'left':-760});
			$li.eq(nowLi).animate({'left':0});
			$li.eq(preLi).animate({'left':760},function(){
				ismove=false
			});
			preLi = nowLi;
		}

	}

	timer = setInterval(autoplay,3000);

	$('.slide').hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(autoplay,3000);
	});

	function autoplay(){
		nowLi++;
		if(nowLi>$len-1){
			nowLi = 0;
		}
		move();
		$points.eq(nowLi).addClass('active').siblings().removeClass('active');
	}
	

})