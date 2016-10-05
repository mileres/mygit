// JavaScript Document

window.onload=function (){
   var oDiv=document.getElementById('ps-cont');
   var aDiv=oDiv.getElementsByTagName('div');
   
   for(var i=0;i<aDiv.length;i++){
	  aDiv[i].onmouseover=function (){
		 this.style.top='0px';  
	  }
	  aDiv[i].onmouseout=function (){
		  this.style.top='5px';
	  }
   }
}