import React,{ useContext} from 'react';
import { GlobalContext } from './GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amount=transactions.map(transaction =>transaction.amount);
    const total=amount.reduce((acc,item) =>(acc=acc+item),0).toFixed(2);

    
    return (
        <div>
            <h3 className="balance">YOUR BALANCE  <br />Rs.{total}</h3>
        </div>
    )
}
