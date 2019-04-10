const express=require('express');
const exphbs=require('express-handlebars')  //for setting template engine ie handlebars

var app=express();

app.engine('handlebars',exphbs({defaultLayout:'mainpage'}));   //code for template engine setting  //default layout setting also
app.set('view engine','handlebars');  //viewing of template engine

app.use(express.static('views/static'));  //image path assigning views folder and its sub folder static
app.use(express.urlencoded());  // data fetching from form
app.get('/', (req,res)=>{
    res.render('index',{name: 'aju'});  //data from backend. name is a variable    //rendering and calling of the rout page
});
app.get('/home',   
    (req,res)=>{
    res.send("welcome to my home")
});
app.get('/contact', (req,res)=>{
    res.render('contact')
});
app.get('/about',(req,res)=>{
    res.render('about')

});
app.get('/gallery',(req,res)=>{
    res.render('gallery')
});

app.post('/getdata',(req,res)=>{  //transfer contents after button clicking into getdata
   var name=req.body.getname;  //data fetched from getname and its add into variable name
   var address=req.body.getaddr;
   var place=req.body.getplace;
   var email=req.body.getemail;
   var mobile=req.body.getmob;

   console.log(name,address,place,email,mobile);
    //res.send(name)
});

app.post('/login',(req,res)=>{
var user=req.body.username;
var pass=req.body.password;

if(user=='admin'&&pass=='1234'){
    res.send("success")

}
else{
res.send("failed")
}
});
app.listen(process.env.PORT || 2500,()=>{    //checking for running of this port 
    console.log('running succesfully')
});