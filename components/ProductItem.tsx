import Image from 'next/image'
import React from 'react'
import { Product } from '../types/product';
import { assets } from '@/assets/assets';
interface ProductItemProps {
    product: Product;
}
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] '>
            <Image
                src={product.image ? product.image : assets.blog_pic_1}
                alt='image'
                width={400}
                height={400}
                className='border-b border-black'
                priority
            />
            <p className='ml-5 mt-5 rounded-sm p-1 inline-block bg-black text-white text-sm capitalize'>
                {product.category}
            </p>
            <div className='p-5'>
                <h5 className='mb-2 text-gray-900 text-lg font-medium tracking-tight'>
                    {product.title}
                </h5>
                <p className='mb-3 text-sm tracking-tight text-gray-700'>{product.description}</p>
                <strong className='inline-flex items-center py-2 font-semibold text-center'>{product.price || "100$"}</strong>
            </div>
        </div>
    )
}

export default ProductItem