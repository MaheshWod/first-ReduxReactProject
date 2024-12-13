import React from 'react'

const ProductDetail = () => {
  return (
<>
    <div className='bg-grey-200 min-h-screen flex justify-center items-center'>
        <div className='bg-white shadow-lg  rounded-lg border w-6/12 flex flex-col'>
        <img src='./error.jpg' alt='' className='w-[70%] mx-auto'/>
        <h1 className='font-bold text-6xl'>Product Detail</h1>
        <p className='text-grey-500'>Hello Product detaill in given product part</p>
     <div className='space-x-4 flex justify-center items-center mx-auto'>
     <label className='bg-red-400 px-10 py-3 rounded text-white capitalize font-semibold my-1 mx-auto item-center hover:bg-red-700 hover:text-white'>CategoryProduct</label>
     <button className='bg-blue-400 px-10 py-3 rounded text-white capitalize font-semibold my-1 mx-auto item-center hover:bg-green-600 hover:text-white'>Buy Now</button>
     </div>
        </div>
    </div>
</>  )
}

export default ProductDetail