import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";
import WeatherApp from "./Components/WeatherApp";

// import LineChart from "./Components/LineChart";
// import Instagram from "./Components/Instagram";
// import Facebook from "./Components/Facebook";
// import Face from "./Components/Face";
function App() {

  // <Product></Product>
  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
  //   data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  //   title:"My Line"
  // };
  return (
    <div className="App">

      {/* <LineChart data={data} />
      <Router>
        <Routes>
         <Route path="/"element={<Face/>}/>
        <Route path="/instagram"element={<Instagram/>}/>
        <Route path="/facebook"element={<Facebook/>}/>

        </Routes>


      </Router> */}

      <WeatherApp></WeatherApp>

    </div>
  );
}

export default App;