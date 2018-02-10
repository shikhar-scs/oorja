const route = require('express').Router();
const user =require('../mongo/models').models.user;

route.get('/', (req,res) => {
	res.redirect('/HTMLfiles/signIn.html')
});

route.get('/signIn', (req,res) => {
	user.signInVerify({
			username: req.body.username
		})
		.then((data) => {
			if (data.password === req.body.password) {
				res.redirect('/dashboard')
			}
		})
		.catch((err) => console.log(err))
})

route.get('/signUp', (req,res) => {
	user.createNew({
			name: req.body.name,
			email: req.body.email,
			username: req.body.username,
			password: req.body.password
		})
		.then(() => {
			console.log('User Created Successfully')
		})
		.catch((err) => console.log(err));
})

module.exports.route = route;
