// $(document).ready(function() {



// input for textarea
$('textarea').keyup(updateCount);
$('textarea').keydown(updateCount);

function updateCount() {
var cha = $(this).val().length;
$('#display-count-about').text(cha);
}

// input for class enter-first-name
$('input.enter-first-name').keyup(updateCountFirstName);
$('input.enter-first-name').keydown(updateCountFirstName);

function updateCountFirstName() {

var cha = $(this).val().length;
if ( cha > 0 ) {
	$('#display-count-first-name').removeClass( 'counter');
	// $('#display-count-first-name').show();
	// $('#display-count-first-name').toggleClass( 'counter');
	$('#display-count-first-name').text(cha);
	} else {

	$('#display-count-first-name').addClass( 'counter');
	//$('#display-count-first-name').hide();
	}
}

// input for class enter-pw
$('input.enter-pw').keyup(updateCountPw);
$('input.enter-pw').keydown(updateCountPw);

function updateCountPw() {
var cha = $(this).val().length;
$('#display-count-pw').text(cha);
}

// input for class confirm-pw
$('input.confirm-pw').keyup(updateCountConfirmPw);
$('input.confirm-pw').keydown(updateCountConfirmPw);

function updateCountConfirmPw() {
var cha = $(this).val().length;
$('#display-count-confirm-pw').text(cha);
}


///////////////////////////////



// });