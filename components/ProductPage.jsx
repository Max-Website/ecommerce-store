import React, { useState } from 'react'
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import { client } from '../lib/client';
import { urlFor } from '../lib/client';

// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/cart.slice';


export const ProductPage = ({classification, data}) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='title pl-10 ml-20 mt-20 pt-20'>
                <h1 className={'text-4xl'}>{classification}</h1>
            </div>
            
            <div className="pr-20 pl-20 pb-20 mr-10 ml-10 mb-10 pt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                {data.map((data) => (
                    <Link key={data._id} href={`/${classification.toLowerCase()}/${data._id}`} >
                    <div key={data._id} className="rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        {isHovering ? (
                            <img className="w-full" src='bracelet.jpg' alt="Ring" />
                            ) : (
                            <img className="w-full" src={urlFor(data.image[0])} alt="Ring" />
                        )}
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{data.name}</div>
                            <p className="text-gray-700 text-base">${data.price.toFixed(2)}</p>
                            <button
                            onClick={() => dispatch(addToCart(product))}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )}

    export default ProductPage;