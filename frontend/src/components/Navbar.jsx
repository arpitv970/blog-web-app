import logo from '../assets/logo.png';
import { RiQuillPenFill } from 'react-icons/ri';
import { MdDarkMode } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-evenly items-center mt-[25px] text-[30px]'>
            <div>
                <img className='h-[4rem]' src={logo} alt='logo' />
            </div>
            <div className='w-[50%] flex justify-around items-center'>
                <Link to='/'>
                    <span className='cursor-pointer'>Home</span>
                </Link>
                <Link to='/dashboard'>
                    <span className='cursor-pointer'>Dashboard</span>
                </Link>
                <Link to='/login'>
                    <span className='cursor-pointer'>Log In</span>
                </Link>
                <Link to='/signup'>
                    <span className='cursor-pointer'>Sign Up</span>
                </Link>
            </div>
            <div className='flex justify-between items-center w-[12%]'>
                <Link to='/create-blog'>
                    <RiQuillPenFill size='5vh' />
                </Link>
                <MdDarkMode size='5vh' />
                <Link to='/user-profile'>
                    <FaUserCircle size='5vh' />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
