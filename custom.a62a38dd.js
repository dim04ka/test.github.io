
$(document).ready( function($){
		$(".navheader__buttons_order").click(function(e){
			// $(".form__wrapper").addClass("form__wrapper-open");
			// $(".project").addClass("project-active");
			// $(".form__closeModalPrice").addClass("form__closeModalPrice-open");
			// $("body").css('overflow','hidden');
			e.preventDefault();
			$(".overlays").addClass("overlays-active");
			$("body").css('overflow','hidden');
			$(".project").addClass("project-active");
		})
})

$(document).on("click", function (e) {
	if (e.target.classList.contains('overlays')) {
		e.target.classList.remove('overlays-active');
		$(".project").removeClass("project-active");
		$("body").css('overflow','visible');
	}
});


