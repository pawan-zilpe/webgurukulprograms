import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Slidebar from './component/Slidebar.jsx'
import Maincontent from './component/maincontent.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
 <App/>
  </StrictMode>,
)
