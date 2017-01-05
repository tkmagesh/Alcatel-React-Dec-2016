export default function(state = null, action){
    var defaultList = [
        {id : 1, name : 'Lord of the rings', description : 'A journey to destroy the ring', yor : '2011', imdb_rating :6.6 },
        {id : 2, name : 'Spectre', description : 'Another spectacular Bond movie', yor : '2015', imdb_rating : 7},
        {id : 3, name : 'Theri', description : 'A typical tamil movie', yor : '2016', imdb_rating : 5.5},
        {id : 4, name : 'Bahubali', description : 'A new age indian movie', yor : '2016', imdb_rating : 8},
    ];
    
    if (action.type === 'ADD_MOVIE'){
        var newMovie = {
            id : state.reduce((result, movie) => result > movie.id ? result : movie.id) + 1,
            name : action.payload.name,
            description : action.payload.description
        };
        return state.concat([newMovie]);
    }
    if (action.type === 'DELETE_MOVIE'){
        return state.filter(movie => movie.id !== action.payload.id);
    }
    return state ? state : defaultList;
}