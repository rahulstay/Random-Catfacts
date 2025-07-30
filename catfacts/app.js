const apiurl ="https://catfact.ninja/fact";
var quo = document.getElementById("fact");
const button =document.getElementById("btn");

async function getdata(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    quo.innerHTML = data.fact;

}

button.addEventListener('click',function(){
    getdata(apiurl);
})


