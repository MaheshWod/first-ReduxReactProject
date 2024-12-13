// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// const Home = () => {
//   // const customers = [
//   //   {
//   //   CostomerName :"Manish",
//   //   Product:"Red Tshirt",
//   //   Price:2000,
//   //   Discount:24
//   // },
//   //   {
//   //   CostomerName :"Manish",
//   //   Product:"Red Tshirt",
//   //   Price:2000,
//   //   Discount:24
//   // },
//   //   {
//   //   CostomerName :"Manish",
//   //   Product:"Red Tshirt",
//   //   Price:2000,
//   //   Discount:24
//   // },
//   //   {
//   //   CostomerName :"Manish",
//   //   Product:"Red Tshirt",
//   //   Price:2000,
//   //   Discount:24
//   // },
//   //   {
//   //   CostomerName :"Manish",
//   //   Product:"Red Tshirt",
//   //   Price:2000,
//   //   Discount:24
//   // },
//   //   {
//   //   CostomerName :"Manish",
//   //   Product:"Red Tshirt",
//   //   Price:2000,
//   //   Discount:24
//   // },
//   // ]

//   const {customerSlice}  = useSelector(res=>res)
//   console.log(customerSlice)
//   return (
// <>
   
// <div className='bg-gray-200 min-h-screen py-16'>
//   <div className='bg-white rounded-lg shadow-lg w-8/12 mx-auto p-6 space-y-8'>
//   <h1 className='text-4xl font-bold text-center'>Redux Subject</h1>

//   <div className='flex justify-between items-center'>
//   <h1 className='text-2xl font-semibold'>Redux Tolkit</h1>
//     <button className='text-white bg-indigo-600 px-6 py-2.5 rounded-md font-medium hover:bg-slate-400 hover:text-white'> <Link to="/customer" >
//         New customers
//       </Link></button>
//   </div>

// <table className='w-full'>
// <thead>
// <tr className='bg-rose-50 text-left '>
//     <th className='py-3 pl-3'>S/No</th>
//     <th>Customer's Name</th>
//     <th>Product</th>
//     <th>Price</th>
//     <th>Discount</th>
//     <th>Action</th>
//   </tr>
// </thead>
// <tbody>
//   {
//     customerSlice.map((item,index)=>(
//       <tr key={index} className={index %2 ===0 ? "bg-white": "bg-rose-50"}  >
//         <td className='py-3 pl-3'>{index+1}</td>
//         <td>{item.CostomerName}</td>
//         <td>{item.Product}</td>
//         <td>{item.Price}</td>
//         <td>{item.Discount}</td>
//         <td>
//           <div className='space-x-3'>
//             <button className='bg-green-400 px-4 py-1 rounded hover:bg-green-700 hover:text-white'>Edit</button>
//             <button className='bg-rose-400 px-4 py-1 rounded hover:bg-red-700 hover:text-white'>Delete</button>
//           </div>
//         </td>
//       </tr>
//     ))
//   }
// </tbody>
// </table>
//   </div>
// </div>
// </>  )
// }

// export default Home


import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
// import { customerSlice } from "../redux/customerSlice";
const Home = ()=>{


//  const {customers} = useSelector(state =>state.customerSlice)
const { customerSlice } = useSelector(res=>res);


return (
    <div className='bg-gray-200 min-h-screen py-16'>
      <div className='bg-white rounded-lg shadow-lg w-8/12 mx-auto p-6 space-y-8'>
        <h1 className='text-4xl font-bold text-center'>Mahesh'Codder</h1>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold text-rose-600'>Redux CRUD</h1>
          <Link to="/new-customer" className='text-white bg-indigo-500 px-6 py-2.5 rounded-md font-medium hover:bg-lime-400 hover:text-white'>
            New Customer
          </Link>
        </div>
        <table className='w-full'>
          <thead>
            <tr className='bg-violet-50 text-left'>
              <th className='py-3 pl-3'>S/No</th>
              <th>Customer`s` Name</th>
              <th>Product</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              customerSlice.map((item, index)=>(
                <tr className={index % 2 === 0 ? 'bg-white' : 'bg-rose-50'} key={index} >
                  <td className='py-4 pl-3'>{index+1}</td>
                  <td>{item.customerName}</td>
                  <td>{item.product}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                  <td>
                    <div className='space-x-3'>
                      <button className='bg-indigo-300 px-3 py-2  rounded hover:bg-lime-500 hover:text-white'>Edit
                      </button>

                      <button className='bg-rose-300 px-3 py-2 rounded hover:bg-red-500 hover:text-white'>Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home