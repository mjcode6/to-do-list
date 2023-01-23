const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

});

app.post("/",function(req, res){

})

app.get("/work",function(req, res){

})


app.get("/about",function(req, res){
  res.render("about");
})



app.listen(3000, function(){
  console.log("your server running on port 3000")
});
