$(document).ready(function(){
  
  $("#hover").click(function(){
		$(this).fadeOut();
    $("#popup").fadeOut();
	});
  
  
  $("#close").click(function(){
		$("#hover").fadeOut();
    $("#popup").fadeOut();
	});
  
});
