$(document).ready(function () {
	
	$('#signUp').click( function () {
		let name = $('#name').val();
		let email = $('#email').val();
		let username = $('#username').val();
		let password = $('#password').val();
		let repeatPassword = $('#repeatPassword').val();
		console.log(name, email, username, password, repeatPassword);
		if( name && email && username && password && (password === repeatPassword)) {
			$.post('/login/signUp', {
				name: name,
				email: email,
				username: username,
				password: password
			}, () => {
				console.log('Data Sent for SignUp')
			})
		}
	})
})