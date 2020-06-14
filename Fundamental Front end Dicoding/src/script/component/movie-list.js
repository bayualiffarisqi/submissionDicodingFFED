import './movie-item.js';
class MovieList extends HTMLElement{
    set movies(movies){
        this._movies = movies;
        this.render();
    }
    renderError(message){
       this.innerHTML = "";
       this.innerHTML +=`<h2 class="placeholder">${message}</h2>`;
    }
    set clickEventFilter(event){
        this._clickEventFilter = event;
        this.render();
    }
    get valueFilter(){
        return this.querySelector("#filterType").value;
    }
    render(){
        this.innerHTML = `
        <div class="filter-container">
            <label>Filter Type
                <select name="filterType" id="filterType" class="filterType">
                    <option>......</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                    <option value="Game">Game</option>		
                </select>
            </label>
            <button id="filterTypeButton" type="submit">filter</button>
        </div> 
        `
        this.querySelector("#filterTypeButton").addEventListener("click", this._clickEventFilter);
        this._movies.forEach(movie=>{
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        })
    }
}

customElements.define("movie-list",MovieList);
