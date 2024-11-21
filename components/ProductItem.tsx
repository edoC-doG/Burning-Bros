import Image from 'next/image'
import React from 'react'
import { Product } from '../types/product';
interface ProductItemProps {
    product: Product;
}
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] '>
            <Image
                src={product.image}
                alt='image'
                width={400}
                height={400}
                className='border-b border-black'
            />
            <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>
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