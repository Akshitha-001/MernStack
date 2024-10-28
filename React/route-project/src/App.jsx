import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import WebLayout from './layout/WebLayout'

const App = () => {
  return (
    <>
       <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App