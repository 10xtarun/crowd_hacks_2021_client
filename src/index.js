import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import Team from './Pages/Team';
import Reports from './Pages/Reports';
import Message from './Pages/Message';
import Home from './Pages/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { globalContext } from './globalContext';
import Chat from './Pages/Chat';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <globalContext.Provider value={() => {
        return {
          token: localStorage.getItem("token")
        }
      }
      }>
        <Navbar />
        <div className='page-container'>
          <div className='content-wrap'></div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path='/streams' element={<Reports />} />
            <Route path='/chat' element={<Chat />}></Route>
            <Route path='/friends' element={<Message />} />
            <Route path='/team' element={<Team />} />
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
        <Footer />
      </globalContext.Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
