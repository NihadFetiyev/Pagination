import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Praktik from './praktik.jsx'
import Project from './components/newProject/index.jsx'
import OldProject from './components/exProject/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <Praktik/> */}
    <Project/>
    <OldProject/>
  </React.StrictMode>,
)
