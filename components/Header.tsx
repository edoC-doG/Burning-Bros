import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const Header = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Image
                    src={assets.logo}
                    alt='Logo'
                    width={180}
                    className='w-[130px] sm:w-auto'
                    loading='lazy'
                />
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>
                    Product List
                </h1>
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Join us at Burning Bros, where we&apos;re dedicated to tackling significant challenges and empowering our clients to make a positive impact on the planet.</p>
                <form
                    action=""
                    className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'
                >
                    <input
                        type='text'
                        placeholder='Search product by name'
                        className='pl-4 outline-none'
                    />
                    <button
                        type='submit'
                        className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Header