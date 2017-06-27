//国旗变色
$(function(){
    $('.nav-ul0 li').mouseover(function(){
       $(this).find('img').css('opacity','1');
       $(this).siblings().find('img').css('opacity','0');
    })
})
//字体变色
$(function(){
    $('.nav-ul0 li').click(function(){
       $(this).css('color','orange');
       $(this).siblings().css('color','white');
    })
})
//得到焦距 出现二级菜单
$(function(){
    $('.selectme').focus(function(){
        $('.nav-ul2').css('display','block') 
    })
    $('.selectme').blur(function(){
        $('.nav-ul2').css('display','none') 
    })
})
 //轮播
 var timer=null;
    var iNow=0;
    $(function(){
        //按钮调用的轮播
        $('.lbt-ul>li').eq(0).siblings().hide();
        function go(){
        timer=setInterval(function(){
            iNow==2?iNow=0:iNow++;
            sun(iNow)
        },2000)
        }
        go();
       function sun(iN){
        $('.lbt-ul>li').eq(iN).siblings('li').fadeOut(200,'swing');
        $('.lbt-ul>li').eq(iN).fadeIn(200,'swing');
        }   
        //左侧箭头按钮
        $('.lbt-left').click(function(){
        clearInterval(timer);
        if(iNow>=$('.lbt-ul>li').length){
                iNow=0;
        }
        sun( iNow++);
         go();
        })
        //由此箭头按钮
        $('.lbt-right').click(function(){
        clearInterval(timer);
        if(iNow<0){
                        iNow = $('.lbt-ul>li').length-1;
        }
        sun(iNow--);
         go();
        })
    })
 //放大缩小
 $(function(){
        $('.bn-sepcil1').mouseover(function(){
            $('.bn-sepcil1').stop(false).animate({'width':'400px','height':'400px','margin-left':'-10px','margin-top':'-10px'},200,'linear')
        })
        $('.bn-sepcil1').mouseout(function(){
            $('.bn-sepcil1').stop(false).animate({'width':'380px','height':'380px','margin-left':'0','margin-top':'0'},200,'linear' )
        })
                $('.bn-sepcil2').mouseover(function(){
            $('.bn-sepcil2').stop(false).animate({'width':'400px','height':'400px','margin-left':'-10px','margin-top':'-10px'},200,'linear')
        })
        $('.bn-sepcil2').mouseout(function(){
            $('.bn-sepcil2').stop(false).animate({'width':'380px','height':'380px','margin-left':'0','margin-top':'0'},200,'linear' )
        })
 })
 //
 //二维码那那个块
 // 
$(function(){
        $('.coin-special1').mouseover(function(){
        $('.coin-special1').stop(false).animate({'width':'106px','height':'45px','margin-left':'-2px','margin-top':'-2px'},200,'linear')
        })
        $('.coin-special1').mouseout(function(){
        $('.coin-special1').stop(false).animate({'width':'98px','height':'43px','margin-left':'0px','margin-top':'0px'},200,'linear' )
        })

        $('.coin-special2').mouseenter(function(){
        $('.coin-special2').stop(false).animate({'width':'75px','height':'78px','margin-left':'-2px','margin-top':'-2px'},200,'linear')
        })
        $('.coin-special2').mouseleave(function(){
        $('.coin-special2').stop(false).animate({'width':'67px','height':'70px','margin-left':'0px','margin-top':'0px'},200,'linear' )
        })
        $('.coin-special3').mouseover(function(){
        $('.coin-special3').stop(false).animate({'width':'72px','height':'72px','margin-left':'10px','margin-top':'-2px'},200,'linear')
        })
        $('.coin-special3').mouseout(function(){
        $('.coin-special3').stop(false).animate({'width':'64px','height':'64px','margin-left':'0px','margin-top':'0px'},200,'linear' )
        })
})
//右侧边条    电话
$(function(){
    $('.nav-right1 li:nth-child(1)').mouseover(function(){
    $('.nav-right2').stop(false).animate({'width':'150px'},'500','linear')
    })
     $('.nav-right1 li:nth-child(1)').mouseout(function(){
     $('.nav-right2').stop(false).animate({'width':'0'},'500','linear')
    })
})
//右侧边条   ce 
$(function(){
    $('.nav-right1>li:nth-child(5)').mouseenter(function(){
    $('.bbb').stop(false).animate({'width':'250px'},'500','linear')
    })
     $('.nav-right1>li:nth-child(5)').mouseleave(function(){
     $('.bbb').stop(false).animate({'width':'0'},'500','linear')
     })
    // $('.nav-right3').mouseover(function(){
    // $('.nav-right3').css('background','skyblue')
    // })
    //  $('.nav-right3').mouseout(function(){
    //      $('.nav-right3').css('background','skyblue')
    // })
 })
//有边条返回位置判断
$(function(){
    $('.fanhui').hide();
    $('.fanhui').click(function(){
        $('html,body').animate({scrollTop:0},500)
        })
    $(window).scroll(function(){
    l=Math.max(document.body.scrollTop||document.documentElement.scrollTop);
            if(l>=550)
            {$('.fanhui').show(500)}
            else
            {$('.fanhui').hide(500)}
    })
})
