document.addEventListener("DOMContentLoaded",function (event){
    getNasa();
});
function getNasa(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=NMr8yTQwuLqihetBmNllMPnS7xEkkES2nbG5Bks3')
    .then(response =>response.json())
    .then(showData =>{
        console.log(showData);
        document.querySelector('.date')
        .innerText = showData.date;
        document.querySelector('.explanation')
        .innerText = showData.explanation;
        const image = document.createElement("img");
        const divContainer = document.querySelector(".picture");
        image.src = showData.hdurl;
        divContainer.appendChild(image);
       document.querySelector('.copy').innerText=showData.copyright;
     })
    .catch(err => console.log(err));
  }
  