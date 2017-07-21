// ===== on anchor click change value of div  =====
$( "a" ).click(function () {
	var value = $(this).text();
	$( 'div.selected-value' ).text(value);
	$('#dd').slideToggle( "slow", function() {
	});
});

// ===== toggle visibility and slide out dropdown items =====
$( 'div.selected-value' ).on('click', function( event ) {
	$('#dd').slideToggle( "slow", function() {
	});
});
