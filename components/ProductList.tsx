import { blog_data } from '@/assets/assets'
import React, { useState } from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {

    const [menu, setMenu] = useState("All")

    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button
                    className={menu === "All" ? "bg-black text-white px-4 py-1 rounded-sm" : ""}
                    onClick={() => setMenu('All')}>All</button>
                <button
                    className={menu === "Beauty" ? "bg-black text-white px-4 py-1 rounded-sm" : ""}
                    onClick={() => setMenu('Beauty')}>Beauty</button>
                <button
                    className={menu === "Fragrances" ? "bg-black text-white px-4 py-1 rounded-sm" : ""} onClick={() => setMenu('Fragrances')}>Fragrances</button>
                <button
                    className={menu === "Furniture" ? "bg-black text-white px-4 py-1 rounded-sm" : ""} onClick={() => setMenu('Furniture')}>Furniture</button>
                <button
                    className={menu === "Groceries" ? "bg-black text-white px-4 py-1 rounded-sm" : ""} onClick={() => setMenu('Groceries')}>Groceries</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blog_data.filter((item) => menu === "All" ? true : item.category === menu).map((item, idx) => {
                    return <ProductItem key={idx} product={item} />
                })}
            </div>
        </div>
    )
}

export default ProductList