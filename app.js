let key = "2f3b79879ef942e9918a33fafc4dfd9d";//key
let cardData = document.querySelector(".cardData");
let SearchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");

const getData = async(input) =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles);

    // searchType.innerText="Search : "+input;
    // inputData.value=""
    cardData.innerHTML="";
     jsonData.articles.forEach(function(article){ //iterate to every article of image and 
        console.log(article);

    let divs = document.createElement("div"); //creting div elemnent
    divs.classList.add("card");
    cardData.appendChild(divs);

    



    divs.innerHTML=`
    <img src="${article.urlToImage}" alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    `
    divs.addEventListener("click", function(){
        window.open(article.url);
    })
     })

}

window.addEventListener("load", function(){  //present in home buttton
    getData("cricket")
})



SearchBtn.addEventListener("click", function(){
    let inputText = inputData.value;
    getData(inputText);
})

function navClick(navName){
    

    if(navName == "politics"){
        document.getElementById("politics").style.color="rgb(0, 140, 255)";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
        document.getElementById("Travel").style.color="white";
        document.getElementById("Traffic").style.color="white";
        document.getElementById("Shopping").style.color="white";
        document.getElementById("Health").style.color="white";




    }

    if(navName == "sports"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="rgb(0, 140, 255)";
        document.getElementById("technology").style.color="white";
        document.getElementById("Travel").style.color="white";
        document.getElementById("Traffic").style.color="white";
        document.getElementById("Shopping").style.color="white";
        document.getElementById("Health").style.color="white";

    }
    if(navName == "technology"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="rgb(0, 140, 255)";
        document.getElementById("Travel").style.color="white";
        document.getElementById("Traffic").style.color="white";
        document.getElementById("Shopping").style.color="white";
        document.getElementById("Health").style.color="white";

    }

    if(navName == "Travel"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
        document.getElementById("Travel").style.color="rgb(0, 140, 255)";
        document.getElementById("Traffic").style.color="white";
        document.getElementById("Shopping").style.color="white";
        document.getElementById("Health").style.color="white";




    }

    if(navName == "Traffic"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
        document.getElementById("Travel").style.color="white";
        document.getElementById("Traffic").style.color="rgb(0, 140, 255)";
        document.getElementById("Shopping").style.color="white";
        document.getElementById("Health").style.color="white";




    }

    if(navName == "Shopping"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
        document.getElementById("Travel").style.color="white";
        document.getElementById("Traffic").style.color="white";
        document.getElementById("Shopping").style.color="rgb(0, 140, 255)";
        document.getElementById("Health").style.color="white";




    }

    if(navName == "Health"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
        document.getElementById("Travel").style.color="white";
        document.getElementById("Traffic").style.color="white";
        document.getElementById("Shopping").style.color="white";
        document.getElementById("Health").style.color="rgb(0, 140, 255)";




    }




    getData(navName)
}