let password_match = function() {
	if (document.getElementById('password').value !=
			document.getElementById('confirm-password').value) {
		document.getElementById('confirm-password').setCustomValidity('Passwords must match');
		document.getElementById('confirm-password').style.backgroundColor = 'lightpint';
	}
	else {
		document.getElementById('confirm-password').setCustomValidity('');
		document.getElementById('confirm-password').style.backgroundColor = '#7FFF00';
	}
};

window.addEventListener("load", (event) => {
	document.getElementById('password').addEventListener('input', password_match);
  document.getElementById('confirm-password').addEventListener('input', password_match);
});
