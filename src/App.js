import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Header from './components/Header/Header';
import Checkout from './Pages/Checkout/Checkout';
import Router from './routes';
import { Provider } from 'react-redux';

import  Store  from './redux/store/Mystore';
import { Routes, Route } from 'react-router-dom';





const App = () => {
  return (
   
    // <Routes>
      
    //   <Route path="/checkout" element={<Checkout />} />
    //   <Route path="/" element={<Login />} />
    //   {/* <Route exact path="/" element={<Header />} /> */}
    //   <Route path="/home" element={<Home />} />
    // </Routes>


     <Provider store={Store}>   

    <Router />
    </Provider>
  );
};

export default App;
