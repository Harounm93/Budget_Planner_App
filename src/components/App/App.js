import './App.css';
import Budget from '../Budget/index';
import Remainder from '../Remaining/index';
import ExpensesTotal from '../Expenses';

function App() {
  return (
    <div className='Container'>
      <header className='App-header'>
        <h1> Budget Planner</h1>
        <div className='budget-box'>
          <Budget />
        </div>
        <div>
          <Remainder />
        </div>
        <div>
          <ExpensesTotal/>
        </div>
      </header>
    </div>
  );
}

export default App;
