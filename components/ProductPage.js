import React from 'react'
import {Link} from 'react-router-dom';

const dummyData = [
            {
                id: 1,
                title: 'Ring 1',
                price: '$25.00',
                img: 'productImage.jpg'
            }, 
            {
                id: 2,
                title: 'Ring 2',
                price: '$50.00',
                img: 'productImage.jpg'
            }, 
            {
                id: 3,
                title: 'Ring 3',
                price: '$100.00',
                img: 'productImage.jpg'
            },
            {
                id: 4,
                title: 'Ring 4',
                price: '$100.00',
                img: 'productImage.jpg'
            },
            {
                id: 5,
                title: 'Ring 5',
                price: '$1000.00',
                img: 'productImage.jpg'
            }]

export const ProductPage = ({classification, data}) => {
    return (
        <div>
            <div className='title pl-10 ml-20 mt-20 pt-20'>
                <h1 className={'text-4xl'}>{classification}</h1>
            </div>
            <div className="pr-20 pl-20 pb-20 mr-10 ml-10 mb-10 pt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                {dummyData.map((data) => (
                    <div key={data.id} className="rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                        <img className="w-full" src='productImage.jpg' alt="Mountain" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{data.title}</div>
                            <p className="text-gray-700 text-base">{data.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )}


    // const dummyData = [{
    //     rings: [
    //         {
    //             id: 1,
    //             title: 'Ring 1',
    //             price: '$25.00',
    //             img: 'productImage.jpg'
    //         }, 
    //         {
    //             id: 2,
    //             title: 'Ring 2',
    //             price: '$50.00',
    //             img: 'productImage.jpg'
    //         }, 
    //         {
    //             id: 3,
    //             title: 'Ring 3',
    //             price: '$100.00',
    //             img: 'productImage.jpg'
    //         }],
    //     necklaces: [
    //         {
    //             id: 1,
    //             title: 'Necklace 1',
    //             price: '$25.00',
    //             img: 'productImage.jpg'
    //         }, 
    //         {
    //             id: 2,
    //             title: 'Necklace 2',
    //             price: '$50.00',
    //             img: 'productImage.jpg'
    //         }, 
    //         {
    //             id: 3,
    //             title: 'Necklace 3',
    //             price: '$100.00',
    //             img: 'productImage.jpg'
    //         }],
    //         braclets: [
    //             {
    //                 id: 1,
    //                 title: 'Braclet 1',
    //                 price: '$25.00',
    //                 img: 'productImage.jpg'
    //             }, 
    //             {
    //                 id: 2,
    //                 title: 'Braclet 2',
    //                 price: '$50.00',
    //                 img: 'productImage.jpg'
    //             }, 
    //             {
    //                 id: 3,
    //                 title: 'Braclet 3',
    //                 price: '$100.00',
    //                 img: 'productImage.jpg'
    //             }]
    //   }]