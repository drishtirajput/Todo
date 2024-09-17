import React from 'react'

export default function ServiceTypeCard({serviceImg, serviceHeading, serviceDescription}) {
  return (
    <div>
        <div className='mb-8 mr-8'>
            <div>
            <img src={serviceImg} className='w-full rounded-md mb-6' />
            <div className='font-bold text-lg mb-5'>{serviceHeading}</div>
            <div>{serviceDescription}</div>
            </div>
        </div>
    </div>
  )
}
