/*
这一段应该是，回到顶部的js
*/
(".backtop").hide();  
	    $(function () {  
	        //检测屏幕高度  
	        var height=$(window).height();  
	        //scroll() 方法为滚动事件  
	        $(window).scroll(function(){  
	            if ($(window).scrollTop()>height){  
	                $(".backtop").fadeIn(500);  
	            }else{  
	                $(".backtop").fadeOut(500);  
	                }  
	        });  
	        $(".backtop").click(function(){  
	            $('body,html').animate({scrollTop:0},100);  
	            return false;  
	        });  
	    });  
	});
/*
这段是？
*/
function showPopup() {
			document.getElementById("popup").style.display = "block";
		}
		
		function hidePopup() {
			document.getElementById("popup").style.display = "none";
		}
