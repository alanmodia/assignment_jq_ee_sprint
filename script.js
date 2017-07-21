// ===== on form =====

$( 'form' ).on('keyup', function( event ) {
	var $obj = $(event.target);
	var $display = $obj.next();
	var characters = $obj.val().length;
  var min = $obj.data('min');
  var max = $obj.data('max');
	
  // console.log(event.target);
  console.log($obj);
  // console.log(event.target.type);
  // console.log(event.target.id);
  // // console.log(event.target.class[0]);
  // console.log($obj.attr('data-min'));
  // console.log($obj.attr('data-max'));
  // console.log(event.target.data-min);
  // console.log(event.target.data-max);
  // console.log(event.target.placeholder);
  
	updateDisplay($obj, $display, characters, min, max);
});

//// updateDisplay show/hide class and update counter
var updateDisplay = function($obj, $display, characters, min, max) {

if (characters > 0 ) {
  $display.removeClass( 'counter' );
  $display.text(max - characters);
  } else {
  $display.addClass( 'counter' );
  }
};

// ===== trigger pw validation =====

// get value while user is typing
$( '#password-confirm' ).on('keyup', function( event ) {
  pwValidation();
  });

// ===== pw validation =====
function pwValidation() {
  var password = $("#password").val();
  var passwordMatch = $("#password-confirm").val();

  if (passwordMatch === null || passwordMatch === "") {
    console.log("pw match is empty");
    // wait until person is typing into password Match
  } else {

  if (password == passwordMatch) {
    // display failure message if not a match
    $("#alert-password-typeAhead-success").removeClass('hideAlert');
    $("#alert-password-typeAhead-fail").addClass('hideAlert');
     } // else, show success message if a match
     else {
    $("#alert-password-typeAhead-fail").removeClass('hideAlert');
    $("#alert-password-typeAhead-success").addClass('hideAlert');
   }
 }
}

// ===== recheck on blur =====
// $( "#first-name" ).on( "blur", function() {
//   console.log( $( this ).text("") );
//   minMax();
// });

// ===== button click validation =====
$( "button" ).click(function () {
  minMax();
  // pwValidation();
  return false;
});

// ===== minimum and maximum length validation =====
function minMax() {
  // set vars to form input values and identifiers
  var firstNameMin = $("#first-name").data('min');
  var firstNameMax = $("#first-name").data('max');
  var firstNameLength = $("#first-name").val().length;
  var textAreaMin = $("#about-yourself").data('min');
  var textAreaMax = $("#about-yourself").data('max');
  var textAreaLength = $("#about-yourself").val().length;
  var passwordMin = $("#password").data('min');
  var passwordMax = $("#password").data('max');
  var passwordLength = $("#password").val().length;

  // ===== On fail, highlight field and display hint
  if (  firstNameLength < firstNameMin || firstNameLength > firstNameMax ) {
    // show alert by removing hideAlert class
    $("#alert-firstname-submit-fail").removeClass('hideAlert');
    $("#first-name").addClass('submitWarning');
    } else {
    // hide alert by adding hideAlert class
    $("#alert-firstname-submit-fail").addClass('hideAlert');
    $("#first-name").removeClass('submitWarning');
  }

  if (  textAreaLength < textAreaMin || textAreaLength > textAreaMax ) {
    $("#alert-textarea-submit-fail").removeClass('hideAlert');
    $("#about-yourself").addClass('submitWarning');
    } else {
    $("#alert-textarea-submit-fail").addClass('hideAlert');
    $("#about-yourself").removeClass('submitWarning');
  }

  if (  passwordLength < passwordMin || passwordLength > passwordMax ) {
    $("#alert-password-submit-fail").removeClass('hideAlert');
    $("#password").addClass('submitWarning');
    } else {
    $("#alert-password-submit-fail").addClass('hideAlert');
    $("#password").removeClass('submitWarning');
  }
}
