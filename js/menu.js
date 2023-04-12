$(document).ready(function() {

	// DESPLEGAR SUBMENÚS PC
	$('#boton1, #boton2, #boton3').hover(function () {
		$(this).next("ul").css("display", "block");
	},
	function () {
		$(this).next("ul").css("display", "none");
	});
	$('#submenu1, #submenu2, #submenu3').hover(function () {
		$(this).css("display", "block");
	},
	function () {
		$(this).css("display", "none");
	});

	// APERTURA Y CIERRE MENÚ MÓVIL/TABLETA
	$("#boton").toggle(
		function(){
			$("#nav").addClass('mostrar');
		}
		,
		function(){
			$("#nav").removeClass('mostrar');
			$("#submenu1, #submenu2, #submenu3").hide();
			$("#boton1, #boton2, #boton3").removeClass('cerrar');
		}
	);

	// APERTURA Y CIERRE SUBMENÚS MÓVIL/TABLETA
	$("#submenu1").hide();
	$("#boton1").toggle(
		function(){
			$("#submenu1").show();
			$("#boton1").addClass('cerrar');
			$("#submenu2, #submenu3").hide();
			$("#boton2, #boton3").removeClass('cerrar');
		}
		,
		function(){
			$("#submenu1").hide();
			$("#boton1").removeClass('cerrar');
		}
	);
	$("#submenu2").hide();
	$("#boton2").toggle(
		function(){
			$("#submenu2").show();
			$("#boton2").addClass('cerrar');
			$("#submenu1, #submenu3").hide();
			$("#boton1, #boton3 ").removeClass('cerrar');
		}
		,
		function(){
			$("#submenu2").hide();
			$("#boton2").removeClass('cerrar');
		}
	);
	$("#submenu3").hide();
	$("#boton3").toggle(
		function(){
			$("#submenu3").show();
			$("#boton3").addClass('cerrar');
			$("#submenu1, #submenu2").hide();
			$("#boton1, #boton2").removeClass('cerrar');
		}
		,
		function(){
			$("#submenu3").hide();
			$("#boton3").removeClass('cerrar');
		}
	);
});
