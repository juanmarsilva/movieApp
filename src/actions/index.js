export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';

export function addMovieFavorite(payload) {
    return {
        type: ADD_MOVIE_FAVORITE,
        payload
    };
};

export function removeMovieFavorite(id) {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=8c9267c4&s=" + titulo)
        .then(response => response.json()) // Esto lo transforma a lo que obtiene de la API en un objeto de javascript
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
        })
        .catch(error => console.log(error)) // Es buena practica ademas agregarle un catch luego de todos los then.
    };
}

export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=8c9267c4&i=${id}&plot=full`)
          .then(response => response.json()) // Esto lo transforma a lo que obtiene de la API en un objeto de javascript
          .then(json => {
            dispatch({ type: GET_MOVIE_DETAIL, payload: json });
          });
      };
}


// Si quisieramos hacerlo con axios sera asi: 

// return axios("http://www.omdbapi.com/?apikey=8c9267c4&s=" + titulo)
//         .then(response => response.data) // Esto lo transforma a lo que obtiene de la API en un objeto de javascript
//         .then(data => {
//           dispatch({ type: GET_MOVIES, payload: data });
//         });