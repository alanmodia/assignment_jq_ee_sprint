const photo = document.querySelector('.photo');
const mouseFrame = document.querySelector('.mouse-framer');
// const menu = document.querySelector('.menu');
const sf = document.querySelector('.sticky-frame');
// console.log(sf);
// const deleteButton = document.querySelector('.delete-button');
// console.log(deleteButton);
let dataNum = sf.dataset.num;

function showFramer() {
	mouseFrame.style.display = 'inline-block';
	console.log("enter photo");
}
photo.addEventListener('mouseenter', showFramer);

function hideFramer() {
	mouseFrame.style.display = 'none';
	console.log("leave photo");
}
photo.addEventListener('mouseleave', hideFramer);

function showMenu() {
	// menu.style.display = 'inline-block';
	console.log("enter sticky-frame");
	console.log(dataNum);
}
sf.addEventListener('mouseenter', showMenu);

function hideMenu() {
	// menu.style.display = 'none';
	console.log("leave sticky-frame");
}
sf.addEventListener('mouseleave', hideMenu);

function mouseFramer(e) {
	let { pageX: x, pageY: y } = e;
	x = x - 60;
	y = y - 60;

	// console.log(e);
	// console.log(this);
	// console.log(mouseFramer);
	// console.log(photo);
	// console.log(x, y);

	mouseFrame.style.left = `${x}px`;
	mouseFrame.style.top = `${y}px`;
}

// $(".photo").on("mousemove", mouseFramer);
photo.addEventListener('mousemove', mouseFramer);

// pure js
  // var newDiv = document.createElement('div');
  // newDiv.classList.add('sticky-frame'); 

  // var currentDiv = document.querySelector(".mouse-framer");
  // document.body.insertBefore(newDiv, currentDiv);

  // console.log(e);
  // console.log(this);
  // console.log(mouseFramer);
  // console.log(photo);
  // console.log(x, y);

  // let { pageX: x, pageY: y } = c;
  // x = x - 60;
  // y = y - 60;

  // newDiv.style.left = `${ x }px`;
  // newDiv.style.top = `${ y }px`;
  // newDiv.style.display = 'block';
// end pure js

  function stickyFrame(c) {

    $( "[data-num ='0']" ).clone().insertAfter( ".mouse-framer" );

    let { pageX: x, pageY: y } = c;

    x = x - 60;
    y = y - 60;
 
    dataNum = Number(dataNum);
    // isNaN(dataNum);
    dataNum = dataNum + 1;
    sf.dataset.num = dataNum;

    sf.style.left = `${x}px`;
    sf.style.top = `${y}px`;

    // hideFramer();
    console.log(dataNum);
    // personMenu(c);
}
photo.addEventListener('click', stickyFrame);


function personMenu(c) {
 // ===== toggle visibility and slide out dropdown items
 $('this.dropdown-content').slideToggle( "slow", function() {
 	});

 console.log("personMenu fired");
 console.log(dataNum);
 checkGlobalNum();
}

function checkGlobalNum() {
	console.log("check global num");
	console.log(dataNum);
}

// ===== on anchor click change value of div  =====
$( "a.dropdown" ).click(function () {
	var value = $(this).text();
	console.log(value);
	$( 'div.selected-value' ).text(value);
	$('ul.dropdown').slideToggle( "slow", function() {
	});
});

// $( ".delete-button").click(function() {
// 	console.log(this);
// 	console.log("blah"); // left off here
// });

// function removeStickFrame() {
// 	console.log("removeStickyFrame fired");
// }
// span.delete-button.addEventListener('click', removeStickyFrame);

// $( '.photo' ).on( "mousemove", function( event ) {
//   $( ".mouseFramer" ).css({
//     "left" : event.pageX - 75 + "px",
//     "top" : event.pageY - 75 + "px"
//   });
//   console.log(event);
//   console.log(this);
//   console.log(event.offsetX, event.offsetY);
//   // 	console.log(x, y);
// });



