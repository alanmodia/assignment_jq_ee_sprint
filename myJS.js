// $(document).ready(function() {

//// addRemove class
var addRemove = function(cha, $target) {
if (cha > 0 ) {
	$target.removeClass( 'counter');
	$target.text(cha);
	// alert("addRemove is running");
	} else {
	$target.addClass( 'counter');
	}
};

// NOTE: 
// first-name will now run like confirm-pw, but only if I comment out confirm-pw. This is because each instance is setting the var $elem? So I made each var unique. They all run fine now.

// ===== first-name =====

var $elemFn = $('input.enter-first-name');
$elemFn.on('keyup keydown', function() {
	updateCountFirstName($elemFn);
});

function updateCountFirstName($elemFn) {
var cha = $elemFn.val().length;
var $target = $('#display-count-first-name');
addRemove(cha, $target );
}

// before refactor
// $('input.enter-first-name').keyup(updateCountFirstName);
// $('input.enter-first-name').keydown(updateCountFirstName);
// function updateCountFirstName() {
// var cha = $(this).val().length;
// if ( cha > 0 ) {
// 	$('#display-count-first-name').removeClass( 'counter');
// 	$('#display-count-first-name').text(cha);
// 	} else {
// 	$('#display-count-first-name').addClass( 'counter');
// 	}
// }

// ===== confirm-pw =====
var $elemCpw = $('input.confirm-pw');
$elemCpw.on('keyup keydown', function() {
	updateCountConfirmPw($elemCpw);
});

function updateCountConfirmPw($elemCpw) {
var cha = $elemCpw.val().length;
var $target = $('#display-count-confirm-pw');
addRemove(cha, $target );
}

// ===== enter-pw =====
var $elemPw = $('input.enter-pw');
$elemPw.on('keyup keydown', function() {
	updateCountPw($elemPw);
});

function updateCountPw() {
var cha = $elemPw.val().length;
var $target = $('display-count-pw');
addRemove(cha, $target );
}

// ===== textarea =====
var $elemTextArea = $('text-area');
$elemTextArea.on('keyup, keydown', function() {
	updateCountTexTArea($elemTextArea);
});

function updateCountTextArea() {
	var cha = $elemTextArea.val().length;
	var $target = $('display-count-about');
	addRemove(cha, $target );
}


// });