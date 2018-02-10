const route = require('express').Router();

const user =require('../mongo/models').models.users;

route.get('/', (req,res) => {
	res.sendFile('/home/soumya/Team Projects/HackEam/hckm/frontendWorks/HTMLfiles/signIn.html');
});

route.post('/test', (req,res)=> {
	res.redirect('/');
});

route.post('/signIn', (req,res) => {
	console.log('hey');
  res.redirect('/HTMLfiles');
  user.signInVerify({
			username: req.body.username
		})
		.then((data) => {
      if (data.password === req.body.password) {
				console.log('hoho');
			}
		})
		.catch((err) => console.log(err))
})

route.post('/signUp', (req,res) => {
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
