import Link from 'next/link'
import React from 'react'

function HeaderButton({ text, route}) {
  return (
    <Link href={route}>
        <button 
            className="px-8 py-3 m-2 text-lg border square
            bg-[#c78502] text-white 
            font-medium leading-tight uppercase rounded shadow-md 
            hover:bg-[#f5a402] hover:shadow-lg 
            focus:bg-[#f5a402] focus:shadow-lg 
            focus:outline-none focus:ring-0 
            active:bg-[#855903] active:shadow-lg 
            transition duration-150 ease-in-out">
                { text }
        </button>
    </Link>
  )
}

export default HeaderButton