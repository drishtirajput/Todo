import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { CgMenuGridR } from 'react-icons/cg'
import { RxCross1 } from 'react-icons/rx'

export default function NavBar() {

    const [menu, setMenu] = useState(false)

    const menuToggle = () => {
        setMenu(!menu)
    }

    return (
        <div>
            <div className='flex relative py-12 w-full'>
                <div>
                    <img src='/smazy-Logo.png' className='h-auto w-fit' />
                </div>
                <div className='w-full text-white'>
                    <div className='md:hidden flex justify-end text-3xl text-[#58B5A6]'>
                        {menu ? <RxCross1ss1 onClick={() => menuToggle()} /> : <CgMenuGridR onClick={() => menuToggle()} />}
                    </div>
                    <ul className='hidden md:flex gap-2 justify-end space-x-8'>
                        <li className='hover:text-[#58B5A6] hover:cursor-pointer'>Home</li>
                        <li className='hover:text-[#58B5A6] hover:cursor-pointer'>About Us</li>
                        <li className='hover:text-[#58B5A6] hover:cursor-pointer'> Services
                            {/* <select className='b-none'>
                            <option>Service</option>
                            <option>Service Details</option>
                            </select> */}
                        </li>
                        <li className='hover:text-[#58B5A6] hover:cursor-pointer'>Products</li>
                        <li className='hover:text-[#58B5A6] hover:cursor-pointer'>Pricing</li>
                        <li className='hover:text-[#58B5A6] hover:cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
                {menu ? <div className='text-[#58B5A6] bg-white w-full absolute top-20 left-0'>
                    <ul className='md:hidden flex flex-col gap-2 w-full'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Products</li>
                        <li>Pricing</li>
                        <li>Contact Us</li>
                    </ul>
                </div> : <></>}
            </div>
        </div>
    )
}
