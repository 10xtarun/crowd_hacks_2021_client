import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import Team from './Pages/Team';
import Stream from './Pages/Stream';
import Talk from './Pages/Talk';
import Support from './Pages/Support';
import Message from './Pages/Message';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'



ReactDOM.render(
  <React.StrictMode>
    <div className='page-container'>
      <div className='content-wrap'>
     <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path='/stream' element={<Stream />} />
        <Route path='/talk' element={<Talk />} />
        <Route path='/team' element={<Team />} />
        <Route path='/support' element={<Support />} />
        <Route path='/message' element={<Message />} /> 
      </Routes>
    
      </BrowserRouter>
      </div>
      <Footer />
      </div>

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
