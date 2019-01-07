$(function(){

	$("#full").click(function(){
	$(".but, .but1, .but2").addClass("color");
	});
	$("#empty").click(function(){
	$(".but, .but1, .but2").removeClass("color");
	});
	// --------------------------------------------
	 
  	$(".but").click(function()
  	{ $(this).toggleClass("color") ;
  	 });
	// -------------------------------------------
	$("#carre1").click(function(){
	$("#carre1, #c2, #c3, #c4, #c5").toggleClass("color");
	});
	$("#carre7").click(function(){
	$("#carre7, #c6, #c8, #c9, #c10").toggleClass("color");
	});
	$("#losange13").click(function(){
	$("#losange13, #c3, #c8, #c11, #c12, #c14, #c15, #c18, #c23").toggleClass("color");
	});
	$("#carre19").click(function(){
	$("#carre19, #c16, #c17, #c18, #c20").toggleClass("color");
	});
	$("#carre25").click(function(){
	$("#carre25, #c21, #c22, #c23, #c24").toggleClass("color");
	});
});


	