(function ( $ ) {
	$.fn.hangTheFuckingPunctuation = function() {
		this.each(function() {
			var text = $(this).text().trim();
			var first = text[0];
			if (first != "\"" && first != "'") return;
			$(this).text( text.substring(1) );
			$newQuote = $("<span>"+first+"</span>").prependTo($(this));
			if ($(this).css("position") != "relative" && $(this).css("position") != "absolute" && $(this).css("position") != "fixed") {
				$(this).css({
					position: "relative"
				})
			}
			$newQuote.css({
				position: "absolute",
				left: -$newQuote.width(),
				top: 0
			});
		})
	};
}( jQuery ));