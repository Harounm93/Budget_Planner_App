import './App.css';
import Budget from '../Budget/index'

function App() {
  return (
    <div className="Container">
      <header className="App-header">
    <h1> Budget Planner</h1>
        <div className = "budget-box">
        <Budget/>
        </div>
       
      </header>
    </div>
  );
}

export default App;
