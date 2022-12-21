import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Logo } from '../logo'
import { DeviceSize } from '../responsive'
import { Accessibility } from './Accessibility'
import { MobileNavLinks } from './MobileNavLinks'
import { NavLinks } from './NavLinks'



 export const Navbar = (props) => {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

    return (
        <div className='main-container w-full h-20 shadow-md bg-black flex items-center px-px text-slate-300'>
            <div className='left-section flex'><Logo /></div>
            <div className='middle-section flex flex-1 h-full items-center justify-center'>{!isMobile && <NavLinks /> }</div>
            <div className='right-section flex'>{!isMobile && <Accessibility /> } {isMobile && <MobileNavLinks />}</div>
        </div>
    )
}