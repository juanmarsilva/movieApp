import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE } from "../actions/index";

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

function rootReducer(state = initialState, action) {

    if(action.type === ADD_MOVIE_FAVORITE) {
        // aca puedo agregar un if que me verifique si la pelicula que añadi a favorito ya la habia agregado previamente..
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.concat(action.payload)
        };
    };

    if(action.type === REMOVE_MOVIE_FAVORITE) {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter( movie => movie.id !== action.payload )
        };
    };

    if(action.type === GET_MOVIES) {
        return {
            ...state,
            moviesLoaded: action.payload.Search
        };
    };

    if(action.type === GET_MOVIE_DETAIL) {
        return {
            ...state, 
            movieDetail: action.payload 
        };
    };

    return state;
};

export default rootReducer;