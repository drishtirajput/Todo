import React from 'react'

export default function NavDetails2({heading , subHeading}) {
  return (
    <div>
        <div>
            <div className='flex text-[#5C98B7] font-bold text-[18px]'>
                <h1 className='mx-auto'>{heading}</h1>
            </div>
            <div className='flex text-[45px] font-semibold mx-48 text-center'>
                <p className='mx-auto'>{subHeading}</p>
            </div>
        </div>
    </div>
  )
}
