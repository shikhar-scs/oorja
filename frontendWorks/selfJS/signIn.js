$(document).ready(function () {
	
	$('#signIn').click( function () {
		console.log('as');
		let username = $('#username').val();
		let password = $('#password').val();
		
		if( username && password) {
			console.log('yes');
			$.post('/login/signIn', {
				username: username,
				password: password
			}, () => {
				console.log('Data Sent for SignIn')
			})
		}
	})
})
