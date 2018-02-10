$(document).ready(function () {
	
	$('#go').click( function () {
		let username = $('#username').val();
		let password = $('#password').val();
		
		if( username && password) {
			$.post('/login/signIn', {
				username: username,
				password: password
			}, (data) => {
				console.log(data);
				window.location.href = "../HTMLfiles/dashboard.html";
			})
		}
	})
});
