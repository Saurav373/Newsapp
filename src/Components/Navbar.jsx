import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../public/logo.svg'

const Navbar = ({ color, colortheme }) => {
    const [hover, setHover] = useState(false)

    return (
        <div>
            <nav className={`navbar ${(color == "black" ? "bg-blue-900" : "bg-slate-400")} sticky top-0 z-10`}>
                <div className="max-w-screen-xl flex items-center mx-auto p-4 sticky t-0">
                    <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8
                         rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${(color == "black" ? "bg-blue-900 text-white" : "bg-slate-400 text-white")} h-8`}>

                        <li className='p-0 m-0 cursor-pointer relative -top-2' onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}>
                                <img src={Logo} height={35} width={50} className='fil-blue' /></li>
                        <li>
                            <NavLink to="/" className={`block ${color == "black" ? "text-white" : "text-black"} bg-transparent nav-item`}
                            >Top News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/entertainment" className={`block ${(color == "black" ? "text-white" : "text-black")} bg-transparent nav-item`}>Entertainment</NavLink>
                        </li>
                        <li>
                            <NavLink to="/health" className={`block ${(color == "black" ? "text-white" : "text-black")} bg-transparent nav-item`}>Health</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sports" className={`block ${(color == "black" ? "text-white" : "text-black")} bg-transparent nav-item`}>Sports</NavLink>
                        </li>
                        <li>
                            <NavLink to="/technology" className={`block ${(color == "black" ? "text-white" : "text-black")} bg-transparent nav-item`}>Technology</NavLink>
                        </li>
                        <li>
                            <NavLink to="/science" className={`block ${(color == "black" ? "text-white" : "text-black")} bg-transparent nav-item`}>Science</NavLink>
                        </li>
                        <li>
                            <NavLink to="/business" className={`block ${(color == "black" ? "text-white" : "text-black")} bg-transparent nav-item`}>Business</NavLink>
                        </li>
                        <li><svg onClick={colortheme} className='h-8 w-8 cursor-pointer'><path
                            className={`scale-150 ${(color == "white") ? "fill-purple-700" : "fill-white"}`} d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" ></path></svg></li>
                    </ul>
                   {hover && <div className="h-14 w-52 bg-black text-white absolute top-20 border rounded-lg flex justify-center items-center transition duration-1000 ">
                        Made By Saurav Kattel
                    </div>}
                </div>
            </nav>


        </div>
    )
}

export default Navbar
