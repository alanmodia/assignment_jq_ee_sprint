const photo = document.querySelector('.photo');
const picker = document.querySelector('.personPicker');
const menu = document.querySelector('.personMenu');

function show() {
	picker.style.display = 'inline-block';
}
photo.addEventListener('mouseenter', show);

function hide() {
	picker.style.display = 'none';
}
photo.addEventListener('mouseleave', hide);

function personPicker(e) {
	let { pageX: x, pageY: y } = e;
	x = x - 75;
	y = y - 75;

	// console.log(e);
	// console.log(this);
	// console.log(personPicker);
	// console.log(photo);
	// console.log(x, y);

	picker.style.top = `${y}px`;
	picker.style.left = `${x}px`;
}

// $(".photo").on("mousemove", personPicker);
photo.addEventListener('mousemove', personPicker);

function photoClick(c) {
  var newDiv = document.createElement('div');
  newDiv.classList.add('personPicker');

  var currentDiv = document.getElementById("personPickerID");
  document.body.insertBefore(newDiv, currentDiv);

  let { pageX: x, pageY: y } = c;
  x = x - 75;
  y = y - 75;

  newDiv.style.left = `${ x }px`;
  newDiv.style.top = `${ y }px`;
  newDiv.style.display = 'block';

  console.log("frame coords");
  console.log(x, y);
  // console.log(c);

  personMenu(c);
}
photo.addEventListener('click', photoClick);

function personMenu(c) {
 console.log("set up the menu");
 console.log("the new c  " + c);
 console.log(c);
 console.log(this);

 var newDiv = document.createElement('div');
 newDiv.classList.add('personMenu');

 var currentDiv = document.getElementById("personPickerID");
 document.body.insertBefore(newDiv, currentDiv);

 let { pageX: x, pageY: y } = c;
 x = x - 75;
 y = y + 75;

 newDiv.style.left = `${ x }px`;
 newDiv.style.top = `${ y }px`;
 newDiv.style.display = 'block';

 console.log("menu coords");
 console.log(x, y);

}

// $( '.photo' ).on( "mousemove", function( event ) {
//   $( ".personPicker" ).css({
//     "left" : event.pageX - 75 + "px",
//     "top" : event.pageY - 75 + "px"
//   });
//   	// console.log(event);
//   	console.log(this);
//   	// console.log(event.offsetX, event.offsetY);
//   // 	console.log(x, y);
// });

