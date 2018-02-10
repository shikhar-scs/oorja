$(document).ready(function () {
	
	$.post('/form/resume',({
		username: username
	}),
		(data) => {
			makeResume(data)
		}
	)
	
	function makeResume(data) {
		console.log(data)
	}
	
})
