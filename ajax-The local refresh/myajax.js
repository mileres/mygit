// JavaScript Document

function ajax(method,url,data,fnc){
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
	    xhr = new ActiveXObject('Microsoft.XMLHTTP');	
	}
	
	xhr.open(method,url,true);
	if(method =='get'){
		xhr.send();
	}else{
	    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send(data);
	}
	xhr.onreadystatechange = function (){
		if(xhr.readyState == 4){
			if(xhr.status ==200){
			    fnc(xhr.responseText);	
			}else{
				alert(xhr.status);
			}
		}
	}
}

