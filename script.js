

async function getdata(){
    try{      
let res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
let data = res.json()
data.then(function(result){
    console.log(result)
    displayData(result)
})

    }catch{
        console.log("Error")
    }
}
getdata()


let tabl = document.querySelector("table")

function displayData(data){


data.map((ele)=>{


    let first = document.createElement("tr");



    

    

    let image = document.createElement("td")

    let logo = document.createElement("img")
   logo.setAttribute("src", ele.image)

   

    let name = document.createElement("td")

    name.innerText = ele.name

    image.style.display = "flex"
    image.append(logo,name)

    
  
    // tr.style.display= "flex"
    // let second = document.createElement("tr");

    let price = document.createElement("td");

    price.innerText = ele.current_price

    let mcap = document.createElement("td");

    mcap.innerText = ele.market_cap


    let high = document.createElement("td");

   high.innerText = ele.high_24h
   
    let low = document.createElement("td")

    low.innerText = ele.low_24h


    // price.innerText = ele.




first.append(image,price,mcap,high,low);

tabl.append(first)

})




}
