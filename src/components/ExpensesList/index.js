import react, { useState } from 'react';

function ExpensesListl() {
  const [total, setTotal] = useState();

  // Need to integrate react context to conntect expenses across app.
 //temp arr
  let expenses = []

  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);
  
  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
        filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
};

  return (
    <div className=' Expenses-list'>
    <input
				type='text'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul >
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
    </div>
  );
}
export default ExpensesList;