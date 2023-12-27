import React from 'react'
import Image from 'next/image'
import Right from './icons/right'
const HeroSection = () => {
  return (
    <div>
    <div className='flex flex-col-reverse md:flex-row justify-between  md:h-full items-center'>
    <div className='flex flex-col gap-6 items-center z-10 md:items-start md:w-full w-4/5'>
        <h3 className='font-extrabold text-4xl '>
        Everything is better with <br/> <span className='text-primary font-extrabold text-4xl'>The Pizza</span>
        </h3>
        <p className=' text-secondary'>It tastes like bread tomato and cheese, chewy, moist, slightly acidic, and sharp. Then once you apply toppings, that changes it. Ham and pineapple, adds salty, sweet and juicy.</p>
        <div className='flex sm:flex-row flex-col gap-8'>
        <button className='w-36 flex gap-2 items-center justify-center h-10 rounded-full bg-primary text-white'>Order Now <Right />
        </button>
        <button className='w-36 flex gap-2 items-center font-bold justify-center h-10 rounded-full bg-transparent text-secondary'>Order Now <Right />
        </button>

        </div>
    </div>
    <img src="/images/hero.png" className='w-3/5 h-3/5' />
    <div className='clip'>

    </div>
    <div className='absolute right-0 left-0 z-0 bottom-0 '>
    <img src="/images/sallad1.png"  className='absolute left-0  bottom-0' />
    <img src="/images/sallad2.png" className='absolute right-0  bottom-0' />
    </div>
    </div>

    </div>
  )
}

export default HeroSection