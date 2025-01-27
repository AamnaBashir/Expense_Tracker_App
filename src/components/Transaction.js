import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState';


export const Transaction = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div className="history">
            <h3>History</h3>
            <hr />
            <ul>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}

            </ul>
        </div>
    )
}
