import React from 'react'
import ProductTypeCard from './ProductTypeCard'
import productImage1 from "../../public/productImage1.jpg"
import productImage2 from "../../public/productImage2.jpg"
import productImage3 from "../../public/productImage3.jpg"
import productImage4 from "../../public/productImage4.jpg"
import NavDetails2 from './NavDetails2'


export default function Products() {

    const products = [
        {
            productImg: productImage1,
            productHeading: "Smazy Smart Lamp",
            productPrice: "$142.99",
            productRating: "4.8 ★★★★★ 320 reviews",
            buyNow: "Buy"
        },
        {
            productImg: productImage2,
            productHeading: "Smazy Smart Lamp",
            productPrice: "$142.99",
            productRating: "4.8 ★★★★★ 320 reviews",
            buyNow: "Buy"
        },
        {
            productImg: productImage3,
            productHeading: "Smazy Smart Lamp",
            productPrice: "$142.99",
            productRating: "4.8 ★★★★★ 320 reviews",
            buyNow: "Buy"
        },
        {
            productImg: productImage4,
            productHeading: "Smazy Smart Lamp",
            productPrice: "$142.99",
            productRating: "4.8 ★★★★★ 320 reviews",
            buyNow: "Buy"
        }
    ]

    return (
        <div className='max-w-[1180px] w-full mx-auto flex flex-col mb-40'>
            <NavDetails2 heading="OUR PRODUCTS" subHeading='Discover Our Range of Innovative Smart Home Products'/>
            <div className="grid w-full gap-4 grid-cols-2">
                {
                    products.map((item, index) => <ProductTypeCard productImg={item?.productImg} productHeading={item?.productHeading} productPrice={item.productPrice} productRating={item.productRating} buyNow={item.buyNow} />)
                }
                {/* <ProductTypeCard productImg="/cctv-installation-service1.jpg" productHeading="CCTV Installation" productPrice="Starting from $250" productRating="4.9" Rating="Rating" /> */}
            </div>
            <button className='bg-[#58B5A6] border-2 border-[#58B5A6] text-white w-48 h-14 rounded-full mx-auto'>See All Products</button>
        </div>
    )
}
