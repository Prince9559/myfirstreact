import logo from "./logo.svg";
import "./App.css";
import LineChart from "./Components/LineChart";
function App() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    data: [1, 2, 3, 4, 5, 6],
    title:"My Line"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LineChart data={data} />
    </div>
  );
}
export default App;