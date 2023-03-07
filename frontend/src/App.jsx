import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';

const App = () => {
    const isLogged = useSelector((state) => state.isLogged);
    console.log(isLogged);
    return (
        <div className='font-poppins'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/logout' element={<LogOut />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/create-blog' element={<CreateBlog />} />
                <Route path='/user-profile' element={<UserProfile />} />
            </Routes>
        </div>
    );
};

export default App;
