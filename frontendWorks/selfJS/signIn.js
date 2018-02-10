$(document).ready(function () {
	
	$('#signIn').click( function () {
		let username = $('#username').val;
		let password = $('#password').val;
		
		if( username && password) {
			$.post('/login/signUp', {
				username: username,
				password: password
			}, () => {
				console.log('Data Sent for SignIn')
			})
		}
	})
})
