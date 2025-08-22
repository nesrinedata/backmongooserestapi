import logo from './logo.svg';
import './App.css';
import Navbarr from './components/Navbarr';
import Shop from './components/Shop';

import Dashbord from './components/Dashbord';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getproduct } from './redux/productslice';
import { useState } from 'react';
function App() {
  const [ping,setping] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getproduct())
  }, [ping])




  return (
    <div className="App">
      <Navbarr />
      <Routes>
        <Route path="/" element={ <Shop ping={ping} setping={setping}/> } />
        <Route path="/dashbord" element={ <Dashbord/> } />
      </Routes>
    </div>
  );
}

export default App;
