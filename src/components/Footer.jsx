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
                <div className='max-w-[1180px] w-full mx-auto '>
                    <div className='flex py-14 border-b-[1px]'>
                    <div className='w-[50%]'>
                        <div>
                            <img src={logoImg} className='min-w-3 py-4' />
                        </div>
                        <div className='w-[60%] py-2'>
                            <p>Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.</p>
                        </div>
                        <div className='flex gap-5 py-4 text-[30px]'>
                            {/* <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                {showText && abc}
                            </div> */}
                            <FaTwitter />
                            <FaFacebook />
                            <FaInstagram />
                            <IoLogoGithub />
                        </div>
                    </div>
                    <div className='flex w-[50%] gap-20 mx-auto'>
                        <div>
                            <h1 className='text-[25px]'>Company</h1>
                            <ul className='my-4 flex flex-col gap-4'>
                                <li>About Us</li>
                                <li>Our Services</li>
                                <li>Our Products</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-[25px]'>Resources</h1>
                            <ul className='my-4 flex flex-col gap-4'>
                                <li>Free eBook</li>
                                <li>Development</li>
                                <li>How to - Blog</li>
                                <li>Youtube Channel</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-[25px]'>Help</h1>
                            <ul className='my-4 flex flex-col gap-4'>
                                <li>Customer Support</li>
                                <li>Delivery Details</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className='py-5 flex'>
                    <p className=''>Copyright © 2022. All Rights Reserved.</p>
                    <p className='ml-auto'>Designed by <b>Drashti Rajput</b></p>
                </div>
                </div>
                
            </div>
        </div>
    )
}
