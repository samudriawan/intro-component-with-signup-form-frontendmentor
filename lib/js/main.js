const inputEmail = document.getElementById('email');
const inputField = document.querySelectorAll('.input');
const form = document.getElementById('inputForm');

window.onload = () => {
	for (let i = 0; i < inputField.length; i++) {
		inputField[i].value = '';
	}
};

function emailIsValid(email) {
	const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return emailRegExp.test(email);
}

inputField.forEach(() => {
	form.addEventListener('submit', (e) => {
		for (let i = 0, j = inputField.length; i < j; i++) {
			if (inputField[i].value == '') {
				inputField[i].nextElementSibling.className = 'display-block';
				inputField[i].style.border = '1px solid hsl(0, 100%, 74%)';
				e.preventDefault();
			} else {
				inputField[i].style.border = '1px solid hsl(246, 25%, 77%)';
				inputField[i].nextElementSibling.className = 'display-none';
			}
		}
		if (inputEmail.value != '' && !emailIsValid(inputEmail.value)) {
			inputEmail.nextElementSibling.className = 'display-block';
			inputEmail.nextElementSibling.lastElementChild.innerHTML = 'Looks like this is not an email';
			e.preventDefault();
		}
	});
});
