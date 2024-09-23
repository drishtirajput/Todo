import React from 'react'

export default function NavDetails({heading , subHeading , buttonClass = '' , description=''}) {
  return (
    <div>
        <span className='text-[#5C98B7] font-bold text-[18px] flex'>{heading}</span>
                        <div className="md:flex items-center md:items-start">
                            <div className="md:w-[60%] text-4xl font-semibold py-2">
                                <h1>{subHeading}</h1>
                            </div>
                            <div className="md:w-[40%]">
                                { description && <p className=''>{description}</p>}
                                <div className='py-5'>
                                  <button className={`bg-[#58B5A6] border-2 ${buttonClass } border-[#58B5A6] text-white w-36 h-10 rounded-full`}>Learn More</button>
                                  </div>
                            </div>
                        </div>
    </div>
  )
}
