const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'HackeamDB';

let usersCollection,formData = null;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
	usersCollection = db.collection('userCollection');
	formData = db.collection('formData');
});

const users = {
	
	createNew: function(user){
		return new Promise(function(res,rej){
			console.log(user);
			usersCollection.insertOne(user,function (err,result) {
				if(err) return rej(err);
				console.log(result);
				return res(result)
			})
		})
	},
	
	showAll: function (whereArgs) {
		return new Promise(function(res,rej){
			usersCollection.find(whereArgs).toArray(function (err,result) {
				if(err) return rej(err);
				res(result)
			})
		})
	},
	
	signInVerify: function (whereArgs) {
		return new Promise(function (res,rej) {
			usersCollection.findOne(whereArgs, function (err,result) {
				if(err) return rej(err);
				res(result)
			})
		})
	},
	
	deleteOne: function (whereArgs) {
		return new Promise(function (res,rej) {
			users.remove(whereArgs,function(err,result){
				if(err) return rej(err);
				else
					return res(result)
			})
		})
	}
	
}

const formsData = {
	
	createNew: function(formdata){
		return new Promise(function(res,rej){
			formData.insertOne(formdata,function (err,result) {
				if(err) return rej(err);
				console.log(result);
				return res(result)
			})
		})
	},
	
	findOne: function (whereArgs) {
		return new Promise(function (res,rej) {
			usersCollection.findOne(whereArgs, function (err,result) {
				if(err) return rej(err);
				res(result)
			})
		})
	}
}

module.exports.models = {
  users,formsData
};

