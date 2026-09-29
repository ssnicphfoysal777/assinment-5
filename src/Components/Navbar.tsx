import logo from '../assets/logo-text.png'
const Navbar = () => {
    return (
        <nav className="h-20 bg-white">
            <div className=" container mx-auto flex justify-between my-3 ">
                <div>
                    <img className='h-9 w-auto' src={logo} alt="" />
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-5 my-2'>
                        <li className='text-pink'>Home<a href=""></a></li>
                        <li>Technologies<a href=""></a></li>
                        <li>Projects<a href=""></a></li>
                        <li>About<a href=""></a></li>
                        <li>Contact<a href=""></a></li>
                    </ul>
                </div>


                <div>
                    <ul className=' flex justify-center items-center gap-5'>
                        <li>Sign In<a href=""></a></li>
                        <li>
                        <button className="btn btn-secondary rounded-4xl">Sign Up</button>
                       
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;