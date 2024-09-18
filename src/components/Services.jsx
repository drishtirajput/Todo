import React from 'react'
import NavDetails from './NavDetails'
import ServiceTypeCard from './ServiceTypeCard'
import serviceImage1 from "../../public/cctv-installation-service1.jpg"
import serviceImage2 from "../../public/cctv-installation-service2.jpg"
import serviceImage3 from "../../public/cctv-installation-service3.jpg"


export default function Services() {


    return (
        <div>
            <div className='flex flex-col my-40'>
                <NavDetails heading="OUR SERVICES" description='Vitae tortor arcu eleifend nec massa dictum purus. Erat varius vulputate orci lacus gravida molestie habitant. Convallis massa hac proin rutrum nisl habitasse. Amet etiam dignissim.' subHeading='Smart Home Services for Modern Living' buttonClass='hidden' />
                <div className="grid w-full grid-cols-3">
                    <ServiceTypeCard serviceImg={serviceImage1} serviceHeading="Smart Home Installation" serviceDescription="Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor." />
                    <ServiceTypeCard serviceImg={serviceImage2} serviceHeading="Smart Home Installation" serviceDescription="Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor." />
                    <ServiceTypeCard serviceImg={serviceImage3} serviceHeading="Smart Home Installation" serviceDescription="Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor." />
                </div>
            <button className='bg-[#58B5A6] border-2 border-[#58B5A6] text-white w-48 h-14 rounded-full mx-auto'>See All Services</button>
            </div>
        </div>
    )
}
