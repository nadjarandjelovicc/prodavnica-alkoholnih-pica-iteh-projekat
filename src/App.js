 
import './App.css';
import Footer from './Komponente/Footer';
import Login from './Komponente/Login';
import NavBar from './Komponente/NavBar';
import Pocetna from './Komponente/Pocetna';

function App() {
  return (
    <div  >
        <NavBar></NavBar>
        <Pocetna></Pocetna>
        <Login></Login>
        <Footer></Footer>
    </div>
  );
}

export default App;
