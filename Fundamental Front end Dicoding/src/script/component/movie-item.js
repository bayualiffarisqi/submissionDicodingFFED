class MovieItem extends HTMLElement{
    set movie(movie){
        this._movie = movie;
        this.render();
    }
    render(){
        this.innerHTML = ` 
        <div class="movie-info"> 
             <h2>  ${this._movie.Title}  </h2> 
             <hr>
             <div class="more-info">
                <div class="litle-info">
                    <h4>Type :   ${this._movie.Type}  </h4> 
                    <p>Tahun, ${this._movie.Year}  </p>
                </div>   
                <div class="getMore">
                    GET MORE <br> masih pengembangan min :)
                </div>
             </div>
        </div>
        <div class="movie-desArt">
            <img class="fan-art-movie" src="${this._movie.Poster}" alt="Fan Art"> 
        </div>`
        ;
    }
}

customElements.define("movie-item",MovieItem ); 