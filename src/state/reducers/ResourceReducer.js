const ResourceReducer=(state=[],action)=>{
    switch(action.type){
        case "get_all_resource":
            state=action.payload;
            console.log(state)
            return state;
        case "get_single_resource":
            return state.map((single)=>{return single.id===action.payload})
        case "delete_resource":
            console.log(state)
            return state;
        case "add_resource":
            console.log(state)
            return state;
        case "update_resource":
            console.log(state)
            return state;
        
        default:
            return state;
    }
}
export default ResourceReducer