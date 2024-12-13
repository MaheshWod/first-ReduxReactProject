import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {

    const [products,setProducts]= useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((data)=>{
            setProducts(data)
            console.log(data)
        })
   
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
<>
<div className='bg-grey-500 min-h-screen flex flex-col items-center py-16'>
    <div className='bg-white p-8 text-center shadow rounded-lg'>
    <h1 className='text-2xl font-semibold text-red-600 mt-2'>Rudux Api</h1>
    <p className='text-grey-400'>Click on any Product to text your redux app</p>

    </div>
    <div className='w-10/12 mx-auto bg-white rounded-lg p-8 my-12'>
        <div className='grid grid-cols-4 gap-8 '>{
            products.map((item,index)=>(
                <div key={index} className='shadow-lg rounded border p-6 flex flex-col'>
                    <img src={item.image} alt='' className='w-full h-[280px] object-cover'/>
                    <h1 className='text-semibold'>{item.title}</h1>
                    <label className='text-red-500 text-bold text-2xl my-1 '>${item.price}</label>

                    <Link className='bg-green-500 rounded-md  py-3 text-black hover:bg-yellow-700 hover:text-white'
                     to={'/productdetail'}><p className='mx-10'>View Product Detail</p></Link>
                </div>
            ))
        }

        </div>
    </div>
</div>
</>  )
}

export default Product