import { navLinks } from '../data/navlinks'
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect, useRef } from 'react';
import logo from "../asset/logo.svg"
import card from "../asset/card.png"
import icon1 from "../asset/icon1.png"
import icon2 from "../asset/icon2.png"
import icon3 from "../asset/icon3.png"
import icon4 from "../asset/icon4.png"
import chain from "../asset/chain.png"
import tab1 from "../asset/tab1.png"
import tab2 from "../asset/tab2.png"
import tab3 from "../asset/tab3.png"
import contract from "../asset/contract.png"
import tabImg1 from "../asset/tabImg1.png"
import tabImg2 from "../asset/tabImg2.png"
import tabImg3 from "../asset/tabImg3.png"
import check from "../asset/check.png"
import cards from "../asset/cards.webp"
import walletIntegrations from "../asset/walletIntegrations.png"
import coinbase from "../asset/coinbase.png"
import metaMask from "../asset/metaMask.png"
import ledger from "../asset/ledger.png"
import openWallet from "../asset/openWallet.png"
import leftDots from "../asset/leftDots.webp"
import openLogo from "../asset/openLogo.png"
import escrow from "../asset/escrow.png"
import email from "../asset/email.png"
import phone from "../asset/phone.png"
import location from "../asset/location.png"
import tradingInvesting from "../asset/tradingInvesting.png"
import currenies from "../asset/currencies.webp"
import rightCard from "../asset/right-card.png"
import personalWallet from "../asset/personalWallet.png"

