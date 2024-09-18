import React from 'react';
import NavDetails from './NavDetails';
import securityImage from "../../public/home-security.webp"
import { HiArrowUpRight } from 'react-icons/hi2';
import cameraImage from "../../public/wifi-camera.png"
import barImage from "../../public/bar.png"

export default function AboutUs() {
    return (
        <div>
            <div className='my-28'>
                <div className="w-full flex flex-col mt-16">
                    <NavDetails heading="ABOUT US" description='Quis vel cursus turpis imperdiet scelerisque in placerat maecenas. Orci egestas ornare nulla morbi convallis eget eros.' buttonClass='flex  justify-center items-center' subHeading="Transform Your Living Space with Smart Home System" />
                    <div className="w-full flex  flex-row">
                        <div className="w-[60%] pr-4">
                            <img src={securityImage} className='rounded-lg bg-contain' />
                        </div>
                        <div className="w-[40%] pl-10">
                            <div>
                                <div className='flex flex-row w-full'><div className='text-[50px] font-bold w-[300px] mr-6'>24/7 Security</div>
                                    <div className='w-10 h-10 bg-[#58B5A6] rounded-full text-white flex justify-center items-center mt-6'><HiArrowUpRight /></div>
                                </div>
                                <p className='mb-4'>Ut ut pharetra tempus at risus lorem arcu. Lacus venenatis pretium eget nam tellus magnis etiam augue. Tortor venenatis euismod id.
                                </p>
                            </div>
                            <div className='flex flex-row'>
                                <img src={cameraImage} className='bg-contain' />
                                <div className='bg-[#D8F3F3] w-full flex'>
                                    <div className='m-12 flex'>
                                        <img src={barImage} className='p-2' />
                                        <div className='flex flex-col'>
                                            <h1 className='font-bold text-[20px]'>32.8 kWh</h1>
                                            <p>Power usage today</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}