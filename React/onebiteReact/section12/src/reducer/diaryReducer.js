export function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE" : 
            return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
        case "DELETE" : 
            return state.filter((item) => String(item.id) !== String(action.id));
        default:
            break;
    }
}