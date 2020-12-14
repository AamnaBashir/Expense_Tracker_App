import React,{ useContext } from 'react'
import { GlobalContext } from './GlobalState';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const amount=transactions.map(transaction =>transaction.amount);
    const income=amount.filter(item =>item >0).reduce((acc,item) =>(acc=acc+item),0).toFixed(2);
    const expense=(amount.filter(item =>item <0).reduce((acc,item) =>(acc=acc+item),0)*-1).toFixed(2);
    return (
        <div className="income-expense-container">
            <h3>INCOME <br /> Rs.{income}</h3>
            <h3>EXPENSE <br /> Rs.{expense}</h3>
           
            
        </div>
    )
}
