



import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between p-4 bg-gray-100 shadow-md'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900 '>Sanjee<span className='text-2xl font-bold text-green-600'>vni</span></h1>
        </div>
        <div className='flex items-center justify-between gap-8 font-medium'>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
              }`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
              }`
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? "bg-green-600 text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
              }`
            }
            to="/blog"
          >
            Blogs
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar