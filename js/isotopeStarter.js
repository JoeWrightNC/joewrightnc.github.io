(function($) {
	"use strict";

	$(document).ready(function() {
	    //Portfolio masonry
	    var $container = $('#portfolio-container');
	    $container.imagesLoaded( function() {
			$container.isotope({
	        masonry: {
	            columnWidth: '.portfolio-item'
	        },
	        itemSelector: '.portfolio-item'
			});
		});
	    $('#filters').on('click', 'li', function() {
	        $('#filters li').removeClass('active');
	        $(this).addClass('active');
	        var filterValue = $(this).attr('data-filter');
	        $container.isotope({ filter: filterValue });
	    });
  });
})(jQuery);