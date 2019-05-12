$(function(){

/**
 * [timer description]购物车
 * @type {[type]}
 */
	var timer = null;
	$("#nav-car").mouseover(function() {
	    $("#nav-car-icon").addClass("active-car");
	    clearTimeout(timer);
	})
	$("#nav-car").mouseout(function() {
	    timer = setTimeout(function() {
	        $("#nav-car-icon").removeClass("active-car")
	    },400)    
	})

/**
 * [aSearch description]搜索框
 * @type {[type]}
 */
	var aSearch = eval("(" + $("#search").data("search") + ")").defaultWords,
		sHtml = "",
		i = 0;
	for ( i = 0 ; i < aSearch.length; i++){
		sHtml = sHtml + '<li><a href="login.html">' + aSearch[i].Key + "</a><span>约有" + aSearch[i].Rst + "件</span></li>";
	}
	$("#search-res > ul").html(sHtml);
	$("#search").on("click",function() {
	    $("#shop-search form").children("label").addClass("labelColor");
	    $("#search-res").css({
	        display: "block"
	    });
	    $("#shop-tip").css({
	        display: "none"
	    });
	})
	$("#search").blur(function() {
	    setTimeout(function() {
	        $("#shop-search form").children("label").removeClass("labelColor"),
	        $("#search-res").css({
	            display: "none"
	        });
	        $("#search").val() || $("#shop-tip").css({
	            display: "block"
	        });
	    },
	    200)
	})

/**
 * [aSearch description]banner
 * @type {[type]}
 */

	var star = null,
		num = 1;
    star = setInterval(play, 2500),
    $(".banner").mouseenter(function() {
        clearInterval(star)
    })

    $(".banner").mouseleave(function() {
        clearInterval(star),
        star = setInterval(play, 2500)
    })

    function play() {
        clearbanner();
        $("#page" + num).addClass("opActive");
        $("a[data-page=" + num + "]").addClass("pItemA");
        num++;
        num > 5 && (num = 1);
    }
    //初始化样式
    function clearbanner() {
        $(".page-b").removeClass("opActive");
        $(".page-item >a").removeClass("pItemA");
    }
	// 小球按钮
    $(".page-item >a").on("click",function() {
        clearbanner();
        num = $(this).data("page");
        $("a[data-page=" + num + "]").addClass("pItemA");
        $("#page" + num).addClass("opActive");
    })
    // 右边按钮
    $(".ban-rt").on("click",function() {
        num++;
        num > $(".page-b").length && (num = 1);
        clearbanner();
        $("#page" + num).addClass("opActive");
        $("a[data-page=" + num + "]").addClass("pItemA");
    })
	// 左边按钮
    $(".ban-lf").on("click",function() {
        num--;
        0 == num && (num = 5);
        clearbanner();
        $("#page" + num).addClass("opActive");
        $("a[data-page=" + num + "]").addClass("pItemA");
    });


/**
 * [description] 顶部下拉
 * @param  {[type]} 
 * @return {[type]}[description]
 */
  	$(".nav-item").mouseover(function(){
  		$(this).children("a").css("color", "#ff6700");
  		if($(this).children("div").length > 0 ){
			$("#shop-nav-w").html($(this).children("div").html()); 
			$("#shop-nav-w").css("border-top", "1px solid #e1e1e1").slideDown(300);
  		}else {
  			$("#shop-nav-w").slideUp(300).css("border-top", "1px solid #e1e1e1")
  		}

  		$(this).mouseout(function(){
  			$(this).children("a").css("color", "#333");
	        $("#shop-nav-w").children("div").mouseleave(function() {
	            $("#shop-nav-w").slideUp(300).css("border-top", "1px solid #e1e1e1")
	        })
  		})

  	})
 

/**
 * [aSearch description]banner小米明星单品
 * @type {[type]}
 */

  	var dong = null,
  	dongflag = true;
  	$("#ctr-lf").click(function() {
  	    ctrLf()
  	})
  	$("#ctr-rt").click(function() {
  	    ctrRt()
  	})
  	dong = setInterval(dongq, 5000);
  	function ctrLf() {
        $("#ctr-lf").css("color", "rgba(0,0,0,.2)");
        $("#ctr-rt").addClass("ctrColor").css("color", "rgba(0,0,0,.6)");
        $("#dong").css("margin-left", "0");
        $("#ctr-lf").removeClass("ctrColor");
        dongflag = true;
    }
    function ctrRt() {
        $("#ctr-rt").css("color", "rgba(0,0,0,.2)");
        $("#ctr-lf").addClass("ctrColor").css("color", "rgba(0,0,0,.6)");
        $("#dong").css("margin-left", "-1226px");
        $("#ctr-rt").removeClass("ctrColor");
        dongflag = false;
    }
    function dongq() {
        dongflag ? ctrRt() : ctrLf();
    }



/**
 * [description]
 * @param  {String}match parts 切换
 * @return {[type]}   [description]
 */
    $(".match .box-more li").mouseover(function() {
        $(".match .box-more li").removeClass("bor-bot");
        $(this).addClass("bor-bot");
        $(".match .wrap-span16 ul").css("display", "none");
        $(".match .wrap-span16 ul")[$(this).index()].style.display = "block"
    })
    $(".parts .box-more li").mouseover(function() {
        $(".parts .box-more li").removeClass("bor-bot");
        $(this).addClass("bor-bot");
        $(".parts .wrap-span16 ul").css("display", "none");
        $(".parts .wrap-span16 ul")[$(this).index()].style.display = "block"
    })

/**
 * [description]
 * @param  {String}为你推荐
 * @return {[type]}   [description]
 */
    $("#rmend-ctr-lf").click(function() {
        rmendCtrLf()
    })
    $("#rmend-ctr-rt").click(function() {
        rmendCtrRt()
    })
    function rmendCtrLf() {
        $("#rmend-ctr-lf").css("color", "rgba(0,0,0,.2)");
        $("#rmend-ctr-rt").addClass("ctrColor").css("color", "rgba(0,0,0,.6)");
        $("#rmend-dong").css("margin-left", "0");
        $("#rmend-ctr-lf").removeClass("ctrColor");
    }
    function rmendCtrRt() {
        $("#rmend-ctr-rt").css("color", "rgba(0,0,0,.2)");
        $("#rmend-ctr-lf").addClass("ctrColor").css("color", "rgba(0,0,0,.6)");
        $("#rmend-dong").css("margin-left", "-1226px");
        $("#rmend-ctr-rt").removeClass("ctrColor");
    }


/**
 * [dimMarginLeft description]内容切换
 * @param  {[type]} a [description]单页小球
 * @param  {[type]} r [description]单页左切换
 * @param  {[type]} o [description]单页右切换
 * @param  {[type]} e [description]单页包含小球的对象
 * @return {[type]}   [description]
 */
    function dimMarginLeft(a, r, o, e) {
        function t(a) {
            a > 0 && a < 3 && (r.removeClass("curspoin"), o.removeClass("curspoin"))
        }
        function n(a, r) {
            s = 296 * -a + "px";
            c.removeClass("dim-color");
            $(r).parent().children("ul.dim-item-m").css("margin-left", s);
            $(c[a]).addClass("dim-color")
        }
        var s = 0,
        i = 0,
        c = e.children("a");
        a.click(function() {
            i = $(this).index();
            $(this).siblings().removeClass("dim-color");
            $(this).addClass("dim-color");
            s = 296 * -i + "px";
            $(this).parent().prev().css("margin-left", s)
        })
        r.click(function() {
            i--;
            t(i);
            i >= 0 ? (n(i, this), 0 == i && $(this).addClass("curspoin")) : i = 0
        }),
        o.click(function() {
            i++,
            t(i),
            i <= 3 ? (n(i, this), 3 == i && $(this).addClass("curspoin")) : i = 3
        })
    }


    $(".dim-item").mouseover(function() {
        $(this).children("a.m-contro").css({
            opacity: .2
        })
    })
    $(".dim-item").mouseout(function() {
        $(this).children("a.m-contro").css({
            opacity: 0
        })
    })
    dimMarginLeft($("#dimContro1 a"), $("#lf1"), $("#rt1"), $("#dimContro1"));
    dimMarginLeft($("#dimContro2 a"), $("#lf2"), $("#rt2"), $("#dimContro2"));
    dimMarginLeft($("#dimContro3 a"), $("#lf3"), $("#rt3"), $("#dimContro3"));
    dimMarginLeft($("#dimContro4 a"), $("#lf4"), $("#rt4"), $("#dimContro4"));

/**
 * [aVideo description]视频区域
 * @type {Array}
 */
    var aVideo = [
    "http://v.qq.com/iframe/player.html?vid=x00197558qq&tiny=0&auto=0&height=536", 
    "http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=6569450ccc0cb722a957b9af33b212ed&tvId=6262110909",
    "http://v.qq.com/iframe/player.html?vid=x00197558qq&tiny=0&auto=0", 
    "http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=6569450ccc0cb722a957b9af33b212ed&tvId=6262110909"],
    aVideoTitle = ["12强赛晋级之路", "Beyond1991生命演唱会","12强赛晋级之路", "Beyond1991生命演唱会"];
    $(".video-item").click(function() {
        var a = $(this).index();
        $("<div class='modal-backdrop' id='modal-backdrop'></div>").appendTo($("body"));
        $("#video-hd-title").html(aVideoTitle[a]);
        $("#video-wrap").css("display","block");
        $("#video-wrap").animate({
            top: "50%"
        },1,function() {
            $("#modal-backdrop").addClass("modal-fade");
            $("#video-wrap").animate({
                opacity: "1"
            },800,function() {
                $("#video-body iframe").attr("src", aVideo[a])
            })
        })
    })
    $("#video-control").click(function() {
        $("#video-body iframe").attr("src", "");
        $("#video-wrap").animate({
            top: "-40%"
        },1,function() {
            $("#video-wrap").animate({
                opacity: "0"
            },800,function() {
                $("#video-wrap").css("display","none");
                $("#modal-backdrop").remove()
            })
        })
    })



})