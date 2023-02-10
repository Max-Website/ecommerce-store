import Link from 'next/link'
import React from 'react'

function HeaderButton({ text, route}) {
  return (
    <Link href={route}>
        <button 
            className="px-8 py-3 m-2 text-lg border square
            bg-yellow-500 text-white 
            font-medium leading-tight uppercase rounded shadow-md 
            hover:bg-yellow-600 hover:shadow-lg 
            focus:bg-yellow-600 focus:shadow-lg 
            focus:outline-none focus:ring-0 
            active:bg-yellow-700 active:shadow-lg 
            transition duration-150 ease-in-out">
                { text }
        </button>
    </Link>
  )
}

export default HeaderButton