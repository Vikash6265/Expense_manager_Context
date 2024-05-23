const KhatabookReducer = (state,action) =>{

    switch(action.type){
        case "DELETE":
            return{
                ...state,
                todos:state.todos.filter((item)=>item.id !== action.payload),
            };
        
        case "ADD":
            return{
                ...state,
                todos:[action.payload,...state.todos],
            };  
         
        case "EDIT":
            return{
                ...state,
                edit:{todo:action.payload,isEdit : true},
            };
            
        case "UPDATE":
            return{
                ...state,
                todos:state.todos.map((item)=>item.id === action.payload.id ? action.payload : item),
                edit:{todo:{},isEdit:false},
            };
    }

};

export default KhatabookReducer;