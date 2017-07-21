var firstName = {};
firstName.element = $('#firstName');
firstName.length = firstName.element.length;
firstName.min = 4;
firstName.max = 32;
firstName.name = "First name"

var textarea = {};
textarea.element = $('#textarea');
textarea.length = textarea.element.length;
textarea.min = 4;
textarea.max = 140;
textarea.name = "Text area"

var password = {};
password.element = $('#password');
password.length = password.element.length;
password.min = 6;
password.max = 16;
password.name = "Password"

var interestingElements = [ firstName, textarea, password ]

function formValidate(dataObject) {
    // return dataObject.min < dataObject.length && dataObject.length < dataObject.max;
    return dataObject.length < dataObject.min || dataObject.length > dataObject.max;
}

interestingElements.forEach(function(item) {
    if (formValidate(item)) {
        console.log(item.name + " field failed validation");
    }
});