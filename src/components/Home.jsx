import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar';



export default function Home() {

    return (
        <>
            <div className="w-full h-screen overflow-y-auto text-white">
                <div className="bg-cover bg-no-repeat bg-img min-h-[100vh]">
                    <div className='w-[85%] mx-auto flex flex-col'>
                        <div className='w-full items-center'>
                            <NavBar />                            
                            <div className="grid md:py-16 py-10 md:flex text-center">
                                <div className="md:w-[60%] h-full w-full md:text-start" >
                                    <div className='lg:text-6xl text-5xl font-bold'>
                                        <h1> Welcome to a Smarter Home Experience.</h1>
                                    </div>
                                    <div className="md:w-[70%] my-5 w-full">
                                        <p>Purus pellentesque sed enim pharetra. Et elit egestas vitae in ut vitae. Cras pulvinar massa ut amet egestas in proin. In hendrerit amet nullam auctor lacinia nisi.</p>
                                    </div>
                                </div>
                                <div className="md:w-[40%] flex flex-col h-full md:items-end">
                                    <div className='text-2xl'><h1>Always in Control</h1></div>
                                    <div className='my-4'>
                                        <button className='bg-[#58B5A6] w-48 h-14 rounded-full'>Explore Products</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 md:w-[20%] w-full">
                            <div className="w-[50%] flex flex-col items-center md:items-start">
                                <span className='text-4xl md:text-5xl font-bold'>50+</span>
                                <p className='text-xs py-2'>Smart Product for Your Home.</p>
                            </div>
                            <div className="md:w-[50%] w-[50%] flex flex-col items-center md:items-start">
                                <span className='text-4xl md:text-5xl font-bold'>16+</span>
                                <p className='text-xs py-2'>Since 2007 We Started to Innovate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}