$(document).ready(function(){

	$("body").on("click","a",function(){
		$('html,body').animate({scrollTop:0},300);
	});

	// end valid open window in blank
	$(".tb").each(function(){
		$(this).attr("target","_blank");
	});
	// valid open window in blank

	// hide alt title
	var getAlt="",getTitle="";
	$("body").on("mouseenter",".hta",function(){
		tag=$(this);
		getAlt=tag.attr("alt");
		getTitle=tag.attr("title");
		tag.attr("alt","");
		tag.attr("title","");
	});

	$("body").on("mouseleave",".hta",function(){
		tag=$(this);
		tag.attr("alt",getAlt);
		tag.attr("title",getTitle);
	});
	// end hide alt title



	DocHeight=$(document).height();
	$(".main-menu-all,.login-pop-up-form").css({height:DocHeight});

	$('a[href*=#]:not([href=#])').click(function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1200);
			return false;
		  }
		}
	});





	$("body").on("click",".menu-btn",function(){
		openMenu();
	});

	$("body").on("click",".close-menu-btn",function(){
		closeMenu();
	});


	function openMenu(){
		$(".main-menu-all").stop().animate({width:"100%"},300,function(){});
	}

	function closeMenu(){
		$(".main-menu-all").stop().animate({width:"0"},300,function(){});
	}


 });