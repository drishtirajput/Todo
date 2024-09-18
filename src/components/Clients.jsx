import React from 'react'
import NavDetails2 from './NavDetails2'
import clientImage from '../../public/logo-Client.png'
import clientImage1 from '../../public/logo-Client1.png'
import clientImage2 from '../../public/logo-Client-2.png'
import clientImage3 from '../../public/logo-Client-3.png'
import ClientsLogo from './ClientsLogo'

export default function Clients() {
  return (
    <div className='my-10'>
      <div>
        <div>
          <NavDetails2 heading="THE COMPATIBILITY" subHeading="Connecting You to Smarter Living Solution" />
        </div>
        <div className='flex space-x-9 p-10 mx-28'>
          <div><ClientsLogo LogoImg={clientImage} /></div>
          <div><ClientsLogo LogoImg={clientImage1} /></div>
          <div><ClientsLogo LogoImg={clientImage2} /></div>
          <div><ClientsLogo LogoImg={clientImage3} /></div>          
        </div>
        <div className='flex space-x-9 p-10 mx-28'>
          <div><ClientsLogo LogoImg={clientImage} /></div>
          <div><ClientsLogo LogoImg={clientImage1} /></div>
          <div><ClientsLogo LogoImg={clientImage2} /></div>
          <div><ClientsLogo LogoImg={clientImage3} /></div>          
        </div>
      </div>

    </div>
  )
}
