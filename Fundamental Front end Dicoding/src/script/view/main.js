import '../component/movie-list.js';
import '../component/content-element.js';
import DataSource from "../data/data-source.js";
 const main = ()=>{
     const searchElement = document.querySelector("content-element");
     const movieListElement = document.querySelector("movie-list");
      //pencarian film
     const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };
    const onButtonFilterClicked = () => {
      DataSource.filterType(searchElement.value,movieListElement.valueFilter)
          .then(renderResult)
          .catch(fallbackResult)
   };
     const renderResult = results=>{
        movieListElement.movies = results;
        movieListElement.clickEventFilter=onButtonFilterClicked;
     };
     const fallbackResult =message=>{
        movieListElement.renderError(message);
     };
    
   searchElement.clickEvent=onButtonSearchClicked;
   
 }

 export default main; 