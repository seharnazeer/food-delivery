import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col gap-8 w-96 p-8 rounded-xl'>
    <input type='text' placeholder='Email' />
    <input type='text' placeholder='Username' />
    <input type='password' placeholder='Password...' />
    <button className='bg-primary h-8 rounded-full text-white'>Register</button>
    </div>
  )
}

export default Register