import React from 'react'
import { Link } from 'react-router-dom'

// type NavbarProps = {
//   isAuthenticated: boolean;
//   onLogout: () => void;
// };

const Navbar: React.FC = () => {

  return (
    <div className='w-full lg:p-4 flex fixed top-0 left-0 z-50 justify-center items-center border-b-2 bg-white'>
      <div className='w-full lg:flex hidden'>
        <div className='w-full flex lg:space-x-8 justify-center lg:ml-16 items-center'>
          <h1 className='text-black font-serif font-bold tracking-wider text-xl'> freelance chain </h1>
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-400 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search for any service..."
              />
              <button
                className="absolute top-1 right-1 flex items-center rounded bg-sky-600 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                </svg>

                Search
              </button>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center text-md font-serif lg:space-x-12'>
          <Link to={'/discover'} className='hover:underline-offset-2 hover:underline'>
            Discover
          </Link>
          {/* <Link to={'/sign-in'} className='hover:underline-offset-2 hover:underline'>
          Sign in
        </Link> */}
          <Link to={'/sign-up'} className='text-sky-600 border border-sky-600 p-3 flex text-center items-center justify-center rounded-2xl hover:bg-sky-600 hover:text-white ease-in-out duration-500'>
            Sign in With Metamask
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar