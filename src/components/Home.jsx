import React from 'react'
import ReactDOM from 'react-dom'
import { HiArrowUpRight } from "react-icons/hi2";



export default function Home() {

    return (
        <>
            <div className="w-full h-screen overflow-y-auto">
                <div className="bg-cover bg-no-repeat bg-img min-h-[100vh]">
                    <div className='max-w-[1180px] w-full mx-auto flex flex-col items-center'>
                        <div className='w-full'>
                            <div className=' h-20 flex flex-row  w-full mt-8'>
                                <div>
                                    <img src='/smazy-Logo.png' className='h-auto w-fit' />
                                </div>
                                <div className='w-full text-white'>
                                    <ul className='flex gap-2 justify-end space-x-8'>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Services</li>
                                        <li>Products</li>
                                        <li>Pricing</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-white flex mt-12">
                                <div className="w-[50%] h-full" >
                                    <div className='text-[55px] font-bold'>
                                        <h1> Welcome to a Smarter Home Experience.</h1></div>
                                    <div className=" w-[70%] mb-20">
                                        <p>Purus pellentesque sed enim pharetra. Et elit egestas vitae in ut vitae. Cras pulvinar massa ut amet egestas in proin. In hendrerit amet nullam auctor lacinia nisi.</p>
                                    </div>
                                    <div className="w-[40%] flex flex-row">
                                        <div className="w-[50%] text-[10px]"><span className='text-[50px] font-bold'>50 +</span>
                                            <p>Smart Product for Your Home.</p></div>
                                        <div className="w-[50%] text-[10px]"><span className='text-[50px] font-bold'>16 +</span>
                                            <p>Since 2007 We Started to Innovate</p></div>
                                    </div>
                                </div>
                                <div className="w-[50%] h-full flex flex-col items-end">
                                    <div className='mb-4 text-[20px]'><h1 className='mt-1'>Always in Control</h1></div>
                                    <button className='bg-[#58B5A6] border-2 border-[#58B5A6] text-white w-48 h-14 rounded-full'>Explore Products</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}