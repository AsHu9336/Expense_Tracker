import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import { Transaction } from './Transaction';

export const TransactionHistory = () => {

  const { transactions } = useContext(GlobalContext);
  
  return (
    <div>
      <h4>History</h4>
      <ul className='list'>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction= {transaction}/>))}
        

      </ul>
    </div>
  )
}
