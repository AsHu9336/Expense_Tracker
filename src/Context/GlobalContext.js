import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//Initial state
const initialState = {
    transactions:
        [
            { id: 1, text: 'Flower', amount: -20 }
        ]

}

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Context

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //Action
    function DeleteTransaction(id) {
        dispatch(
            {
                type: 'DELETE_TRANSACTION',
                payload: id

            }
        )
    }
    function AddTransaction(transaction) {
        dispatch(
            {
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
    }
    return (<GlobalContext.Provider value={
        {
            transactions: state.transactions,
            DeleteTransaction,
            AddTransaction

        }}>
        {children}
    </GlobalContext.Provider>
    )
}