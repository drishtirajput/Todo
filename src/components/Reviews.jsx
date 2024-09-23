import React from 'react'

export default function Reviews({ clientImg, name , stars =0, owner, rating, discription }) {
    return (
        <div className='my-10'>
            <div className='flex w-full'>
                <div className='md:flex px-2'>
                    <div className='flex md:w-[40%] '>
                       <div className='mx-6'> 
                        <img src={clientImg} className='rounded-full' />
                       </div>
                        <div className=''>
                            <h2 className='font-bold text-[18px]'>{name}</h2>
                            <p className='text-[#8E9595] text-[12px]'>{owner}</p>
                        </div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div className='my-2 flex gap-2'>{
                            Array(stars)?.fill()?.map((item , index) => {
                                return rating
                            })
                            }</div>
                        <div className=''>{discription}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
