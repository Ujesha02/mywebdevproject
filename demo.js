console.log(__dirname) 
const express= require('express');
const app= express();
const path = require('path');

const staticpath = path.join(__dirname,'../demowebsite')


app.use(express.static(staticpath));

console.log(__dirname)
app.get('/',(req,res)=>{
    console.log('cofee-sip')
    res.sendFile(__dirname+'/index.html')
})
app.get('/home',(req,res)=>{
    console.log("Opening Home Page")
    res.sendFile(__dirname +'/index.html')
    console.log(__dirname)
});
app.get('/about',(req,res)=>{
    console.log(" Opening About Page")
    res.sendFile(__dirname+'/about.html')
});
app.get('/services',(req,res)=>{
    console.log("Services Opening")
    res.sendFile(__dirname+'/services.html')
});

app.get('/contact',(req,res)=>{
    console.log("Opening Cobntact Page")
    res.sendFile(__dirname+"/contact.html")
});
app.get("*",(req,res)=>{
    console.log("Page Not Define")
    res.send("Error:404! Page Not Found")
})



app.listen(80,(req,res)=>{
    console.log("Running!")
});