$("#dvDependentesEdit").hide();
$("#dvTableDependentes").hide();

function showDivDependente()
{
	$("#dvDependentesEdit").show();
}

$("#btnCancelar").click(function(){
	
	$("#dvDependentesEdit").hide();

});

$("#btnCancelar01").click(function(){
	
  $("#dvTableDependentes").hide();

});


$("#btnAdicinarDependente").click(function(){
	
	$("#dvTableDependentes").show();

});

