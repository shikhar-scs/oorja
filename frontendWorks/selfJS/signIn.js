$(document).ready(function () {
	
	$('#go').click( function () {
		console.log('as');
		let username = $('#username').val();
		let password = $('#password').val();
		
		if( username && password) {
			console.log('yes');
			$.post('/login/signIn', {
				username: username,
				password: password
			}, (data) => {
				console.log(data);
				window.location.href = "/dashboard.html";
			})
		}
	})
});
