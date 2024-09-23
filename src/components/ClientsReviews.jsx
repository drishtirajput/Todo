import React from 'react'
import Reviews from './Reviews'
import clientImage from '../../public/clientImage.jpg'
import { FaStar } from "react-icons/fa";

export default function ClientsReviews() {
  return (
    <div className='py-5'>
      <div className='bg-[#D8F3F3]  grid place-items-center py-10'>
        <div className='w-[80%] border-b-[1px] border-gray-400 '>
            <Reviews clientImg={clientImage} name="Margaret Gardner" stars={4} owner="Homeowners" rating={<FaStar color='yellow' />} discription="Ac natoque etiam aliquam elementum. Sapien vulputate nulla libero mattis dictum. Habitasse nisi accumsan id eget faucibus arcu ut neque. Facilisi amet augue eget quisque leo nec metus quis. Amet diam donec leo justo lacus. Tortor ipsum." />
        </div>
        <div className='w-[80%] border-b-[1px] border-gray-400 '>
            <Reviews clientImg={clientImage} name="Margaret Gardner" stars={5} owner="Homeowners" rating={<FaStar color='yellow' />} discription="Ac natoque etiam aliquam elementum. Sapien vulputate nulla libero mattis dictum. Habitasse nisi accumsan id eget faucibus arcu ut neque. Facilisi amet augue eget quisque leo nec metus quis. Amet diam donec leo justo lacus. Tortor ipsum." />
        </div>
        <div className='w-[80%]'>
            <Reviews clientImg={clientImage} name="Margaret Gardner" stars={3} owner="Homeowners" rating={<FaStar color='yellow' />} discription="Ac natoque etiam aliquam elementum. Sapien vulputate nulla libero mattis dictum. Habitasse nisi accumsan id eget faucibus arcu ut neque. Facilisi amet augue eget quisque leo nec metus quis. Amet diam donec leo justo lacus. Tortor ipsum." />
        </div>
      </div>
    </div>
  )
}
