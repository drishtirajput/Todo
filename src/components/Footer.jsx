import React, { useState } from 'react'
import logoImg from '../../public/logo.png'
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {

    // const [showText, setShowText] = useState(false);

    // const handleMouseEnter = (e) => {
    //     e.target.style.background = "black";
    //     setShowText(true);
    // };

    // const handleMouseLeave = (e) => {
    //     e.target.style.background = "white";
    //     setShowText(false);
    // };

    return (
        <div>
            <div className='bg-black text-white w-full'>
                <div className='w-[85%] mx-auto'>
                    <div className='md:flex py-16 border-b-[1px]'>
                        <div className='md:w-[50%] flex flex-col md:items-start justify-center items-center py-4'>
                            <div>
                                <img src={logoImg} className='min-w-3 py-4' />
                            </div>
                            <div className='md:w-[60%] py-4 w-full'>
                                <p>Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.</p>
                            </div>
                            <div className='flex gap-5 text-[30px]'>
                                {/* <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                {showText && abc}
                            </div> */}
                                <FaTwitter className='hover:text-blue-300 hover:cursor-pointer' />
                                <FaFacebook className='hover:text-blue-300 hover:cursor-pointer' />
                                <FaInstagram className='hover:text-blue-300 hover:cursor-pointer' />
                                <IoLogoGithub className='hover:text-blue-300 hover:cursor-pointer' />
                            </div>
                        </div>
                        <div className='md:gap-20 grid md:grid-cols-3 justify-items-center'>
                            <div>
                                <h1 className='text-2xl'>Company</h1>
                                <ul className='my-4 flex flex-col gap-4'>
                                    <li>About Us</li>
                                    <li>Our Services</li>
                                    <li>Our Products</li>
                                    <li>Career</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-2xl'>Resources</h1>
                                <ul className='my-4 flex flex-col gap-4'>
                                    <li>Free eBook</li>
                                    <li>Development</li>
                                    <li>How to - Blog</li>
                                    <li>Youtube Channel</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-2xl'>Help</h1>
                                <ul className='my-4 flex flex-col gap-4'>
                                    <li>Customer Support</li>
                                    <li>Delivery Details</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='py-5 md:flex'>
                        <p className='text-sm'>Copyright © 2022. All Rights Reserved.</p>
                        <p className='ml-auto text-sm'>Designed by <b>Drashti Rajput</b></p>
                    </div>
                </div>

            </div>
        </div>
    )
}
