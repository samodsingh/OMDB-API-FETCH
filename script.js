function getBtnfun() {  
    // let apiKey ="8cfa75d"
     let inputBox = document.getElementById('inputBox').value;
     let card = document.getElementById("card");
    fetch('http://www.omdbapi.com/?apikey=8cfa75d&s='+inputBox,{
       
        method: "GET",
        }).then((Response)=>{
            if(!Response.ok){
                throw Error (Response.statusText)
            }
            console.log('res',Response);
            return Response.json();
        }).then((data)=>{  
           console.log('data------------',data.Search);
           for(let i of data.Search){
            //    console.log(i.Poster); 
            let posterimg =document.createElement("img");
            posterimg.src=i.Poster;
            let title = document.createElement("h4");
            let year = document.createElement("h5");
            let cardbody = document.createElement("div");
            let mainDiv = document.createElement("div");
            mainDiv.id='mainDiv';
            console.log(mainDiv)


            mainDiv.appendChild(posterimg);
            mainDiv.appendChild(cardbody)
            cardbody.appendChild(title);
            cardbody.appendChild(year);
            card.appendChild(mainDiv)

            posterimg.innerHTML = i.Poste;
            title.innerHTML ="Title :- "+i.Title;
            year.innerHTML ="Year :- " + i.Year;

        

           }
       
             
        })  
              
   
}