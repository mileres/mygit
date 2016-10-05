// JavaScript Document

$(function (){
    $('#imgAdd') .click(function (){
	    $('#add').animate({top:-15},1000);		
	});
	$('.btn').click(function (){
		$('#add').animate({top:-190},1000);
		
		
    })
	$('.tab').find('tr:even').css('background','#f5f5dc');
	$('td').css('border','none');
	$('.tab').find('tr:odd').css('background','#fefefe');
	
	
});