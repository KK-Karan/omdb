let input = document.getElementById('search')
let button = document.getElementById('button')
let poster = document.getElementById('poster_container')
async function getInfo(inputValue){

    let info = document.getElementById('movie_info')
    info.innerHTML = ''
    poster.innerHTML = ''
    let response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c54084c&t=${inputValue}`)
    let movie= await response.json()

    let movieTitle = document.createElement('p')
     movieTitle.textContent = movie.Title
     movieTitle.classList.add('movie__title')

    let moviePoster = document.createElement('img')
     moviePoster.src = movie.Poster
     moviePoster.classList.add('movie__poster')
     poster.appendChild(moviePoster)

    let movieGenre = document.createElement('p')
    const genresArray = movie.Genre.split(',').map(genre => genre.trim());
    movieGenre.textContent = `${movie.Genre}`

    
    let moviePlot = document.createElement('p')
    moviePlot.textContent = movie.Plot
    moviePlot.classList.add('movie__plot')
   
    let movieDirector = document.createElement('p')
    const directorsArray = movie.Director.split(',').map(director => director.trim());
    movieDirector.textContent = `${directorsArray.length > 1 ? 'Directors': 'Director'}: ${movie.Director}`

    let movieWriter = document.createElement('p')
    const writersArray = movie.Writer.split(',').map(writer => writer.trim());
    movieWriter.textContent = `${writersArray.length > 1 ? 'Writers': 'Writer'}: ${movie.Writer}`

    let movieActor = document.createElement('p')
    const actorsArray = movie.Actors.split(',').map(actor =>actor.trim());
    movieActor.textContent = `${actorsArray.length> 1 ? 'Actors' : 'Actor'}: ${movie.Actors}`

    let movieRating = document.createElement('p')
    movieRating.textContent = `IMDb Rating: ${movie.imdbRating}/10`

    


    info.appendChild(movieTitle)
    info.appendChild(movieGenre)
    info.appendChild(moviePlot)
    info.appendChild(movieDirector)
    info.appendChild(movieWriter)
    info.appendChild(movieActor)
    info.appendChild(movieRating)


}
const cardVisible = () => {
let movieCard = document.getElementById('card')
 movieCard.style.visibility = 'visible'
}

getInfo('the matrix')
cardVisible()





button.addEventListener('click' , function(){
    getInfo(input.value)
    cardVisible()
})
