// import { createSlice } from "@reduxjs/toolkit";

// export const customerSlice = createSlice({

//     name:'customers',
//     initialState:[],

//     reducers:{
//        reducers: {
//     createCustomer: (state, action) => {
//       state.push(action.payload); // Add the payload to the state
//     },
//         }
//     }
// })

// export const {createCustomer}= customerSlice.actions
// export default customerSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
    name: 'customers',
    initialState: [
        // {
        //   customerName: '',
        //   product: '',
        //   price: '',
        //   discount: ''
        // }
      ],
    reducers: {
        createCustomer : (state,action)=>{
            return [
                ...state,
                action.payload
            ]
        }
    }
})

export const { createCustomer } = customerSlice.actions
export default customerSlice.reducer

