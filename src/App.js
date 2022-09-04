 
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
import Korpa from './Komponente/Korpa';
import Kontakt from './Komponente/Kontaks';
import Inbox from './Komponente/Inbox';
import AdminPage from './Komponente/AdminPage';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
function App() {
  const[token,setToken] = useState();
  const [cartNum, setCartNum] = useState(0); 
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0); 
  const [pica,setPica] = useState([ ]);
  const [poruke,setPoruke] = useState([]);
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
 
  useEffect(() => {
    const getRandomLists2 = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/poruke",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
            },
          }
        );
        setPoruke(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists2();
  }, [ axiosInstance]);
  function addToken(auth_token){
    setToken(auth_token);
  }
 
  function handleLogout(){ 
    console.log("USAO")
    window.sessionStorage.setItem('auth_token',null); 
    window.sessionStorage.setItem('auth_name',null); 
 
    console.log(window.sessionStorage.getItem("auth_token")) 
  }

     
  
 
  function refreshCart() {
    let u_korpi = pica.filter((p) => p.kolicina > 0);
    setCartProducts(u_korpi);
    var suma=0;
    cartProducts.forEach((p)=>{
      suma+=p.cena*p.kolicina;
    })
    console.log(suma);
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
    console.log(id);
    setCartNum(cartNum + 1);
  
    pica.forEach((p) => {
      if (p.id === id) {
        p.kolicina++;
        
        console.log(sum);
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
            p.kolicina--; 
          }
        }
      });
      refreshCart();
    }
  }
  return (
    <div  >
      <BrowserRouter className="App">
        <NavBar token={token} odjava={handleLogout}></NavBar>
        <Routes>
            <Route path="/" element={ <Pocetna></Pocetna>}></Route>
            <Route path="/login" element={ <Login  addToken={addToken} ></Login>}></Route>
            <Route path="/register" element={ <Register ></Register>}></Route>
            <Route path="/pica" element={ <Pica pica={pica} onAdd={addProduct} onRemove={removeProduct} ></Pica>}></Route>
            <Route path="/korpa" element={ <Korpa pica={cartProducts} onAdd={addProduct} onRemove={removeProduct} sum={sum} ></Korpa>}></Route>
            <Route path="/kontakt" element={ <Kontakt></Kontakt>}></Route>
            <Route path="/admin/inbox" element={ <Inbox poruke={poruke} ></Inbox>}></Route>
            <Route path="/admin" element={ <AdminPage   ></AdminPage>}></Route>


        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
