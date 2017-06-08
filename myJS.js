// $(document).ready(function() {

$( 'form' ).on('keyup keydown', function( event ) {
	var $obj = $(event.target);
	var $display = $('#' + $obj.next().attr('id'));
	var cha = $obj.val().length;
	// to get the maxlength for this control from function maxLength	
	// I only need this the first time a new field is triggered, as long as the user has not left this field
	var $control = $('#' + $obj.attr('id'));
	console.log($control); 
	updateCountAndDisplay($obj, $display, cha);
});

//// updateCountAndDisplay class and update counter
var updateCountAndDisplay = function($obj, $display, cha) {
if (cha > 0 ) {
	// was 	$('#display-count-first-name').removeClass( 'counter');
	$display.removeClass( 'counter' );
	$display.text(cha);
	} else {
	$display.addClass( 'counter' );
	}
};

// check the maxLength for this control
function maxLength($control){

	// console.log($control + ' before ');
   var output = 
   $control == '#first-name' ? 32
   : 
   $control == '#about-yourself' ? 140
   : 
   $control == '#password' ? 16
   : 
   $control == '#password-confirm' ? 16
   :
   0;
   // console.log(output);
   return output;
};

/////////////////////////  tests   //////////////////////////////

// TEST the maxLength for this control ONLOAD
function checkMaxLength(checkControl){

	// console.log(checkControl + ' before ');
   var output = 
   checkControl == '#first-name' ? 32
   : 
   checkControl == '#about-yourself' ? 140
   : 
   checkControl == '#password' ? 16
   : 
   checkControl == '#password-confirm' ? 16
   :
   0;
   // console.log(checkControl + ' after ');
   // console.log(output);
   return output;
};

// checkMaxLength('#about-yourself');

// });
