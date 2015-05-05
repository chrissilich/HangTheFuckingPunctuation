(function ( $ ) {
	$.fn.hangTheFuckingPunctuation = function() {
		this.each(function() {
			var text = $(this).text().trim();
			var first = text[0];
			if (first != "\"" && first != "'") return;
			$(this).text( text.substring(1) );
			$newQuote = $("<span>"+first+"</span>").prependTo($(this));
			var quoteWidth = $newQuote.width();
			$newQuote.css({
				display: "inline-block",
				marginLeft: -quoteWidth
			});
		})
	};
	$.fn.hangThePunctuation = $.fn.hangTheFuckingPunctuation;
}( jQuery ));