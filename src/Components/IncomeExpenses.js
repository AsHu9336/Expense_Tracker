import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

export const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    const amount = transactions.map(transaction => transaction.amount);
    const Income = amount.filter(item => item > 0);
    const Totalincome = Income.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const Expense = amount.filter(item => item < 0);
    const TotalExpense = Expense.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${Totalincome}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${TotalExpense}</p>
            </div>
        </div>


    )
}
