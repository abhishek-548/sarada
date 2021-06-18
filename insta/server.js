var express=require("express");

var app=express();

var bodyParser=require("body-parser")

app.use(express.static("capstonestatic"));

app.use(bodyParser.urlencoded({ extended: false }))

app.set("view engine","ejs")

app.get("/",function(req,res){
	res.sendFile(__dirname+"/insta.html")
})
app.get("/in",function(req,res){
	res.sendFile(__dirname+"/login.html")
})
app.post("/login",function(req,res){
	var mongojs=require("mongojs");
	var cs="mongodb+srv://abhishek:abhishek@cluster0.gimxr.mongodb.net/pro?retryWrites=true&w=majority"
	var db=mongojs(cs,["pro"])
	var d={
		name:req.body.name,
		password:req.body.password,
	}
	db.pro.insert(d,function(err,doc){
		if(err){
			res.send("Error occured");
		}
		else{
			res.sendFile(__dirname+"/after.html")
		}
	})
	
})
app.listen(4000)