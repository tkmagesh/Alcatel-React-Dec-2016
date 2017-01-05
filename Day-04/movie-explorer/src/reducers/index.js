import { combineReducers } from 'redux';
import MoviesReducer from './movies_reducer';
import SelectMovieReducer from './select_movie_reducer';

const rootReducer = combineReducers({
    movies : MoviesReducer,
    selectedMovie : SelectMovieReducer
});

export default rootReducer;
