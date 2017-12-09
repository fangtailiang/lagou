var express=require("express");
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var app=express();

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/1707mongo",{useMongoClient:true})
		.then(function(db){
			console.log("数据连接成功")
		});
var User = require('./models/user');
var Comment=require("./models/comment");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}))

app.post("/api/login",function(req,res){
	let {username,pwd} = req.body;
	User.find({"username":username},function(err,doc){
		console.log(err,doc)
		if(doc.length==0){
			res.json({
				code:1,
				msg:"用户名不存在"
			})
			return
		};
		if(doc[0].pwd!=pwd){
			res.json({
				code:1,
				msg:"密码错误"
			})
			return
		};
		res.json({
			code:0,
			msg:"登录成功"
		});
	})
	
});
app.post("/api/register",function(req,res){
	let {username,pwd}=req.body;
	var u=new User({
		username,
		pwd
	});
	u.save(function(err,doc){
		console.log(doc);
		if(err){
			console.log("错误");
			return
		}
		res.json({
			code:0,
			msg:"注册成功"
		})
	})
	
})
app.listen(8090);