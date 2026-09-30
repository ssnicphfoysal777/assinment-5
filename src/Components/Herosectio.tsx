import Img from '../assets/banner-stack.png'
const Herosectio = () => {
    return <section>
        <div className='container mx-auto flex justify-start items-center'>
            <div>
                <h1 className='text-3xl font-bold'>
                    Build Your Ideal
                    <br />
                    <span className='bg-linear-to-r from-c1 via-c2 to-c3 bg-clip-text text-transparent'>
                        Development Stack
                    </span>
                </h1>





                <p>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="mt-6 flex items-center gap-3">
                    <button className="rounded-md bg-linear-to-r from-c1  to-btn px-3 py-2 text-sm font-medium text-white">
                        Explore Technologies
                    </button>

                    <button className="rounded-md border border-gray-200  px-5 py-2 text-sm font-medium text-gray-700">
                        Learn More
                    </button>
                </div>
            </div>



            {/* for image */}
            <div>
                <img src={Img} alt="" />
            </div>
        </div>
    </section>
};

export default Herosectio;