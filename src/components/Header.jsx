import React from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar className="border-b-2">
      {/* Logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Varun's
        </span>
        Blog
      </Link>

      {/* Search Form */}
      <form className="hidden lg:flex items-center flex-1 px-4">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="w-full"
        />
      </form>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:order-2">
        {/* Dark Mode Button */}
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        {/* Sign In Button */}
        <Link to="/signin">
          <Button className="text-white bg-gradient-to-r from-purple-800 to-blue-700 hover:from-purple-700 hover:to-blue-600 focus:ring-2 focus:ring-blue-300 rounded-lg">
            Sign In
          </Button>
        </Link>

        {/* Toggle Button for Small Screens */}
        
      </div>

      {/* Collapsible Navbar Links (Visible in Small Screens Only) */}
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">
          About
        </Navbar.Link>
        <Navbar.Link href="/projects">
          Projects
        </Navbar.Link>
      </Navbar.Collapse>

      {/* Links for Large Screens */}
      <div className="hidden lg:flex items-center gap-6 px-4">
        <Link to="/" className="text-gray-700 hover:text-blue-700">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-700">
          About
        </Link>
        <Link to="/projects" className="text-gray-700 hover:text-blue-700">
          Projects
        </Link>
      </div>
    </Navbar>
  );
}
