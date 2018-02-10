$(document).ready(function () {

    document.getElementById('displayName').innerText = `${JSON.parse(localStorage.getItem('userData')).data.name}`;

    $('#submit').click( function () {
		let fname = $('#fname').val();
		let lname = $('#lname').val();
    let dob = $('#dob').val();
    let contact = $('#contact').val();
    let gender = $('#gender').val();
    let weight = $('#weight').val();
    let height = $('#height').val();
    let bmi = $('#bmi').val();
    let fit = $('#fit').val();
		let form = $('#form');
    let achievements = $('#achievements').val();
		if( fname && lname && gender && achievements) {
			$.post('/form/', {
				fname: fname,
				lname: lname,
				gender: gender,
				dob,
				contact,
				weight,
				height,
				bmi,
				fit,
				form,
				achievements: achievements
			}, (data) => {
				console.log(data);
			})
		}
	})
});
