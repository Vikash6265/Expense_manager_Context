import { createContext, useReducer } from "react";
import KhatabookReducer from "./KhatabookReducer";

const KhatabookContext = createContext();

export const KhatabookProvider = ({children}) =>{

    const initialState = {
        todos : [],
        edit : {                  
            todo : {},  // yaha pr oldTodo ki jgh todos ki iteration le li
            isEdit : false,
        },
    };

    const [state,dispatch] = useReducer(KhatabookReducer,initialState);

    // DeleteTodo

    const deleteTodo = (id) =>{
        
        dispatch({
            type:"DELETE",
            payload:id,
        });

    }

    // AddTodo

    const addTodo = (text,amount) =>{

        const newTodo = {
            id : crypto.randomUUID(),
            text : text,
            amount:parseInt(amount),
        };

        dispatch({
            type:"ADD",
            payload:newTodo,
        })

    };

    // EditTodo

    const editTodo = (todo) =>{

        dispatch({
            type:"EDIT",
            payload:todo,
        })

    };

    const updateTodo = (updatedTodo) =>{

        dispatch({
            type : "UPDATE",
            payload : updatedTodo,
        })

    };

    
    return(
        <KhatabookContext.Provider value={{todos:state.todos,edit:state.edit,deleteTodo,addTodo,editTodo,updateTodo}}>
            {children}
        </KhatabookContext.Provider>
    )
};

export default KhatabookContext;