// JavaScript Document
window.onload=function (){
  var oDiv=document.getElementById('cen-right-PS');
  var aBtn=oDiv.getElementsByTagName('a');
  var aUl=oDiv.getElementsByClassName('cen-right-PS-application');
  
 var oCLNav=document.getElementById('cen-left-nav');
	var aCLH2=oCLNav.getElementsByTagName('h2');
	var aCLUl=oCLNav.getElementsByTagName('ul');
	//alert(1);
	//alert(aCLH2[0].innerHTML);
	//alert(aCLUl[0].innerHTML);
	
	for(var i=0;i<aCLH2.length;i++){
		aCLH2[i].index=i;
		aCLH2[i].onclick=function (){
			
			for(var i=0;i<aCLH2.length;i++){
				aCLUl[i].style.display='none';
				if(aCLH2[i]!=this){aCLH2[i].className='';}
			}	
			
			if(this.className==''){
			  aCLUl[this.index].style.display='block';
			  this.className='active';
			}else{
				aCLUl[this.index].style.display='none';
				this.className='';
			}
			
		}
	} 
  //alert(aBtn[0].innerHTML);
  //alert(aUl[0].innerHTML);
  
  function appfn1(){
	aUl[0].style.display='block';  
  }
  appfn1();
  for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onclick=function (){
			for(var i=0;i<aBtn.length;i++){
				aUl[i].style.display='none';
				aBtn[i].style.background='#d0efa9';
			}
			aUl[this.index].style.display='block';
		    this.style.background='#fff';
		}	
  }
	
  
}