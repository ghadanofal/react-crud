import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { toast } from 'react-toastify'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import './../node_modules/font-awesome/css/font-awesome.min.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <ToastContainer/>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </>
)
