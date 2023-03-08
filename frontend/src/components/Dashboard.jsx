import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const isLogged = useSelector((state) => state.isLogged);
    return (
        <div>
            <h1 className='text-center font-[700] text-[60px]'>Dashboard</h1>

            {!isLogged ? (
                <section className='flex flex-col justify-center items-center mt-2 mb-5 text-[30px]'>
                    <p>Already on DEV Blogs?</p>
                    <Link to='/login'>
                        <p className='text-[#3F00F3]'>Log In</p>
                    </Link>
                </section>
            ) : (
                <h1 className='text-center font-[700] text-[60px]'>
                    Dashboard
                </h1>
            )}
        </div>
    );
};

export default Dashboard;
