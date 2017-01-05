export function Select_Movie_Action(movie){
    return {
        type : 'SELECT_MOVIE',
        payload : movie
    }
}

export function Add_Movie_Action(name, description){
    return {
        type : 'ADD_MOVIE',
        payload : {
            name , description
        }
    }
}

export function Delete_Movie_Action(movie){
    return {
        type : 'DELETE_MOVIE',
        payload : movie
    }
}