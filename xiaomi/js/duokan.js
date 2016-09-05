$(document).ready(function(){

  //左侧菜单栏中间的线
 $(".con-left-list li").each(function(index){
    if(index%2==0){
    	$(this).css({"border-right":"1px solid #dbd6d2"})
    }

 })

 //主题轮播图
  var i=0;
  var index=0;
  $(".con-lunbo").hover(function(){
  	$(".btn").show();
  	clearInterval(timer)
  },function(){
  	$(".btn").hide();
  	timer=setInterval(function(){
  	i++;
  	move()
   },2000)
  })

  //自动轮播

  var timer=setInterval(function(){
  	i++;
  	move()
  },2000)


 //点击左右按钮实现滑动
  $(".btn-left").click(function(){
       i++;
      move()

  })

 $(".btn-right").click(function(){
       i--;
      move()

  })


 //小圆点的鼠标事件
  $(".lunbo-num li").click(function(){
  	 
      var index=$(this).index();
      var i=index;
     $(this).addClass("num-style").siblings().removeClass("num-style")
    
     $(".lunbo1 li").eq(i).fadeIn().siblings().fadeOut()
     
     
  })
   

 function move(){
   if(i==6){
   	  i=0;
   } 
   if(i==-1){
   	i=5;
   } 
  $(".lunbo1").find("li").eq(i).fadeIn().siblings().fadeOut()
  $(".lunbo-num li").eq(i).addClass("num-style").siblings().removeClass("num-style")
 }

//小轮播图
var j=0;
var timer2=setInterval(function(){
  	j++;
  	move2()
  },3000)

$(".small-pics li span").hover(function(){
     $(this).css({"color":"orangered"})	
},function(){
	$(this).css({"color":"#613f23"})	
})

function move2(){
   if(j==4){
   	  j=0;
   } 
  $(".small-pics").find("li").eq(j).fadeIn().siblings().fadeOut()  
 }

//左侧第二个列表

 $(".bangdan-nav li").click(function(){
 	var thisli=$(this)
 	var s=$(this).index()/2
    thisli.addClass("heiti").siblings().removeClass("heiti")
    $(".onbang .bang").eq(s).addClass("bangdan1").siblings().removeClass("bangdan1")
    $(".bangdan .jiantou").animate({left:s*75+25},500)
 })

//最后一个轮播图
 

 var k=0;
 var size=0;
 //小圆点
 $(".market-num li").click(function(){
 	var n=$(this).index();
 	$(this).addClass("ket-num-on").siblings().removeClass("ket-num-on")
    var k=n;
    $(".market-pics .move-pics").animate({left:-k*1240},800)
 })

 //左右按钮轮播
 $(".market-list .prev").click(function(){
 	k++;
 	move3();
 })
 $(".market-list .next").click(function(){
 	k--;
 	move3();
 })
 
 function move3(){
 	if(k==5){
 	  $(".market-pics .move-pics").css({left:0})
 	   k=1;
 	}
    if(k==-1){
       $(".market-pics .move-pics").css({left:-4*1240})
       k=3	 
    }
     $(".market-pics .move-pics").animate({left:-k*1240},800)
    if(k==4){
       $(".market-num li").eq(k-4).addClass("ket-num-on").siblings().removeClass("ket-num-on")       
    }
    $(".market-num li").eq(k).addClass("ket-num-on").siblings().removeClass("ket-num-on")   
 }

})