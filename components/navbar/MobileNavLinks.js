import React, { useState } from 'react'
import { Accessibility } from './Accessibility'
import { MenuToggle } from './MenuToggle'
import { MobileAccessibility } from './MobileAccessibility'

export function MobileNavLinks() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='NavLink Container h-full flex items-center'>
            <MobileAccessibility/>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
                <ul className='LinkWrapper m-0 p-0 flex h-full list-none bg-white w-full flex-col fixed top-16 left-0'>
                    <li className='LinkItem px-5 text-black font-medium text-lg mb-2.5 mt-1 w-full flex hover:text-brown justify-center transition ease-in duration-200'>
                        <a className='Link no-underline text-inherit font-inherit' href='#'>
                            Store
                        </a>
                    </li>
                    <li className='LinkItem px-5 text-black font-medium text-lg mb-2.5 mt-1 w-full flex hover:text-brown justify-center transition ease-in duration-200'>
                        <a className='Link no-underline text-inherit font-inherit' href='#'>
                            About us
                        </a>
                    </li>
                    <li className='LinkItem px-5 text-black font-medium text-lg mb-2.5 mt-1 w-full flex hover:text-brown justify-center transition ease-in duration-200'>
                        <a className='Link no-underline text-inherit font-inherit' href='#'>
                            Cart
                        </a>
                    </li>
            </ul>
            )}    
        </div>
    )
}
