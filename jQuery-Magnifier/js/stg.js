$(function (){
	
	$('#contain').mousemove(function (ev){
		//移入显示
		$('#div1').css('display','block');
		$('#div2').css('display','block');
		//left=鼠标X坐标-容器到显示屏的左距离（前两个相减=鼠标到容器的左边届）- 滑块的1/2高度 (滑块左边距离容器左边的边距离)，
		var X =ev.pageX -$(this).offset().left-($('#div1').outerWidth(true))/2;
		
		//top = 鼠标Y坐标-容器到现实屏的上距离（前两个相减=鼠标到容器的上边届）- 滑块的1/2高度 (滑块上边距离容器上边的边距离)，
		var Y =ev.pageY-$(this).offset().top-($('#div1').outerHeight(true))/2;
		
		//防止滑块左边超出容器（图片）
		if(X<0){
			X=0;
	    //防止滑块右边超出容器（图片）
		}else if(X>$(this).outerWidth()-$('#div1').outerWidth()){
			X=$(this).outerWidth()-$('#div1').outerWidth();
		};
		
		//防止滑块上边超出容器（图片）
		if(Y<0){
			Y=0;
		//防止滑块下边超出容器（图片）
		}else if(Y>$(this).outerHeight()-$('#div1').outerHeight()){
			Y=$(this).outerHeight()-$('#div1').outerHeight();
		};
		$('#div1').css('top',Y);
		$('#div1').css('left',X);
		//  比例        = 滑块左边距离容器左边的边距离（动态变化） / 滑块X轴上最大滑动距离（确定的数）
		var scaleX = X/($(this).outerWidth()-$('#div1').outerWidth());
		//同上
		var scaleY = Y/($(this).outerHeight()-$('#div1').outerHeight());
		
	    //X轴 大图即时偏移的距离(动态变化)= 大图最大移动距离(确定的数) * 比例
		var W = ($('#div2').width()-$('#big').width())*scaleX + "px" ;
		//同上
		var H = ($('#div2').height()-$('#big').height())*scaleY + "px";
		$('#big').css('left',W);
		$('#big').css('top',H);
	});
	$('#contain').mouseout(function (){
		//移出隐藏·
		$('#div1').css('display','none');
		$('#div2').css('display','none');
	});
});
