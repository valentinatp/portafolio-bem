$("#sangurucho").click(function(e){
	e.preventDefault();
    $("#contenedor").removeClass("hidden");
});

$("#close").click(function(e){
	e.preventDefault();
	$("#contenedor").addClass("hidden");
})
