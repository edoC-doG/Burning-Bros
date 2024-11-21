import { StaticImageData } from 'next/image';
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string; 
    image: StaticImageData | string;
    category: string;
}