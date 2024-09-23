import React from 'react'

export default function ({ benefitNo, benefitHeading, benefitDescription }) {
  return (
    <div className='py-3 '>
      <div className='md:mx-2'>
        <div className='font-bold text-[30px] text-[#787878] mb-8'>
          <h1>{benefitNo}</h1>
        </div>
        <div className='text-[18px] font-bold '>
          <h2>
            {benefitHeading}
          </h2>
        </div>
        <div className='my-4'>
          <p className='md:w-[90%]'>
            {benefitDescription}
          </p>
        </div>
      </div>
    </div>
  )
}
