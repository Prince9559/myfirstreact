import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Search from './Components/Search';
import Product from './Components/Product';

// import Apicall from "./Components/Apicall";

function App() {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/search"element={<Search/>}/>
      <Route path="/product"element={<Product/>}/>

      </Routes>
    </Router>

    // <div>

    //   <Apicall></Apicall>
      
    // </div>

  );
}

export default App;
