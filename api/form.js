const route = require('express').Router();
const formdata =require('../mongo/models').models.formsData;

route.get('/', (req,res) => {
	res.sendFile('/home/shikhar/Desktop/work/HACKEAM/hckm/hckm/frontendWorks/HTMLfiles/form.html');
});

route.post('/', (req,res) => {
	formdata.createNew({
			username: req.body.username
		})
		.then((data) => {
			if (data.password === req.body.password) {
				res.send({data: data})
			}
		})
		.catch((err) => console.log(err))
});

route.post('/resume', (req,res) => {
	formdata.findOne({
		username: req.body.username
	})
		.then((data) => {
			res.send({data: data})
		})
		.catch((err) => console.log(err))
});

module.exports.route = route;
