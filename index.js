const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    // most popular movies api above
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    // search movies
const movieBox=document.querySelector("#movie-box");
const getMovies=async (api)=>{
const response= await fetch(api);
const data= await response.json();
showMovie(data.results)
// console.log(data);
}

const showMovie=(data)=>{
    movieBox.innerHTML="";
data.forEach(element => {
    const rating=element.vote_average.toFixed(1);
    const box=document.createElement("div");
    box.classList.add("box");
    box.innerHTML=` <img src="${IMGPATH+element.poster_path}" alt>
    <div class="overlay">
        <div class="title">
            <h2>${element.original_title}</h2>
            <span>${rating}</span>
        </div>
        <h3>Overview:</h3>
        <p>${element.overview}</p>
    </div>
    `;
    movieBox.appendChild(box)
});
}
document.querySelector("#search").addEventListener("keyup",function(e){
if(e.target.value != ""){
    getMovies(SEARCHAPI+e.target.value)

}
else{
    getMovies(APIURL)
}
})

getMovies(APIURL)