const Welcome = () => {
    const [hamburger, setHamburger] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Check if we're scrolling down or up
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                if (headerRef.current) {
                    headerRef.current.style.transform = 'translateY(-100%)';
                }
            } else {
                // Scrolling up
                if (headerRef.current) {
                    headerRef.current.style.transform = 'translateY(0)';
                }
            }
            // Update last scroll position
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const headerClassName = isScrolled ?
        'fixed z-40 top-0 left-0 py-[15px] md:py-[30px] px-5 md:px-[70px] sm:px-8 w-full flex items-center font backdrop-blur-[30px] transition-all duration-300 bg-white' :
        'fixed z-40 top-0 left-0 py-[15px] md:py-[30px] px-5 md:px-[70px] sm:px-8 w-full flex items-center border-b-[#4F7770] border-b-[1px] font backdrop-blur-[30px] transition-all duration-300';

    const tabs = [
        {
            title: "Payments & Receivables",
            content: "Raise invoices and receive instant payment in the form of tokenised shares to your personal wallet. Make payments for goods and services with no banking fees or capital risk.",
            image: tabImg1,
            icon: tab1
        },
        {
            title: "Immutable Transaction History",
            content: "Raise invoices and receive instant payment in the form of tokenised shares to your personal wallet. Make payments for goods and services with no banking fees or capital risk.",
            image: tabImg2,
            icon: tab2
        },
        {
            title: "Digital Currency to Equity Options",
            content: "Buy, sell and swap digital currency for a wide range of fractional equity options reflecting Stock Exchange market results. Gain profits as stock options climb from real utility.",
            image: tabImg3,
            icon: tab3
        }
    ];

    return (
        <div className="w-full">

            <header style={{
                boxShadow: "-2px 3px 90px -20px rgb(0 0 0 / 25%)",
            }} ref={headerRef} className={`${headerClassName} transition-transform duration-300`}>
                <div className='w-full mx-auto flex items-center justify-between px-2'>
                    <div className='flex items-center justify-between w-full '>
                        <img src={logo} alt="" className='md:h-[70px] h-[26px]' />
                        <ul className='hidden lg:flex space-x-12'>
                            {
                                navLinks.map((item, key) => (
                                    <li className='' key={`pc-nav${key}`}>
                                        <ScrollLink
                                            to={item.href}
                                            smooth={true}
                                            duration={300}
                                            className={`text-${isScrolled ? 'green' : 'white'} hover:text-${isScrolled ? 'primary' : '#573f7e'} dark:hover:text-[#573f7e] font-semibold font-popp pr-4 cursor-pointer`}>
                                            {item.title}
                                        </ScrollLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={`bg-${isScrolled ? '[#277768]' : '[#fff]'} text-${isScrolled ? '[#E1FFA0]' : '[#000]'} cursor-pointer h-[44px] w-[135px] lg:flex justify-center items-center text-[16px] font-bold rounded-md hidden`}>
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
            <div className="h-auto lg:h-screen w-full pt-[120px] md:pt-[200px] lg:pt-[250px] bg-[#174743] text-white flex justify-center">
                <div className='w-full flex flex-col items-center'>

                    <div className="text-center px-10 md:px-[120px] xl:px-[25%]">
                        <p className="text-base font-inter font-semibold text-[#E1FFA0]">All-in-one personal banking and investing solutions.</p>
                        <h1 className="text-[72px] text-white font-inter font-bold leading-none mt-2">Open App.</h1>
                        <p className="text-lg text-[#FFFFFF8F] font-semibold mt-3">
                            Open Investment is a revolutionary app that allows users to trade digital currency
                            for stock and commodities options in a decentralized and immutable exchange.
                        </p>
                    </div>

                    <div className="w-[40%] mt-28 flex items-center border-[4px] border-[#528879] rounded-lg">
                        <input
                            type="text"
                            placeholder="The Future of Banking & Investing"
                            className="p-4 w-full rounded-l-md bg-white text-gray-700 placeholder-gray-500 focus:outline-none"
                        />
                        <button className="p-4 rounded-r-md w-[115px] bg-[#134341] hover:bg-[#268580] text-white font-semibold">
                            Join us
                        </button>
                    </div>
                </div>

                {/* Cards Section */}
                {/* <img src={card} className='w-[66%] lg:w-1/2' alt="" /> */}
            </div>
            <div
                style={{
                    backgroundColor: 'transparent',
                    backgroundImage: 'linear-gradient(180deg, #0C231F 0%, #134341 100%)',
                }}
                className="text-center rounded-t-[50px] py-[120px] mt-20 flex flex-col items-center justify-center"
            >

                <div className='sm:w-[38%]'>
                    <p className='font-semibold font-inter text-[#E1FFA0] font-base mb-5'>Why Open Investment?</p>
                    <h2 className='font-semibold font-inter text-[48px] text-white leading-none'>The only fintech app you’ll ever need.</h2>
                    <p className='mt-3 font-medium text-[#FFFFFF8F] text-base'>Our online trading and banking protocol is user-friendly and easy to navigate.</p>
                </div>
                <div className='w-[85%] mt-28'>
                    <div className='flex gap-16 justify-center'>
                        <div className='w-[20%] flex flex-col justify-start items-center'>
                            <div className='bg-[#284D3D] w-20 h-20 p-3 rounded-full mb-5'>
                                <div className='bg-[#517353] w-full h-full rounded-full p-2 flex items-center justify-center'>
                                    <img src={icon1} className='w-full' alt="" />
                                </div>
                            </div>
                            <h3 className='text-white text-lg font-inter mb-1 font-semibold'>Personal Custodian</h3>
                            <p className='text-[#FFFFFF8F] text-base font-medium'>Store & swap fractional equities in your personal wallet to pay for services or accumulate gains.</p>
                        </div>


                        <div className='w-[20%] flex flex-col justify-start items-center'>
                            <div className='bg-[#284D3D] w-20 h-20 p-3 rounded-full mb-5'>
                                <div className='bg-[#517353] w-full h-full rounded-full p-2 flex items-center justify-center'>
                                    <img src={icon2} className='w-full' alt="" />
                                </div>
                            </div>
                            <h3 className='text-white text-lg font-inter mb-1 font-semibold'>Decentralised Ledger</h3>
                            <p className='text-[#FFFFFF8F] text-base font-medium'>A secure, transparent and immutable blockchain ledger will record all results and transactions.</p>
                        </div>



                        <div className='w-[20%] flex flex-col justify-start items-center'>
                            <div className='bg-[#284D3D] w-20 h-20 p-3 rounded-full mb-5'>
                                <div className='bg-[#517353] w-full h-full rounded-full p-2 flex items-center justify-center'>
                                    <img src={icon3} className='w-full' alt="" />
                                </div>
                            </div>
                            <h3 className='text-white text-lg font-inter mb-1 font-semibold'>Escrow Security</h3>
                            <p className='text-[#FFFFFF8F] text-base font-medium'>All equity share offering will hold maintain locked value in escrow funds for full amount.</p>
                        </div>




                        <div className='w-[20%] flex flex-col justify-start items-center'>
                            <div className='bg-[#284D3D] w-20 h-20 p-3 rounded-full mb-5'>
                                <div className='bg-[#517353] w-full h-full rounded-full p-2 flex items-center justify-center'>
                                    <img src={icon4} className='w-full' alt="" />
                                </div>
                            </div>
                            <h3 className='text-white text-lg font-inter mb-1 font-semibold'>Digital to Stocks</h3>
                            <p className='text-[#FFFFFF8F] text-base font-medium'>Use Bitcoin and Etherium to purchase stocks such as Tesla, Meta and many more options.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FDFEFD] flex justify-center pt-36'>
                <div className='w-[85%]'>
                    <div className='flex justify-between'>
                        <div className='w-[45%]'>
                            <h2 className='text-[#0C231F] leading-none text-[48px] font-inter font-semibold'>Seamless trading and banking solutions.</h2>
                            <p className='text-[#0c231F99] text-base font-medium font-inter mt-10'>Experience the ultimate financial revolution as you escrow your digital assets to buy stock and commodities options seamlessly.</p>
                            <p className='text-[#0c231F99] text-base font-medium font-inter mt-5'>With our user-friendly platform, you can trade, swap, and sell tokenised shares with ease, all within a secure and transparent environment. Embrace the power of DeFi and diversify your digital investments to enjoy the potential gains from traditional stock markets. Join us now and unlock a world of limitless possibilities in the exciting realm of decentralised finance. </p>
                            <p className='text-[#0c231F99] text-base font-medium font-inter mt-10'>Trusted by the world’s most ambitious companies</p>
                            <img src={chain} className='w-[85%] mt-5' alt="" />
                        </div>
                        <div className='w-[45%]'>
                            <img src={rightCard} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-20'>
                <div className='w-[85%]'>
                    <div className='w-[67%]'>
                        <h2 className='text-[#0C231F] leading-none text-[48px] font-inter font-semibold'>Global unity, the future made easy.</h2>
                        <p className='text-[#0c231F99] text-justify text-base font-medium font-inter mt-4'>Fractional equity shares allow investors to own a fraction of a share rather than having to purchase whole shares, instantly and from anywhere in the world. These equity shares will be represented as digital tokens on the blockchain and in users personal wallet, providing the benefits of transparency, security and ease of transfer.</p>
                    </div>
                </div>

            </div>
            <div className='flex justify-center mt-10 tabs-sections'>
                <div className='w-[85%]'>
                    <div className='flex justify-between items-center'>
                        <div className='w-[45%]'>
                            {tabs.map((tab, index) => (
                                <div key={index}
                                    className={`bg-${activeTab === index ? '[#F1FFD2]' : '[#fff]'} border-l-[4px] border-${activeTab === index ? '[#0C231F]' : '[#F1F3F3]'} px-10 py-7 cursor-pointer`}
                                    onClick={() => setActiveTab(index)}>
                                    <div className='flex gap-3'>
                                        <img src={tab.icon} className='w-4 h-4' alt="" />
                                        <h3 className='text-[#134341] leading-none text-lg font-inter font-medium'>{tab.title}</h3>
                                    </div>
                                    <p className='text-[#0c231F99] font-medium text-base font-inter mt-2'>{tab.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className='w-[49%] shadow-xl py-[60px] px-[80px] flex justify-center items-center rounded-2xl'
                            style={{
                                backgroundColor: 'transparent',
                                backgroundImage: 'linear-gradient(180deg, #134341 0%, #277768 100%)',
                            }}>
                            <img src={tabs[activeTab].image} alt={tabs[activeTab].title} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-20 tabs-sections'>
                <div className='w-[85%]'>
                    <div className='flex justify-between items-center'>
                        <div className='shadow-lg w-[49%] pt-[60px] px-[80px] flex justify-center items-center rounded-2xl'
                            style={{
                                backgroundColor: 'transparent',
                                backgroundImage: 'linear-gradient(180deg, #134341 0%, #277768 100%)',
                            }}>
                            <img src={personalWallet} className='rounded-t-2xl' />
                        </div>
                        <div className='w-[45%]'>
                            <h2 className='text-[#0C231F] leading-none text-[48px] font-inter font-semibold'>Complete control over your wealth.</h2>
                            <p className='text-[#0c231F99] text-justify text-base font-medium font-inter mt-4'>Unlike traditional financial systems where a third party, such as a bank, manages your funds, an online wallet allows you to be your own bank. You have the ability to send, receive and manage your Digital assets and fractional shares independently without relying on intermediaries.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-20 tabs-sections'>
                <div className='w-[85%]'>
                    <div className='flex justify-between items-center'>
                        <div className='w-[45%]'>
                            <h2 className='text-[#0C231F] leading-none text-[48px] font-inter font-semibold'>New and traditional financial synergy.</h2>
                            <p className='text-[#0c231F99] text-justify text-base font-medium font-inter mt-4'>Fractional shares as a means of payment offers global accessibility, wealth diversification, potential appreciation and lower transaction costs. Additional benefits include capital gains tax optimisation, currency conversion saving and no external interventions to freeze personal wealth.</p>
                        </div>
                        <div className='shadow-lg w-[49%] pt-[60px] px-[80px] flex justify-center items-center rounded-2xl'
                            style={{
                                backgroundColor: 'transparent',
                                backgroundImage: 'linear-gradient(180deg, #134341 0%, #277768 100%)',
                            }}>
                            <img src={currenies} className='rounded-t-2xl' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-28 tabs-sections border-b-[4px] border-[#23645E]'>
                <div className='w-[85%]'>
                    <div className='flex gap-10 justify-between items-center'>
                        <div className='w-[49%]'>
                            <img src={cards} alt="" />
                        </div>
                        <div className='w-[49%]'>
                            <h2 className='text-[48px] text-[#0C231F] font-semibold leading-none font-inter'>All-in-one decentralised digital app.</h2>
                            <div className='mt-10 grid grid-cols-2 gap-5'>
                                <div className='flex gap-2'>
                                    <img src={check} className='w-3 h-3' alt="" />
                                    <p className='text-base font-inter leading-none font-medium text-[#0C231F]'>Easy-to-Use Interface</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={check} className='w-3 h-3' alt="" />
                                    <p className='text-base font-inter leading-none font-medium text-[#0C231F]'>Full Escrow Assurance</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={check} className='w-3 h-3' alt="" />
                                    <p className='text-base font-inter leading-none font-medium text-[#0C231F]'>Digital to Equity Opions
                                    </p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={check} className='w-3 h-3' alt="" />
                                    <p className='text-base font-inter leading-none font-medium text-[#0C231F]'>Community DOA</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-28'>
                <div className='w-[85%]'>
                    <div className='flex gap-10 justify-between items-center'>
                        <div className='w-[49%]'>
                            <h2 className='text-[#0C231F] leading-none text-[48px] font-inter font-semibold'>About Us</h2>
                            <p className='text-[#0c231F99] text-justify text-base font-medium font-inter mt-10'>Our innovative approach provides users with exposure to traditional stock markets without the need to convert their digital assets into fiat. By keeping their funds within the escrow contract, users avoid extra fees and complexities associated with transferring funds between different accounts. Additionally, this integration allows for seamless and instantaneous trading between tokenised shares and fiat, enabling users to capitalise on market opportunities swiftly. Moreover, users can diversify their investment portfolio effectively, balancing the potential gains from digital assets with the stability of traditional shares. Overall, this streamlined process ensures that users’ money never leaves the platform, enhancing security, convenience, and financial flexibility in one cohesive solution. </p>
                        </div>
                        <div className='w-[49%] flex items-center justify-center'>
                            <img src={logo} className='w-[60%]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-28'>
                <div className='w-[85%]'>
                    <div className='flex gap-10 justify-between items-center'>
                        <div className='w-[49%] flex items-center justify-center  bg-[#F1F3F3] py-5 px-14 rounded-2xl border-[3px] border-[#23645E]'>
                            <img src={contract} alt="" />
                        </div>
                        <div className='w-[49%] sm:pl-10'>
                            <h2 className='text-[#0C231F] leading-none text-[48px] font-inter font-semibold'>Smart contract automation</h2>
                            <p className='text-[#0c231F99] text-justify text-base font-medium font-inter mt-5'>Smart contracts are at the heart of our groundbreaking approach to tokenised shares and secure transactions. Leveraging the power of smart contracts, we offer users the ability to trade and invest in tokenised shares seamlessly, without the need for traditional intermediaries. When users decide to lock their digital currency for tokenised shares, our smart contract escrow lock ensures that their funds are held securely until the predetermined conditions are met. </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-28'>
                <div className='w-[85%]'>
                    <div className='flex gap-10 justify-between items-center'>

                        <div className='w-[49%] sm:pr-10'>
                            <h2 className='text-[#0C231F] leading-none text-[48px] font-inter font-semibold'>Smart contract automation</h2>
                            <p className='text-[#0c231F99] text-justify text-base font-medium font-inter mt-5'>Smart contracts are at the heart of our groundbreaking approach to tokenised shares and secure transactions. Leveraging the power of smart contracts, we offer users the ability to trade and invest in tokenised shares seamlessly, without the need for traditional intermediaries. When users decide to lock their digital currency for tokenised shares, our smart contract escrow lock ensures that their funds are held securely until the predetermined conditions are met. </p>
                        </div>
                        <div className='w-[49%] flex items-center justify-center  bg-[#F1F3F3] py-5 px-14 rounded-2xl border-[3px] border-[#23645E]'>
                            <img src={escrow} className='w-[70%]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-28'>
                <div className='w-[85%]'>
                    <div className='flex gap-10 justify-between items-center'>
                        <div className='w-[45%] flex items-center justify-center  bg-[#F1F3F3] p-8 border-[3px] border-[#23645E]'>
                            <img src={tradingInvesting} className='w-full' alt="" />
                        </div>
                        <div className='w-[54%] sm:pl-3'>
                            <h2 className='text-[#0C231F] leading-none text-[48px] font-inter font-semibold'>Swap your currencies into equity in just one click.</h2>
                            <p className='text-[#0c231F99] text-justify text-base font-medium font-inter mt-5'>Welcome to Open, where digital trading meets stock market. Our cutting-edge platform is designed to provide you with the best experience, with a wide range of features that cater to every investor’s needs.</p>
                            <button className='hover:bg-[#E1FFA0] hover:text-[#35816C] bg-[#35816C] text-[#E1FFA0] transition px-8 py-3.5 rounded-lg mt-5 text-base font-semibold font-inter '>Learn More</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-48'>
                <div className='w-[85%] bg-[#134341] rounded-[20px] shadow-lg'>
                    <div className='flex gap-10 justify-between items-start'>
                        <div className='w-[35%] flex justify-center items-center min-h-[300px] relative'
                            style={{
                                backgroundColor: 'transparent',
                                backgroundImage: 'radial-gradient(at top left, #E1FFA091 0%, #E1FFA000 70%)',
                            }}>
                            <img src={openLogo} className='w-[40%] z-10' alt="" />
                            <div className='w-full h-full absolute left-0 top-0' style={{
                                backgroundColor: 'transparent',
                                backgroundImage: `url(${leftDots})`,
                                backgroundSize: 'cover',
                            }}></div>
                        </div>
                        <div className='w-[60%] pt-[70px] pr-[70px]'>
                            <p className='font-inter text-lg font-semibold text-white'>
                                "We believe that integrating tokenised fractional shares as a means of payment has the potential to revolutionise the financial landscape. We strive for financial inclusion, where anyone, regardless of their financial means, can leverage their fractional ownership to transact and thrive in a borderless and equitable world"
                            </p>
                            <h4 className='font-inter text-base text-[#E1FFA0] font-medium mt-5'>
                                - Open Investment Team
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#F1F3F3] flex justify-center -mt-36 pb-[250px] pt-[350px]'>
                <div className='w-[85%]'>
                    <div className='flex justify-between items-start'>
                        <div className='w-[40%] sm:pr-'>
                            <img src={walletIntegrations} className='w-[13%]' alt="" />
                            <h2 className='text-[#0C231F] leading-none text-[48px] font-inter font-semibold mt-5'>Wallet Integrations</h2>
                            <p className='text-[rgba(12, 35, 31, 0.6)] text-base font-medium font-inter mt-5'>Wallet integration combines diverse digital assets into a single interface, offering users seamless management and control. With enhanced security measures and accessibility across devices, users can conveniently send, receive and participate in DeFi activities. The integration provides valuable insight into asset performance, empowering users to make informed decisions while ensuring their funds are protected.</p>
                            <button className='hover:bg-[#E1FFA0] hover:text-[#35816C] bg-[#0C231F] text-[#E1FFA0] transition px-7 py-2.5 rounded-lg mt-5 text-base font-semibold font-inter '>Learn More</button>
                        </div>
                        <div className='w-[50%] grid grid-cols-2 gap-10'>
                            <div>
                                <img src={coinbase} className='w-[30%]' alt="" />
                                <p className='text-[#0C231F] text-base font-medium font-inter mt-5'>Make secure payments online, and transfer digital currency with just a touch of your device.</p>
                            </div>
                            <div>
                                <img src={metaMask} className='w-[30%]' alt="" />
                                <p className='text-[#0C231F] text-base font-medium font-inter mt-5'>Easily link your personal wallet account to our platform for seamless and secure trading.</p>
                            </div>
                            <div>
                                <img src={ledger} className='w-[30%]' alt="" />
                                <p className='text-[#0C231F] text-base font-medium font-inter mt-5'>Accept payments from customers around the world directly, whilst storing your wealth offline and off-grid.</p>
                            </div>
                            <div>
                                <img src={openWallet} className='w-[30%]' alt="" />
                                <p className='text-[#0C231F] text-base font-medium font-inter mt-5'>Coming Soon! Open wallet with additional security features and escrow assurance on funds.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#134341] -mt-[100px] rounded-t-[45px] py-[50px] relative'>
                <div className='opacity-[0.3] w-full h-full absolute top-0 left-0' style={{
                    backgroundColor: 'transparent',
                    backgroundImage: 'radial-gradient(at top center, #FFFFFF94 0%, #FFFFFF00 70%)',
                }}></div>
                <div className='flex justify-center border-b border-[#FFFFFF1F] pb-[50px]'>
                    <div className='w-[85%] mt-[50px] z-50'>
                        <div className='flex justify-between items-center'>
                            <div className='w-[35%]'>
                                <h2 className='font-inter text-[36px] font-semibold text-white'>Contact Information</h2>
                                <p className='text-[#FFFFFF5C] text-lg font-sem font-inter'>We would love to hear from you! If you have any questions, suggestions, or inquiries, please don’t hesitate to contact us. You can reach us through the following channels:</p>
                            </div>
                            <div className='w-[35%] space-y-3'>
                                <div className='flex gap-3 items-center'>
                                    <img src={email} className='w-[15px]' alt="" />
                                    <p className='font-inter text-base text-white font-semibold'>Info@openinvestment.co.uk</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={phone} className='w-[15px]' alt="" />
                                    <p className='font-inter text-base text-white font-semibold'>(0044) 795-8069-323</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={location} className='w-[15px]' alt="" />
                                    <p className='font-inter text-base text-white font-semibold'>5St Bride Street, London, EC4A 4AS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-[70px] border-b border-[#FFFFFF1F] pb-[50px] flex justify-center'>
                    <div className='w-[85%] flex justify-between'>
                        <div className='w-[20%]'>
                            <h4 className='text-[#FFFFFF5C] text-sm font-semibold font-inter'>Product</h4>
                            <p className='font-inter text-lg text-white font-medium mt-5'>Overview</p>
                            <p className='font-inter text-lg text-white font-medium mt-3'>Features</p>
                            <p className='font-inter text-lg text-white font-medium mt-3'>Solutions</p>
                        </div>
                        <div className='w-[20%]'>
                            <h4 className='text-[#FFFFFF5C] text-sm font-semibold font-inter'>Company</h4>
                            <p className='font-inter text-lg text-white font-medium mt-5'>About us</p>
                            <p className='font-inter text-lg text-white font-medium mt-3'>Contact</p>
                        </div>
                        <div className='w-[20%]'>
                            <h4 className='text-[#FFFFFF5C] text-sm font-semibold font-inter'>Resources</h4>
                            <p className='font-inter text-lg text-white font-medium mt-5'>Education Material</p>
                            <p className='font-inter text-lg text-white font-medium mt-3'>Help center</p>
                            <p className='font-inter text-lg text-white font-medium mt-3'>Support</p>
                        </div>
                        <div className='w-[20%]'>
                            <h4 className='text-[#FFFFFF5C] text-sm font-semibold font-inter'>Social</h4>
                            <p className='font-inter text-lg text-white font-medium mt-5'>Twitter</p>
                            <p className='font-inter text-lg text-white font-medium mt-3'>LinkedIn</p>
                            <p className='font-inter text-lg text-white font-medium mt-3'>Facebook</p>
                            <p className='font-inter text-lg text-white font-medium mt-3'>Instagram</p>
                        </div>
                        <div className='w-[20%]'>
                            <h4 className='text-[#FFFFFF5C] text-sm font-semibold font-inter'>Legal</h4>
                            <p className='font-inter text-lg text-white font-medium mt-5'>Terms</p>
                            <p className='font-inter text-lg text-white font-medium mt-3'>Privacy</p>
                            <p className='font-inter text-lg text-white font-medium mt-3'>Legals</p>
                        </div>
                    </div>
                </div>
                <div className='pt-[40px] pb-[px] flex justify-center'>
                    <div className='w-[85%] flex justify-between'>
                        <div className='w-[50%]'>
                            <img src={logo} className='w-[15%]' alt="" />
                        </div>
                        <div className='w-[50%]'>
                            <p className='font-inter text-lg text-white font-medium mt-5'>Copyright: © 2025 Open Investment by Eni Koci. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
