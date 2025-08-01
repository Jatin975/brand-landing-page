import { useState } from 'react';
import nikeLogo from '../assets/nike_logo.png'
import PrimaryButton from './PrimaryButton'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleNavlinkActive({ isActive }) {
        return `${isActive && "underline"} hover:underline`;
    }

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex items-center justify-between p-4">
                    <Link to="/">
                        <img src={nikeLogo} alt="Logo" className='h-11 md:ml-20' ></img>
                    </Link>
                    <div className='flex items-center'>

                        <button data-collapse-toggle="navbar-default" type="button" onClick={() => setIsOpen((prev) => !prev)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden md:flex justify-center" id="navbar-default">
                            <ul className="font-medium flex flex-col gap-1 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <NavLink to="/" className={handleNavlinkActive} end>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="menu" className={handleNavlinkActive}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to="location" className={handleNavlinkActive}>Location</NavLink>
                                </li>
                                <li>
                                    <NavLink to="about" className={handleNavlinkActive} >About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="contact" className={handleNavlinkActive}>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <PrimaryButton>Login</PrimaryButton>
                </div>
                <div className={` ${isOpen ? "flex" : "hidden"} justify-center relative`} id="navbar-default">
                    <ul className="md:hidden w-fit px-7 font-medium flex flex-col gap-1 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 absolute">
                        <li>
                            <NavLink to="/" className={handleNavlinkActive} end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="menu" className={handleNavlinkActive}>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="location" className={handleNavlinkActive}>Location</NavLink>
                        </li>
                        <li>
                            <NavLink to="about" className={handleNavlinkActive} >About</NavLink>
                        </li>
                        <li>
                            <NavLink to="contact" className={handleNavlinkActive}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
