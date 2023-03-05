import './App.css';

function App() {
    return (
        <div className='font-poppins m-auto flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Ahh! Shit, here we go again!</h1>
            <section className='flex flex-col justify-center items-center text-center'>
                <h3 className='font-semibold text-xl'>
                    Before we move any further in the project, make sure of the
                    following:
                </h3>
                <ul>
                    <li className='line-through'>
                        Create frontend design prototype using Figma
                    </li>
                    <li className='line-through'>
                        Learn TailwindCSS & use that only for creating
                        responsive frontend UI
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default App;
