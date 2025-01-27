import React, { createContext, useReducer } from 'react';
import {reducerFunction} from './AppReducer';
//initial state
const initialState={
    transactions:[
        {id: 1 ,text:'Flower',amount:-20},
        {id: 2 ,text:'Salary',amount:300},
        {id: 3 ,text:'Book',amount:-10},
        {id: 4 ,text:'Camera',amount:50}
    ]

    
}
//Create context
export const GlobalContext= createContext(initialState);
//Provide Compnent
export const GlobalProvider= ({children}) => {
const [state,dispatch]=useReducer(reducerFunction,initialState);
//Actions
function deleteTransaction(id) {
    dispatch(
        {
            type:'DELETE_TRANSACTION',
            payload:id
        }
    );
    
}
function addTransaction(transaction) {
    dispatch(
        {
            type:'ADD_TRANSACTION',
            payload:transaction
        }
    );
    
}
return(<GlobalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    addTransaction
}}>
        {children}
</GlobalContext.Provider>
);
}