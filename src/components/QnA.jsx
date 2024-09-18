import React from 'react'
import NavDetails from './NavDetails'
import QnA_Image from '../../public/Q&A-Image.jpg'
import QnA_Section from './QnA_Section'

export default function QnA() {
  return (
    <div className='my-20'>
      <div className='flex'>
        <div className='w-[60%]'>
          <div>
            <NavDetails heading="QUESTIONS & ANSWERS" subHeading="Frequently Asked Questions" buttonClass="hidden" description="" />
          </div>
          <div>
          <QnA_Section question="What is a Smart Home System?" answer="Vitae tortor arcu eleifend nec massa dictum purus. Erat varius vulputate orci lacus gravida molestie habitant. Convallis massa hac proin rutrum nisl habitasse. Amet etiam dignissim." />
          <QnA_Section question="How does a smart home system work?" answer="Vitae tortor arcu eleifend nec massa dictum purus. Erat varius vulputate orci lacus gravida molestie habitant. Convallis massa hac proin rutrum nisl habitasse. Amet etiam dignissim." />
          <QnA_Section question="Are smart home systems secure?" answer="Vitae tortor arcu eleifend nec massa dictum purus. Erat varius vulputate orci lacus gravida molestie habitant. Convallis massa hac proin rutrum nisl habitasse. Amet etiam dignissim." />
          <QnA_Section question="Can smart home systems save energy?" answer="Vitae tortor arcu eleifend nec massa dictum purus. Erat varius vulputate orci lacus gravida molestie habitant. Convallis massa hac proin rutrum nisl habitasse. Amet etiam dignissim." />
          </div>
        </div>
        <div className='w-[40%]'>
          <img src={QnA_Image} className='rounded-md' />
          <div className='flex my-5'>
            <p className='font-semibold text-[20px]'>Still Have Questions?</p>
            <p className='ml-auto text-[#5C98B7] font-semibold text-[20px] border-b-[1px] border-[#5C98B7]'>Contact Support</p>
          </div>
        </div>
      </div>
    </div>
  )
}
