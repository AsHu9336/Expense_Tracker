import React,{ useContext, useState} from 'react'
import { GlobalContext } from '../Context/GlobalContext';

export const AddTransaction = () => {

    const [Text,setText] = useState('');
    const [amount,setamount] = useState(0);

    //const {transactions} = useContext(GlobalContext)
    const {AddTransaction} = useContext(GlobalContext);
 
    const onsubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random() * 1000000),
            Text,
            amount: +amount
        }
        console.log(newTransaction);

        AddTransaction(newTransaction);
    }
    return (
        <div>
            <h4>Add Transaction</h4>
            <form onSubmit={onsubmit}>
                <div>
                    <label htmlFor="text"><strong>Expense</strong></label>
                    <input type='text' value={Text} onChange={(e) => setText(e.target.value)} placeholder='Expense'></input>
                </div>
                <div>
                    <label htmlFor="text"><strong>Amount</strong></label>
                    <input type='number' value={amount} onChange={(e) => setamount(e.target.value)} placeholder='Amount'></input>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}
