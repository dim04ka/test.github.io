
$(document).ready( function($){
		$(".navheader__buttons_order").click(function(e){
			e.preventDefault();
			$(".overlays").addClass("overlays-active");
			$("body").addClass('overflow');
			$(".project").addClass("project-active");
		})
})

$(document).on("click", function (e) {
	e.preventDefault();
	if (e.target.classList.contains('overlays')) {
		e.target.classList.remove('overlays-active');
		$(".project").removeClass("project-active");
		$("body").removeClass('overflow');
	}
});


