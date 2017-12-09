var mongoose=require("mongoose");
var CommentSchema=require("../schemas/comment");

var Comment=mongoose.model("Comments",CommentSchema);
module.exports=Comment;