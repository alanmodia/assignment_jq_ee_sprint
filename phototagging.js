const photo = document.querySelector('.photo');
const box = document.querySelector('.photobox');

function show() {
	box.style.display = 'inline-block';
}
photo.addEventListener('mouseenter', show);

function hide() {
	box.style.display = 'none';
}
photo.addEventListener('mouseleave', hide);

function photoBox(e) {
	let { pageX: x, pageY: y } = e;
	x = x - 75;
	y = y - 75;

	// console.log(e);
	// console.log(this);
	// console.log(photobox);
	// console.log(photo);
	console.log(x, y);

	box.style.top = `${y}px`;
	box.style.left = `${x}px`;
}

$(".photo").on("mousemove", photoBox);
// photo.addEventListener('mousemove', photoBox);


function photoClick(c) {
  var newDiv = document.createElement('div');
  newDiv.classList.add('photobox');

  var currentDiv = document.getElementById("acolyte");
  document.body.insertBefore(newDiv, currentDiv);

  let { pageX: x, pageY: y } = c;
  x = x - 75;
  y = y - 75;

  newDiv.style.left = `${ x }px`;
  newDiv.style.top = `${ y }px`;
  newDiv.style.display = 'block';
}
photo.addEventListener('click', photoClick);

// badRobot
// function photoClick(c) {
// 	var newDiv = document.createElement('div');
// 	newDiv.classList.add('newPhotobox');
// 	var newText = document.createTextNode("Blessed Acolytes");
// 	newDiv.appendChild(newText);

// 	var currentDiv = document.getElementById("acolyte");
// 	document.body.insertBefore(newDiv, currentDiv);

// 	// const { pageX: x, pageY: y } = c;
// 	// x = x - 75;
// 	// y = y - 75;

// 	console.log(this);
// 	console.log(c);
// 	console.log(newDiv);

// }
// photo.addEventListener('click', photoClick);


// $( '.photo' ).on( "mousemove", function( event ) {
//   $( ".photobox" ).css({
//     "left" : event.pageX - 75 + "px",
//     "top" : event.pageY - 75 + "px"
//   });
//   	// console.log(event);
//   	console.log(this);
//   	// console.log(event.offsetX, event.offsetY);
//   // 	console.log(x, y);
// });

