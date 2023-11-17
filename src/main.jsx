import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Newsboard from './Components/Newsboard.jsx'
import Newsitem from './Components/Newsitem.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>

  </React.StrictMode>,
)
