


const inputs = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea');

function logText(e) {
	console.log(this);
	e.stopPropagation();
	// console.log(this);
}

// document.body.addEventListener('click', logText);

inputs.forEach(input => input.addEventListener('click', logText, {
	capture:false
}));

textareas.forEach(textarea => textarea.addEventListener('click', logText, {
	capture:false
}));

