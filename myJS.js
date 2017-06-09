// $(document).ready(function() {

$( 'form' ).on('keyup keydown', function( event ) {
	var $obj = $(event.target);
	var $display = $obj.next();
	var characters = $obj.val().length;

	// var min = $(event.target).attr('data-min');
	// var min = $(event.target).attr('data');
	// var min = $(event.target).attr('min');
	// const miny = document.querySelector('input.data-min');
	// var min2 = document.querySelector.attr('input.data-min');
	// var min2 = document.querySelector('input.placeholder');
	// var min2 = document.querySelector(input.enter-first-name: DOMString)
	// var miny = $(event.target).attr('data-min');
	// var min = $obj.attr();
	// var min = "monkey";

	var min = $(event.target).attr('placeholder');
	var min1 = $obj.attr('placeholder');
	var min2 = $obj.attr('data-min');

	// var min2 = document.querySelector('input.placeholder');

	console.log($obj);
	console.log(min);
	console.log(min1);
	console.log(min2);

	// was using function maxlength to set maxLength
	// commented it out
	// 
	// I only need this the first time a new field is triggered, as long as the user has not left this field



	// console.log($display);
	// console.log(min);
	// console.log(characters + ' #ofCharacters');
	updateCountAndDisplay($obj, $display, characters);
});

//// updateCountAndDisplay class and update counter
var updateCountAndDisplay = function($obj, $display, characters) {
if (characters > 0 ) {
	// was 	$('#display-count-first-name').removeClass( 'counter');
	$display.removeClass( 'counter' );
	$display.text(characters);
	} else {
	$display.addClass( 'counter' );
	}
};

// check the maxLength for this control
// function maxLength($control){

// 	// console.log($control + ' before ');
//    var output = 
//    $control == '#first-name' ? 32
//    : 
//    $control == '#about-yourself' ? 140
//    : 
//    $control == '#password' ? 16
//    : 
//    $control == '#password-confirm' ? 16
//    :
//    0;
//    // console.log(output);
//    return output;
// };

// /////////////////////////  tests   //////////////////////////////

// // TEST the maxLength for this control ONLOAD
// function checkMaxLength(checkControl){

// 	// console.log(checkControl + ' before ');
//    var output = 
//    checkControl == '#first-name' ? 32
//    : 
//    checkControl == '#about-yourself' ? 140
//    : 
//    checkControl == '#password' ? 16
//    : 
//    checkControl == '#password-confirm' ? 16
//    :
//    0;
//    // console.log(checkControl + ' after ');
//    // console.log(output);
//    return output;
// };

// checkMaxLength('#about-yourself');

// });
