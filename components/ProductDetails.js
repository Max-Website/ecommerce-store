import React, { useState, useEffect } from 'react'
import { urlFor } from "../lib/client"
import { useRouter } from 'next/router';

export function ProductDetails({data}) {

    useEffect(() => {
      }, [data]);

    const dataSet = [...data]
    console.log(dataSet)

    const router = useRouter()
    const currentId = router.query.id
    console.log(currentId);

    const dataItem = dataSet.filter(x => x._id === currentId)[0]
    console.log(dataItem)


    // state used for adding a ring
    const [inputFields, setInputFields] = useState([{ value: ''}]);

    // functions used to add / delete extra rings
    function handleAddField() {
      setInputFields([...inputFields, { value: "" }]);
    }
  
    function handleRemoveField(index) {
      setInputFields(inputFields.filter((field, i) => i !== index));
    }

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-offWhite">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="Product Photo" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={urlFor(dataItem.image[0])}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">MAXX Jewlery</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{dataItem.name}</h1>
                        <div className="flex mb-4">
                            {/* <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span> */}
                        </div>
                        <p className="leading-relaxed">{dataItem.description}</p>
                        {inputFields.map((field, index) => (
                            <div key={index}>
                                {/* This is for one ring */}
                                {inputFields.length + index === 1 && (
                                <div className="flex mt-6 items-center pb-3 border-b-2 border-gray-200">
                                    <div className="flex items-center">
                                        <span className="mr-3">Size</span>
                                        <div className="relative">
                                            <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-brown text-base pl-3 pr-10">
                                                <option>SM</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </select>
                                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <span className="ml-4">Add Ring</span>
                                        <button className="rounded-full w-5 h-5 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-2 hover:bg-brown rounded transition ease-in duration-200" type="button" onClick={handleAddField}>
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-1/2 h-1/2" viewBox="0 0 48 48">
                                                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                )}
                                {/* This is for 2 Rings */}
                                {inputFields.length + index > 1 && (
                                <div className="flex items-center mb-2 mt-3">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-brown text-base pl-3 pr-10" value={field.value}>
                                            <option value='SM'>SM</option>
                                            <option value='M'>M</option>
                                            <option value='L'>L</option>
                                            <option value='XL'>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <button className="rounded-full w-5 h-5 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-brown rounded transition ease-in duration-200" type="button" onClick={() => handleRemoveField(index)}>
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-6 h-4" viewBox="0 0 24 24">
                                            <path d="M17 7L7 17M7 7L17 17" stroke="#6a6a6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div> 
                                )}
                            </div>
                        ))}
                        <div className="flex mt-5">
                            <span className="title-font font-medium text-2xl text-gray-900">${dataItem.price}</span>
                            <button className="flex ml-auto text-white bg-brown border-0 py-3 px-6 focus:outline-none hover:bg-darkBrown rounded transition ease-in duration-200">Add To Cart</button>
                            {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
 )}
  