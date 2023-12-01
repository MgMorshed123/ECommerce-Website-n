import logo from './logo.svg';
import './App.css';
import Layout from './Component/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Coontact from './Pages/Contact/Coontact';
import Policy from './Pages/Policy/Policy';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Register from './Pages/Regsiter/Register';
import Login from './Pages/Login/Login';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  return (
  <>
  
  <Routes>
    <Route path='/' element ={<Home></Home>} />
    <Route path='/about' element ={<About></About>} />
    <Route path='/contact' element ={<Coontact></Coontact>} />
    <Route path='/policy' element ={<Policy></Policy>} />
    <Route path='/register' element ={<Register></Register>} />
    <Route path='/login' element ={<Login></Login>} />
    <Route path='*' element ={<PageNotFound></PageNotFound>} />
  </Routes>


  </>
  );
}

export default App;
