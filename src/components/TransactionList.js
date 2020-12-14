import React,{ useContext } from 'react';
import { GlobalContext } from './GlobalState';
export const TransactionList = (transaction) => {
    const {deleteTransaction}= useContext(GlobalContext);
    const sign= transaction.amount >0?'+':'-';
    return (
        
            <li className={transaction.amount >0? 'plus':'minus'}>
                {transaction.amount} <span>{sign}Rs.{Math.abs(transaction.amount)}</span>
                <button onClick={()=>deleteTransaction(transaction.id)}>x</button>
            </li>
    )
}
