// src/main.tsx - Place this file in the src folder at the root of your project

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/waxeloquent">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)