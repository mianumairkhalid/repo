import { useState } from 'react';
import { navLinks } from '../data/navlinks'
import { Link as ScrollLink } from "react-scroll";
import logo from "../asset/logo.svg"
import card from "../asset/card.png"


const Welcome = () => {
    const [hamburger, setHamburger] = useState(false);

    return (
        <div className="w-full">
            <header
                className={`fixed z-40 top-0 left-0 py-[15px] md:py-[30px] px-5 md:px-[70px] sm:px-8 w-full flex items-center border-b-white border-b-[1px] font backdrop-blur-[30px] transition-all duration-300 ${hamburger ? 'bg-white' : ''}`}>
                <div className='w-full mx-auto flex items-center justify-between px-2'>
                    <div className='flex items-center justify-between w-full '>
                        <img src={logo} alt="" className='md:h-[70px] h-[26px]' />
                        <ul className='hidden lg:flex'>
                            {
                                navLinks.map((item, key) => (
                                    <li className='' key={`pc-nav${key}`}>
                                        <ScrollLink
                                            to={item.href}
                                            smooth={true}
                                            duration={300}
                                            className=' text-white hover:text-primary dark:hover:text-[#573f7e] font-semibold font-popp py-2 pr-4 cursor-pointer'>
                                            {item.title}
                                        </ScrollLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='h-[44px] w-[135px] lg:flex justify-center items-center text-[16px] font-bold bg-white rounded-md hidden'>
                            Open App
                        </div>
                        <div className="w-[40px] h-[40px] flex flex-col justify-center items-center cursor-pointer lg:hidden transition-all duration-300" onClick={() => setHamburger(prev => !prev)}>
                            <div className={` w-[20px] h-[2px] transition-all duration-500 ${hamburger ? '-rotate-45 translate-y-[8px] delay-200 bg-black' : 'rotate-0 translate-y-0 bg-white'}`}></div>
                            <div className={`bg-white h-[2px] my-[6px] transition-all duration-300 ${hamburger ? 'w-0' : 'w-[14px] delay-300'}`}></div>
                            <div className={`w-[20px] h-[2px] transition-all duration-500 ${hamburger ? 'rotate-45 -translate-y-[8px] delay-200 bg-black' : 'rotate-0 translate-y-0 bg-white'}`}></div>
                        </div>

                    </div>

                </div>
            </header>
            <div className={`lg:hidden bg-white  fixed z-30 w-full transition-all duration-500 ${hamburger ? 'translate-y-[70px] h-screen pt-[0px] md:pt-[100px]' : '-translate-y-[300px]'}`}>
                <ul className={`w-auto h-auto py-4 px-2  mx-0 outline-4 `}>
                    {
                        navLinks.map((item, key) => (
                            <li className='px-5 md:px-[70px] w-full ' key={`mobile-nav${key}`}>
                                <ScrollLink
                                    to={item.href}
                                    smooth={true}
                                    duration={300}
                                    onClick={() => setHamburger(false)} className='rounded-md py-2 block font-medium text-black border-[1px] border-transparent hover:border-white transition-all duration-200 cursor-pointer'>{item.title}</ScrollLink>
                            </li>
                        ))
                    }

                </ul>

            </div>
            <div className="h-auto lg:h-screen w-full pt-[120px] md:pt-[200px] lg:pt-[250px] bg-gradient-to-r from-teal-700 to-green-600 flex flex-col items-center justify-center lg:justify-between text-white">
                {/* Header Section */}
                <div className="text-center mb-8 px-10 md:px-[120px] xl:px-[25%]">
                    <p className="text-md font-semibold text-[#e1ffa0]">All-in-one personal banking and investing solutions.</p>
                    <h1 className="text-5xl font-bold mt-2">Open App.</h1>
                    <p className="text-lg mt-4">
                        Open Investment is a revolutionary app that allows users to trade digital currency
                        for stock and commodities options in a decentralized and immutable exchange.
                    </p>
                </div>

                {/* Search Bar Section */}
                <div className="flex items-center mt-6 border-[4px] border-[#528879] rounded-md">
                    <input
                        type="text"
                        placeholder="The Future of Banking & Investing"
                        className="w-[374px] p-4 rounded-l-md bg-white text-gray-700 placeholder-gray-500 focus:outline-none"
                    />
                    <button className="p-4 rounded-r-md w-[115px] bg-[#134341] hover:bg-[#268580] text-white font-semibold">
                        Join us
                    </button>
                </div>

                {/* Cards Section */}
                <img src={card} className='w-[66%] lg:w-1/2' alt="" />
            </div>
        </div>
    );
};

export default Welcome;
