
import '../styles/App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import Eshop from '../pages/Eshop';
import MonCompte from '../pages/MonCompte';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../pages/Layout';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Deconnexion from '../pages/Deconnexion';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path='/' element= {<Layout/>}>
        <Route index element= {<Home/>}/>
        <Route path='home' element= {<Home/>}/>
        <Route path='eshop' element= {<Eshop/>}/>
        <Route path='compte' element= {<MonCompte/>}/>
        <Route path='signup' element= {<Signup/>}/>
        <Route path='login' element= {<Login/>}/>
        <Route path='deconnexion' element= {<Deconnexion/>}/>
        <Route path='cart' element= {<Cart/>}/>
        <Route path='*' element= {<NotFoundPage/>}/>

       </Route>
      

     </Routes>
   
    </BrowserRouter>
      
    </>
    
      
  );
}

export default App;
