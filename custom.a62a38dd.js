
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

jQuery(function($){
  $("#mainform__select2").chosen({
    no_results_text: "Не найдено"
  });

  $("#mainform__select").chosen({
    no_results_text: "Не найдено"
  });
})

alert(1);

$("body").on("click", function (e) {
  e.preventDefault();
 console.log(e.target.classList)});

 $(document).on("click",".overlays",function() {
		alert(1);
		$(".overlays").removeClass("overlays-active");
		$(".project").removeClass("project-active");
		$("body").removeClass('overflow');
});