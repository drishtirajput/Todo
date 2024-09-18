import React from 'react'

export default function NavDetails({heading , subHeading , buttonClass = '' , description=''}) {
  return (
    <div>
        <span className='text-[#5C98B7] font-bold text-[18px] flex my-3'>{heading}</span>
                        <div className="w-full flex flex-row mb-12">
                            <div className="w-[60%] text-[45px] font-semibold">
                                <h1>{subHeading}</h1>
                            </div>
                            <div className="w-[40%]">
                                { description && <p className='mb-4'>{description}</p>}
                                <button className={`bg-[#58B5A6] border-2 ${buttonClass } border-[#58B5A6] text-white w-36 h-10 rounded-full`}>Learn More</button>
                            </div>
                        </div>
    </div>
  )
}
