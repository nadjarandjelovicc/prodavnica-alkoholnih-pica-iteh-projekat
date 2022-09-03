 
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
  const [cartNum, setCartNum] = useState(0); 
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0); 

 
 
  function addToken(auth_token){
    setToken(auth_token);
  }
 
  function refreshCart() {
    let u_korpi = telefoni.filter((p) => p.amount > 0);
    setCartProducts(u_korpi);
    var suma=0;
    cartProducts.forEach((p)=>{
      suma+=p.price*p.amount;
    })
    setSumPrice(suma);
  }
  function jeUKorpi(id){
    var postoji=0;
    cartProducts.forEach((p) => {
      if (p.id === id) {
       
        postoji=1;
      }
    });
     
    return postoji;
  }
  function addProduct( id) {
    
    setCartNum(cartNum + 1);
  
    telefoni.forEach((p) => {
      if (p.id === id) {
        p.amount++;
        setSumPrice(sum+p.price);
      }
    });
    refreshCart();
  
  }
  
  function removeProduct( id) {
   
    if(jeUKorpi(id)===1){
     
      setCartNum(cartNum - 1);
      telefoni.forEach((p) => {
        if (p.id === id) {
          if(p.amount === 0){
            return;
          }else{
            p.amount--; 
          }
        }
      });
      refreshCart();
    }
  }
  return (
    <div  >
      <BrowserRouter className="App">
        <NavBar token={token}></NavBar>
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
