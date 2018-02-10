$(document).ready(function () {
	
	$('#submit').click( function () {
		let fname = $('#fname').val();
		let lname = $('#lname').val();
		let gender = $('#gender').val();
		let achievements = $('#achievements').val();
		
		if( fname && lname && gender && achievements) {
			$.post('/form/', {
				fname: fname,
				lname: lname,
				gender: gender,
				achievements: achievements
			}, () => {
				console.log('Sent')
			})
		}
	})
});
