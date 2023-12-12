import React from 'react'

const MenuCard = ({title}) => {
  return (
    <div className='flex justify-center flex-col items-center'>
    <img src="/images/pot-salad.png" className='w-36 ' />
    <h2 className='text-5xl font-bold mb-6'>{title}</h2>
    <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 w-full gap-8 bg-[url(/images/bg.png)]'>
    {
      [1,2,3,4,5,6].map((elem)=>(
        <div className='rounded-2xl hover:bg-white bg-slate-100 p-6 flex flex-col items-center justify-center'>
        <img className='h-36 object-contain w-full' src="/images/pizza.png" />
        <h3 className='font-extrabold text-2xl'>Pizza peproni</h3>
        <p className='w-4/5'>Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped </p>
        <button className='bg-primary text-white h-12 w-3/5 mt-4 rounded-full'>Add to cart $3</button>
        </div>
      ))
    }

    </div>
</div>
  )
}

export default MenuCard