import nikeLogo from '../assets/nike_logo.png'
import PrimaryButton from './PrimaryButton'
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Navbar() {
    function handleNavlinkActive({ isActive }) {
        return `${isActive && "underline"} hover:underline`;
    }

    return (
        <>
            <div className='flex justify-between py-5 sticky top-0 bg-white shadow-md'>
                <Link to="/">
                    <img src={nikeLogo} alt="Logo" className='h-11 ml-20' ></img>
                </Link>
                <div>
                    <ul className='flex gap-6 font-semibold text-gray-700'>
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
                <PrimaryButton>Login</PrimaryButton>
            </div>
            <Outlet />
        </>
    )
}
