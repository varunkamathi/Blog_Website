import React from 'react'
import {Button, Navbar, TextInput} from 'flowbite-react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

export default function Header() {
  return (
    <Navbar className='border-b-2 '>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 vai-purple-500 to-pink-500 rounded-lg text-white'>Varun's</span>        
        Blog
        </Link>
        <form>
          <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray'> 
          <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon />
          </Button>
          <Link to='/signin'>
          <Button className='text-white bg-gradient-to-r from-purple-800 to-blue-700 rounded-lg' outline>
            Sign In
          </Button>
          </Link>
          <Navbar.Toggle/>
          </div>
          <Navbar.Collapse>
            <Navbar.Link>
              <Link to='/'>
              Home
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link to='/about'>
              about
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link to='/projects'>
              Projects
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
    </Navbar>
    )
}
