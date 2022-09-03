 
import './App.css';
import Footer from './Komponente/Footer';
import Login from './Komponente/Login';
import NavBar from './Komponente/NavBar';
import Pocetna from './Komponente/Pocetna';
import Register from './Komponente/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const[token,setToken] = useState();
   
  function addToken(auth_token){
    setToken(auth_token);
}
  return (
    <div  >
      <BrowserRouter className="App">
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={ <Pocetna></Pocetna>}></Route>
            <Route path="/login" element={ <Login  addToken={addToken} ></Login>}></Route>
            <Route path="/register" element={ <Register ></Register>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
