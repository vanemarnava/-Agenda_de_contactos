
// cargar todo el documento, flecha reemplaza a function
$(document).ready(() => {

	

});

$ ("#save").click(function(){

		var name = $("#contactName").val();
		$("contactName").val("");

		var number = $("#contactNumber").val();
		$("#contactNumber").val("");

		// creando contenedor  
		$(".contact").append("<div class=col-lg-6"> + 
			'<div class="panel panel-default">' +
      '<div class="panel-body">' + '<h2>' + name + '</h2>' 
      + '<hr>' + '<p>' + number + '</p>'
      + '</div>' + '</div>' + '</div>');
	});