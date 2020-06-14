 class DataSource {
    static searchMovie(keyword){
        return fetch(`https://www.omdbapi.com/?apikey=4e9a0e25&s=${keyword}`)
        .then(response =>{
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.Search) {
                return Promise.resolve(responseJson.Search);
            } else {
                return Promise.reject(`There is no movie ${keyword} here, please check again`);
            }
        })
    }
    static filterType(keyword,type){
        return fetch(`https://www.omdbapi.com/?apikey=4e9a0e25&s=${keyword}&type=${type}`)
        .then(response =>{
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.Search) {
                return Promise.resolve(responseJson.Search);
            } else {
                return Promise.reject(` There is no movie ${keyword} ${type} here, please check again`);
            }
        })
    }
}

export default DataSource; 