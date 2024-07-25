import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>

        <li><NavLink to='/listedBook'>Listed Book</NavLink></li>
       <li><NavLink to={'/PageToRead'}>Pages to Read </NavLink></li>
       <li><NavLink to='/Recomanded'>Recomand For You</NavLink></li>
       <li><NavLink to='/famusWriter'>Famus Writer</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content workSense_font  rounded-box z-[1] mt-3 w-52 p-2 shadow  bg-gray-300">
                        {links} 

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 workSense_font">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <a className="btn bg-[#23BE0A] workSense_font text-white">Sign In</a>
                <a className="btn text-white workSense_font bg-[#59C6D2]">Sign Up </a>
            </div>
        </div>
        
    );
};

export default Header;