$(document).ready(function(){
    //头部导航栏
    $(".nav li").click(function(){
    	$(this).addClass("nav-style").children().css({"color":"#30d0b6"});
    	$(this).siblings().removeClass("nav-style on-bottom").children().css({"color":"#fff"});
    })


	//头部轮播图
	$(".num li").click(function(){
		$(this).addClass('on-color').siblings().removeClass('on-color');
		var index=$(this).index();
		$(".banner .pics").animate({left:-1263*index},500);
	})
	var n=0;
	function move(){
        if(n==4){
           $(".banner .pics").css({left:0});
           n=1;    
        }
        if(n==3){
          $(".num li").eq(0).addClass('on-color').siblings().removeClass('on-color');
        }
        $(".banner .pics").animate({left:-1263*n},500);
        $(".num li").eq(n).addClass('on-color').siblings().removeClass('on-color');
	}
	var timer=setInterval(function(){
		n++;
		move();
	},3000)
	$(".banner").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
		n++;
		move();
	 },3000)
	})
    
    //项目案例轮播图
    var j=1;
    $('.pro-content .next').click(function(){
        j++;
    	slidemove();
    })
    $('.pro-content .prev').click(function(){
    	j--;
    	slidemove();
    })

    function slidemove(){
    	if(j%2){
    		$(".slidepics").animate({left:0},500)
    	}else{
        $(".slidepics").animate({left:-1070},500)
    	}
    }

    //index2项目页动画效果
    $(".case-list a").click(function(){
    	var caseIndex=$(this).index();
    	$(this).addClass('on-colors').siblings().removeClass('on-colors');
    	$(this).parent(".case-list").parent('.casemove-content')
    	       .children().eq(caseIndex+1).removeClass('case-style')
    	       .siblings(".case-move").addClass('case-style')
    })
    

    //index3页面中切换内容效果
    $("#us .tablist li").click(function(){
    	var usIndex=$(this).index();
    	$(this).children().addClass("on-us-color");
    	$(this).siblings().children().removeClass("on-us-color");
    	$(".us-right .us-section").eq(usIndex).removeClass("onTab").siblings().addClass("onTab");
    })

    //index4页面中的简单表单验证
    var email=false;
    var telnumber=false;
    var nametxt=false;
    //邮箱验证
    $('input[name="email"]').focus(function(){
    	$(this).siblings().eq(2).text('请输入正确的邮箱格式');
    	$(this).siblings().eq(2).addClass('form-color')
    }).blur(function(){
        	var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
        	if(reg.test($(this).val())){
    			$(this).addClass('right');
    			$(this).siblings().eq(2).html('&nbsp');
                 email=true;
    		}else{
    			$(this).addClass('wrong');
    		}
        })

    //电话验证 
    $('input[name="number"]').focus(function(){
    	$(this).siblings().eq(2).text('请输入正确的手机号码');
    	$(this).siblings().eq(2).addClass('form-color')
    }).blur(function(){
    	var numreg=/^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    	if(numreg.test($(this).val())){
    		$(this).addClass('right');
    		$(this).siblings().eq(2).html('&nbsp');
    		telnumber=true;
    	}else{
    		$(this).addClass('wrong');
    	}
    }) 
    //姓名不能为空
    $('input[name="name1"]').focus(function(){
    	$(this).siblings().eq(2).text('姓名不能为空');
    	$(this).siblings().eq(2).addClass('form-color');
    }).blur(function(){
    	if($(this).val()){
    		$(this).addClass('right');
    		$(this).siblings().eq(2).html('&nbsp');
    		nametxt=true;
    	}else{
    		$(this).addClass('wrong');
    		$(this).siblings().eq(2).text('姓名不能为空');
    	}
    }) 
})


