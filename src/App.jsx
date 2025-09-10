import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/login.jsx';
import Dasboard from './components/Dashboard.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dasboard/>}/>
      </Routes>
    </Router>
  );
}