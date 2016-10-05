// JavaScript Document
window.onload=function (){
	var oCenL=document.getElementById('cen-left-nav');
	var aLi=oCenL.getElementsByClassName('lis');
	var aUl=document.getElementsByTagName('ul');
	//var aUl=[];
	var timer=null;
	
	
	
	var oCenR=document.getElementById('cen-right');
	var aA=oCenR.getElementsByTagName('a');
	var oCen=document.getElementById('center');
	var oImg=document.getElementById('bg');
	var oP=oCenR.getElementsByTagName('p')[0];
	var aImg=['imgs/bg-1.jpg','imgs/bg-2.jpg','imgs/bg-3.jpg','imgs/bg-4.jpg'];
	var num=0;
	
	//left
	
	//left-ul 移入移出
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function (){
			
			for(var j=0;j<aUl.length;j++){
				aUl[j].style.display='none';
				aLi[j].style.background='rgba(0,0,0,0.1)';
			}
			aUl[this.index].style.display='block';
			this.style.background='rgba(0,0,0,0.5)';
			clearInterval(timer);
		}
		aLi[i].onmouseout=function (){
			this.style.background='rgba(0,0,0,0.1)';
			that=this.index;
			timer=setInterval(
			  function (){
				  aUl[that].style.display='none';
				  
			  },2000);
		}
	}
			
				

	
	//1.移入移出
	for(var i=0;i<aA.length;i++){
		aA[i].onmouseover=function (){
			this.style.background='rgba(255,255,255,0.5)';
		}
		aA[i].onmouseout=function (){
			for(var j=0;j<aA.length;j++){
				
			   aA[j].style.background='rgba(255,255,255,0)';
			}
		}	
	}
  //2.向前向后
    
	  
	  aA[0].onclick=function (){
		  
		  if(num==0){
			  num=aImg.length-1;
			  
		  }else{
			
			 num--;
		  }
		  oImg.src=aImg[num];
		 
	  }
	  aA[1].onclick=function (){
		  if(num==aImg.length-1){
			  num=0;
			  
		  }else{
			  num++;
		  }
		  oImg.src=aImg[num];
	  }
   var timer1=setInterval(function (){
		num++;
		num%=aImg.length;
		oImg.src=aImg[num];
		
	},2000);
	
};