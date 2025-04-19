  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Face from './Components/Face';
import Facebook from './Components/Facebook';
import Already from './Components/Already';
import Forget from './Components/Forget';
import './App.css';

function App() {
  return (
    <div>
    <Router>
    <Routes>

    <Route path="/"element={<Face/>}/>
    <Route path="/facebook"element={<Facebook/>}/>
    <Route path='/already'element={<Already/>}/>
    <Route path='/forget'element={<Forget/>}/>

    </Routes>
  </Router>
  </div>
  );
}

export default App;