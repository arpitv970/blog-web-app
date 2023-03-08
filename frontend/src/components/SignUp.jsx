import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleInput = (e) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSignup = (e) => {
        e.preventDefault();
        if (inputs.password !== inputs.confirmPassword) {
            return alert('Please Enter correct Password');
        }
        console.log(inputs);
    };
    return (
        <div>
            <h1 className='text-center font-[700] text-[60px]'>Sign Up</h1>
            <form
                onSubmit={handleSignup}
                className='w-[75%] mx-auto flex flex-col justify-between drop-shadow-xl'
            >
                <section className='my-3'>
                    <p className='text-left font-[600] text-[38px]'>
                        Full Name
                    </p>
                    <input
                        onChange={handleInput}
                        value={inputs.name}
                        name='name'
                        type='text'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2 transition-all duration-200 ease-in-out hover:border-devBlue'
                        placeholder='Enter Full Name'
                    />
                </section>
                <section className='my-3'>
                    <p className='text-left font-[600] text-[38px]'>Email Id</p>
                    <input
                        onChange={handleInput}
                        value={inputs.email}
                        name='email'
                        type='email'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2 transition-all duration-200 ease-in-out hover:border-devBlue'
                        placeholder='Enter Email Id'
                    />
                </section>
                <section className='my-3'>
                    <p className='text-left font-[600] text-[38px]'>Password</p>
                    <input
                        onChange={handleInput}
                        value={inputs.password}
                        name='password'
                        type='password'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2 transition-all duration-200 ease-in-out hover:border-devBlue'
                        placeholder='Enter Password'
                    />
                </section>
                <section className='my-3'>
                    <p className='text-left font-[600] text-[38px]'>
                        Confirm Password
                    </p>
                    <input
                        onChange={handleInput}
                        value={inputs.confirmPassword}
                        name='confirmPassword'
                        type='password'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2 transition-all duration-200 ease-in-out hover:border-devBlue'
                        placeholder='Re-Enter Password'
                    />
                </section>

                <button
                    type='submit'
                    className='text-[35px] font-[700] text-white bg-[#3F00F3] w-[16%] h-[10vh] text-center flex justify-center items-center mx-auto mt-5 border-[3px] rounded-[36px] border-black transition-all duration-200 ease-in-out hover:text-devYellow'
                >
                    Sign Up
                </button>
            </form>
            <section className='flex flex-col justify-center items-center mt-2 mb-5 text-[30px]'>
                <p>Already on DEV Blogs?</p>
                <Link to='/login'>
                    <p className='text-[#3F00F3]'>Log In</p>
                </Link>
            </section>
        </div>
    );
};

export default SignUp;
