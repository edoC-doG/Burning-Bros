import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-around items-center  gap-1 py-6 sm:gap-1 sm:flex-row bg-black'>
            <Image
                src={assets.logo_light}
                alt='logo-light'
                loading='lazy'
                width={120}
            />
            <p className='text-sm text-white'>All right reserved. Copyright @Burning-Bros</p>
            <div className='flex'>
                <Image
                    src={assets.facebook}
                    alt='facebook'
                    loading='lazy'
                    width={40}
                />
                <Image
                    src={assets.google}
                    alt='google'
                    loading='lazy'
                    width={40}
                />
                <Image
                    src={assets.twitter}
                    alt='twitter'
                    loading='lazy'
                    width={40}
                />
            </div>
        </div>
    )
}

export default Footer