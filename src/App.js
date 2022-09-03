 
import './App.css';
import Footer from './Komponente/Footer';
import Login from './Komponente/Login';
import NavBar from './Komponente/NavBar';
import Pocetna from './Komponente/Pocetna';
import Register from './Komponente/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div  >
      <BrowserRouter className="App">
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={ <Pocetna></Pocetna>}></Route>
            <Route path="/login" element={ <Login  ></Login>}></Route>
            <Route path="/register" element={ <Register ></Register>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
