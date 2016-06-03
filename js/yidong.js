// 移动二层
$(function(){
	var imgs=$(".tus")[0]
	var left=$(".left")[0]
	var right=$(".right")[0]
	var box=$(".turn")[0]
	// var boss=$(".tus")
	// var width=parseInt(getStyle(box,"width"));
	// var n=0
	var flag=true
	var t=setInterval(move,3000)
	function move(){
		if(!flag){
			return
		}
		flag=false
           var img=getFirst(imgs)
           animate(imgs,{left:-292},500,function(){
           	imgs.appendChild(img)
           	imgs.style.left=0
           	flag=true
           })
       }
    function move1(){
	    if(!flag){
		    return
		}   
	    flag=false
		var img=getFirst(imgs)
		var img1=getLast(imgs)
		imgs.insertBefore(img1,img)
		imgs.style.left=-292+"px"
		animate(imgs,{left:0},500,function(){
	     	flag=true
			})
		}
	box.onmouseover=function(){
    	clearInterval(t)
    }  
    box.onmouseout=function(){
    	t=setInterval(move,3000)
    }    		 
	left.onclick=function(){
		move()
	}
	right.onclick=function(){
		move1()
	}




	// 移动banner图轮播
	var imges=$(".img-eight")
	var circles=$(".circle")
	var left1=$(".left1")[0]
	var right1=$(".right1")[0]
	var boss=$(".banner-middle")[0]
	var n=0
	var t1=setInterval(move2,2000)
	function move2(type){
		if(type=="l"){
			n--
			if(n<0){
				n=imges.length-1
			}
		}else{
			n++
			if(n>=imges.length){
				n=0
			}
		}
		for(var i=0;i<imges.length;i++){
			// animate(imges,{opacity:0},1500)
			imges[i].style.display="none"
			circles[i].style.background="#d2d0d3"
		}
		    imges[n].style.display="block"
		    // animate(imges,{opacity:1},1500)
			circles[n].style.background="#e71e6a"
	}
	    boss.onmouseover=function(){
			clearInterval(t1)
		}
		boss.onmouseout=function(){
			t1=setInterval(move2,2000)
		}
		for(var i=0;i<imges.length;i++){
					circles[i].index=i;
					circles[i].onclick=function(){
					for(var i=0;i<imges.length;i++){
					imges[i].style.display="none"
					circles[n].style.background="#d2d0d3"
					}  
				    imges[n].style.display="block"
					circles[this.index].style.background="#e71e6a"
					n=this.index
				}
					}
		right1.onclick=function(){
					move2("")
					}
		left1.onclick=function(){
					move2("l")
					}



// 移动导航
    var hidden=$(".hidden")
    var nav=$(".nav-y")
    	for(var i=0;i<hidden.length;i++){
    		nav[i].index=i
    		nav[i].onmouseover=function(){
        	hidden[this.index].style.display="block"
        }
    	    nav[i].onmouseout=function(){
        	hidden[this.index].style.display="none"
        }
    }
        
//二维码
    var hidden1=$(".hidden1")
    var rt=$(".rt")
        for(var i=0;i<hidden1.length;i++){
    		rt[i].index=i
    		rt[i].onmouseover=function(){
        	hidden1[this.index].style.display="block"
        }
    	    rt[i].onmouseout=function(){
        	hidden1[this.index].style.display="none"
        }
    }
        
 
//登录
    var hidden2=$(".hidden2")[0]
    var login=$("#login")
    		login.onmouseover=function(){
        	hidden2.style.display="block"
        }
    	    login.onmouseout=function(){
        	hidden2.style.display="none"
        }
        
})