import React from 'react'

export function NavLinks() {
    return (
        <div className='NavLink Container h-full flex items-center'>
            <ul className='LinkWrapper m-0 p-0 flex h-full list-none'>
                <li className='LinkItem h-full px-5 text-white font-medium text-md items-center justify-center flex border-solid border-2 border-transparent hover:border-2 hover:border-t-brown transition ease-in duration-200'>
                    <a className='Link no-underline text-inherit font-inherit' href='#'>
                        Store
                    </a>
                </li>
                <li className='LinkItem h-full px-5 text-white font-medium text-md items-center justify-center flex border-solid border-2 border-transparent hover:border-2 hover:border-t-brown transition ease-in duration-200'>
                    <a className='Link no-underline text-inherit font-inherit' href='#'>
                        About us
                    </a>
                </li>
                <li className='LinkItem h-full px-5 text-white font-medium text-md items-center justify-center flex border-solid border-2 border-transparent hover:border-2 hover:border-t-brown transition ease-in duration-200'>
                    <a className='Link no-underline text-inherit font-inherit' href='#'>
                        Cart
                    </a>
                </li>
            </ul>
            
        </div>
    )
}
