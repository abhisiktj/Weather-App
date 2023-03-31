
let locate=document.getElementById('location');
let temp=document.getElementById('temp');
let desc=document.getElementById('desc');
let  humidity=document.getElementById('humidity-data');
let wind=document.getElementById("wind-speed-data");
let inputField=document.getElementById('input-field');
document.getElementsByClassName("search-bar")[0].addEventListener("submit",function(event){
    event.preventDefault();
    sendData(inputField.value);
})

 function sendData(value){
    fetch('/',{
        method:"POST",
        headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'},
        
      body:JSON.stringify({loc:value})

    }) 
    .then(response=>response.json())
    .then(response=>setData(response));
    
}
function setData(response){
    console.log(response.data[3]);
    locate.innerHTML=inputField.value;
    temp.innerHTML=response.data[0]+'C';
    desc.innerHTML=response.data[1];
    humidity.innerHTML=response.data[2]+"%";
    wind.innerHTML=response.data[3]+"kmph";
}