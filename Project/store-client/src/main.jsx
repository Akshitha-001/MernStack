
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import App from './App'
import {Toaster} from 'sonner'

createRoot(document.getElementById('root')).render(
    <>
  
    <App />
    <Toaster richColors />
    </>

  
)
