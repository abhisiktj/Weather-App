const express=require('express');
const path=require('path');
const axios=require('axios');
const bodyparser=require('body-parser');
require ('dotenv').config();

const app=express();
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.json({extended:true}));
app.post('/',(req,res)=>{
   const {loc}=req.body;
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${process.env.api_key}&units=metric`
  axios.get(url)
  .then((response)=>{
    let temp=response.data.main.temp;
    let desc=response.data.weather[0].description;
    let humidity=response.data.main.humidity;
    let wind=response.data.wind.speed;
    console.log(temp,desc,humidity,wind);
    res.status(201).json({message:"true",data:[temp,desc,humidity,wind]});
  })
  .catch((error)=>{
    res.status(400);
  })
})
app.listen(5000,()=>{
    console.log("Server started");
});
