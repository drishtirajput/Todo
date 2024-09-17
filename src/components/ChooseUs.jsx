import React from 'react'
import NavDetails from './NavDetails'
import Benefits from './Benefits'

export default function ChooseUs() {
  const benifits = [
    {
      benefitNo: '01.',
      benefitHeading: 'Smart Home Solutions',
      benefitDescription: 'Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.'
    },
    {
      benefitNo: '02.',
      benefitHeading: 'Smart Home Solutions',
      benefitDescription: 'Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.'
    },
    {
      benefitNo: '03.',
      benefitHeading: 'Smart Home Solutions',
      benefitDescription: 'Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.'
    },
    {
      benefitNo: '04.',
      benefitHeading: 'Smart Home Solutions',
      benefitDescription: 'Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.'
    },
    {
      benefitNo: '05.',
      benefitHeading: 'Smart Home Solutions',
      benefitDescription: 'Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.'
    },
    {
      benefitNo: '06.',
      benefitHeading: 'Smart Home Solutions',
      benefitDescription: 'Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.'
    },
    {
      benefitNo: '07.',
      benefitHeading: 'Smart Home Solutions',
      benefitDescription: 'Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.'
    },
    {
      benefitNo: '08.',
      benefitHeading: 'Smart Home Solutions',
      benefitDescription: 'Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.'
    },
    {
      benefitNo: '09.',
      benefitHeading: 'Smart Home Solutions',
      benefitDescription: 'Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.'
    },

  ]
  return (
    <div>
        <div className='max-w-[1180px] w-full mx-auto flex flex-col mb-40'>
            <NavDetails heading="WHY CHOOSE US" description='' subHeading='The Benefits of Partnering with Smazy' buttonClass='flex justify-center items-center ml-auto'/>
           <div className='grid w-full gap-4 grid-cols-3'>
            {/* <Benefits benefitNo='01.' benefitHeading='Smart Home Solutions' benefitDescription='Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.' />
            <Benefits benefitNo='02.' benefitHeading='Smart Home Solutions' benefitDescription='Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.' />
            <Benefits benefitNo='03.' benefitHeading='Smart Home Solutions' benefitDescription='Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.' />
            <Benefits benefitNo='04.' benefitHeading='Smart Home Solutions' benefitDescription='Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.' />
            <Benefits benefitNo='05.' benefitHeading='Smart Home Solutions' benefitDescription='Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.' />
            <Benefits benefitNo='06.' benefitHeading='Smart Home Solutions' benefitDescription='Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.' />
            <Benefits benefitNo='07.' benefitHeading='Smart Home Solutions' benefitDescription='Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.' />
            <Benefits benefitNo='08.' benefitHeading='Smart Home Solutions' benefitDescription='Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.' />
            <Benefits benefitNo='09.' benefitHeading='Smart Home Solutions' benefitDescription='Penatibus congue ipsum condimentum ac dignissim non mi auctor. Nulla id id non enim venenatis nibh. Nunc erat morbi auctor.' /> */}
            {
              benifits.map((item, index) => <Benefits benefitNo={item?.benefitNo} benefitHeading={item?.benefitHeading} benefitDescription={item?.benefitDescription} />)
            }

            </div>
        </div>
    </div>
  )
}
