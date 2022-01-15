import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     <button className={"btn btn-primary btn-lg"} onClick={() => {
       window.location = "cashbox://group/356"
       setTimeout(() => {
         window.location = "http://onelink.to/5pubw4"
       }, 500)
     }} >View Clique</button>
      </header>
    </div>
  );
}

export default App;
