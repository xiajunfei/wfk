/*最新招聘切换*/
$(function(){
	$('.nav_right ul li').mouseenter(function(){
		var liX=$(this).position().left;
		$('.nav_right i').stop().animate({left:liX+"px"},200);
	});
	$('.nav_right ul li').mouseleave(function(){
		var liX=$('.nav_right li').eq(0).position().left;
		$('.nav_right i').stop().animate({left:liX+"px"},200);
	});
	$('.main_recruit a').click(function(){
		$(this).siblings('dl').slideToggle();//siblings、slideToggle、toggleClass
		$(this).find('em').toggleClass('main_Cur');
	});
	/*登录页面切换*/
	$('.nav_mainFirstB').click(function(){
		$('.Login').slideToggle();
	});
	$('.Login strong').click(function(){
		$('.Login').slideToggle();
	});
	$('.register strong').click(function(){
		$('.register').slideToggle();
	});
	$('.Login a:first,.register a:first').click(function(){
		$('.Login').slideToggle();
		$('.register').slideToggle();
	});
	/*blur和focus*/
	$('.input_text').focus(function(){
		var inputVal=$.trim($(this).val());
		if(inputVal=="输入密码")
		{
			$(this).val('');
		}
		if(inputVal=="再次输入")
		{
			$(this).val('');
		}
		if(inputVal=="你的邮箱")
		{
			$(this).val('');
		}
		if(inputVal=="输入你的邮箱")
		{
			$(this).val('');
		}
	});
	$('.input_text').blur(function(){
		var inputVal=$.trim($(this).val());
		if(inputVal=="")//不用eq(0)一个一个写。本来是一个一个eq(0),eq(1)这样一个一个写下去的
		{
			$(this).parent().parent().find('.Login_input_text').css("display","block");
			$(this).val($(this).attr("focucmsg"));
		}
	});
	/*$('.register .input_text').eq(0).blur(function(){
		var inputVal=$.trim($(this).val());
		if(inputVal=="")
		{
			$(this).val('你的邮箱');
		}
	});*/
	
	/*他们走在微信支付的前沿...*/
	$('.btn li').eq(0).click(function(){
		$('.shopping_ul:first').stop().animate({marginLeft:"-1100px"},500,function(){
			$(this).appendTo('.shopping_width');//把ul回调到第一个
			$(this).css({marginLeft:"0px"});
		});
	});
	$('.btn li').eq(1).click(function(){
		$(".shopping_ul:last").css({marginLeft:"-1100px"});
		$(".shopping_ul:last").prependTo(".shopping_width");
		$('.shopping_ul:first').stop().animate({marginLeft:"0px"},500);
	});
	
	/*qudao.html*/
	$('.qudao_ul li').click(function(){
		var Pos=$(this).index();
		if(Pos==1)
		{
			$('.how').css('display','');
			$('.qudao_mainUl').css('display','none');
		}
		else
		{
			$('.how').css('display','none');
			$('.qudao_mainUl').css('display','');
		}
	});
	$('#form').bind('submit',function(){
		var sheng=$.trim($('#eng').val());
		var shi=$.trim($('#i').val());
		var company=$.trim($('.company').val());
		var name=$.trim($('.name').val());
		var tel=$.trim($('.phone').val());
		var zhong=/[\u4e00-\u9fa5]/;
		var shu=/^(\d{11})$/;
		if(sheng=='' || shi=='' || sheng=='请选择省份' || shi=='请选择城市' || company=='' || name=='' || !zhong.test(name) || !shu.test(tel) || tel=='')
		{
			alert('请正确填写信息！');
			return false;
		}
	});
})