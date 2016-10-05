// JavaScript Document
window.onload=function (){
   var oUl=document.getElementsByClassName('list')[0];
   var aLi=oUl.getElementsByTagName('li');
   var aNo=document.getElementsByClassName('no');
   var aYes=document.getElementsByClassName('yes');
   
   
   
   for(var i=0; i<aNo.length;i++){
	    aNo[i].index=i;
        aNo[i].onclick=function (){
		    
			
				aLi[this.index].style.background = '#fff';
			
		}
		aYes[i].index=i;
		aYes[i].onclick=function (){
			
				aLi[this.index].style.background = '#f5f5f5';
		}
   }
          
   
   	
}