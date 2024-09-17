import React from 'react'
import securityImage from "../../public/home-security.webp"
import cameraImage from "../../public/wifi-camera.png"
import barImage from "../../public/bar.png"



export default function Form() {

    return (
        <>
            <div className="w-full h-screen overflow-y-auto">
                <div className="bg-cover bg-no-repeat bg-img h-screen">
                    <div className='max-w-[1180px] w-full mx-auto flex flex-col items-center'>
                        <div className='w-full'>
                            <div className=' h-20 flex flex-row  w-full mt-8'>
                                <div>
                                    <img src='/smazy-Logo.png' className='h-auto w-fit' />
                                </div>
                                <div className='w-full flex gap-2 justify-end space-x-8 text-white'>
                                    <p>Home</p>
                                    <p>About Us</p>
                                    <p>Services</p>
                                    <p>Products</p>
                                    <p>Pricing</p>
                                    <p>Contact Us</p>
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
                <div className='max-w-[1180px] w-full mx-auto flex flex-col items-center'>
                    <div className="w-full flex flex-col mt-16"><span className='text-[#5C98B7] font-bold text-[15px]'>ABOUT US</span>
                        <div className="w-full flex flex-row mb-12">
                            <div className="w-[60%] text-[40px] font-semibold">
                                <h1>Transform Your Living Space with Smart Home System</h1>
                            </div>
                            <div className="w-[40%]">
                                <p className='mb-4'>Quis vel cursus turpis imperdiet scelerisque in placerat maecenas. Orci egestas ornare nulla morbi convallis eget eros.</p>
                                <button className='bg-[#58B5A6] border-2 border-[#58B5A6] text-white w-36 h-10 rounded-full'>Learn More</button>
                            </div>
                        </div>
                        <div className="w-full flex flex-row">
                            <div className="w-[60%] h-[500px] pr-4">
                                <img src={securityImage} className='rounded-lg bg-contain'/>
                            </div>
                            <div className="w-[40%]">
                                <div>
                                <h1>24/7 Security</h1>
                                <p className='mb-4'>Ut ut pharetra tempus at risus lorem arcu. Lacus venenatis pretium eget nam tellus magnis etiam augue. Tortor venenatis euismod id.
                                </p>
                                </div>
                                <div>
                                <img src={cameraImage} className='bg-contain'/>
                                <img src={barImage} className='bg-contain'/>
                                <h1>32.8 kWh</h1>
                                <p>Power usage today</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
