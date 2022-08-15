//make a http request
//create an instance of the request
let xhr = new XMLHttpRequest();
//Open your request
xhr.open("GET","https://restcountries.com/v3.1/all");
//onload event (server will listen to request and process data )
xhr.onload=function(){console.log("************Response Received************");console.log(this.responseText);
//raw data
let data=JSON.parse(xhr.responseText)
//converted data into object
console.log(data);
//Loop throigh the data and print it on the console
for(let i=0;i<data.length;i++){console.log(`Flag:${data[i].flag }`)}}
//send the request
xhr.send();
// fetch>crud operations/