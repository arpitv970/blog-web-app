import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';

const App = () => {
    return (
        <div className='font-poppins'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/create-blog' element={<CreateBlog />} />
                <Route path='/user-profile' element={<UserProfile />} />
            </Routes>
        </div>
    );
};

export default App;
