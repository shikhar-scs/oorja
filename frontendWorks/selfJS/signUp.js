$(document).ready(function () {
	
	$('#signUp').click( function () {
		console.log('sfvdd');
		let name = $('#name').val;
		let email = $('#email').val;
		let username = $('#username').val;
		let password = $('#password').val;
		let repeatPassword = $('#repeatPassword').val;
		
		if( name && email && username && password && (password === repeatPassword)) {
			console.log('vdfdf')
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
