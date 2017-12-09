var mongoose=require("mongoose");
var CommentSchema=mongoose.Schema({
	title:String,
	detail:String,
	img:String,
	author:String
});
module.exports=CommentSchema;