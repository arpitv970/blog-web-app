import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const LogIn = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const handleInput = (e) => {
        setInputs((prevInput) => ({
            ...prevInput,
            [e.target.name]: e.target.value,
        }));
    };

    const sendReq = async () => {
        const res = await axios
            .post('http://localhost:5000/api/user/login', {
                email: inputs.email,
                password: inputs.password,
            })
            .console((err) => console.log(err));

        const data = await res.data;
        return data;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendReq();
    };
    return (
        <div>
            <h1 className='text-center font-[700] text-[60px]'>Log In</h1>
            <form
                onSubmit={handleLogin}
                className='w-[75%] mx-auto flex flex-col justify-between drop-shadow-xl'
            >
                <section className='my-3'>
                    <p className='text-left font-[600] text-[38px]'>Email Id</p>
                    <input
                        onChange={handleInput}
                        name='email'
                        value={inputs.email}
                        type='email'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2  transition-all duration-200 ease-in-out hover:border-devBlue'
                        placeholder='Enter Email Id'
                    />
                </section>
                <section className='my-3'>
                    <p className='text-left font-[600] text-[38px]'>Password</p>
                    <input
                        onChange={handleInput}
                        name='password'
                        value={inputs.password}
                        type='password'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2 transition-all duration-200 ease-in-out hover:border-devBlue'
                        placeholder='Enter Password'
                    />
                </section>
                <button
                    type='submit'
                    className='text-[35px] font-[700] text-white bg-[#3F00F3] w-[16%] h-[10vh] text-center flex justify-center items-center mx-auto mt-5 border-[3px] rounded-[36px] border-black transition-all duration-200 ease-in-out hover:text-devYellow'
                >
                    Log In
                </button>
            </form>
            <section className='flex flex-col justify-center items-center mt-2 mb-5 text-[30px]'>
                <p>New to DEV Blogs?</p>
                <p>Create Your account</p>
                <Link to='/signup'>
                    <p className='text-[#3F00F3]'>Sign Up</p>
                </Link>
            </section>
        </div>
    );
};

export default LogIn;
