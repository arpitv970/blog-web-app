import logo from '../assets/logo.png';
import { RiQuillPenFill } from 'react-icons/ri';
import { MdDarkMode } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const isLogged = useSelector((state) => state.isLogged);
    return (
        <nav className='flex justify-around items-center my-5 text-[30px]'>
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
                {isLogged && (
                    <Link to='/logout'>
                        <span className='cursor-pointer'>Log Out</span>
                    </Link>
                )}
                {!isLogged && (
                    <Link to='/login'>
                        <span className='cursor-pointer'>Log In</span>
                    </Link>
                )}
                {!isLogged && (
                    <Link to='/signup'>
                        <span className='cursor-pointer'>Sign Up</span>
                    </Link>
                )}
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
