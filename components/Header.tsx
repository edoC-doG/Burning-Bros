import { assets } from '@/assets/assets'
import Image from 'next/image'
import SearchForm from './SearchForm';


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
                <SearchForm />
            </div>
        </div>
    )
}

export default Header