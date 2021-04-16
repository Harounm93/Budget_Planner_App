import react, { useState } from 'react';

function ExpensesTotal() {
  const [total, setTotal] = useState();

  // Need to integrate react context to conntect expenses across app.

  const total = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className=' expenses'>
      <span> Total Expenses so far : {total}</span>
    </div>
  );
}
export default ExpensesTotal;
