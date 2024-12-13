// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { createCustomer } from '../redux/slice-customer'


// const NewCustomer = () => {
//     const [form,setForm] = useState({
//         customerName:'',
//         product:'',
//         price:'',
//         discount:''

//     })
//     const navigate = useNavigate()

//     const dispatch = useDispatch()

//     const addNewCustomer = (e)=>{
//         e.preventDefault()
//         dispatch(createCustomer(form))
//         navigate('/')

//     }

//     console.log(form)
// // const addCustomer = (e)=>{
// //     e.preventDefault()
// //     console.log(form)
// //     navigate('/')

// // }
// const handleChange = (e)=>{
// const input = e.target
// const name = input.name
// const value = input.value
// setForm({
//     ...form,
//     [name]:value
// })
// }

//   return (
// <>
//     <div className='bg-grey-200 min-h-screen py-16'>
//         <div className='w-6/12 bg-white mx-auto p-8 shadow-lg space-y-6'>
//             <h1 className='text-3xl text-center font-bold'>New Customer Part</h1>
//             <form className='space-y-6' onSubmit={addNewCustomer}>
//             <div className='flex flex-col gap-3'>
//                 <label className='font-semibold'>Customer'sName</label>
//                 <input className='p-2 rounded border border-grey-300'
//                 onChange={handleChange}
//                 required
//                     type='text'
//                     name='customerName'
//                     placeholder='Enter the Name'
//                 />

//             </div>
//             <div className='flex flex-col gap-3'>
//                 <label className='font-semibold'>Product</label>
//                 <input className='p-2 rounded border border-grey-300'
//                                 onChange={handleChange}

//                 required
//                     type='text'
//                     name='product'
//                     placeholder='Enter The Product'
//                 />

//             </div>
//             <div className='flex flex-col gap-3'>
//                 <label className='font-semibold'>Price</label>
//                 <input className='p-2 rounded border border-grey-300'
//                                 onChange={handleChange}

//                 required
//                     type='number'
//                     name='price'
//                     placeholder='Enter the Price'
//                 />

//             </div>
//             <div className='flex flex-col gap-3'>
//                 <label className='font-semibold'>Discount</label>
//                 <input className='p-2 rounded border border-grey-300'
//                                 onChange={handleChange}

//                 required
//                     type='number'
//                     name='discount'
//                     placeholder='50'
//                 />

//             </div>
// <div className='flex flex-col gap-3'>
// <button className='bg-indigo-500 text-white rounded py-2 px-3 font-medium'>Submit</button>

// </div>           
//  </form>

//  <div className='bg-grey-400 px-72 text-center  '>
//       <Link to='/'>
//         <h1 className='p-2 bg-slate-400 font-semibold hover:bg-slate-700 hover:text-white rounded'>Go Home</h1>
//       </Link>
//     </div>
//         </div>
//     </div>
// </>  )
// }

// export default NewCustomer

import { useDispatch } from "react-redux"
import { createCustomer } from "../redux/customerSlice"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const NewCustomer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState(
        {
            customerName:'',
            product:'',
            price:'',
            discount:''
        }
    )

    const addNewCustomer = (e) => {
        e.preventDefault()
        dispatch(createCustomer(form))
        console.log(form)

        navigate('/')

    }

    const handleInput = (e) => {
        const input = e.target
        const name = input.name
        const value = input.value
        // console.log(value)
        setForm({
            ...form,
            [name]: value
        })
        console.log(form)
    }
    return (
        <div className="bg-gray-200 min-h-screen py-9">
            <div className="w-6/12 bg-white mx-auto p-8 shadow-lg space-y-8">
                <h1 className="text-5xl font-bold text-center">New Customers</h1>
                <form className="space-y-6" onSubmit={addNewCustomer}>
                    <div className="flex flex-col gap-3">
                        <label className="text-lg font-medium">Customer`s Name</label>
                        <input
                            onChange={handleInput}
                            name="customerName"
                            required
                            className="border border-gray-300 rounded p-3"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-lg font-medium">Product</label>
                        <input
                            onChange={handleInput}

                            name="product"
                            required
                            className="border border-gray-300 rounded p-3"
                            placeholder="Red Shirt"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-lg font-medium">Price</label>
                        <input
                            onChange={handleInput}

                            type="number"
                            name="price"
                            required
                            className="border border-gray-300 rounded p-3"
                            placeholder="123"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-lg font-medium">Discount</label>
                        <input
                            onChange={handleInput}

                            type="number"
                            name="discount"
                            required
                            className="border border-gray-300 rounded p-3"
                            placeholder="50"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="py-2 rounded mx-auto px-4 bg-indigo-600 text-white font-medium hover:bg-lime-500">Submit</button>
                    </div>
                </form>
                <div>
                    <button><Link to={"/"} className="bg-rose-500 text-white hover:bg-lime-400 px-3 py-2 rounded hover:text-black font-semibold">Go Back</Link></button>
                </div>
            </div>
        </div>
    )
}

export default NewCustomer
