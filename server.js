const express = require('express');
const config = require('./config.json');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const routes = {
	login: require('./api/login').route
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/login',routes.login);
app.use('/',express.static(path.join(__dirname,'frontendWorks')));

app.get('/',(req,res)=>{
	res.redirect('/HTMLfiles');
});

app.get('/HTMLfiles',(req,res)=>{
	res.sendFile(__dirname+'/frontendWorks/HTMLfiles/index.html');
});

app.listen( process.env.PORT || config.SERVER.PORT ,
	()=> {console.log("Server started at http://localhost:" +config.SERVER.PORT)});

app.use((req,res)=> res.status(404).send('page not found'));
