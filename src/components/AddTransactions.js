import React,{ useContext,useState} from 'react'
import {GlobalContext} from './GlobalState';

export const AddTransactions = () => {
    const {addTransaction}= useContext(GlobalContext);
    const [description, setDescription] = useState('');
    const [transactionAmount,setAmount]=useState(0);


    const onSubmit =(e)=>{
        e.preventDefault();
        
        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            description,
            transactionAmount:+transactionAmount
        }
        addTransaction(newTransaction);
    }
    return (
        <div className="transaction-class">
            <h3>Add New Transaction</h3>
            <hr />
            <form>
                <label htmlFor="description">
                    Enter Description <br />
                    </label>
                    <input 
                    type="text" 
                    placeholder="Detail of Transaction"
                    id="description" 
                    value={description}
                    onChange={(e) =>setDescription(e.target.value)}
                    required />
              
                <br />
                <label htmlFor="amount">

                    Enter Amount <br />
                    </label>
                    <input 
                    type="number" 
                    placeholder="Enter Amount"
                    id="amount"
                    value={transactionAmount}
                    onChange={(e) =>setAmount(e.target.value)}
                    required />
                <br />
                
            </form>
            <button onClick={onSubmit}>Add Transaction</button>
        </div>
    )
}
