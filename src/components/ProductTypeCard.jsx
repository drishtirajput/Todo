import React from 'react'

export default function ProductTypeCard({ productImg, productHeading, productPrice, productRating, buyNow }) {
    return (
        <div>
            <div className='m-6'>
                <div>
                    <img src={productImg} className='w-full rounded-md' />
                </div>
                <div>
                    <div className='flex font-bold my-5'>
                        <h2 className='text-[20px]'>{productHeading}</h2>
                        <p className='text-[#787878] text-lg ml-auto'>{productPrice}</p>
                    </div>
                    <div className='flex'>
                        <h2 className='text-lg'>{productRating}</h2>
                        <p className='text-[#58B5A6] ml-auto text-lg font-bold'>{buyNow}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
