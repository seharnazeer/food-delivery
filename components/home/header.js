import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-20 z-10 '>
    <Link href={""} className='text-xl font-extrabold text-primary'>PIZZA SHOP</Link>
    <div className='flex gap-8 text-lg items-center'>
    <Link href={"/"}>Home</Link>
    <Link href={""}>Menu</Link>
    <Link href={""}>About</Link>
    <Link href={""}>Contact</Link>
    </div>
    <div className='flex gap-8 items-center'>
    <Link href={"/login"}>
    <button >Login</button>
    </Link>

    <button className='w-36 h-12 text-white rounded-full bg-primary'>
    <Link href={"/register"}>Register    </Link></button>

    </div>
   
    </div>
  )
}

export default Header