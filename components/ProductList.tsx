"use client"
import React, { useEffect, useRef, useState } from 'react';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/libs/store';
import { getProducts } from '@/libs/features/product/asyncAction';
import { Product } from '@/types/product';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadMore from './LoadMore';
const ProductList = () => {
    const [menu, setMenu] = useState("All");
    const dispatch = useAppDispatch();
    const { list, loading, hasMore, total } = useSelector((state: RootState) => state.product);
    const productList = list.products
    const listRef = useRef<HTMLDivElement | null>(null);
    const handleScroll = () => {
        if (listRef.current) {
            const bottom = listRef.current.scrollHeight === listRef.current.scrollTop + listRef.current.clientHeight;
            if (bottom && !loading && hasMore) {
                fetchData();
            }
        }
    };
    const fetchData = async () => {
        if (!loading && hasMore) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập độ trễ
            dispatch(getProducts({ limit: 20, skip: productList.length }));
        }
    };
    useEffect(() => {
        if (hasMore) {
            dispatch(getProducts({ limit: 20, skip: 0 }));
        }
    }, [dispatch, hasMore]);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.addEventListener('scroll', handleScroll);
            return () => listRef.current?.removeEventListener('scroll', handleScroll);
        }
    }, [loading, hasMore]);
    return (
        <div className="w-full h-ful">
            <div className="flex justify-center gap-6 my-10">
                <button
                    className={menu === "All" ? "bg-black text-white px-4 py-1 rounded-sm" : ""}
                    onClick={() => setMenu('All')}
                >All</button>
                <button
                    className={menu === "beauty" ? "bg-black text-white px-4 py-1 rounded-sm" : ""}
                    onClick={() => setMenu('beauty')}
                >Beauty</button>
                <button
                    className={menu === "fragrances" ? "bg-black text-white px-4 py-1 rounded-sm" : ""}
                    onClick={() => setMenu('fragrances')}
                >Fragrances</button>
                <button
                    className={menu === "furniture" ? "bg-black text-white px-4 py-1 rounded-sm" : ""}
                    onClick={() => setMenu('furniture')}
                >Furniture</button>
                <button
                    className={menu === "groceries" ? "bg-black text-white px-4 py-1 rounded-sm" : ""}
                    onClick={() => setMenu('groceries')}
                >Groceries</button>
            </div>
            <InfiniteScroll
                dataLength={productList.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<></>}
                endMessage={<p>No more products</p>}
                scrollThreshold={0.95}
            >
                <div ref={listRef} className="flex flex-wrap justify-around gap-4 mb-16 xl:mx-24">
                    {productList
                        .filter((item: Product) => menu === "All" ? true : item.category === menu)
                        .map((item: Product, idx: number) => (
                            <ProductItem key={idx} product={item} />
                        ))
                    }
                </div>
            </InfiniteScroll>
            <div className='mb-5'>
                <LoadMore />
            </div>
        </div >
    );
};

export default ProductList;
