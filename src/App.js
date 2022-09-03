 
import './App.css';
import Footer from './Komponente/Footer';
import Login from './Komponente/Login';
import NavBar from './Komponente/NavBar';
import Pocetna from './Komponente/Pocetna';
import Register from './Komponente/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pica from './Komponente/Pica';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
function App() {
  const[token,setToken] = useState();
  const [cartNum, setCartNum] = useState(0); 
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0); 
  const [pica,setPica] = useState([ ]);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/pice",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
            },
          }
        );
        setPica(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [ axiosInstance]);
 
  function addToken(auth_token){
    setToken(auth_token);
  }
 
  function refreshCart() {
    let u_korpi = pica.filter((p) => p.kolicina > 0);
    setCartProducts(u_korpi);
    var suma=0;
    cartProducts.forEach((p)=>{
      suma+=p.cena*p.kolicina;
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
  
    pica.forEach((p) => {
      if (p.id === id) {
        p.kolciina++;
        setSumPrice(sum+p.cena);
      }
    });
    refreshCart();
  
  }
  
  function removeProduct( id) {
   
    if(jeUKorpi(id)===1){
     
      setCartNum(cartNum - 1);
      pica.forEach((p) => {
        if (p.id === id) {
          if(p.kolicina === 0){
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
            <Route path="/pica" element={ <Pica pica={pica} onAdd={addProduct} onRemove={removeProduct} ></Pica>}></Route>

        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
