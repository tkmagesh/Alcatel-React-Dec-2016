export default function(currentState = null, action){
    if (action.type === 'SELECT_MOVIE'){
        return action.payload;
    }
    return currentState;
}