import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import WebLayout from './layout/WebLayout'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
<<<<<<< HEAD
import TwClasses from './pages/TwClasses'
import AdminProducts from './pages/Admin/AdminProducts'
import AdminOrders from './pages/Admin/AdminOrders'
import AdminUsers from './pages/Admin/AdminUsers'
import AdminSettings from './pages/Admin/AdminSettings'
=======
import AdminProducts   from './pages/Admin/AdminProducts'
import AdminOrders from './pages/Admin/AdminOrders'
import AdminSettings from './pages/Admin/AdminSettings'
import AdminUsers from './pages/Admin/AdminUsers'

>>>>>>> 7584501df4f9fa56160643df987df038e7c5a8df
// import {} from 'react'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/temp' element={<TwClasses />} />
                    </Route>
                    <Route element={<AdminLayout />}>
<<<<<<< HEAD
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/products' element={<AdminProducts />} />
                        <Route path='/admin/orders' element={<AdminOrders />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                        <Route path='/admin/settings' element={<AdminSettings />} />
=======
                    <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                    <Route path='/admin/products' element={<AdminProducts/>} />
                    <Route path='/admin/orders' element={<AdminOrders/>} />
                    <Route path='/admin/users' element={<AdminUsers/>} />
                    <Route path='/admin/settings' element={<AdminSettings/>} />
>>>>>>> 7584501df4f9fa56160643df987df038e7c5a8df
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App