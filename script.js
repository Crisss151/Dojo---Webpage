$(document).ready(function() {
	$(".topside").hide();
	$(".main").hide();
	$("#dojo").click(function() {
		$(".topside").slideToggle("slow");
		});
	$("#header").click(function() {
		$(".main").slideToggle("slow");
		});
	});