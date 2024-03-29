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
import Dashboard from './Pages/user/Dashboard.js';
import PrivateRoute from './Component/Route/Private.js';
import ForgotPasssword from './Pages/Auth/Forgot-Password.js';
import AdminRoute from './Component/Route/AdminRoute.js';
import AdminDashboard from './Component/Admin/AdminDashboard.js';
import CreateCategory from './Component/Admin/CreateCategory.js';
import CreateProduct from './Component/Admin/CreateProduct.js';
// import Orders from './Component/Admin/Orders.js';
import Products from './Component/Admin/Products.js';
import Users from './Component/Admin/Users.js';
import Orders from './Pages/user/Orders.js';
import Profile from './Pages/user/Profile.js';
import UpdateProduct from './Component/Admin/UpdateProduct.js';
import ProductDetails from './Pages/ProductDetails/ProductDetails.js';
import Categories from './Pages/Category/Category.js';
import CategoryProduct from './Pages/user/CategoryProuct.js';
import SearchInput from './Component/Form/SearchInput.js';
import CartPage from './Pages/CartPage.js';
import AdminOrders from './Pages/Admin/AdminOrders.js';
// import Dashboard from './Pages/user/DashBoARD.js';

function App() {
  
  return (
  <>
  
  <Routes>
    <Route path='/' element ={<Home></Home>} />
    <Route path='/product/:slug' element ={<ProductDetails></ProductDetails>} />
    <Route path='/about' element ={<About></About>} />
    <Route path='/cart' element ={<CartPage></CartPage>} />
    <Route path='/categories' element ={<Categories></Categories>} />
    <Route path='/category/:slug' element ={<CategoryProduct></CategoryProduct>} />
    <Route path='/search' element ={<SearchInput></SearchInput>} />
    <Route path='/contact' element ={<Coontact></Coontact>} />
    <Route path='/forgot-password' element ={<ForgotPasssword></ForgotPasssword>} />

    <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
     
     <Route path='/dashboard' element={<AdminRoute></AdminRoute>}>
     <Route path='admin' element ={<AdminDashboard></AdminDashboard>} />
     <Route path='admin/orders' element ={<AdminOrders></AdminOrders>} />
     <Route path="admin/create-category" element={<CreateCategory />} />
    <Route path="admin/create-product" element={<CreateProduct />} />
    <Route path="admin/product/:slug" element={<UpdateProduct />} />
    <Route path="admin/products" element={<Products/>} />
    <Route path="admin/users" element={<Users/>} />
     </Route>

    <Route path='/policy' element ={<Policy></Policy>} />
    <Route path='/register' element ={<Register></Register>} />
    <Route path='/login' element ={<Login></Login>} />
    <Route path='*' element ={<PageNotFound></PageNotFound>} />
  </Routes>


  </>
  );
}

export default App;
