$(document).ready(function() {

	var album1_list = $('.album1_list');
	var album2_list = $('.album2_list');
	var album3_list = $('.album3_list');

	// Delivers accordeon effect to the list of albums
	$( ".albums" ).accordion();

	// When clicking on album, shows playlist of this album
	// and hides playlists of other albums.
	// If the quantity of albums is bigger than 3, following should be rewritten.
	$('.album1').click(function() {
		album1_list.removeClass('hidden');
		if(!album2_list.hasClass('hidden')) {
			album2_list.addClass('hidden');
		}
		if(!album3_list.hasClass('hidden')) {
			album3_list.addClass('hidden');
		}
	});	

	$('.album2').click(function() {
		album2_list.removeClass('hidden');
		if(!album1_list.hasClass('hidden')) {
			album1_list.addClass('hidden');
		}
		if(!album3_list.hasClass('hidden')) {
			album3_list.addClass('hidden');
		}
	});

	$('.album3').click(function() {
		album3_list.removeClass('hidden');
		if(!album2_list.hasClass('hidden')) {
			album2_list.addClass('hidden');
		}
		if(!album1_list.hasClass('hidden')) {
			album1_list.addClass('hidden');
		}
	});

});
