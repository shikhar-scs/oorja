const MongoClient = require('mongodb').MongoClient;
const DataBase = require('../config.json').DB;

let users = null;

MongoClient.connect(DataBase.URI, function (err,db) {
	if(err) throw err;
	console.log("connected");
	users=db.collection('users');
});

const users = {
	
	createNew: function(user){
		return new Promise(function(res,rej){
			users.insertOne(user,function (err,result) {
				if(err) return rej(err);
				return res(result)
			})
		})
	},
	
	showAll: function (whereArgs) {
		return new Promise(function(res,rej){
			users.find(whereArgs).toArray(function (err,result) {
				if(err) return rej(err);
				res(result)
			})
		})
	},
	
	signInVerify: function (whereArgs) {
		return new Promise(function (res,rej) {
			users.findOne(whereArgs, function (err,result) {
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
	
};

exports.models={users};

