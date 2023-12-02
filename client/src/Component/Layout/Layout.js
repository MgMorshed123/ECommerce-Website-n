import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({children}) => {
  return (
    <div> 
        <Header/>
        <main  style={{minHeight : "80vh"}}>
          <ToastContainer></ToastContainer>
        {children}
        </main>
        <Footer/>

    </div>
  )
}

export default Layout