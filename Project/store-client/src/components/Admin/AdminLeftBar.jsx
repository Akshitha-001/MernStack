<<<<<<< HEAD
//import React from 'react'
import { NavLink } from 'react-router-dom'


const AdminLeftBar = () => {
  const Linksdata=[
    {
      title: 'Dashboard',
      path:'./admin/dashboard'
=======
import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLeftBar = () => {
  const Linksdata = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard'
>>>>>>> 7584501df4f9fa56160643df987df038e7c5a8df
    },
    {
      title: 'Products',
      path: '/admin/products'
    },
    {
      title: 'Orders',
      path: '/admin/orders'
    },
    {
      title: 'Users',
      path: '/admin/users'
    },
    {
      title: 'Settings',
      path: '/admin/settings'
    }
<<<<<<< HEAD

=======
>>>>>>> 7584501df4f9fa56160643df987df038e7c5a8df
  ]
  return (
    <div className='w-full h-screen shadow-purple-400 shadow-md flex justify-center items-center'>
      <div className='h-full w-full flex flex-col'>
<<<<<<< HEAD
        <div className='h-[10%] flex justify-center font-bold text-center text-purple-500'>
        Max Store
        </div>
        <div className='h-[80%] w-full flex flex-col items-center font-bold'>
        {Linksdata.map((link, index) => (
=======
        <div className='h-[10%] w-full text-purple-500 flex justify-center font-bold text-2xl items-center'>
          MaX Store
        </div>
        <div className='h-[80%] w-full flex flex-col items-center '>
          {Linksdata.map((link, index) => (
>>>>>>> 7584501df4f9fa56160643df987df038e7c5a8df
            <NavLink to={link.path} key={index} className='h-[10%] w-full px-8 hover:bg-purple-500/90 hover:text-white flex justify-start items-center rounded-sm shadow-md font-bold'>
              {link.title}
            </NavLink>
          ))
          }
        </div>
        <div className='h-[10%] w-full flex items-end'>
          <div className=' px-8 bg-red-500 w-full h-2/3 text-white flex justify-start font-bold items-center'>
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLeftBar