$(function(){
///////////1.banner轮播图的制作


	var imgsbox=$(".imgsbox")[0];
	var imgs=$("img",imgsbox);
 	var circle=$(".circle");
  	var num=0;
  	var jiantouy=$(".jiantouy")[0];
   	var jiantouz=$(".jiantouz")[0];
   	var bannermiddle=$(".banner-middle")[0];
   	var bannerbox=$(".bannerbox")[0];
   	var arrbg=["#F74B1D","#247E00","#238FF1","#060BFF","#EF291E","#FF78C0"];
   	function move(type){
   		if(type=='r'){
			if(num==imgs.length-1){
				num=0;
			}else{
				num++;
			}
		}else if(type=='l'){
			if(num==0){
				num=imgs.length-1;
			}else{
				num--;
			}
		}
 		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=2;
			circle[i].style.background="#ccc";
 		}
 		for(var j=0;j<circle.length;j++){
			circle[j].style.backgroundColor='#ccc';
  		}
		imgs[num].style.zIndex=7;
		circle[num].style.background="#ff3c3c";
		bannerbox.style.backgroundColor=arrbg[num];
 	}
	var t=setInterval(function(){
		move('r');
	},2000);
 	bannermiddle.onmouseover=function(){
		clearInterval(t);
		jiantouz.style.display="block";
		jiantouy.style.display="block";
 	}
 	bannermiddle.onmouseout=function(){
		clearInterval(t);
		t=setInterval(function(){
			move('r');
		},2000);
		jiantouz.style.display="none";
		jiantouy.style.display="none";
  	}

	for(var i=0;i<circle.length;i++){
		circle[i].index=i;
		circle[i].onmouseover=function(){
			clearInterval(t);
			for(var j=0;j<circle.length;j++){
				circle[j].style.background="#ccc";
				imgs[j].style.zIndex=2;
 			}
			imgs[this.index].style.zIndex=7;
			bannerbox.style.backgroundColor=arrbg[this.index];
  			this.style.background="#ff3c3c";
			num=this.index;
  		}
 	}


	jiantouy.onclick=function(){
 		 move('r');
	}
	
	jiantouz.onclick=function(){
		move('l');
 		
	}
  
	
 


/////***********2.每个楼层的轮播开始****************///////
  
  function luobo1(lou){
	  // var jin=$(".jinkou-con2")[lou];
	var imgsbox1=$(".imgsbox1")[lou];
	var bigbox=$(".bigbox")[lou];

 	var rec=$(".rec",bigbox);
 	
  		var num1=1;
 		function move1(){
 			if(num1==3){
				animate(imgsbox1,{left:-330*num1},600,Tween.Linear,function(){
					animate(imgsbox1,{left:0},0);
 			})
			num1=0;
 		   } 
		   else{
				animate(imgsbox1,{left:-330*num1},600,Tween.Linear);
				
 			} 
 			for(var i1=0;i1<rec.length;i1++){
 				//animate(rec,{left:30},600,Tween.Linear);
 				 rec[i1].style.background="#dddddd";
 			}
  			rec[num1].style.background="#ff3c3c";
   			num1++;
  		} 
 		var t1=setInterval(move1,2000);

 		for(var i1=0;i1<rec.length;i1++){
 			rec[i1].index=i1;
 			rec[i1].onmouseover=function(){
 				clearInterval(t1);
 				for(var j1=0;j1<rec.length;j1++){
 					rec[j1].style.background="#dddddd";

 				}
 				animate(imgsbox1,{left:-330*this.index},600,Tween.Linear);
 				num1=this.index+1;
 				this.style.background="#ff3c3c";
 			}

 			rec[i1].onmouseout=function(){
 				t1=setInterval(move1,2000);
 			}
 		}
 }
	
 for(var i=0;i<8;i++){
  	luobo1(i);
 }
 //每个楼层的轮播结束
	 
//**3.流行楼层的brand轮播的实现

 var brand=$(".brand")[0];
 var lxz=$(".lxz")[0];
 var lxy=$(".lxy")[0];

function moveLeft3(){
	animate(brand,{left:-100},600,Tween.Linear,function(){
		var first=getFirst(brand);
		var last=getLast(brand);
		brand.insertAfter(first,last);
		brand.style.left=0;
 	});
}

function moveRight3(){
	
		var first=getFirst(brand);
		var last=getLast(brand);
		brand.insertBefore(last,first);
		brand.style.left=-100+"px";
 		animate(brand,{left:0},600,Tween.Linear);
}



lxz.onmouseover=function(){
	clearInterval(t3);
	this.style.backgroundColor="#f0efef";
}
lxy.onmouseover=function(){
	clearInterval(t3);
	this.style.backgroundColor="#f0efef";
}
lxz.onmouseout=lxy.onmouseout=function(){
	t3=setInterval(moveLeft3,2000);
	this.style.backgroundColor="";

}

lxz.onclick=function(){
	moveLeft3();
}
lxy.onclick=function(){
	moveRight3();
}

var t3=setInterval(moveLeft3,2000);
 ////流行楼层的brand轮播的结束** 图片的左移效果开始***************////////////
 
var smallpic=$(".small-pic");
 for(var i=0;i<smallpic.length;i++){
	smallpic[i].index=i;
	smallpic[i].onmouseover=function(){
		smallpic[this.index].style.cssText="position:relative;left:-5px;cursor:pointer;"
	}

	smallpic[i].onmouseout=function(){
		smallpic[this.index].style.cssText="position:relative;left:0px;cursor:pointer;"
	}
}

 
//图片的左移效果结束


/*banner左侧的导航开始*/
var bannerzuo=$(".bannerzuo");
var erji=$(".erji");
for(var i=0;i<bannerzuo.length;i++){
    	bannerzuo[i].index=i;
     	hover(bannerzuo[i],function(){
    		for(var j=0;j<erji.length;j++){
    			erji[j].style.display="none";
    		}
    			erji[this.index].style.display="block";
     	},function(){
    		erji[this.index].style.display="none";
    	})
    	
    }
 /*banner左侧的导航结束*/

///top的下拉菜单的显示开始/////

//top-left1登录注册的下拉菜单的实现
var top_left1=$(".top-left1")[0];
var top_left_xiala=$(".top-left-xiala")[0];
var dljt=$(".dljt")[0];
 hover(top_left1,function(){
	top_left_xiala.style.display="block";
	dljt.style.backgroundPosition="-62px -870px"
 
},function(){
	top_left_xiala.style.display="none";
	dljt.style.backgroundPosition="-2px -870px";
  })

//top-left2省份的下拉菜单的实现
var topleftright=$('.top-left-right')[0];
	var chengshi=$('#chengshi');
	var chengshitext=$('span',chengshi)[0];
	var songhuoxiala=$('.songhuo-xiala')[0];
	var chengshixuanze=$('dd',songhuoxiala);
	hover(chengshi,function(){
		songhuoxiala.style.display='block';
		chengshi.style.backgroundPosition='right -78px';
	},function(){
		songhuoxiala.style.display='none';
		chengshi.style.backgroundPosition='right 7px';
	})
	 
	for(var i=0;i<chengshixuanze.length;i++){
		chengshixuanze[i].index=i;
		chengshixuanze[i].onclick=function(){
			chengshitext.innerHTML=chengshixuanze[this.index].innerHTML;
			songhuoxiala.style.display='none';
		}
	}

//top-right下拉菜单的实现
var topyiji=$(".topyiji");
var toperji=$(".toperji");
var dong=$(".dong");
 for(var i=0;i<topyiji.length;i++){
	topyiji[i].index=i;
	hover(topyiji[i],function(){
		toperji[this.index].style.display="block";
		dong[this.index].style.backgroundPosition='right -277px';
 		// topyiji[this.index].style.backgroundColor="#000";
	},function(){
		toperji[this.index].style.display="none";
		dong[this.index].style.backgroundPosition='right -247px';
	});
	 

}
 
///top的下拉菜单的显示结束/////

//闪购tab开始
 	var dapai=$(".dapai");
 	var shangou=$(".shangou");
  	for(var i=0;i<dapai.length;i++){
		dapai[i].index=i;
		dapai[i].onclick=function(){
			for(var j=0;j<shangou.length;j++){
				shangou[j].style.zIndex="2";
   				dapai[j].style.color="#666";
  			}
  			shangou[this.index].style.zIndex="5";
 			dapai[this.index].style.color="#cea145";
 		}
 		 
	}
     
//闪购tab结束
//////最右侧的图标显示开始；
var jinkou=$(".jinkou-title");
var gehu=$("gehu");

var jump=$(".jump")[0];
var anniu=$("li",jump);
var tishi=$(".tishi");
 
var ch=document.documentElement.clientHeight;
window.onscroll=function(){
 	var scrollT=getScrollT();
  		if(scrollT<=750){
			jump.style.display="none";
		}else{
			jump.style.display="block";
		}
 
//按钮控制滚动条
for(var i=0;i<anniu.length;i++){
	anniu[i].index=i;
	anniu[i].onclick=function(){
 		//获取滚动条的对象
		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
 		animate(obj,{scrollTop:jinkou[this.index].t},500,Tween.Linear);
		//当前按钮的对应楼层赋值给滚动条
 	}
}

 //滚动条  控制  左侧按钮
		for(var i=0;i<jinkou.length;i++){
 			jinkou[i].t=jinkou[i].offsetTop;
  			if(jinkou[i].t<scrollT+400){
				for(var j=0;j<anniu.length;j++){
  					tishi[j].style.display="none";
  				}
  			tishi[i].style.display="block";
  			}
 		}

//左侧按钮效果    ｄｅ　效果

   // var ddd=$(".ddd");//一级菜单名
    //二级菜单名
      for(var i=0;i<anniu.length;i++){
    	anniu[i].index=i;
    	hover(anniu[i],function(){
      		tishi[this.index].style.display="block";
      	},function(){
     		tishi[this.index].style.display="none";
     	})
   
    }
    
 }
 
//////最右侧的图标显示结束；




	/////////结束、、////////////
})