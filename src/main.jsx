//component import
import App from './App.jsx'
//css import
import './index.css'
//library import
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>    
  <App />
    </BrowserRouter>
  
)
