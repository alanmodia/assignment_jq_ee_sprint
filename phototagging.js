const photo = document.querySelector('.photo');
const box = document.querySelector('.photobox');

function photoBox(e) {
	let { pageX: x, pageY: y } = e;
	x = x - 75;
	y = y - 75;

	// console.log(e);
	// console.log(this);
	// console.log(photobox);
	console.log(x, y);

	box.style.top = `${y}px`;
	box.style.left = `${x}px`;
}

photo.addEventListener('mousemove', photoBox);




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

